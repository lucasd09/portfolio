import PortfolioTab from "@/components/sections/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-4 border-b ">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Lucas Dalan
        </h1>
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
