"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useFetch } from "@/hooks/useSWR";
import ProjectDetail from "./projects-detail";

export type tag = {
  id: number;
  name: string;
  projectId: number;
};

export type project = {
  id: number;
  title: string;
  description: string;
  tags: tag[];
  image: string;
  repo: string;
  url: string;
};

export default function ProjectsTab() {
  const { data } = useFetch<project[]>("/projects");

  return (
    <div className=" flex mt-12 lg:w-[1200px] justify-evenly flex-wrap sm:w-full">
      {data &&
        data.map((project) => {
          return (
            <Card
              key={project.id}
              className="rounded-sm lg:flex mb-8 dark:bg-secondary"
            >
              <Image
                alt={project.title}
                src={project.image}
                width={320}
                height={180}
                className="w-80 h-auto rounded-sm"
              />
              <CardContent className="mt-2 py-2 w-80 flex flex-col justify-between">
                <div>
                  <h1 className="scroll-m-20 text-lg font-medium tracking-tight">
                    {project.title}
                  </h1>
                  <div className="space-x-2">
                    {project.tags.map((tag) => {
                      return <Badge key={tag.id}>{tag.name}</Badge>;
                    })}
                  </div>
                </div>
                <div className="flex justify-end space-x-2 py-2">
                  <ProjectDetail id={project.id} />
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"outline"} size={"icon"}>
                      <Github />
                    </Button>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
