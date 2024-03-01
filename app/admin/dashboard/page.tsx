import ProjectsAdmin from "@/components/admin/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) redirect("/admin");
  return (
    <div>
      <Tabs defaultValue="projects">
        <TabsList className="flex">
          <TabsTrigger value="projects">Projetos</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="flex justify-center">
          <ProjectsAdmin />
        </TabsContent>
      </Tabs>
    </div>
  );
}
