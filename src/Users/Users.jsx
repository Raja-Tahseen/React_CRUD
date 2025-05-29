import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [showViewMode, setShowViewMode] = useState(false);
  const [showAddMode, setShowAddMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      if (response) {
        console.log(response.data);
      }

      setUsers(response.data);
    } catch (error) {
      console.log(e);
    }
  };

  const actionsTemplate = (rowDate) => {
    return (
      <>
        <button
          className="btn btn-success"
          onClick={() => {
            setSelectedUserId(rowDate.id);
            setShowViewMode(true);
          }}
        >
          <i className="pi pi-eye"></i>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSelectedUserId(rowDate.id);
            setShowEditMode(true);
          }}
        >
          <i className="pi pi-file-edit"></i>
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deleteUserConfirm(rowDate.id)}
        >
          <i className="pi pi-trash"></i>
        </button>
      </>
    );
  };

  return (
    <div className="users-page">
      <div className="container">
        <h1>Welcome to React CRUDs.</h1>
        <h3>We will use React, Primereact, Json-Server and Axios</h3>

        <div className="users-list">
          <DataTable value={users} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="username" header="User Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="website" header="Website"></Column>
            <Column header="Actions" body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Users;
