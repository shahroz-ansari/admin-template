import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import type { MenuItem } from '../../features/app/app.model';

interface Props {
  items: MenuItem[];
  level: number;
  onMenuItemClick: (path: string) => void;
}

const SidebarMenu: React.FC<Props> = ({ items, onMenuItemClick }) => {
  return items.map((item: MenuItem) => {
    const Icon = item.icon;
    return (
      <ListItem
        key={item.title}
        disablePadding
        onClick={() => onMenuItemClick(item.path)}
      >
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    );
  });
};

export default SidebarMenu;
