import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CommentIcon from '@mui/icons-material/Comment';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import Comments from "./admin_screens/Comments";
import Notification from "./admin_screens/Notification";
import Message from "./admin_screens/Message";
import Trash from "./admin_screens/Trash";
import Email from "./admin_screens/Email";
import Inbox from "./admin_screens/Inbox";
import { BrowserRouter as Router } from 'react-router-dom';
import BasicButton from '../components/Button';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Message",
      route: "message",
      icon: <MessageIcon />,
    },
    {
      name: "Notification",
      route: "notification",
      icon: <NotificationsIcon />,
    },
    {
      name: "Inbox",
      route: "Inbox",
      icon: <InboxIcon />,
    },
    {
      name: "Trash",
      route: "Trash",
      icon: <DeleteIcon />,
    },
    {
      name: "Email",
      route: "Email",
      icon: <EmailIcon />,
    },
    {
      name: "Comments",
      route: "Comments",
      icon: <CommentIcon />,
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const openPage = (route: any) => {
    navigate(`/dashboard/${route}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openPage(x.route)}>
              <ListItemIcon>{x.icon ? x.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer with Pages
          </Typography>
          <Typography variant="h3" noWrap className='ms-5' component="div">
           <BasicButton label={'Go Back'} variant={'outlined'} onClick={()=> navigate('/')}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="Message" element={<Message />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="Trash" element={<Trash />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="Email" element={<Email />} />
          <Route path="Comments" element={<Comments />} />
        </Routes>
      </Box>
    </Box>

  );
}
