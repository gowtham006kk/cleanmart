import { useState } from "react";
import axios from "axios";
import Footer from "./footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/shop/contact`, formData);
      setResponseMessage(response.data.message || "Message sent successfully!");
      setIsError(false);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setResponseMessage(error.response?.data?.message || "Something went wrong. Please try again.");
      setIsError(true);
    }
  };

  return (
    <>
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Contact Us</h2>

      {responseMessage && (
        <div
          className={`mb-6 p-4 rounded-md text-center ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
        >
          {responseMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            rows="6"
            placeholder="Write your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default ContactForm;
