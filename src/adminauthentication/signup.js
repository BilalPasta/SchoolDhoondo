import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../assets/img/logo.png'
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import firebase from '../firebase';

const defaultcolor = '#00ACC1'

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
    marginTop: theme.spacing.unit * 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 1,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  background: {
    background: 'red', height: '100vh', width: 'auto',
  },
  formControl: {
    margin: theme.spacing.unit * 3,

  },
  group: {
    margin: theme.spacing.unit * 1 * 0,
  },
  root: {
    display: 'flex',
  },
});


function School(props) {
  return (

    <div>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="title">title</InputLabel>
        <Input name="title" type="string" id="title" onChange={e => props.handleChange("title", e.target.value)} />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="location">Location</InputLabel>
        <Input name="location" type="text" id="location" onChange={e => props.handleChange("location", e.target.value)} />
      </FormControl>

      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="branches">Branches</InputLabel>
        <Input name="branches" type="number" id="branches" onChange={e => props.handleChange("branches", e.target.value)} />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="type">Education Type</InputLabel>
        <Input name="type" type="text" id="type" onChange={e => props.handleChange("type", e.target.value)} />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="fees">fees</InputLabel>
        <Input name="fees" type="number" id="fees" onChange={e => props.handleChange("fees", e.target.value)} />
      </FormControl>
    </div>
  );
}


function Admin(props) {
  return (

    <div>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="code">SignUp Code</InputLabel>
        <Input name="code" type="text" id="code" onChange={e => props.handleChange("usercode", e.target.value)} />
      </FormControl>
    </div>
  );
}



class SignUp extends Component {
  constructor(props) {
    super(props);
  
    this.handleradio = this.handleradio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      email:'',
      password:'',
      title:'',
      location:'',
      type:'',
      fees:'',
      branches:'',
      usercode:'',
      code:'ctlt8285xr',
      user:'school'

    }
  }


  handleradio(event) {

    this.setState({ ...this.state, user: event.target.value });

  }
  handleChange(state, value) {

    this.setState({ ...this.state, [state]: value });
  }



  render() {


    const { classes } = this.props;


    return (

      <div style={{ background: defaultcolor, minHeight: '100vh', width: 'auto', margin: '0px', padding: '0px' }}>

        <MuiThemeProvider theme={theme}>
          <img src={Logo} alt="SPARKYAI" style={{ paddingTop: '10px', paddingBottom: '0px', display: 'block', width: '15%', height: '20%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} />
          <main >
            <CssBaseline />
            <Paper className={classes.paper}>

              <Typography component="h1" variant="h5">
                Create Your Account
        </Typography>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus onChange={e => this.setState({ email: e.target.value })} />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" onChange={e => this.setState({ password: e.target.value })} />
                </FormControl>




                <FormControl margin="normal" component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">SignUp For</FormLabel>
                  <RadioGroup
                    aria-label="SignUp For"
                    name="Signup for"
                    className={classes.group}
                    value={this.state.user}
                    onChange={this.handleradio}

                  >
                    <FormControlLabel color="primary" value="school" control={<Radio color="primary" />} label="School" />
                    <FormControlLabel value="admin" control={<Radio color="primary" />} label="Admin" />

                  </RadioGroup>
                </FormControl>


                {this.state.user == "school" ? <School handleChange={this.handleChange} /> : <Admin handleChange={this.handleChange} />}



                <Button
                  onClick={ async() => { console.log(this.state.user)
                    // alert(typeof(this.state.branches))
                                    if(this.state.user=='admin'){
                                      console.log(this.state.password)
                                      console.log(this.state.email)
                                      console.log(this.state.code)
                                      console.log(this.state.usercode)
                                      if( this.state.email != '' && this.state.password != '' && this.state.code == this.state.usercode){
                // alert('access');
                // console.log(this.state);
                firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
                  // alert(user.uid)
                  firebase.database().ref('/admin').push({email:this.state.email});
                document.getElementById('password').value="";
                document.getElementById('email').value="";
                document.getElementById('code').value="";
                this.setState({email:'',password:''})
                }).catch((error)=>alert(error.message))
                                    }
                                    else{
                                      alert('fail')
                                    }
                                  
                                  }
                                    else if(this.state.user=='school'){
                                      if(this.state.email != '' && this.state.password != ''  && this.state.title != '' && this.state.location != '' && this.state.branches != ''
                                      && this.state.type != '' && this.state.fees != ''){
                                        // alert('access');
                                        // console.log(this.state);
                                    await    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
                                      let branches=parseInt(this.state.branches,10);
                                            console.log(user.user.uid);
                                        firebase.database().ref(`/Schools/${user.user.uid}`).set({title:this.state.title,
                                          fees:this.state.fees,branches:branches,location:this.state.location,
                                          type:this.state.type,
                                          email:this.state.email
                                        })
                                        
                                          document.getElementById('password').value="";
                                          document.getElementById('email').value="";
                                          document.getElementById('title').value="";
                                          document.getElementById('type').value="";
                                          document.getElementById('branches').value="";
                                          document.getElementById('location').value="";
                                          document.getElementById('fees').value="";
                                          this.setState({title:'',email:'',location:'',branches:'',fees:'',password:'',type:''})


                                          // firebase.database().ref('/Users').child(user.uid).push({email:this.state.email,thi})
                                        }).catch((error)=>alert(error.message))

                                      }

                                      else{
                                        alert('fail')
                                      }
                    }



                  }
                  }
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
          </Button>

                <Typography component="p" variant="subtitle1">

                  <span style={{ display: 'block', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}> Already have an account? <a onClick={()=>this.props.history.push('/')} style={{ textDecoration: 'none', color: defaultcolor }}>SignIn</a> </span>
                </Typography>

              </form>

            </Paper>

          </main>
        </MuiThemeProvider>


      </div>






    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);