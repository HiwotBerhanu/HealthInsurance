"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#90E4C1] to-[#6DD3C1] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold  text-[#2D3748] mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#90E4C1] transition"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#90E4C1] transition"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#90E4C1] transition"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#90E4C1] transition"
            required
            rows="4"
          />
          <button
            type="submit"
            className="bg-[#90E4C1] text-white font-semibold py-2 rounded-2xl shadow-md transition-transform transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
