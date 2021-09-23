import CustomerLayout from '../../components/UserDashboard/CustomerLayout';
import ChangePassComponent from '../../components/UserDashboard/MenuDetails/ChangePassComponent';

const ChangePassword = () => {

  return (
    <CustomerLayout title='Change Password'>
			<ChangePassComponent/>
		</CustomerLayout>
  );
};

export default ChangePassword;