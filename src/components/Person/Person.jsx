import { useState } from 'react';

const personData = {
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'painting'],
  address: {
    street: '123 Main St',
    city: 'New York',
  },
};

export default function Person() {
  const [person, setPerson] = useState(personData);
  const { name, age = personData, hobbies, address } = person;
  const [formData, setFormData] = useState(personData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parentKey, childKey] = name.split('.');
      //   const parentObj = formData[parentKey];
      //   parentObj[childKey] = value;
      //   setFormData({ ...formData, [parentKey]: parentObj });
      setFormData({
        ...formData,
        [parentKey]: {
          ...formData[parentKey],
          [childKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson({ ...formData });
  };
  return (
    <>
      <div className="text-gray-950 space-y-2">
        <p className="text-gray-900">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Age:</span> {age}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Hobbies:</span> {hobbies.join(', ')}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Address:</span> {address?.street},{' '}
          {address?.city}
        </p>
      </div>

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
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            Age
          </label>
          <input
            type="text"
            id="name"
            name="age"
            value={formData.age}
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
            Street
          </label>
          <input
            type="text"
            id="name"
            name="address.street"
            value={formData.address.street}
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
            City
          </label>
          <input
            type="text"
            id="name"
            name="address.city"
            value={formData.address.city}
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
    </>
  );
}
