"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../ui/data-table";
import ProjectForm from "./add-project";
import DeleteProject from "./delete-project";
import { useFetch } from "@/hooks/useSWR";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  repo?: string;
  url?: string;
};

const columns: ColumnDef<Project>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "title", header: "Título" },
  { accessorKey: "repo", header: "Repositório" },
  { accessorKey: "url", header: "URL" },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return <DeleteProject id={id} />;
    },
  },
];

export default function ProjectsAdmin() {
  const { data } = useFetch<Project[]>("http://localhost:3000/api/projects");

  return (
    <div className="container mx-auto py-10">
      <ProjectForm />
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
