import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import PortfolioPic from "@/public/portfolio_pic.png";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-4 border-b">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Blog do Dalan
        </h1>
      </div>
      <Tabs defaultValue="portfolio" className="flex flex-col items-center">
        <TabsList className="flex">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="articles">Artigos</TabsTrigger>
          <TabsTrigger value="Contact">Contato</TabsTrigger>
        </TabsList>
        <TabsContent
          value="portfolio"
          className="flex flex-col items-center mt-12 w-full max-w-[600px] space-y-4"
        >
          <Image
            alt="portfolio_pic"
            src={PortfolioPic}
            className="rounded-full w-[256px]"
          />
          <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
            Lucas Dalan
          </h1>
          <h2>Software Engineer | Project Manager</h2>
          <Separator />
          <p className="text-justify px-4">
            Como gestor de projeto na FRG Gestão Inteligente, lidero o
            desenvolvimento do ERP Mosaic, um sistema integrado de gestão
            empresarial. Com minha formação em Ciência da Computação pela
            UNIVEM, aplico meus conhecimentos em engenharia de software, API
            Rest, e banco de dados para garantir a qualidade, a eficiência, e a
            segurança do software.{" "}
          </p>
          <Separator />
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
