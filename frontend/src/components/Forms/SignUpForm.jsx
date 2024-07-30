import React from "react";
import {
  Form,
  Title,
  Input,
  Button,
} from "./form.js";


const SignUpForm = ({ formData, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Title>Create Account</Title>
    <Input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
    />
    <Input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
    />
    <Input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
    />
    <div className="role-inputs">
        <label>
          <input
          type="radio"
          name="role"
          value={"lecturer"}
          checked={formData.role === "lecturer"}
          onChange={handleChange}
          />
          Lecturer
        </label>
        <label>
          <input
          type="radio"
          name="role"
          value={"student"}
          checked={formData.role === "student"}
          onChange={handleChange}
          />
          Student
        </label>
    </div>
    <Button type="submit">Sign Up</Button>
  </Form>
);

export default SignUpForm;
