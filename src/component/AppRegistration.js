import React from 'react';

const AppRegistration = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </label>
    </div>
  );
};

export default AppRegistration;
