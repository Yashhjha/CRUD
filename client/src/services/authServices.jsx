import axios from "axios"

export const registerService = (data)=>{
    return axios.post("http://localhost:8080/api/v1/user/register",data)

}
export const loginService = (data)=>{
    return axios.post("http://localhost:8080/api/v1/user/login",data)

} 
 