import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Container, Form, Input, Label, Button } from "./Register.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () =>{
    const dispatch = useDispatch();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(
            register({
                name:form.elements.name.value,
                email:form.elements.email.value,
                password:form.elements.password.value,
            })
        );
        form.reset();
    }

    const handleChange = e => {
        const {name,value} = e.target;

        switch (name){
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    return(
        <>
        <Container>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={name}
                    required
                    />
                </Label>
                <Label>
                    Email
                    <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                    />
                </Label>
                <Label>
                    Password
                    <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                    />
                </Label>
                <Button type="submit">
                    Sign Up
                </Button>
            </Form>
            <NavLink to="/login">Log In</NavLink>
        </Container>
        </>
    )
}

export default Register;