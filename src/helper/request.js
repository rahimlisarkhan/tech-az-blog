import axios from "axios";
import {url} from './url';

//GET REQUEST
export async function getData(api = null,data, token = null) {
  const res = await axios.get(`${url}${api}`, {
    headers: {
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
      Authorization: token && `Bearer ${token}`,
    },
    params:data
  });

  const getData = res.data;

  return getData;
}

//POST REQUEST
export async function postData(api = null, data, token = null) {

  const res = await axios.post(`${url}${api}`, data, {
    headers: {
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    
      Authorization: token && `Bearer ${token}`,
    },
  });

  const postdata = res;

  return postdata;
}

//PUT REQUEST
export async function putData(api = null, data, token = null) {
  const res = await axios.put(`${url}${api}`, data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    

      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
  });

  const putdata = res.data;

  return putdata;
}


//Delete REQUEST
export async function deleteData(api = null, data, token = null) {
  const res = await axios.delete(`${url}${api}`, data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    
      Authorization: token && `Bearer ${token}`,
    },
  });

  const postdata = res.data;

  return postdata;
}



