 import axios from 'axios'

 const URL ='http://localhost:8000';

 export const addUser=async (data)=>{
    try {
       return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log('error while calling add user api',error)
    }
 }

 export const getUserApi=async ()=>{
   try {
      return await axios.get(`${URL}/all`,)
   } catch (error) {
       console.log('error while calling get user api',error)
   }
}

export const getSingleUser=async (id)=>{
   try {
      return await axios.get(`${URL}/${id}`)
   } catch (error) {
       console.log('error while calling get single user api',error)
   }
}
export const editUser=async(user,id)=>{
   try {
      return await axios.put(`${URL}/${id}`,user)
   } catch (error) {
      console.log('error while calling edit user api',error)
   }
}

export const deleteUser = async(id)=>{
   try {
      return await axios.delete(`${URL}/${id}`)
   } catch (error) {
      console.log('error while calling delete user api',error)
   }
}