import { Box, Toolbar } from '@mui/material';
import type { ReactNode } from 'react';
import {
  DesktopSidebarDrawer,
  MobileSidebarDrawer,
} from '../../components/navbar/sidebar-drawer.component';
import { DrawerWidth } from '../../constants/app.constants';
import { appSidebarVisiblity } from '../../store/slices/app.slice';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import Header from '../navbar/header.container';
import SidebarContainer from '../navbar/sidebar.container';
import UserMenu from '../navbar/user-menu.container';

interface Props {
  children: ReactNode;
}

const AppLayoutContainer: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const sidebarVisiblity = useAppSelector((state) => state.app.sidebarVisible);

  const handleSidebarToggle = () => {
    dispatch(appSidebarVisiblity());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header userMenu={<UserMenu />} />
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
        {children}
      </Box>
    </Box>
  );
};

export default AppLayoutContainer;
