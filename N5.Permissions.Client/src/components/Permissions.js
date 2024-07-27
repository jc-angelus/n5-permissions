import React, { useState, useEffect } from "react";
import PermissionDataService from "../services/PermissionService";
import { Link } from "react-router-dom";

const Permissions = () => {
  const [permissions, setpermissions] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrievepermissions();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrievepermissions = () => {
    PermissionDataService.getAll()
      .then(response => {               
        setpermissions(response.data);
      })
      .catch(e => {        
        console.log(e);
      });
  };  

  const setActivePermission = (permission, index) => {    
    setCurrentTutorial(permission);
    setCurrentIndex(index);
  };
 

  const findByTitle = () => {
    PermissionDataService.findByTitle(searchTitle)
      .then(response => {
        setpermissions(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by permission"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Permission List</h4>

        <ul className="list-group">
          {permissions &&
            permissions.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePermission(tutorial, index)}
                key={index}
              >
                {tutorial.nameEmployee} {tutorial.surnameEmployee}
              </li>
            ))}
        </ul>        
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Permission</h4>
            <div>
              <label>
                <strong>Name Employee:</strong>
              </label>{" "}
              {currentTutorial.nameEmployee}
            </div>
            <div>
              <label>
                <strong>Surname Employee:</strong>
              </label>{" "}
              {currentTutorial.surnameEmployee}
            </div>            

            <div>
              <label>
                <strong>Permission Type:</strong>
              </label>{" "}
              {currentTutorial.permissionType.description}
            </div>            

            <Link
              to={"/permissions/" + currentTutorial.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Permission...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Permissions;
