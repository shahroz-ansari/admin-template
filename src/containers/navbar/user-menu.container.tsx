import { useDispatch } from 'react-redux';
import UserMenuComponent from '../../components/navbar/user-menu.component';
import { sessionLogout } from '../../store/slices/session.slice';

const UserMenu: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(sessionLogout());
  };

  return <UserMenuComponent handleLogout={handleLogout} />;
};

export default UserMenu;
