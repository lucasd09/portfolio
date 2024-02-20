import Image from "next/image";
import PortfolioPic from "@/public/portfolio_pic.png";
import CompanyLogo from "@/public/frg.jpg";
import { Separator } from "@/components/ui/separator";
import { Code, BrainCircuit, Dot } from "lucide-react";
import Skill from "../ui/skill";

export default function PortfolioTab() {
  return (
    <div className="flex flex-col items-center mt-12 w-full max-w-[600px] space-y-4">
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
        empresarial. Com minha formação em Ciência da Computação pela UNIVEM,
        aplico meus conhecimentos em engenharia de software, API Rest, e banco
        de dados para garantir a qualidade, a eficiência, e a segurança do
        software.
      </p>
      <Separator />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Ficha Técnica
      </h1>
      <div className="w-full text-start px-4">
        <h2 className="font-medium text-lg mb-4">Hard skills</h2>
        <div className="space-y-2">
          <Skill icon={<Code />} title="Delphi" level="advanced" />
          <Skill icon={<Code />} title="SQL - MySQL" level="advanced" />
          <Skill icon={<Code />} title="Typescript" level="intermediate" />
          <Skill icon={<Code />} title="Python" level="beginner" />
        </div>
        <h2 className="font-medium text-lg my-4">Soft skills</h2>
        <div className="space-y-2">
          <Skill icon={<BrainCircuit />} title="Proatividade" />
          <Skill icon={<BrainCircuit />} title="Inteligência Emocional" />
          <Skill icon={<BrainCircuit />} title="Comunicação" />
          <Skill icon={<BrainCircuit />} title="Ética" />
          <Skill icon={<BrainCircuit />} title="Gestão de Tempo" />
          <Skill icon={<BrainCircuit />} title="Trabalho em Equipe" />
        </div>
      </div>
      <Separator />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Experiência Profissional
      </h1>
      <div className="w-full text-start px-4">
        <div>
          <div className="flex items-center space-x-2">
            <Image
              alt="company_logo"
              src={CompanyLogo}
              className="rounded w-12"
            />
            <div>
              <h1 className="font-semibold">FRG - Gestão Inteligente</h1>
              <p>2 a 4 m</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center font-semibold">
              <Dot size={32} />
              <p>Gestor de Projeto de Desenvolvimento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
