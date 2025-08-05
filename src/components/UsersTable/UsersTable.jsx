import React, { useEffect, useState } from 'react';
import './UsersTable.css'

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(err => console.error('Failed to fetch users:', err));
  }, []);

  return (
    <div className="users-container">
      <h2 className='table'>User List from API nd showing iin Table Format </h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} alt={user.firstName} className="user-photo" /></td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>{user.address?.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
