import React, { Component } from 'react';
import './index.css';
import ReactDOM from "react-dom";

class DownButton extends Component {
constructor(){
    super()
this.state = { show: false };
}
   

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Your Total Score is:</p>
          <p>{this.props.total}</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Down
        </button>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
export default DownButton;