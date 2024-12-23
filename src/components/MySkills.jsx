import React from "react";

const MySkills = () => {
  return (
    <section id="about-me" className="mb-20 scroll-mt-60">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">My skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Education</h3>
          <p>
            I am a 2nd year student of the Faculty of MMF of BSU, specialty "web programming and Internet technologies".
          </p>
        </div>
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc pl-5">
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="p-4 md:p-5 rounded-lg border border-black">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc pl-5">
            <li>Russian — native</li>
            <li>English — B2</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;