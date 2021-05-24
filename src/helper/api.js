import { toast } from "react-toastify";
import {deleteData, getData, postData,putData } from "../helper/request";


//AUTH--start
export async function register(data){
  try {
    const response = await postData(`user/register/`,data)
    toast.success(`Qeydiyyatdan ugurla keçdiniz!`)
    localStorage.setItem('token',response.data.data.access_token)

    return response
 }catch (error) {
      // Error 😨
    // toast.error(`Xəta! Xanaları düzgün  doldurulmasına diqqət edin`)
      return error.response
  } 
}

export async function login(data){
  try {
    const response = await postData(`user/login`,data)
    toast.success(`Hesabınıza ugurla daxil oldunuz!`)

    return response
 }catch (error) {
      // Error 😨
    // toast.error(`Xeta! Şifrə və nömrənin düzgünlüyünü yoxlayın!`)
      return error.response

    console.log(error);
  } 
}
//AUTH--end


export async function getAllNews(){
  try {
    const response = await getData(`mixdata/`,{})

    return response
 }catch (error) {
      // Error 😨
    toast.error(`Serverdə xəta baş verdi...`)

    console.log(error);
  } 

}