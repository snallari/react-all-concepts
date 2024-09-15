import { useState } from "react";
import InfiniteLoader from "./InfiniteLoader";
import Avatar from "../assets/download.jpeg"
import SampleDataProvider from "./SampleDataProvider";

function Labels() {
    const [form, setForm] = useState({})
    const [isFormFilled, setFormFilled] = useState(false)
    const [error, setError] = useState('')
    const levelUp = () => {
        console.log("you got this")
        setFormFilled(true)
    }

    const getValues = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (e.target.name == "phone") {
            e.target.value == "" || !/^(\(?([2-9]{1})([0-9]{2})\)?)((\s|\-){1})?([2-9]{1})([0-9]{2})((\s|\-){1})?((?!0000)[0-9]{4})$/.test(e.target.value) ? setError("Please enter valid Email") : setError("")
        }

        console.log("form", form, error)
    }

    const isPattern = (e) => {
        const { name, value } = e.target
        let pattern;
        if (name == "lastName") {
            pattern = /^[A-Za-z0-9\xC0-\xFF \'\‘\’\´\`\′\-]+$/
            return pattern.test(value)
        }
        if (name == "firstName") {
            pattern = /^[A-Za-z\xC0-\xFF \-]+$/
            return pattern.test(value)
        }
        if (name == "phone") {
            pattern = /^(\(?([2-9]{1})([0-9]{2})\)?)((\s|\-){1})?([2-9]{1})([0-9]{2})((\s|\-){1})?((?!0000)[0-9]{4})$/
            return pattern.test(value)
        }
    }
    if (!isFormFilled) {
        return <div>
            <img src={Avatar} width={100} height={50}></img>
            <form>
                <h1>This is Me</h1>
                <label>Fist Name</label>
                <input type="text" name="firstName" onChange={getValues} ></input>
                <p>{error}</p>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={getValues}></input>
                <p>{error}</p>
                <label>Address</label>
                <input name="address" onChange={getValues}></input>
                <p>{error}</p>
                <label>Email</label>
                <input name="email" onChange={getValues}></input>
                <p>{error}</p>
                <label>Phone</label>
                <input name="phone" onChange={getValues}></input>
                <p>{error}</p>
                <button onClick={levelUp}>Value Yourself</button>
            </form>
            <SampleDataProvider>
            <InfiniteLoader />
        </SampleDataProvider>
        </div>
    } else {
    }

}

export default Labels