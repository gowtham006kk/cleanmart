import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/contacts`);
        setContacts(response.data);
      } catch (error) {
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Contact List</h2>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-gray-600">{contact.email}</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p className="text-gray-500">{contact.message}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-200">
                Respond
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
