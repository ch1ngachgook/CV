import React from "react";

const Offers = () => {
  return (
    <section id="offers" className="mb-20 scroll-mt-60">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">What I suggest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Web development</h3>
          <p>
            Creating responsive websites using HTML, React, and JavaScript.
          </p>
        </div>
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">UX/UI Design</h3>
          <p>
            Developing user interfaces with a focus on usability and
            visual appeal using CSS and Tailwind.
          </p>
        </div>
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Consultations</h3>
          <p>
            Correcting errors in the code and providing optimal solutions
            to problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;