import ArticlesTab from "@/components/sections/articles";
import ContactTab from "@/components/sections/contact";
import PortfolioTab from "@/components/sections/portfolio";
import ProjectsTab from "@/components/sections/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-4 border-b">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Lucas Dalan
        </h1>
        <div className="absolute flex items-center space-x-2 ml-[75%]">
          <ThemeToggle />
        </div>
      </div>
      <Tabs defaultValue="portfolio" className="flex flex-col items-center">
        <TabsList className="flex">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="articles">Artigos</TabsTrigger>
          <TabsTrigger value="contact">Contato</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          <PortfolioTab />
        </TabsContent>
        <TabsContent value="projects" className="flex justify-center">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="articles" className="flex justify-center">
          <ArticlesTab />
        </TabsContent>
        <TabsContent value="contact" className="flex justify-center">
          <ContactTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
