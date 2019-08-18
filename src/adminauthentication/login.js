import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../assets/img/logo.png'
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import firebase from '../firebase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel'
// import { createBrowserHistory } from "history";
const defaultcolor='#00ACC1'
// const hist = createBrowserHistory();

const theme = createMuiTheme({
    palette: {
      primary: {
      
        main: defaultcolor,
       
      },
    },
    });


const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
 
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    background:{
background:'red',height:'100vh',width:'auto',
    },
  });
  
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          email:'',
          password:'',user:'school'
        }
        this.handleradio=this.handleradio.bind(this);
   
    }
    handleradio(event) {

      this.setState({ ...this.state, user: event.target.value });
      localStorage.setItem('loginuser',this.state.user)
  
    }
      
   
   
    render() { 

        
      const { classes } = this.props;
   

        return ( 
        
<div style={{background:defaultcolor,minHeight:'100vh',width:'auto'}}>
  
<MuiThemeProvider theme={theme}>
 <img src={Logo} alt="SPARKYAI" style={{paddingTop:'20px',display:'block',width:'20%', height:'20%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}/> <main >
      <CssBaseline />
      <Paper className={classes.paper}>
        
        <Typography component="h1" variant="h5">
         Log in to your Account
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" type="email" autoComplete="email" autoFocus onChange={e => this.setState( {email: e.target.value } ) } />
          </FormControl>
         
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password" >Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={e => this.setState({password: e.target.value } )} />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
<br/>
<FormControl margin="normal" component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">SignIn As</FormLabel>
                  <RadioGroup
                    aria-label="SignIn As"
                    name="SignIn As"
                    className={classes.group}
                    value={this.state.user}
                    onChange={this.handleradio}

                  >

                    <FormControlLabel color="primary" value="school" control={<Radio color="primary" />} label="School" />
                    <FormControlLabel value="admin" control={<Radio color="primary" />} label="Admin" />

                  </RadioGroup>
                </FormControl>


          <Button
          onClick={()=>{
            // alert(this.state.email)
            // alert(this.state.password)
           this.props.handleUser(this.state.user);
            // alert(this.state.user);
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
              this.props.history.push('/admin/dashboard');

            })
         }
         }
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in 
          </Button>
          
          <Typography component="p" variant="subtitle1">
         
        <span style={{display:'block',width:'70%', marginLeft:'auto',marginRight:'auto'}}> Don't have account yet? <a  href="/signup" style={{textDecoration:'none',color:defaultcolor}}>SignUp</a> </span>
         </Typography>
        
        </form>
  
      </Paper>
    
    </main>
</MuiThemeProvider>


</div>






         );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
  export default withStyles(styles)(Login);
