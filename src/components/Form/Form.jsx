import { useState } from "react";

import "./form.css"

function Form({ addFormulaire }) {
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
        <>
        <form onSubmit={handleSubmit} className="contact__form grid"> 
        <h2 className="section__title">Contact Me</h2>
              <div className="contact__container container grid">

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
        </>
    )
}

export default Form;