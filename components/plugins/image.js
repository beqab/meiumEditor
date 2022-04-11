import React, { Component } from "react";
import styles from "../style/img.module.scss";

export default class ImageAdd extends Component {
  // Start the popover closed

  state = {
    url: "",
    open: true,
  };
  fileInput = React.createRef();

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount() {
    let a = this.fileInput.current;
    a.click();

    document.addEventListener("click", this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closePopover);
  }

  // Note: make sure whenever a click happens within the popover it is not closed
  onPopoverClick = () => {
    this.preventNextClose = true;
  };

  openPopover = () => {
    if (!this.state.open) {
      this.preventNextClose = true;
      this.setState({
        open: true,
      });
    }
  };

  closePopover = () => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: true,
      });
    }

    this.preventNextClose = false;
  };

  addImage = () => {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, this.state.url));
  };

  changeUrl = (evt) => {
    this.setState({ url: evt.target.value });
  };

  fileSelectedHandler = (e) => {
    console.log(e);
    if (event.target.files && event.target.files[0]) {
      let imgUp = event.target.files[0];
      // setUploadImg(imgUp);
      let url = URL.createObjectURL(imgUp);
      this.setState({ url: url }, (prev) => {
        this.addImage();
        this.props.close();
      });
    }

    // debugger;
  };

  render() {
    const popoverClassName = this.state.open
      ? styles.addImagePopover
      : styles.addImageClosedPopover;
    const buttonClassName = this.state.open
      ? styles.addImagePressedButton
      : styles.addImageButton;

    return (
      <>
        {/* <span
            onClick={() => {
              this.props.close();
            }}
            className={styles.closeBtn}
          >
            x
          </span> */}
        {/* <input
            type="text"
            placeholder="Paste the image url …"
            className={styles.addImageInput}
            onChange={this.changeUrl}
            value={this.state.url}
          /> */}

        <input
          // disabled={this.state.disable}
          ref={this.fileInput}
          style={{ display: "none" }}
          type="file"
          onChange={this.fileSelectedHandler}
        />

        {/* <button
            className={styles.addImageConfirmButton}
            type="button"
            onClick={this.addImage}
          >
            Add
          </button> */}
      </>
    );
  }
}
