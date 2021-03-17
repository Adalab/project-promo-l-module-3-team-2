import React from "react";
import defaultAvatar from "../images/cardPhoto.png";

class PhotoPreview extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();

    this.myFileField = React.createRef();

    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      this.fr.addEventListener("load", this.getImage);

      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;

    this.props.updateAvatar(image);
  }

  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div className="form__label-div">
        <label className="form__label--bt" type="button">
          Añadir imagen
          <input
            id="photo"
            type="file"
            ref={this.myFileField}
            className="get-avatar__upload-field hidden"
            onChange={this.uploadImage}
            files={this.props.avatar}
          />
        </label>

        <div
          className="form__img--container"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}

export default PhotoPreview;
