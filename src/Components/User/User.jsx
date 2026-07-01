import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import PaymentHistory from './Payment_History/PaymentHistory';
import UserStatics from './User_Statics/UserStatics';

const User = () => {
  return (
    <div class="user-panel-dashboard">
      <Header />
      <Dashboard />
      <UserStatics />
      <PaymentHistory />
      <CompleteFooter />
    </div>
  );
};
export default User;
