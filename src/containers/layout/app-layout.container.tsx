import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import {
  DesktopSidebarDrawer,
  MobileSidebarDrawer,
} from '../../components/navbar/sidebar-drawer.component';
import { DrawerWidth } from '../../constants/app.constants';
import { sidebarVisiblityToggle } from '../../store/slices/app.slice';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import Header from '../navbar/header.container';
import SidebarContainer from '../navbar/sidebar.container';

const AppLayoutContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const sidebarVisiblity = useAppSelector((state) => state.app.sidebarVisible);

  const handleSidebarToggle = () => {
    dispatch(sidebarVisiblityToggle());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box component="nav" sx={{ width: { md: DrawerWidth }, flexShrink: { md: 0 } }}>
        <MobileSidebarDrawer
          sidebarVisiblity={sidebarVisiblity}
          handleSidebarToggle={handleSidebarToggle}
        >
          <SidebarContainer />
        </MobileSidebarDrawer>
        <DesktopSidebarDrawer>
          <SidebarContainer />
        </DesktopSidebarDrawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${DrawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ bgcolor: 'transparent' }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayoutContainer;
