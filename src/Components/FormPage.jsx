import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Basic validators
  const validators = {
    firstName: (value) => value.trim() !== '',
    lastName: (value) => value.trim() !== '',
    username: (value) => value.trim() !== '',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    password: (value) => value.trim() !== '',
    phoneCode: (value) => value.trim() !== '',
    phoneNumber: (value) => /^[0-9]{10}$/.test(value),
    country: (value) => value !== '',
    city: (value) => value !== '',
    pan: (value) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value), // Example: ABCDE1234F
    aadhar: (value) => /^[0-9]{12}$/.test(value)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);

    // Validate field
    const isValid = validators[name](value);
    setErrors((prev) => ({
      ...prev,
      [name]: isValid ? '' : `Invalid ${name}`
    }));

    // Check overall form validity
    let formIsValid = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field](updatedFormData[field])) {
        formIsValid = false;
      }
    });
    setIsFormValid(formIsValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className='main-body' style={{
      maxWidth: '500px', 
      margin:"auto"}}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          if (key === 'phoneCode' || key === 'phoneNumber') return null;
          return (
            <div key={key} style={{ marginBottom: '10px', display:"flex" }}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              {key === 'password' ? (
                <div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              ) : key === 'country' ? (
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  {/* Add more countries */}
                </select>
              ) : key === 'city' ? (
                <select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  {/* Add more cities */}
                </select>
              ) : (
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              )}
              {errors[key] && (
                <span style={{ color: 'red' }}>{errors[key]}</span>
              )}
            </div>
          );
        })}

        <div style={{ marginBottom: '10px', display:"flex" }}>
          <label>Phone:</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            <input
              type="text"
              name="phoneCode"
              placeholder="Country Code"
              value={formData.phoneCode}
              onChange={handleChange}
              style={{ width: '30%' }}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: '65%' }}
            />
          </div>
          {errors.phoneNumber && (
            <span style={{ color: 'red' }}>{errors.phoneNumber}</span>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
