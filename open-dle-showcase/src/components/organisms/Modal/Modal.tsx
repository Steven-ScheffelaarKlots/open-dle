import React from 'react';
import Button from '../../atoms/Button/Button'; // Adjust the import path as necessary
import './styles'; // Assuming you have some CSS for styling

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;