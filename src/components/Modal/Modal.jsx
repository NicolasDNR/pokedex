import { useState } from "react";

import ModalForm from "./ModalForm";

import "./modal.css";

function Modal() {

    const [modalOpen, setModalOpen] = useState(false);
    const [formulaire, setFormulaire] = useState([]);

    const addFormulaire = (text) => {
        const newFormulaire = [...formulaire, text];
         setFormulaire(newFormulaire); 
    }

    return (
        <div className="Modal">
            <button
            className="openModalBtn"
            onClick={() => {
                setModalOpen(true);
            }}
            >
                Contact me
            </button>

            {modalOpen && <ModalForm setOpenModal={setModalOpen} addFormulaire={addFormulaire} />}
        </div>
    )
}

export default Modal;