import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserApi ,deleteUser} from "../service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead=styled(TableRow)`
    background:#000000;
    & > th{
        color:#fff;
        font-size:20px;
    }
`

const TBody = styled(TableRow)`
    &>td{
        font-size:20px
    }
`

const AllUser = () => {
  const [users, setUsers] = useState([]);
  let id = 1;
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let responce = await getUserApi();
    setUsers(responce.data);
    console.log("fuytfty", responce);
  };

  const deleteUserDetails=async (id)=>{
    await deleteUser(id);
    getAllUsers()
  }

  console.log(users);

  return (
    <StyledTable>
      <TableHead>
        <THead>
        <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{id++}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
