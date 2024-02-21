import PortfolioTab from "@/components/sections/portfolio";
import ProjectsTab from "@/components/sections/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <Tabs defaultValue="portfolio" className="flex flex-col items-center">
        <TabsList className="flex">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="articles">Artigos</TabsTrigger>
          <TabsTrigger value="Contact">Contato</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          <PortfolioTab />
        </TabsContent>
        <TabsContent value="projects" className="flex justify-center">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="articles" className="flex justify-center">
          artigos do sexo
        </TabsContent>
        <TabsContent value="contact" className="flex justify-center">
          contatos do sexo
        </TabsContent>
      </Tabs>
    </div>
  );
}
