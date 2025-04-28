import React, { useState } from "react";
import { trackActivity } from "../../services/ActivityService"; // correct function name
import useActivity from "../../hooks/useActivity";

const ActivityTracker = () => {
  const [activity, setActivity] = useState({ name: "", duration: "", date: "" });
  const { fetchActivityHistory } = useActivity(); //  now available from context

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await trackActivity(activity); // corrected function
    setActivity({ name: "", duration: "", date: "" });
    fetchActivityHistory(); // update activity list
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Track Activity</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={activity.name}
          onChange={handleChange}
          placeholder="Activity Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="duration"
          value={activity.duration}
          onChange={handleChange}
          placeholder="Duration (minutes)"
          type="number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="date"
          value={activity.date}
          onChange={handleChange}
          type="date"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Log Activity
        </button>
      </form>
    </div>
  );
};

export default ActivityTracker;

