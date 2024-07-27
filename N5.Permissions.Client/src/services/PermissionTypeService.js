import axios from 'axios';

const SERVER_ENDPOINT = "http://localhost:5159";

const getAll = () => {
  const result = axios.get(SERVER_ENDPOINT + '/api/permissiontypes/getpermissiontypes')
      .catch(error => {
        console.log(error);
      })
      return result
};

const PermissionTypeService = {
  getAll  
};

export default PermissionTypeService;
