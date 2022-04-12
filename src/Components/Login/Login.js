import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import googleImg from "../../images/google-logo.png";
import auth from "../../Firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
    // const [errorInfo, setErrorInfo]=useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, u, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const location = useLocation();
    const from = location.state?.from.pathname || "/";
    const googleSignIn = () => {
        signInWithGoogle();
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const loginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div className="w-50 mx-auto py-5 text-start ">
            <h2 className="text-primary text-center mb-3">LOGIN</h2>
            <Form onSubmit={loginSubmit}>
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
                <p className="text-danger">{error?.message}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
            <p className="my-3 link">
                New to Ema-Jhon? <Link to="/register">Create New Account</Link>
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
                <img width={"30px"} className="me-2" src={googleImg} alt="" />{" "}
                Sign n with google
            </Button>
        </div>
    );
};

export default Login;
