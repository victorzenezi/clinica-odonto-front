import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    navItem: {
      flexGrow: 1,
      color: "#386fa4",
      '&:hover':{
        textDecoration: "none",
        cursor: "pointer",
        color: "#13293d",
      }
    },
    navbarcolor: {
      backgroundColor: "white",
      color: "#386fa4",
      height: "64px",
      padding: "0px 200px"
    },
    logo: {
      flexGrow: 1,
      padding: "0px 50px"
    },
    btn: {
      borderColor: "#386fa4",
      color: "#386fa4",
      '&:hover':{
        cursor: "pointer",
        borderColor: "#13293d",
        backgroundColor: "#13293d",
        color: "white"
      }
    }
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  
  return (
  <div className={classes.root}>
      <AppBar position="sticky" className={classes.navbarcolor}>
          <Toolbar>
            <Typography variant="h6" className={classes.logo}>
              Clinica Odontologica
            </Typography>

            <Link align="right" variant="h6" className={classes.navItem}>
              Quem somos
            </Link>
            <Link align="right" variant="h6" className={classes.navItem}>
              Serviços
            </Link>
            <Link align="right" variant="h6" className={classes.navItem}>
              Unidades
            </Link>

            <Typography align="right" variant="h6" className={classes.navItem}>
              <Button href="#" size="medium" variant="outlined" className={classes.btn}>
                Marque uma consulta
              </Button>
            </Typography>

          </Toolbar>
        </AppBar>
  </div>
  );
}

export default Header;