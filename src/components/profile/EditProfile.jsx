import React, { useState, useEffect } from "react";
import  useAuth  from "../../hooks/useAuth";

const EditProfile = () => {
  const { user, updateUserProfile, fetchUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: ""
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        age: user.age || "",
        gender: user.gender || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            name="age"
            className="w-full border px-3 py-2 rounded"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Gender</label>
          <select
            name="gender"
            className="w-full border px-3 py-2 rounded"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
