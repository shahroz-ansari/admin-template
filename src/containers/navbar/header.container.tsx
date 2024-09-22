import type { ReactNode } from 'react';
import HeaderComponent from '../../components/navbar/header.component';
import { useAppDispatch } from '../../store/store.hook';
import { appSidebarVisiblity } from '../app/app.slice';

interface Props {
  userMenu: ReactNode;
}
const Header: React.FC<Props> = ({ userMenu }) => {
  const dispatch = useAppDispatch();

  const handleSidebarToggle = () => {
    dispatch(appSidebarVisiblity());
  };

  return (
    <HeaderComponent userMenu={userMenu} handleSidebarToggle={handleSidebarToggle} />
  );
};

export default Header;
