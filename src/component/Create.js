import React, { useState } from 'react';
import AppRegistration from './AppRegistration';

const Create = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Form submitted successfully!');
      // Perform your API call here
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register App</h2>
      <AppRegistration formData={formData} setFormData={setFormData} errors={errors} />
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </form>
  );
};

export default Create;
