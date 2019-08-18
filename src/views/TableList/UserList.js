import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import UserTable from "../../components/Table/Usertable.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from  "../../components/Card/CardBody.jsx";
import firebase from '../../firebase.js';
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

let allusers=[];

class  UserList extends React.Component
 {
constructor(props){
    super(props)
    this.state={
        usersdata:[]
    }
    this.deleteAccount=this.deleteAccount.bind(this);
}



deleteAccount=(key,index)=>{
alert(key);
  firebase.database().ref('/').child(`Users/${key}`).remove()
  allusers.splice(index,1)
  this.setState({usersdata:allusers});
  
  }
componentDidMount(){

   

    allusers=[]

    firebase.database().ref('/').child('Users').on('child_added',(data)=>{
      let obj=data.val();
      obj.key=data.key;
      allusers.push(obj);
  this.setState({usersdata:allusers})
    })
  }


     render(){

     
  const { classes } =this. props;
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Users List</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Be  Bright Future
            </p> */}
          </CardHeader>
          <CardBody>
            <UserTable
              tableHeaderColor="primary"
              tableHead={["Name", "Email", "Contact"]}
              tableData={this.state.usersdata}
              deleteAccount={(key,index)=>this.deleteAccount(key,index)}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}
 }
export default withStyles(styles)(UserList);