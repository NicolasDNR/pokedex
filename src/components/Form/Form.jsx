import { useState } from "react";

import "./Form.css"

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
        <h2 class="section__title">Contact Me</h2>
              <div class="contact__container container grid">

                  <div class="grid">
                    <div class="contact__content">
                      <label for="" class="contact__label">Name</label>
                      <input onChange={handleChange} type="text" class="contact__input" />
                    </div>

                    <div class="contact__content">
                      <label for="" class="contact__label">Email</label>
                      <input onChange={handleChange} type="email" class="contact__input" />
                    </div>
                  </div>

                  <div class="contact__content">
                    <label for="" class="contact__label">Message</label>
                    <textarea onChange={handleChange} name="" id="" cols="0" rows="7" class="contact__input"></textarea>
                  </div>

                  <button className="contact__button">Send</button>

             </div>
        </form>
        </>
    )
}

export default Form;