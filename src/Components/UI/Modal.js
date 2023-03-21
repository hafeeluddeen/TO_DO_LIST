import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCompletedList} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
 // console.log("inside modal", props.children);
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop closeCompletedList={props.closeCompletedList}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
