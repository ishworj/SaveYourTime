import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorNotification = ({errorMessage}) => {

  
  return (
    <Alert  key="danger" variant="danger">
      {errorMessage}
    </Alert>)
};

export default ErrorNotification;
