import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import googleImg from "../../images/google-logo.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase.init";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState([]);
    let navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    if (user) {
        navigate = "/shop";
    }
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                console.log(user);
                setUser(user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="w-50 mx-auto py-5 text-start ">
            <h2 className="text-primary text-center mb-3">LOGIN</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="w-100" variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
            <div className="d-flex align-items-center gy-3 my-4">
                <div className="line"></div>
                <h6 className="ms-3 me-3 mb-0">or</h6>
                <div className="line"></div>
            </div>
            <Button
                onClick={handleSignIn}
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
