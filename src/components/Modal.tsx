import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-modal';

interface ModalsProps {
    show: boolean;
    onHide?: () => void;
    title?: string;
    body?: string;
    onConfirm?: () => void;
    confirmText?: string;
}

export default function Modals({ 
    show,
    onHide,
    title,
    body,
    onConfirm,
    confirmText,
}: ModalsProps) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    
    // return (
    //     <Modal
    //     isOpen={show}
    //     onRequestClose={closeModal}
    //     style={customStyles}
    //     contentLabel="Example Modal"
    //   >
    //     <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
    //     <button onClick={closeModal}>close</button>
    //     <div>I am a modal</div>
    //     <form>
    //       <input />
    //       <button>tab navigation</button>
    //       <button>stays</button>
    //       <button>inside</button>
    //       <button>the modal</button>
    //     </form>
    //   </Modal>
    // );
}