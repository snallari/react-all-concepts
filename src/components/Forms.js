import { useRef, useState } from "react";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};
const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

    return [htmlElRef, setFocus]
}

function Forms() {
    const [inputRef, setInputFocus] = useFocus()
    const [firstName, setFirstName] = useState({
        value: "",
        error: "",
        isTouched:false
    });
    const [lastName, setLastName] = useState({
        value: "",
        error: "",
        isTouched:false
    });
    const [email, setEmail] = useState({
        value: "",
        error: "",
        isTouched:false
    });
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
        error: ""
    });
    const [role, setRole] = useState({
        value: "",
        error: "",
        isTouched:false
    });

    const getIsFormValid = () => {
        if (firstName.error || email.error || password.error || role.error) {
            return false
        }
        if (!firstName.value || !email.value || !password.value || !role.value) {
            return false
        }
        else {
            return true;
        }
    };

    const clearForm = (e) => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setRole("")
        setPassword("")
    };

    const handleSubmit = (e) => {
        alert("Account created!");
        clearForm(e);
        setInputFocus()
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const getFocus = () => {
        setInputFocus()
    }

    const getTouched=()=>{
        setFirstName((prevVal) => ({ ...prevVal, isTouched:true }))
        setEmail((prevVal)=>({...prevVal, isTouched:true}))
        setPassword((prevVal)=>({...prevVal, isTouched:true}))
        setRole((prevVal)=>({...prevVal, isTouched:true}))
        console.log("fn", firstName, email, password, role)
    }

    const getValue = (e) => {

        if (e.target.name == "firstName") {
            setFirstName((prevVal) => ({ ...prevVal, value: e.target.value }))
            setFirstName((prevVal) => ({ ...prevVal, error: e.target.value === "" && firstName.isTouched ? "Please enter firstName" : "" }))
            setInputFocus()
        }
        if (e.target.name == "lastName") {
            setLastName((prevVal) => ({ ...prevVal, value: e.target.value }))
        }
        if (e.target.name == "email") {
            setEmail((prevVal) => ({ ...prevVal, value: e.target.value }))
            setEmail((prevVal) => ({ ...prevVal, error: validateEmail(e.target.value) === null && email.isTouched ? "Please enter valid email" : "" }))
            console.log(validateEmail(e.target.value))
        }
        if (e.target.name == "password") {
            setPassword((prevVal) => ({ ...prevVal, value: e.target.value }))
            setPassword((prevVal) => ({ ...prevVal, error: e.target.value.length < 8 ? "The password should have atlease 8 characters" : "" }))
        }
        if (e.target.name == "role") {
            setRole((prevVal) => ({ ...prevVal, value: e.target.value }))
            setRole((prevVal) => ({ ...prevVal, error: e.target.value === "role" && role.isTouched? "The role has be business or individual" : "" }))
        }
        console.log("fn", firstName, email, password, role)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>
                            First name <sup>*</sup>
                        </label>
                        <input name="firstName" ref={inputRef} placeholder="First name" onChange={getValue} onFocus={getFocus} />
                        {firstName.error}
                    </div>
                    <div className="Field">
                        <label>Last name</label>
                        <input name="lastName" placeholder="Last name" onChange={getValue} />
                        {lastName.error}
                    </div>
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input name="email" type="email" placeholder="Email address" onChange={getValue} />
                        {email.error}
                    </div>
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input name="password" type="password" placeholder="Password" onChange={getValue} onBlur={getTouched}/>
                       {password.error && password.isTouched?<PasswordErrorMessage/>:""}
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select name="role" onChange={getValue}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                        {role.error}
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Forms;
