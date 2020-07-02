import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import { parseISO } from "date-fns";
import { getAllItems } from "../../../redux/actions/itemActions";
import ButtonGroup from "../../SharedGroup/ButtonGroup"

import "./GetAllItems.css";

class GetAllItems extends Component {
    // state = {
    //     itemCard: '',
    //   };

      async componentDidMount() {
        if (
          this.props.authUser.isAuthenticated &&
          this.props.authUser.user !== null
        ) {
          await this.props.getAllItems();
        }
      }

  render() {
    // const { itemCard } = this.state;
    console.log("####",this.props)
    return (
      <>
      <h1>ITEMS</h1>
        <hr />
        <div className="table-container">
        {this.props.rentalItem.rentalItems.length>0 ? this.props.rentalItem.rentalItems.map((itemCard) => {
                const {
                  itemName,
                  rentAmount,
                  description,
                } = itemCard;
                console.log("ITEMCARD", itemCard)
                return (
                    // null
        <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">{rentAmount}</p>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">More Info</a>
            </div>
            </div>
                )  
        }):
        null}
        </div>
      </>
        )
}
}

const mapStateToProps = (state) => ({
    rentalItem: state.rentalItem,
    authUser: state.authUser,
  });
  
  export default connect(mapStateToProps, { getAllItems })(
    GetAllItems
  );