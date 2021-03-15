import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/cardPhoto.png";

class Profile extends React.Component {
  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div
        className="card__data--img"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
