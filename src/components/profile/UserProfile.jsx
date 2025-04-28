import React, { useEffect } from "react";
import  useAuth  from "../../hooks/useAuth";

const UserProfile = () => {
  const { user, fetchUserProfile } = useAuth();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      {user ? (
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Age:</span> {user.age}</p>
          <p><span className="font-medium">Gender:</span> {user.gender}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
