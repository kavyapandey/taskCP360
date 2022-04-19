import { useRef, useState } from "react";
import validator from "validator";
import "./login.css";

export default function Login(props) {
    const { loginStatus } = props;
    const userRef = useRef();
    const passwordRef = useRef();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (val) => {
        var email = val;
        if (validator.isEmail(email)) {
            setEmailError("");
            return true;
        } else {
            setEmailError("Enter valid Email!");
            return false;
        }
    };
    const validatePassword = (pwd) => {
        let numArr = pwd.toString().split("");
        let sum = numArr.reduce((a, b) => Number(a) + Number(b));
        if (!(sum === 10)) {
            setPasswordError("Password digit sum should be 10");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let isEmailValid = validateEmail(userRef.current.value);
        let isPwdValid = validatePassword(passwordRef.current.value);
        if (isEmailValid && isPwdValid) {
            loginStatus(true);
        } else {
            loginStatus(false);
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
            <span>{emailError}</span>
            <span>{passwordError}</span>
        </div>
    );
}
