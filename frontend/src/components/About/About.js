import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">FrameFlow</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <span className="font-semibold">FrameFlow</span>, fgd your go-to platform for discovering and sharing stunning images. 
            Our mission is to celebrate creativity by curating a collection of breathtaking visuals from artists and photographers worldwide.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At FrameFlow, we believe that every image tells a story. Whether you're here to find inspiration, share your art, or explore the work of others, we strive to provide an engaging and seamless experience for everyone.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us on this journey as we bring the world closer through the lens of creativity. Let’s flow through the frames together!
          </p>
        </section>

        {/* Our Values */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Creativity</h4>
              <p className="text-gray-700">
                We celebrate innovation and originality, empowering artists to express themselves.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-700">
                Building a global community where artists and viewers can connect and inspire one another.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality</h4>
              <p className="text-gray-700">
                Delivering a premium experience through a carefully curated gallery and seamless interface.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} FrameFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
