import React, { Component } from "react";
import { connect } from "react-redux";
import {
//   getAllItems,
  getAllWaitListItems,
  removeWaitList
} from "../../redux/actions/itemActions";
import { successToast, failureToast } from "../Toastify/Toast";
import ButtonGroup from "../SharedGroup/ButtonGroup";
import "./Profile.css"
export class Profile extends Component {
    

async componentDidMount() {
    // console.log("Bugs", this.props.rentalItem.waitListItems)
    if (
        this.props.authUser.isAuthenticated &&
        this.props.authUser.user !== null
    ) if(this.props.rentalItem.waitListItems.length===0){
                await this.props.getAllWaitListItems();
    }
    }

  handleRemoveWaitList = async (item) => {
    try {
     await this.props.removeWaitList(item);

      successToast("Item removed from wait list!");
    } catch (e) {
      failureToast(e);
    }
  };
  render() {
   
    return (
        <>
        <hr />
        <h2>Wait Listed Items</h2>
        <hr />
        <div className="table-container">
          {this.props.rentalItem.waitListItems.length > 0
            ? this.props.rentalItem.waitListItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                  _id
                } = itemCard;
                // console.log("ITEMCARD3", itemCard);
                return (
        <div className="card" key={_id}>
            <img className="card-img-top" src="/images/logo3.png" alt="Card image cap" style={{width:"240px"}}/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                
                <p className="card-text">Weekly Price: ${rentAmount}</p>
                <p className="card-text">Description: {description}</p>
              <ButtonGroup
              buttonStyle="remove-button"
              className="btn btn-outline-warning"
              title="Remove"
              onClick={() => this.handleRemoveWaitList(itemCard)}
            />
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

export default connect(mapStateToProps, {
//   getAllItems,
  removeWaitList,
  getAllWaitListItems,
})(Profile);
