import * as axios from "axios";


const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4a2278a1-2b45-482b-a61e-cb001fa1a3bc'
      }

})

export const UsersAPI = {
    getUsers (currentPage = 1 , pageSize = 4) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`, {
           
          }).then(response => response.data)
    }
}


