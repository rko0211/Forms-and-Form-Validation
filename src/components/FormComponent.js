// src/components/FormComponent.js
import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import './FormStyles.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    countryCode: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    let valid = true;

    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First Name should contain only letters';
      valid = false;
    }
    if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last Name should contain only letters';
      valid = false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      newErrors.username = 'Username should contain only letters and numbers';
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
      valid = false;
    }
    if (!/^\d{1,4}$/.test(formData.countryCode)) {
      newErrors.countryCode = 'Country code should contain only numbers';
      valid = false;
    }
    if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = 'Phone number should contain exactly 10 digits';
      valid = false;
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) {
      newErrors.panNo = 'PAN No. is not valid';
      valid = false;
    }
    if (!/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = 'Aadhar No. should contain exactly 12 digits';
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(valid);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const toggleShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  return (
    <Form className="custom-form" onSubmit={handleSubmit}>
      {!isValid && <Alert variant="danger">Please fix the errors in the form</Alert>}
      <Row>
        <Col>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <div className="password-field">
          <Form.Control
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            isInvalid={!!errors.password}
          />
          <Button variant="outline-secondary" onClick={toggleShowPassword}>
            {formData.showPassword ? 'Hide' : 'Show'}
          </Button>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </div>
      </Form.Group>
      <Form.Group controlId="formPhoneNo">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control
          type="text"
          placeholder="Country code"
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          style={{ width: '20%', display: 'inline-block', marginRight: '20px' }}
          isInvalid={!!errors.countryCode}
        />
        <Form.Control
          type="text"
          placeholder="Number"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          style={{ width: '75%', display: 'inline-block' }}
          required
          isInvalid={!!errors.phoneNo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.countryCode || errors.phoneNo}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          as="select"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formPanNo">
        <Form.Label>PAN No.</Form.Label>
        <Form.Control
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          required
          isInvalid={!!errors.panNo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.panNo}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formAadharNo">
        <Form.Label>Aadhar No.</Form.Label>
        <Form.Control
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          required
          isInvalid={!!errors.aadharNo}
        />
        <Form.Control.Feedback type="invalid">
          {errors.aadharNo}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
