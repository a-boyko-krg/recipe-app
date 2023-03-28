import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, IconButton, Divider, styled } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ state, links, close }) {
  const location = useLocation();
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <Drawer
      open={state}
      onClick={close}
      anchor={'left'}
      className="sidebar"
      PaperProps={{
        sx: {
          backgroundColor: 'var(--background-color)',
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={close}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? 'sidebar-link active'
              : 'sidebar-link'
          }
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </Drawer>
  );
}
