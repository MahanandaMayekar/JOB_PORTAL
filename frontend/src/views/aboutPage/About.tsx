

const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 font-sans text-gray-800 bg-white shadow-lg rounded-lg space-y-10">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600">
          About aiSmartHunters
        </h1>
      </header>

      <section className="p-6 bg-blue-50 border-l-4 border-blue-500 shadow rounded">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Our Mission
        </h2>
        <p className="text-lg">
          We empower individuals to achieve career goals and help businesses
          build great teams. Our AI-driven tools connect talent with opportunity
          to fuel success for everyone.
        </p>
      </section>

      <section className="p-6 bg-gray-50 border-l-4 border-blue-500 shadow rounded">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          What Makes Us Different
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>
            <strong className="text-blue-700">AI Matching:</strong> Smart job
            and talent matching using data-driven algorithms.
          </li>
          <li>
            <strong className="text-blue-700">Personalized Help:</strong> Resume
            tips, interview prep, and insights for job seekers.
          </li>
          <li>
            <strong className="text-blue-700">Fast & Efficient:</strong> Skip
            the noise. Get to the right fit quickly.
          </li>
          <li>
            <strong className="text-blue-700">Real Support:</strong> Our team is
            here to help you every step of the way.
          </li>
        </ul>
      </section>

      <section className="p-6 bg-blue-50 border-l-4 border-blue-500 shadow rounded">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-lg">
          Founded by technologists and HR pros, aiSmartHunters was born to fix
          job search frustration. We use AI to connect people and companies in a
          better, smarter way.
        </p>
      </section>

      <section className="p-6 bg-gray-50 border-l-4 border-blue-500 shadow rounded">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join Us</h2>
        <p className="text-lg">
          Whether you're looking for your dream job or hiring top talent,
          aiSmartHunters is your trusted partner. Join our growing community
          today.
        </p>
      </section>

      <section className="p-6 bg-blue-50 border-l-4 border-blue-500 shadow rounded">
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
  );
};

export default About;
