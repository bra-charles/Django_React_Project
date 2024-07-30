import React from "react";
import { Form, Title, Input, Button, Anchor } from "./form.js";

const SignInForm = ({ formData, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Title>Sign in</Title>
    <Input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
    />
    <Input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
    />
    <Anchor href="#">Forgot your password?</Anchor>
    <Button type="submit">Sign In</Button>
  </Form>
);

export default SignInForm;
