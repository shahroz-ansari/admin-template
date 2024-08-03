import { ReactNode } from 'react';
import HeaderComponent from '../../components/navbar/header.component';
import { appSidebarVisiblity } from '../../store/slices/app.slice';
import { useAppDispatch } from '../../store/store.hook';

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
