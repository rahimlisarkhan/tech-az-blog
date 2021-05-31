import axios from "axios";
import {url} from './url';

//GET REQUEST
export async function getData(params = null,data, token = null) {
  const res = await axios.get(`${url}${params}`, {
    headers: {
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
      Authorization: token && `Token ${token}`,
    },
    params:data
  });

  const getData = res.data;

  return getData;
}

//POST REQUEST
export async function postData(params = null, data, token = null) {

  const res = await axios.post(`${url}${params}`, data, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
  });

  const postdata = res;

  return postdata;
}

//PUT REQUEST
export async function putData(params = null, data, token = null) {
  const res = await axios.put(`${url}${params}`, data, {
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
export async function deleteData(params = null, data, token = null) {
  const res = await axios.delete(`${url}${params}`, data, {
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



