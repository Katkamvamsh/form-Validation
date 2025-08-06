import React, { useEffect, useState } from 'react';
import './UsersTable.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Failed to fetch users:', err));
  }, []);

  return (
    <div className="users-container">
      <h2 className="table">User List from API in Table Format</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {/* Placeholder image using pravatar (based on user ID) */}
                <img
                  src={`https://i.pravatar.cc/50?img=${user.id}`}
                  alt={user.name}
                  className="user-photo"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
