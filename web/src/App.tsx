import React, { useEffect, useState } from "react";
import api from "./service/api";
import "./App.css";

interface IUser {
  name: string;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get<IUser[]>("/users").then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default App;
