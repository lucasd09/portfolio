"use client";
import { DataTable } from "@/components/ui/data-table";
import { useFetch } from "@/hooks/useSWR";
import { ColumnDef } from "@tanstack/react-table";
import TagForm from "./add-tag";

type Tag = {
  id: number;
  name: string;
};

const columns: ColumnDef<Tag>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Título" },
];

export default function TagsAdmin() {
  const { data } = useFetch<Tag[]>("http://localhost:3000/api/tags");

  return (
    <div className="container mx-auto py-10">
      <TagForm />
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
