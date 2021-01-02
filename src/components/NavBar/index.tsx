import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/img/ProductPlanLogo.svg'
import './index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: 'black',
      textAlign: 'left',
      borderBottom: '2px solid lightgray',
      height:'48px'
    },
    appBar: {
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      color: 'black',
      paddingLeft: '20px',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    searchIconWrapper: {
      position: 'relative',
      color:'black',
      marginLeft: 0,
      padding: theme.spacing(0, 2),
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchIcon: {
      height: '32px',
      width: '32px',
    },
    navBarDivider: {
      height:'48px',
      borderLeft: '2px solid lightgray',
    },  
    navBar: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
    }
  }),
);

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Box className={classes.navBar} >
          <IconButton id="productplanlogo"><img src={Logo} alt="Product Plan Logo"/></IconButton>
          <div className={classes.navBarDivider}/>
          <Typography className={classes.title} noWrap>
            Candidate Roadmap
          </Typography>
            <div className={classes.searchIconWrapper}>
              <SearchIcon className={classes.searchIcon}/>
            </div>
        </Box>
      </AppBar>
    </div>
  );
}

export default NavBar;

