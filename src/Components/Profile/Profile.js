import React, { Component } from "react";
import { connect } from "react-redux";
import UserCreated from "./UserCreated"
import UserRented from "./UserRented"
import UserWaitList from "./UserWaitList"

import "./Profile.css"
export class Profile extends Component {
    

  render() {

    return (
        <>
        <div className="welcome">
         <h1>Welcome back {this.props.authUser.user.username}! </h1>
         <h3>Check out your activity below...</h3>
         </div>
        <UserCreated/>
        <UserRented/>
        <UserWaitList/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rentalItem: state.rentalItem,
  authUser: state.authUser,
});
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

