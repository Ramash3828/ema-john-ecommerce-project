import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import googleImg from "../../images/google-logo.png";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const Register = () => {
    const [errorInfo, setErrorInfo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    let navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/shop");
        }
    }, [user]);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    const onRegSubmit = (event) => {
        event.preventDefault();
        if (password !== ConfirmPassword) {
            setErrorInfo("Password did not match!");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };
    const googleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div>
            <div className="w-50 mx-auto py-5 text-start ">
                <h2 className="text-primary text-center mb-3">SIGNUP</h2>
                <Form onSubmit={onRegSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onBlur={handleEmail}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onBlur={handlePassword}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                    >
                        <Form.Label>Confirm-Password</Form.Label>
                        <Form.Control
                            onBlur={handleConfirmPassword}
                            type="password"
                            placeholder="Confirm-Password"
                            required
                        />
                    </Form.Group>
                    <p className="text-danger">{errorInfo}</p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className="my-3 link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <div className="d-flex align-items-center gy-3 my-4">
                    <div className="line"></div>
                    <h6 className="ms-3 me-3 mb-0">or</h6>
                    <div className="line"></div>
                </div>
                <Button
                    onClick={googleSignIn}
                    className="w-100"
                    variant="secondary"
                    type="submit"
                >
                    <img
                        width={"30px"}
                        className="me-2"
                        src={googleImg}
                        alt=""
                    />{" "}
                    Sign n with google
                </Button>
            </div>
        </div>
    );
};

export default Register;
