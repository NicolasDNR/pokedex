import { useState } from "react";

import Form from "../components/Form/Form"

function Formulaire() {
    const [formulaire, setFormulaire] = useState([]);
    
    const addFormulaire = (text) => {
        const newFormulaire = [...formulaire, text];
        setFormulaire(newFormulaire); 
    }

    return (
        <>
        <Form addFormulaire={addFormulaire} />
        </>
    )
}

export default Formulaire;