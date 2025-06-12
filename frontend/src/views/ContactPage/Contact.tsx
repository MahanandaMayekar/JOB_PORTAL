import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (
   
  ) => {
 
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-12 font-inter">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight">
          Contact <span className="text-gray-900">aiSmartHunters</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 border-solid pb-3">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 border-solid focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 border-solid focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Regarding your job portal..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 border-solid focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 border-solid focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="p-6 bg-blue-50 border-l-4 border-blue-500 shadow rounded   ">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact</h2>
          <p className="text-lg">
            Reach out anytime at{" "}
            <a
              href="mailto:info@aismarthunters.com"
              className="text-blue-600 hover:underline"
            >
              info@aismarthunters.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
