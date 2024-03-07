"use client";
import { ExternalLink, Github, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useFetch } from "@/hooks/useSWR";
import { project } from "./projects";
import { Badge } from "../ui/badge";

export default function ProjectDetail({ id }: { id: number }) {
  const { data } = useFetch<project>(`/projects/${id}`);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <MoreHorizontal />
        </Button>
      </DialogTrigger>
      <DialogContent className="pt-0 px-0 w-[1200px]">
        {data && (
          <div>
            <Image
              alt={data.title}
              src={data.image}
              layout="responsive"
              width={320}
              height={180}
              className="w-80 h-auto rounded-t-lg"
            />
            <div className="px-4 pt-4 space-y-2">
              <h1 className="scroll-m-20 text-lg font-medium tracking-tight">
                {data.title}
              </h1>
              <div className="space-x-2">
                {data.tags.map((tag) => {
                  return <Badge key={tag.id}>{tag.name}</Badge>;
                })}
              </div>
              <p className="text-justify">{data.description}</p>
              <div className="flex justify-end space-x-2 pt-2">
                <a href={data.repo} target="_blank" rel="noopener noreferrer">
                  <Button variant={"outline"} size={"icon"}>
                    <Github />
                  </Button>
                </a>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <Button size={"icon"}>
                    <ExternalLink />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
