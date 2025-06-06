import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    navigate('/form');
    return null;
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Form Submitted Successfully!</h2>
      <h3>Submitted Details:</h3>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/form')}>Go Back</button>
    </div>
  );
};

export default SuccessPage;
