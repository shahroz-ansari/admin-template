import HeaderComponent from '../../components/navbar/header.component';
import { sidebarVisiblityToggle } from '../../store/slices/app.slice';
import { useAppDispatch } from '../../store/store.hook';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSidebarToggle = () => {
    dispatch(sidebarVisiblityToggle());
  };

  return <HeaderComponent handleSidebarToggle={handleSidebarToggle} />;
};

export default Header;
