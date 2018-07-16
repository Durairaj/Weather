import React from 'react';

const ErrorInformation = ({error}) => {
    return <div>{error.toString()}</div>;
};

export default ErrorInformation;