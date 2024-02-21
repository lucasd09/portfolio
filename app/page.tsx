import PortfolioTab from "@/components/sections/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-4 border-b ">
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
          <TabsTrigger value="Contact">Contato</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          <PortfolioTab />
        </TabsContent>
        <TabsContent value="projects" className="flex justify-center">
          projetos do sexo
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
