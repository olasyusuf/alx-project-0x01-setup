import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: "",
        },
        },
        phone: "",
        website: "",
        company: {
        name: "",
        catchPhrase: "",
        bs: "",
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Basic info */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Address */}
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={user.address.zipcode}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Company */}
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
          />

          {/* Contact */}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
