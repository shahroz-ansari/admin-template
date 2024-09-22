import { Drawer } from '@mui/material';
import { DrawerWidth } from '../../features/app/app.constants';

interface MobileDrawerProps {
  sidebarVisiblity: boolean;
  handleSidebarToggle: () => void;
  children: React.ReactNode;
}

export const MobileSidebarDrawer: React.FC<MobileDrawerProps> = ({
  sidebarVisiblity,
  handleSidebarToggle,
  children,
}) => {
  return (
    <Drawer
      container={document.body}
      variant="temporary"
      open={sidebarVisiblity}
      onClose={handleSidebarToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DrawerWidth,
        },
      }}
    >
      {children}
    </Drawer>
  );
};

interface DesktopDrawerProps {
  children: React.ReactNode;
}

export const DesktopSidebarDrawer: React.FC<DesktopDrawerProps> = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DrawerWidth,
        },
      }}
      open
    >
      {children}
    </Drawer>
  );
};
