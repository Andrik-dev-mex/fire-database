import React from "react";

const DataCustomers = ({index, name, lastname, email, bussines, phone}) => {
  return(
    <TableRow>
      <TableCell component = "th" scope="row">
	{index}	
      </TableCell>
      <TableCell>{name}</TableCell> 
      <TableCell>{lastname}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{bussunes}</TableCell>
      <TableCell>{phone}</TableCell>
    </TableRow>
  )
}
