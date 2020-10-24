import React from "react";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'

function Profile() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <h2>{user?.email}</h2>
      <h2>{user?.displayName}</h2>
      <img src={user?.photoURL} alt="" />
      <button
        onClick={() => {
          if (user) auth.signOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
