import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  ProfileUserAPI,
  getStatus,
  updateStatus,
  savePhoto,
} from "../profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileConteiner extends React.Component {
  newProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.ProfileUserAPI(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.newProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.newProfile();
    }
  }

  render() {
    return (
      <Profile
        photos={this.props.photos}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    ProfileUserAPI,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter
)(ProfileConteiner);
