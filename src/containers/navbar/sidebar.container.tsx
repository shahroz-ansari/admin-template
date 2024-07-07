import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import SidebarMenu from '../../components/navbar/sidebar-menu.component';
import { sidebarMenu } from './menu.config';

const SidebarContainer: React.FC = () => {
  const navigate = useNavigate();
  const onMenuItemClick = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <Toolbar />
      <List>
        {sidebarMenu.map((item, index) => {
          return (
            <>
              {item.container && (
                <Box sx={{ px: 2 }}>
                  <Typography
                    key={index}
                    variant="caption"
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {item.container}
                  </Typography>
                </Box>
              )}
              <SidebarMenu
                key={index}
                items={item.items}
                level={0}
                onMenuItemClick={onMenuItemClick}
              />
            </>
          );
        })}
      </List>
    </>
  );
};

export default SidebarContainer;
