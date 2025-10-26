"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <div className="max-w-3xl text-center space-y-4 mb-10 mt-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#E6D1A6]">
          Get in Touch
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Have questions, feedback, or collaboration ideas?  
          We’d love to hear from you. Our team is dedicated to creating ethical, AI-powered
          solutions for wildlife conservation — and your input helps us grow stronger.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-full max-w-lg rounded-2xl shadow-md p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-[#E6D1A6] outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-[#E6D1A6] outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            className="w-full rounded-md bg-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-[#E6D1A6] outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5f7765] hover:bg-[#4a5f52] text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Optional Footer Text */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        You can also reach us directly at{" "}
        <a href="mailto:support@patterns.ai" className="text-[#E6D1A6] hover:underline">
          support@patterns.ai
        </a>
      </div>
    </section>
  );
}
