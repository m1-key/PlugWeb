import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Profile() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });
  return (
    <div>
      <p>{user?.email}</p>
    </div>
  );
}
