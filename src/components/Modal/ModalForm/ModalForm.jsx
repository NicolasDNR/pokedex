import { useState } from "react";

import "./modalForm.css";

function ModalForm({ addFormulaire, setOpenModal }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addFormulaire(value);
    }

    const handleChange = (e) => {
        const value = (e.target.value);
        setValue(value); 
    }

    return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => { setOpenModal(false); }}
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid"> 
        <h2 className="section__title">Contact Me</h2>
              <div className="contact__container grid">

                  <div className="grid">
                    <div>
                      <label className="contact__label">Name</label>
                      <input onChange={handleChange} type="text" className="contact__input" />
                    </div>

                    <div>
                      <label className="contact__label">Email</label>
                      <input onChange={handleChange} type="email" className="contact__input" />
                    </div>
                  </div>

                  <div>
                    <label className="contact__label">Message</label>
                    <textarea onChange={handleChange} name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                  </div>

                  <button className="contact__button">Send</button>

             </div>
        </form>

      </div>
    </div>
    )
}

export default ModalForm;