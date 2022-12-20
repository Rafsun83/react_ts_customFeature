import React, { useState } from "react";
import Modal from "../../component/Modal";
import ModalCloseIcon from "../../component/Modal/ModalClose";

const CustomModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModalhandaler = () => {
        setIsModalOpen((prev) => !prev);
    };
    return (
        <div>
            <h4 className="p-4">Hello, This is Custom Modal. And it's made by React & TypeScript</h4>

            <button onClick={openModalhandaler} className="border border-collapse p-2 rounded-sm">
               Open Modal
            </button>
            <Modal isOpen={isModalOpen} disableOutsideClick animation={"fade"}>
                <Modal.Header>
                    <h1>hello</h1>
                    <ModalCloseIcon onClose={openModalhandaler} />
                </Modal.Header>
                <Modal.Body>
                    <h6>hello modal body</h6>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CustomModal;
