import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    //destructure formState
    const { name, email, message } = formState;

    //SYNC Internal state of formState with the user input from DOM
    function handleChange(e) {
        //setFormState function to update formState value for the name property
        //e.target.value = value from the user and assign to property formState.name
        //...formState = spread operator used to prevent overwrite and retain the other key-value pairs that are in this object
        //e.target.name refers to the attriute form element of formState (name, email, and message)
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log('errorMessage', errorMessage);
        }
    };

    //console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/*
                    defaultValue={name} = will clear the input fields
                    onChange={handleChange} = event listener for function handleChange
                    */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {/*If errorMessage is true the <div> block will render
                    the && is used as if the first value is true the second will experssion will be evaluated */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;