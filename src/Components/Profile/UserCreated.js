import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllItems,
  getAllCreatedItems,
  deleteItem,
} from "../../redux/actions/itemActions";
import { successToast, failureToast } from "../Toastify/Toast";
import ButtonGroup from "../SharedGroup/ButtonGroup";
import "./Profile.css"
export class Profile extends Component {
    

  async componentDidMount() {
    console.log("Bugs2", this.props.rentalItem.waitListItems)
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) if(this.props.rentalItem.createdItems.length===0){
                await this.props.getAllCreatedItems();
    }
    }
  


  handleDelete = async (item) => {
    try {
        console.log("Next step", item._id)
        await this.props.deleteItem(item._id);

      successToast("Item Deleted!");
    } catch (e) {
      failureToast(e);
    }
}
  render() {

    return (
        <>
        {/* <h1>Hello {user} </h1> */}
        <hr />
        <h2>Created Items</h2>
        <hr />
        <div className="table-container">
          {this.props.rentalItem.createdItems.length > 0
            ? this.props.rentalItem.createdItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                  _id
                } = itemCard;
                // console.log("ITEMCARDProfile", itemCard);
                return (
        <div className="card" key={_id} >
            <img className="card-img-top" src="/images/logo.png" alt="Card image cap" style={{width:"240px"}}/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                
                <p className="card-text">{rentAmount}</p>
                <p className="card-text">{description}</p>
              <ButtonGroup
              buttonStyle="form-button"
              className="btn btn-primary"
              title="Delete Item"
              onClick={() => this.handleDelete(itemCard)}
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
  getAllItems,
  getAllCreatedItems,
  deleteItem
})(Profile);
