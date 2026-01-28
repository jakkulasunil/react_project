import React, { useState } from "react";
import { getAllEmployees } from "../api/employeeApi";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
      setShowTable(true);
      setError("");
    } catch (err) {
      setError("Error fetching employee data");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Details</h2>

      <button onClick={fetchEmployees} style={{ marginBottom: "15px" }}>
        Get Employees
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {showTable && employees.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.employeeId}>
                <td>{emp.employeeId}</td>
                <td>{emp.employeeName}</td>
                <td>{emp.email}</td>
                <td>{emp.salary}</td>
                <td>{emp.department?.departmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showTable && employees.length === 0 && <p>No employees found</p>}
    </div>
  );
};

export default EmployeeTable;
