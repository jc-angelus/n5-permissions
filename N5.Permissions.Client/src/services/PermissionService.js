import http from "../http-common";
import axios from 'axios';

const SERVER_ENDPOINT = "http://localhost:5159";

const getAll = () => {
  const result = axios.get(SERVER_ENDPOINT + '/api/permission/getpermissions')      
      .catch(error => {
        console.log(error);
      })
      return result
};

const get = idpermission => {

  const result = axios.get(SERVER_ENDPOINT + `/api/permission/requestpermission?idPermission=${idpermission}`)      
      .catch(error => {
        console.log(error);
      })
      return result
};

const create = data => {
  return http.post("/tutorials", data);  

};

const update = (data) => {  

  data["permissionTypeId"] = data.permissionType.id;  

  const result = axios.patch(SERVER_ENDPOINT + `/api/Permission/modifypermission`,data)  
      .then(response => {
        console.log(response);        
      })    
      .catch(error => {
        console.log(error);
      })
      return result
};


const PermissionService = {
  getAll,
  get,  
  update  
};

export default PermissionService;
