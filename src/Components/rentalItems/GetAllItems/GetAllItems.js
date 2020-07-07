import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { parseISO } from "date-fns";
import { getAllItems, rentItem, returnItem, waitListItem, getAllProfileItems} from "../../../redux/actions/itemActions";
import { successToast, failureToast } from "../../Toastify/Toast";
import ButtonGroup from "../../SharedGroup/ButtonGroup";
import "./GetAllItems.css";
class GetAllItems extends Component {
  // state = {
  //     availability: this.props.availability,
  //   };
  async componentDidMount() {
    if (
      this.props.authUser.isAuthenticated &&
      this.props.authUser.user !== null
    ) {
      await this.props.getAllItems();
    }
  }
  handleRentNow = async (item) => {
    try {
      // console.log("####$$$", item)
      await this.props.rentItem(item);
      successToast("Item Rented")
    } catch (e) {
        failureToast(e);
      };
    }
    handleReturnItem = async (item) => {
      try {
        // console.log("####$$$", item)
        await this.props.rentItem(item);
        successToast("Item Rented")
      } catch (e) {
          failureToast(e);
        };
      }
    handleProfile = async (item) => {
        try {
          await this.props.getAllProfileItems(item);
         successToast("You are on the wait list!")
        } catch (e) {
            failureToast(e);
          };
        }
  handleWaitList = async (item) => {
    try {
      await this.props.waitListItem(item);
      successToast("You are on the wait list!");
    } catch (e) {
      failureToast(e);
    }
  };
  render() {
    // const { itemCard } = this.state;
    console.log("####", this.props);
    return (
      <>
        <h1>ITEMS</h1>
        <hr />
        <div className="table-container">
          {this.props.rentalItem.rentalItems.length > 0
            ? this.props.rentalItem.rentalItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                  availability,
                } = itemCard;
                console.log("ITEMCARD", itemCard);
                return (
        <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <h5 className="card-title">{availability}</h5>
                <p className="card-text">{rentAmount}</p>
                <p className="card-text">{description}</p>
                {availability === true ?
                <ButtonGroup
                buttonStyle="form-button"
                className="btn btn-primary"
                title="Rent Now!"
                onClick={() => this.handleRentNow(itemCard)}
              />
              :
              <ButtonGroup
                buttonStyle="form-button"
                className="btn btn-primary"
                title="Waiting List"
                onClick={() => this.handleWaitList(itemCard)}
              />
                }
              <ButtonGroup
              buttonStyle="form-button"
              className="btn btn-primary"
              title="Return"
              onClick={() => this.handleReturnItem(itemCard)}
            />
              <ButtonGroup
              buttonStyle="form-button"
              className="btn btn-primary"
              title="Profile"
              onClick={() => this.handleProfile(itemCard)}
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
  export default connect(mapStateToProps, { getAllItems, rentItem, returnItem, waitListItem,getAllProfileItems })(
    GetAllItems
  );
