
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editUser, getSingleUser } from "../service/api"

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px
    }
`
const defaultValue={
    name:'',
    userName:'',
    email:'',
    phone:''
}

const EditUser=()=>{
    
    const[user,setUser]=useState(defaultValue)

    

    const {id} = useParams()
    const navigate=useNavigate();

    const loadUserDeatails=async()=>{
        const responce = await getSingleUser(id)
        setUser(responce.data[0])
      
       
    }

    useEffect(()=>{
        loadUserDeatails();
    },[])

   

    
   
    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    const editUserDetail =async ()=>{
        await editUser(user,id);
        navigate('/all')
    }

    
    return (
        <Container>
        <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='userName' value={user.userName}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetail()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser