import { request } from 'express';
import User from '../schema/userScchema.js'

export const addUser=async (req,res)=>{
    const user = req.body;
   const newUser = new User(user)
   try {
    await newUser.save()
    res.status(201).json(newUser)
   } catch (error) {
    res.status(409).json({message:error.message})
    console.log(error);
   }
}

export const getUsers=async (req,res)=>{
    
  
   try {
    const users = await User.find({});
    res.status(200).json(users)
   } catch (error) {
    res.status(404).json({message:error.message})
    console.log(error);
   }
}

export const getSingleUser=async (req,res)=>{
    try {
     const user = await User.find({_id:req.params.id});
     res.status(200).json(user)
    } catch (error) {
     res.status(404).json({message:error.message})
     console.log(error);
    }
 }

 export const editUser=async(req,res)=>{
    let user1 = req.body
    const editUser=new User(user1);
    try {
        await User.updateOne({_id:req.params.id},editUser)
        res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json({message:error.message})
     console.log(error);
    }
 }
 
 export const deleteUser = async (req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id}) 
        res.status(200).json(message)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
 }