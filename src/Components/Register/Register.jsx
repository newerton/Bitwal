import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import RegisterBody from './Register_Body/RegisterBody';

const Register = () => {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb detail="Register" type="reg" />
      <RegisterBody />
      <CompleteFooter />
    </React.Fragment>
  );
};
export default Register;
