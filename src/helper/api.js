import { toast } from "react-toastify";
import {deleteData, getData, postData,putData } from "../helper/request";


//AUTH--start
export async function register(data){
  try {
    const response = await postData(`register/`,data)
    toast.success(`Qeydiyyatdan ugurla keçdiniz!`)

    return response
 }catch (error) {
    toast.error('Xəta...')
      return error.response
  } 
}

export async function login(data){
  try {
    const response = await postData(`user/login/`,data)
    toast.success(`Hesabınıza ugurla daxil oldunuz!`)

    return response
 }catch (error) {
    toast.error(`Xeta!`)
      return error.response

  } 
}
//AUTH--end


export async function getAllNews(params,data){

  try {
    const response = await getData(params,data)

    return response
 }catch (error) {
      // Error 😨
    toast.error(`Serverdə xəta baş verdi...`)

    console.log(error);
  } 

}

export async function getNewsForSlug(params,data){
  try {
    const response = await getData(params,data)
    return response
 }catch (error) {
    toast.error(`Serverdə xəta baş verdi...`)
  } 
}





export async function getUser(params,data,token){

  try {
    const response = await getData(params,data,token)

    return response
 }catch (error) {
      // Error 😨
    toast.error(`Serverdə xəta baş verdi...`)

  } 

}

