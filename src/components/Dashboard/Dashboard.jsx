import { useEffect, useContext, useState } from 'react';

import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUserList(fetchedUsers);
      } catch (err) {
        console.log(err)
      }
    }
    if (user) fetchUsers();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
      <ul>
        {userList.map(user => 
          <li key={user._id}>{user.username}</li>
        )}
      </ul>
    </main>
  );
};

export default Dashboard;
