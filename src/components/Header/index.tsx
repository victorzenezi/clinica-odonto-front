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
    menuButton: {
      marginRight: theme.spacing(2),
    },
    item: {
      flexGrow: 1,
    },
    navbarcolor: {
      backgroundColor: "white",
      color: "black",
      height: "64px",
      padding: "0px 200px"
    },
    logo: {
      flexGrow: 1,
      padding: "0px 50px"
    },
    btn: {
      borderColor: "blue"
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
            <Typography align="right" variant="h6" className={classes.item}>
              Quem somos
            </Typography>
            <Link align="right" variant="h6" className={classes.item}>
              Serviços
            </Link>
            <Link align="right" variant="h6" className={classes.item}>
              Unidades
            </Link>
            <Typography align="right" variant="h6" className={classes.item}>
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