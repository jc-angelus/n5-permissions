import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PermissionDataService from "../services/PermissionService";
import PermissionTypeDataService from "../services/PermissionTypeService";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Permission = props => {
  const { id }= useParams();
  

  const initialPermissionState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentPermission, setCurrentPermission] = useState(initialPermissionState);
  const [permissiontypesOption, setPermissionTypesOption] = useState([]);  
  const [message, setMessage] = useState("");    

  const getPermission = id => {
    PermissionDataService.get(id)
      .then(response => {                
        setCurrentPermission(response.data);                
      })
      .catch(e => {
        alert("Permission no exist");        
      });

      PermissionTypeDataService.getAll()
      .then(response => {        
        setPermissionTypesOption(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getPermission(id);
  }, [id]);

  const handleInputChange = event => {        

    if (event.target == null){
      setCurrentPermission({ ...currentPermission, "permissionDate": event });

    }else{

      const { name, value } = event.target;
      setCurrentPermission({ ...currentPermission, [name]: value });

    }    
  };


  const updatePermission = () => {
    PermissionDataService.update(currentPermission)
      .then(response => {        
        setMessage("The Permission was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  

  return (

    
    <div>
      {currentPermission ? (
        <div className="edit-form">
          <h4>Permission for Employee {currentPermission.nameEmployee} {currentPermission.surnameEmployee}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Name Employee</label>
              <input
                type="text"
                className="form-control"
                name="nameEmployee"                
                value={currentPermission.nameEmployee}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Surname Employee</label>
              <input
                type="text"
                className="form-control"                
                name="surnameEmployee"
                value={currentPermission.surnameEmployee}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Permission Date</label>              
              <DatePicker className="form-control" selected={currentPermission.permissionDate} name="permissionDate"  onChange={handleInputChange}  />
            </div>

            <div className="form-group">
              <label htmlFor="description">Permission Type</label>              
                <select 
                className="form-control"
                onChange={handleInputChange}
                >
                  {permissiontypesOption &&
                    permissiontypesOption.map((option, index) => (
                      <option key={index} value={option.id}>
                        {option.description}
                      </option>
                    ))}
              </select>              
            </div>            
          </form>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePermission}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Permission...</p>
        </div>
      )}
    </div>
  );
};

export default Permission;
