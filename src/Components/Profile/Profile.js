import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllItems,
  returnItem,
  getAllProfileItems,
  deleteItem,
  removeWaitList
} from "../../redux/actions/itemActions";
import { successToast, failureToast } from "../Toastify/Toast";
import ButtonGroup from "../SharedGroup/ButtonGroup";
import "./Profile.css"
export class Profile extends Component {

  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      await this.props.getAllProfileItems();
    }
  }

  handleReturnItem = async (item) => {
    try {
      await this.props.returnItem(item);

      successToast("Item returned!");
    } catch (e) {
      failureToast(e);
    }
  };
  handleRemoveWaitList = async (item) => {
    try {
      await this.props.removeWaitList(item);

      successToast("Item removed from wait list!");
    } catch (e) {
      failureToast(e);
    }
  };

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
    // const { user } = this.props.authUser;
    // console.log("REDUCER", this.props)
    // console.log("REDUCER2", this.props.rentalItem.cre)
    // console.log("test123", this.props.authUser);
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
                } = itemCard;
                // console.log("ITEMCARDProfile", itemCard);
                return (
        <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
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
        <hr />
        <h1>Rented Items</h1>
        <hr />
        <div className="table-container">
            {this.props.rentalItem.rentedItems.length > 0
            ? this.props.rentalItem.rentedItems.map((itemCard) => {
                const {
                    itemName,
                    rentAmount,
                    description,
                } = itemCard;
                // console.log("ITEMCARD2", itemCard);
                return (
        <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                
                <p className="card-text">{rentAmount}</p>
                <p className="card-text">{description}</p>
              <ButtonGroup
              buttonStyle="form-button"
              className="btn btn-primary"
              title="Return"
              onClick={() => this.handleReturnItem(itemCard)}
            />
            </div>
            </div>
                )
        }):
        null}
        </div>
        <hr />
        <h1>Wait Listed Items</h1>
        <hr />
        <div className="table-container">
          {this.props.rentalItem.waitListItems.length > 0
            ? this.props.rentalItem.waitListItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                } = itemCard;
                // console.log("ITEMCARD3", itemCard);
                return (
        <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                
                <p className="card-text">{rentAmount}</p>
                <p className="card-text">{description}</p>
              <ButtonGroup
              buttonStyle="form-button"
              className="btn btn-primary"
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
  getAllItems,
  returnItem,
  removeWaitList,
  getAllProfileItems,
  deleteItem
})(Profile);
