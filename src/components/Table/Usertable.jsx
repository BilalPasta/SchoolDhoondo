import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from  "../../assets/jss/material-dashboard-react/components/tableStyle.jsx";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((userobject, index) => {
            return (
              <TableRow key={userobject.key}>
              
                    <TableCell className={classes.tableCell} >
                      {userobject.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} >
                      {userobject.email}
                    </TableCell>

                    <TableCell className={classes.tableCell} >
                      {userobject.phone}
                    </TableCell>

                    {/* <TableCell className={classes.tableCell} key={index}>
                      {userobject.branches}
                    </TableCell>

                    <TableCell className={classes.tableCell} key={index}>
                      {userobject.type}
                    </TableCell> */}

                    <IconButton aria-label="Delete" onClick={()=>props.deleteAccount(userobject.key,index)}>
          <DeleteIcon fontSize="large" />
        </IconButton>  

            
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
