import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllItems,
  returnItem,
  getAllRentedItems,
} from "../../redux/actions/itemActions";
import { successToast, failureToast } from "../Toastify/Toast";
import ButtonGroup from "../SharedGroup/ButtonGroup";
import "./Profile.css"
export class Profile extends Component {
    

    async componentDidMount() {
        if (
          this.props.authUser.isAuthenticated &&
          this.props.authUser.user !== null
        ) if(this.props.rentalItem.rentedItems.length===0){
                    await this.props.getAllRentedItems();
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

  render() {
    return (
        <>
        <hr />
        <h2>Rented Items</h2>
        <hr />
        <div className="table-container">
            {this.props.rentalItem.rentedItems.length > 0
            ? this.props.rentalItem.rentedItems.map((itemCard) => {
                const {
                    itemName,
                    rentAmount,
                    description,
                    _id
                } = itemCard;
                // console.log("ITEMCARD2", itemCard);
                return (
        <div className="card" key={_id} >
            <img className="card-img-top" src="/images/logo2.png" alt="Card image cap" style={{width:"240px"}}/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                
                <p className="card-text">Weekly Price: ${rentAmount}</p>
                <p className="card-text">Description: {description}</p>
              <ButtonGroup
              buttonStyle="return-button"
              className="btn btn-outline-success"
              title="Return"
              onClick={() => this.handleReturnItem(itemCard)}
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
  getAllRentedItems,
})(Profile);
