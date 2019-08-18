import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase';
import School from  '../../assets/img/school.png'   
import Location from '../../assets/img/location.png'
import Education from '../../assets/img/edutype.png'
import Branches from '../../assets/img/branches.png'
import Email from '../../assets/img/at.png'
import Fees from '../../assets/img/fees.png'
import Edit from '../../assets/img/edit.png'
import Icon from '@material-ui/core/Icon';
import Loading from './animation.gif'

import Toolbar from '@material-ui/core/Toolbar';
const styles4 = theme => ({
    root: {
       marginBottom:'10px',
        paddingLeft:0,
        minHeight:'40px',
      paddingTop:'10px',
      position:'relative',
      overflow:'hidden'
        
      
      }, 
      active:{

      },imageIcon: {
   
    },
    iconRoot: {
      textAlign: 'center',cursor:'pointer'
    },
    droot: {
        margin: 0,
        padding: theme.spacing.unit*2,
        paddingRight:theme.spacing.unit*10
      },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit*1,
        top: theme.spacing.unit*1,
        color: theme.palette.grey[500],
      },
     
    });

    const DialogTitle = withStyles(styles4)(props => {
        const { children, classes, onClose } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.droot}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });
      
      const DialogContent = withStyles(theme => ({
        root: {
          padding: theme.spacing.unit*2,
        },
      }))(MuiDialogContent);


class Information extends Component {
    constructor(props) {
        super(props);
        this.state = { title:'' ,edutype:'',location :'',branches:'',
    email:'',fees:'',open:false};
    this.handleClose=this.handleClose.bind(this);
    }


    componentDidMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // alert(user.uid);

          firebase.database().ref('/Schools').child(user.uid).on('value',(userdata)=>{
console.log(userdata.val());

this.setState({...this.state,email:userdata.val().email,branches:userdata.val().branches
,fees:userdata.val().fees,title:userdata.val().title,edutype:userdata.val().type,location:userdata.val().location,uid:user.uid})
          })
        } else {
        }
        });
    }
    handleClose(){

        this.setState({ ...this.state,open: false });

    }

    render() { 
        
        const {classes}= this.props;

        return (  
            <div>
              {this.state.uid?<div>
<Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={School} style={{marginLeft:'6%',marginTop:'-20px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h6">
        School Name : <span style={{color:'#00ACC1'}}> {this.state.title} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>

      <Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={Email} style={{marginLeft:'6%',marginTop:'-5px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h6">
       Email : <span style={{color:'#00ACC1'}}> {this.state.email} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>

      <Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={Location} style={{marginLeft:'6%',marginTop:'-20px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h5">
        Location : <span style={{fontSize:'18px',color:'#00ACC1'}}> {this.state.location} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>


      <Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={Branches} style={{marginLeft:'6%',marginTop:'-20px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h5">
        Branches : <span style={{fontSize:'20px',color:'#00ACC1'}}> {this.state.branches} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>


      <Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={Education} style={{marginLeft:'6%',marginTop:'-20px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h5">
        Education Board : <span style={{color:'#00ACC1'}}> {this.state.edutype} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>

      <Paper className={classes.root}  >   
<Toolbar className={classes.active} disableGutters={true}>
<img src={Fees} style={{marginLeft:'6%',marginTop:'-5px'}}/>
    <span style={{marginLeft:'3%',marginRight:'2%',marginTop:'20px',width:'90%',float:'left'}}>
        <Typography variant="h6" component="h6">
       Fees : <span style={{color:'#00ACC1'}}> {this.state.fees} </span>
        </Typography>
        <br/>
        </span>
        </Toolbar>
      </Paper>



{/* <div style={{float:'right'}}> 
      <Icon onClick={()=>this.setState({...this.state,open:true})}classes={{root: classes.iconRoot}}> <img className={classes.imageIcon} src={Edit}/> </Icon> 
     </div>  */}
  <Button onClick={()=>this.setState({...this.state,open:true})} color="primary" style={{float:'right'}} variant="contained"> EDit Profile </Button>

     <Dialog  onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          
          >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           EDIT PROFILE
          </DialogTitle>

          <DialogContent dividers>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name="title" type="string" id="title" defaultValue={this.state.title} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="location">Location</InputLabel>
                <Input name="location" type="text" id="location" defaultValue={this.state.location}  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="branches">Branches</InputLabel>
                <Input name="branches" type="text" id="branches" defaultValue={this.state.branches} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="edutype">Education Type</InputLabel>
                <Input name="edutype" type="text" id="edutype" defaultValue={this.state.edutype}  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="fees">Fees</InputLabel>
                <Input name="fees" type="number" id="fees"  defaultValue={this.state.fees}  />
              </FormControl>

              <Button color="primary" style={{float:'right'}} variant="contained"
              onClick={()=>{
              let  branches=document.getElementById('branches').value
               let title=document.getElementById('title').value
                let fees=document.getElementById('fees').value
                let location=document.getElementById('location').value
              let  type=document.getElementById('edutype').value
                // alert(this.state.uid);
                branches=parseInt(branches,10);
              firebase.database().ref('/Schools').child(`${this.state.uid}`).update(
                {branches:branches,
                title:title,
                fees:fees,
                location:location,
                type:type})
                this.setState( {...this.state,branches:branches,
                  title:title,
                  fees:fees,
                  location:location,
                  edutype:type,open:false})
            }
              }
              > SAVE CHANGES </Button>

</DialogContent>

          </Dialog>
          </div>
          :<img src={Loading}/>}

            </div>


            
        );
    }
}
 
export default withStyles(styles4)(Information);