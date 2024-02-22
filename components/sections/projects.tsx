import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import portfolioimg from "@/public/portfolio.png";
import learnly from "@/public/learnly.png";
import reactpwa from "@/public/REACTPWA.png";
import imob from "@/public/imob.png";

type project = {
  id: number;
  name: string;
  technologies: string[];
  imgURL: string | StaticImport;
  github: string;
  URL: string;
};

const projects: project[] = [
  {
    id: 1,
    name: "Portfolio - Lucas Dalan",
    technologies: ["Typescript", "Next.js"],
    imgURL: portfolioimg,
    github: "https://github.com/lucasd09/portfolio",
    URL: "",
  },
  {
    id: 2,
    name: "Learnly",
    technologies: ["Typescript", "Next.js", "vanilla-exctract"],
    imgURL: learnly,
    github: "https://github.com/lucasd09/learnly",
    URL: "",
  },
  {
    id: 3,
    name: "Clone Twitter - PWA",
    technologies: ["Typescript", "React.js", "PWA"],
    imgURL: reactpwa,
    github: "https://github.com/lucasd09/react-pwa",
    URL: "",
  },
  {
    id: 4,
    name: "IMOB - Frontend",
    technologies: ["Typescript", "Next.js"],
    imgURL: imob,
    github: "https://github.com/lucasd09/imob",
    URL: "",
  },
  {
    id: 5,
    name: "IMOB - Backend",
    technologies: ["Typescript", "Nest.js", "Prisma"],
    imgURL: "",
    github: "https://github.com/lucasd09/imob-api",
    URL: "",
  },
  {
    id: 6,
    name: "Portfolio - Lucas Dalan",
    technologies: ["Typescript", "Next.js"],
    imgURL: portfolioimg,
    github: "https://github.com/lucasd09/portfolio",
    URL: "",
  },
];

export default function ProjectsTab() {
  return (
    <div className=" flex mt-12 lg:w-[1200px] justify-evenly flex-wrap sm:w-full">
      {projects.map((project) => {
        return (
          <Card
            key={project.id}
            className="rounded-sm lg:flex mb-8 dark:bg-secondary"
          >
            <Image
              alt={project.name}
              src={project.imgURL}
              className="w-80 rounded-t-sm"
            />
            <CardContent className="mt-2 py-2 w-80 flex flex-col justify-between">
              <div>
                <h1 className="scroll-m-20 text-lg font-medium tracking-tight">
                  {project.name}
                </h1>
                <div className="space-x-2">
                  {project.technologies.map((technology) => {
                    return <Badge key={technology}>{technology}</Badge>;
                  })}
                </div>
              </div>
              <div className="flex justify-end space-x-2 py-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={"outline"} size={"icon"}>
                    <Github />
                  </Button>
                </a>
                <a href={project.URL} target="_blank" rel="noopener noreferrer">
                  <Button size={"icon"}>
                    <ExternalLink />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
