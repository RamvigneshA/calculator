import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import a loading animation library
import  './pagination.css'

export const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        setIsLoading(false); // Set loading state to false after successful fetch
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false); // Set loading state to false after failed fetch
      });
  },[]);

  if (isLoading) {
 return (
        <div className="loading-container">
          <ClipLoader className="loading" size={100} color="red" /> {/* Customize animation size and color */}
          <p>Loading users...</p>
        </div>
      );  }

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  return <>
  {users.map((user) =><h1 key={user.id}>{user.id +") "+ user.firstName}</h1>)}
  </>;
};

