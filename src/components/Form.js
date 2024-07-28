import "./cssFiles/Form.css";
import Photo from "./assets/photo3.png";
import { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <form className="input">
            <label for="name-input">Enter Name</label>
            <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Dae"
            />
            <label for="email-input">Enter Email</label>
            <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@gmail.com"
            />
            <label for="phone-input">Enter Phone</label>
            <input
                id="phone-input"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="8265XXXXXX"
            />

            <button type="submit">Submit</button>
        </form>
    );
};
export default Form;