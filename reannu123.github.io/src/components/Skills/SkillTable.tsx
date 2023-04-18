import React from "react";

function SkillTable() {
  const skills = [
    {
      name: "NodeJS",
      logo: "https://cdn.svgporn.com/logos/nodejs.svg",
      url: "https://nodejs.org/en/",
    },
    {
      name: "DigitalOcean",
      logo: "https://cdn.worldvectorlogo.com/logos/digitalocean-icon-1.svg",
      url: "https://www.digitalocean.com/",
    },
    {
      name: "Python",
      logo: "https://cdn.svgporn.com/logos/python.svg",
      url: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.svgporn.com/logos/javascript.svg",
      url: "https://www.javascript.com/",
    },
    {
      name: "ReactJS",
      logo: "https://cdn.svgporn.com/logos/react.svg",
      url: "https://reactjs.org/",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.svgporn.com/logos/mongodb.svg",
      url: "https://www.mongodb.com/",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.svgporn.com/logos/typescript-icon.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Express.js",
      logo: "https://cdn.svgporn.com/logos/express.svg",
      url: "https://expressjs.com/",
    },
    {
      name: "Nginx",
      logo: "https://cdn.svgporn.com/logos/nginx.svg",
      url: "https://www.nginx.com/",
    },
    // {
    //   name: "REST",
    //   url: "https://restfulapi.net/",
    // },
    {
      name: "BootStrap",
      logo: "https://cdn.svgporn.com/logos/bootstrap.svg",
      url: "https://getbootstrap.com/",
    },
    {
      name: "Docker",
      logo: "https://cdn.svgporn.com/logos/docker-icon.svg",
      url: "https://www.docker.com/",
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
      url: "https://aws.amazon.com/",
    },
    // {
    //   name: "Mongoose",
    //   url: "https://mongoosejs.com/",
    // },
    {
      name: "Rust",
      logo: "https://cdn.svgporn.com/logos/rust.svg",
      url: "https://www.rust-lang.org/",
    },
    {
      name: "JWT",
      logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
      url: "https://jwt.io/",
    },
    {
      name: "Flutter",
      logo: "https://cdn.svgporn.com/logos/flutter.svg",
      url: "https://flutter.dev/",
    },
    {
      name: "Kotlin",
      logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
      url: "https://kotlinlang.org/",
    },
    {
      name: "MySQL",
      logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
      url: "https://www.mysql.com/",
    },
    {
      name: "Prisma",
      logo: "https://cdn.svgporn.com/logos/prisma.svg",
      url: "https://www.prisma.io/",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      url: "https://tailwindcss.com/",
    },
    {
      name: "GitHub Pages",
      logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      url: "https://pages.github.com/",
    },
    {
      name: "Firebase",
      logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
      url: "https://firebase.google.com/",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center select-none">
        {/* Sort skills in alphabetical order */}
        {skills
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((skill) => (
            <>
              {/* Mobile */}
              <a
                href={skill.url}
                target="_blank"
                rel="noreferrer"
                className="md:hidden flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-100 rounded-3xl h-16 w-16 hover:scale-150 transition-all shadow-xl group"
              >
                <span className="font-Comfortaa absolute  text-xs  w-auto p-2 m-2 rounded-md shadow-md text-white bg-teal-800 transition-all opacity-0 group-hover:opacity-100  z-10 whitespace-nowrap">
                  {skill.name}
                </span>
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="h-8 w-8 " />
                ) : (
                  <p className="text-sm">{skill.name}</p>
                )}
              </a>
              {/* Desktop */}
              <a
                href={skill.url}
                target="_blank"
                rel="noreferrer"
                className="max-md:hidden flex flex-col items-center justify-center m-4 p-1 bg-teal-100 rounded-3xl h-24 w-24 hover:scale-150 transition-all shadow-xl hover:shadow-2xl group"
              >
                <span className="absolute font-Comfortaa text-base w-auto p-2 m-2  rounded-md text-white bg-teal-800 transition-all opacity-0 group-hover:opacity-100 z-10 whitespace-nowrap">
                  {skill.name}
                </span>
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-16 w-16 "
                  />
                ) : (
                  <p className="">{skill.name}</p>
                )}
              </a>
            </>
          ))}
      </div>
    </div>
  );
}

export default SkillTable;
