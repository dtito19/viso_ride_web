import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { blue, grey } from '@mui/material/colors';


import { mainListItems } from './listItems';
import Logo from '../components/Logo';
import TotalDrivers from '../components/Total_Drivers';
import RecentEntryData from '../components/RecentData'
import TodayCard from '../components/Today_Data_Card';
import PreviousDataCard from '../components/Previus_Data_Card';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Viso Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function EditBodaContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
           
            <IconButton sx={{ p: 0, bgcolor: blue[500]}}>
                <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
              </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, mx: '20px'  }}
            >
              Dashboard
            </Typography>
           
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile">
              <IconButton sx={{ p: 0, bgcolor: grey[100]}}>
                <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean()}
              
            >
              
            </Menu>
          </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              px: [2],
              
              
            }}
          ><Logo  sx={{
            height: 40,
            width: 40
          }} />
            <IconButton  sx={{
              marginTop: -5,
            }}
             onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
         <Box sx={{ mb: 1 }}>
         <Typography  component="h1"
              variant="h3"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,  lineHeight: 1 }}>Taarifa Za Chombo Na Dereva</Typography>
         </Box>

            <Grid container spacing={3}>
                
             
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                    justifyContent:'center',
                    alignItems: 'center'
                  }}
                >
                  <TodayCard />
                </Paper>
              </Grid>
          
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                    justifyContent:'center',
                    alignItems: 'center'
                  }}
                >
                  <PreviousDataCard />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                    justifyContent:'center',
                    alignItems: 'center'
                  }}
                >
                  <TotalDrivers />
                </Paper>
              </Grid>
            

            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function EditBodaDetails() {
  return <EditBodaContent />;
}