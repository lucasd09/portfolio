import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/data-table";
import ProjectForm from "./add-project";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  repo?: string;
  url?: string;
};

export const columns: ColumnDef<Project>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "title", header: "Título" },
  { accessorKey: "repo", header: "Repositório" },
  { accessorKey: "url", header: "URL" },
];

export default async function ProjectsAdmin() {
  const res = await fetch("http://localhost:3000/api/projects");
  const data = await res.json();

  return (
    <div className="container mx-auto py-10">
      <ProjectForm />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
