import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Optional: update context user so UI updates immediately
      setUser({ ...user, displayName: name, photoURL: photoURL });

      alert("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile.");
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">User not logged in</h2>
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.photoURL || "https://i.ibb.co/MBtjqXQ/default-profile.png"}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.displayName || "No Name"}</h2>
        <p className="text-gray-600 mt-1">{user.email || "No Email"}</p>

        <button
          onClick={() => setEditing(!editing)}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          {editing ? "Cancel" : "Update Profile"}
        </button>
      </div>

      {/* Profile Update Form */}
      {editing && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <div>
            <label className="block text-left font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
