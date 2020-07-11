import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllItems, rentItem, returnItem, waitListItem, getAllProfileItems} from "../../../redux/actions/itemActions";
import { successToast, failureToast } from "../../Toastify/Toast";
// import { availability, rentedItems } from '../../../redux/reducers/itemReducer'
import ButtonGroup from "../../SharedGroup/ButtonGroup";
import "./GetAllItems.css";



class GetAllItems extends Component {
  state = {
      availability: null,
    };
  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      await this.props.getAllItems();
    }
  }
  handleRentNow = async (item) => {
    try{
      
      // this.setState({
      //   availability: false
      // })
      // console.log("####$$$", item)
      await this.props.rentItem(item);
      successToast("Item Rented")
    } catch (e) {
        failureToast(e);
      };
    }

   
  handleWaitList = async (item) => {
    try {
      // console.log("is this button working")
      await this.props.waitListItem(item);
      successToast("Wait Listed!");
    } catch (e) {
      failureToast(e);
    }
  };
  render() {
    // const { itemCard } = this.state;
    // console.log("####", this.props);
    return (
      <>
<<<<<<< HEAD
      <br></br>
      <div className="logo-header">
      <img  className="main-logo" src="/images/main-logo-full.png" alt="Main Logo" />
        </div>
=======
        <h1 header="header">ITEMS</h1>
>>>>>>> 0b09fee22ae000b5ac0f9f43a7e3cc2380f04944
        <hr />
        <div className="table-container">
          {this.props.rentalItem.rentalItems.length > 0
            ? this.props.rentalItem.rentalItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                  availability,
                  _id
                } = itemCard;
                // console.log("ITEMCARD", itemCard);
                return (
        <div className="card" key={_id}>
            <img className="card-img-top" src="/images/logo.png" alt="Card image cap" style={{width:"210px", justifyContent:"center"}} />
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">Weekly Price: ${rentAmount}</p>
                <p className="card-text">Description: {description}</p>
                {availability === true ?
                <ButtonGroup
                buttonStyle="form-button-rent"
                className="btn btn-outline-primary"
                title="Rent Now!"
                onClick={() => this.handleRentNow(itemCard)}
              />
              :
              <ButtonGroup
                buttonStyle="form-button-wait"
                className="btn btn-primary"
                title="Waiting List"
                onClick={() => this.handleWaitList(itemCard)}
              />
                }
            </div>
            </div>
                )
        }):
        null}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
    rentalItem: state.rentalItem,
    authUser: state.authUser,
  });
  export default connect(mapStateToProps, { getAllItems, rentItem, returnItem, waitListItem,getAllProfileItems })(
    GetAllItems
  );
