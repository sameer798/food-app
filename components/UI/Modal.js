import {createPortal} from 'react-dom';
import classes from './Modal.module.css';


function Backdrop(props){
    return <div className={classes.backdrop} onClick={ props.closeHandler}></div>
}

function ModalOverlay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')
function Modal(props){
    
    return (
        <>
            {createPortal(<Backdrop  closeHandler = {props.onClick}/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            
        </>
    )

}
export default Modal