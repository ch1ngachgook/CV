import React from "react";

const MyWorks = () => {
  const projects = [
    {
      title: "TodoList",
      github: "https://github.com/ch1ngachgook/Todo-list",
      description:
        "An application for creating a task to work with them.",
      image: "src/images/todolist.jpg",
      technologies: ["React", "JS"],
    },
    {
      title: "Todoist",
      github: "https://github.com/ch1ngachgook/Todoist",
      description:
        "An application for creating a task to work with them. Supports sorting, searching, editing and deleting.",
      image: "src/images/todoist.jpg",
      technologies: ["JS", "CSS Module", "React"],
    },
    {
      title: "Lamoda",
      github: "https://github.com/ch1ngachgook/Lamoda",
      description:
        "An online store with the ability to search, filter, and sort products.",
      image: "src/images/lamoda.jpg",
      technologies: ["JS", "React"],
    },
    {
      title: "CV",
      github: "https://github.com/ch1ngachgook/CV",
      description:
        "Resume with recent works, describing my skills and abilities.",
      image: "src/images/cv.jpg",
      technologies: ["JS", "React"],
    },
  ];

  return (
    <section id="works" className="mb-20 scroll-mt-60">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">My works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 flex flex-col md:flex-row items-center h-auto rounded-lg border border-black"
          >
            <div className="flex-1 pr-0 md:pr-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="mb-2">{project.description}</p>
              <p className="mb-2">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="flex justify-between items-center mt-2">
                <a
                  href={project.github}
                  className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded transition mt-2"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="relative group flex items-center mt-4 md:mt-0">
              <img
                src={project.image}
                alt={project.title}
                className="h-32 md:h-40 rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
