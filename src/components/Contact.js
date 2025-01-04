import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("access_key", process.env.REACT_APP_FORM_ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("Will get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    } else {
      console.error("Error", data);
      setResult("Error: " + data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase">Connect with me</p>
          <h2 className="text-3xl lg:text-4xl font-bold">Get in touch</h2>
        </div>
        <p className="text-gray-600">
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto mt-10 space-y-6"
      >
        {/* Name and Email in a Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message Field */}
        <textarea
          rows={6}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Enter your message"
          className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="block bg-gradient-to-r from-purple-500 to-pink-500  text-white py-3 px-10 mx-auto rounded-full font-medium shadow-md hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Result Message */}
      <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">{result}</span>
      </div>
    </div>
    </div>
  );
}
