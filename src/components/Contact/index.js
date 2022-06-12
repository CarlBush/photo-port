import React, { useState } from "react";



function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    //destructure formState
    const { name, email, message } = formState;

    //SYNC Internal state of formState with the user input from DOM
    function handleChange(e) {
        //setFormState function to update formState value for the name property
        //e.target.value = value from the user and assign to property formState.name
        //...formState = spread operator used to prevent overwrite and retain the other key-value pairs that are in this object
        //e.target.name refers to the attriute form element of formState (name, email, and message)
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    console.log(formState);

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    {/*
                    defaultValue={name} = will clear the input fields
                    onChange={handleChange} = event listener for function handleChange
                    */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;