import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  });
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <div className=" flex gap-6 justify-center items-center min-h-screen bg-gray-100">
      {showData && (
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Form Data
              </h2>
              <p className="text-gray-700 text-sm">
                First Name: {formData.firstName}
              </p>
              <p className="text-gray-700 text-sm">
                Last Name: {formData.lastName}
              </p>
              <p className="text-gray-700 text-sm">Email: {formData.email}</p>
            </div>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Simple Form</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <input
            type="text"
            id="name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
