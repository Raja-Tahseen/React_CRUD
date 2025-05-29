import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Users() {
  const [products, setProducts] = useState([
    {
      code: "1",
      name: "Product 1",
      category: "Test Category",
      quantity: "5",
    },
  ]);
  return (
    <div className="users-page">
      <div className="container">
        <h1>Welcome to React CRUDs.</h1>
        <h3>We will use React, Primereact, Json-Server and Axios</h3>

        <div className="users-list">
          <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Users;
