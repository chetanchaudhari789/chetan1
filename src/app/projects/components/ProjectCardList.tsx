"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";
import SimpleProjectCard from "@/components/SimpleProjectCard";

const ProjectCardList = () => {
  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Projects" />
      <SimpleProjectCard />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
   {
    logo: "/favicon.ico",
    title: "SketchFlow",
    description:
      "SketchFlow is a collaborative drawing tool built with React and Vite, Express, and Socket.IO, designed for creating diagrams, sketches, and illustrations in real-time.",
    techStack: ["Node.js","react","Socket.IO", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://sketch-flow-flame.vercel.app/",
    source: "https://github.com/chetanchaudhari789/SketchFlow",
  },
  {
    logo: "/codify.png",
    title: "Codify",
    description:
      "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
    link: "https://codify-kohl.vercel.app/",
    source: "https://github.com/chetanchaudhari789/Codify",
  },
   {
    logo: "/credify.png",
    title: "Credify",
    description:
      "Discover the best credit card offers from major Indian banks with AI-powered natural language search and smart comparisons.",
    techStack: ["vite","react", "TypeScript", "radix-ui", "Tailwind CSS"],
    link: "https://credify-dusky.vercel.app/",
    source: "https://github.com/chetanchaudhari789/Credify",
  },
   {
    logo: "/BrainLoop.png",
    title: "BrainLoop",
    description:
      "Store all your important links in one place. Twitter posts, YouTube videos, blog articles, Reddit threads, and more.",
    techStack: ["vite","react", "TypeScript", "radix-ui", "Tailwind CSS","Supabase"],
    link: "https://brain-loop-ten.vercel.app//",
    source: "https://github.com/chetanchaudhari789/BrainLoop",
  },
];
