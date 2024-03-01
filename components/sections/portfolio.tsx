import Image from "next/image";
import PortfolioPic from "@/public/portfolio_pic.jpg";
import CompanyLogo from "@/public/frg.jpg";
import dsinLogo from "@/public/dsin.jpg";
import univemlogo from "@/public/univemmarilia_logo.jpg";
import ccilogo from "@/public/cci.png";
import udemylogo from "@/public/udemy_logo.jpg";
import { Separator } from "@/components/ui/separator";
import { Code, BrainCircuit, Dot } from "lucide-react";
import Skill from "../ui/skill";
import { Company, CompanyHeader, CompanyItem } from "../ui/company";

const companies = [
  {
    id: 1,
    name: "FRG - Gestão Inteligente",
    time: "2 anos e 8 meses",
    imgURL: CompanyLogo,
    jobs: [
      {
        id: 1,
        title: "Gestor de Projeto de Desenvolvimento",
        type: "Tempo integral",
        time: "ago de 2023 - Atualmente | 1 ano e 4 meses",
        description:
          "Faço Controle de Versão, Manutenção do banco de Dados e Manutenção do Software, além de coordenar o time de desenvolvimento para solucionar as dores dos clientes.",
      },
      {
        id: 2,
        title: "Desenvolvedor de software júnior",
        type: "Tempo integral",
        time: "ago de 2022 - fev de 2023 | 6 meses",
        description:
          "Comecei a desenvolver features mais complexas, implementando e fazendo manutenção no sistema de NF-e, geração de documentos fiscais como SPED, além de conhecer e aprender regras fiscais mais aprofundadas de um ERP.",
      },
      {
        id: 3,
        title: "Estágio em desenvolvimento de software",
        type: "Estágio",
        time: "nov de 2021 - ago de 2022 | 9 meses",
        description:
          "Fazia manutenção em features mais simples do sistema, mas com foco no aprendizado e preparo para as futuras implementações. As maiores contribuições nesse período foram os relatórios personalizados que era pedido pelos clientes.",
      },
    ],
  },
  {
    id: 1,
    name: "DSIN - Tecnologia da Informação",
    time: "4 meses",
    imgURL: dsinLogo,
    jobs: [
      {
        id: 1,
        title: "Estágio em desenvolvimento de software",
        type: "Estágio",
        time: "jan de 2021 - abr de 2021 | 4 meses",
        description: "Aprendizado e manutenção do sistema de trânsito SGIT",
      },
    ],
  },
];

const courses = [
  {
    id: 1,
    imgURL: univemlogo,
    name: "UNIVEM - Centro Universitário Eurípedes de Marília",
    degree: "Bacharelado, Ciência da Computação",
    description:
      "Bacharelado em Ciência da Computação, onde tive contato direto com conhecimentos que tiveram grande impacto em minha carreira.",
    time: "jan de 2020 - jan de 2024",
  },
  {
    id: 2,
    imgURL: ccilogo,
    name: "CCI - Centro de Comunicação Inglesa",
    degree: "Curso",
    description:
      "Avancei alguns anos, pois já tinha conhecimento prévio. O curso teve maior foco nas conversações e discussão de ideias, além de apresentações, todas em inglês.",
    time: "jan 2019 - nov de 2021",
  },
];

const certifications = [
  {
    id: 1,
    title: "Essential English for I.T Professionals",
    time: "emitida em mar de 2022",
    imgURL: udemylogo,
    organization: "Udemy",
    CredentialCode: "UC-6ed34fd7-1a04-42c8-927c-47e82cd9aa3b",
    URL: "https://www.udemy.com/certificate/UC-6ed34fd7-1a04-42c8-927c-47e82cd9aa3b/",
  },
  {
    id: 2,
    title: "Programação em JavaScript do básico ao avançado",
    time: "emitida em fev de 2022",
    imgURL: udemylogo,
    organization: "Udemy",
    CredentialCode: "UC-0a434888-f604-46f0-9993-1865922a70ee",
    URL: "https://www.udemy.com/certificate/UC-0a434888-f604-46f0-9993-1865922a70ee/",
  },
  {
    id: 3,
    title: "Programação em Python do básico ao avançado",
    time: "emitida em ago de 2021",
    imgURL: udemylogo,
    organization: "Udemy",
    CredentialCode: "UC-4531b8c0-2adc-43bc-b264-c84e6ca2c0d2",
    URL: "https://www.udemy.com/certificate/UC-4531b8c0-2adc-43bc-b264-c84e6ca2c0d2/",
  },
];

export default function PortfolioTab() {
  return (
    <div className="flex flex-col items-center mt-12 w-full max-w-[900px] space-y-4">
      <Image
        alt="portfolio_pic"
        src={PortfolioPic}
        className="rounded-md w-[256px]"
        priority
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
          <Skill icon={<Code />} title="Delphi" level={5} />
          <Skill icon={<Code />} title="SQL - MySQL" level={5} />
          <Skill icon={<Code />} title="Typescript" level={3} />
          <Skill icon={<Code />} title="Python" level={1} />
          <Skill icon={<Code />} title="C#" level={1} />
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
        {companies.map((company) => {
          return (
            <Company key={company.id}>
              <CompanyHeader
                img={company.imgURL}
                title={company.name}
                time={company.time}
              />
              {company.jobs.map((job) => {
                return (
                  <CompanyItem
                    key={job.id}
                    title={job.title}
                    jobType={job.type}
                    time={job.time}
                    description={job.description}
                  />
                );
              })}
            </Company>
          );
        })}
      </div>
      <Separator />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Formação Acadêmica
      </h1>
      <div className="w-full text-start px-4">
        {courses.map((course) => {
          return (
            <Company key={course.id}>
              <CompanyHeader
                img={course.imgURL}
                title={course.name}
                time={course.time}
              />
              <CompanyItem
                key={course.id}
                title={course.degree}
                description={course.description}
              />
            </Company>
          );
        })}
      </div>
      <Separator />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Licenças e Certificados
      </h1>
      <div className="w-full text-start px-4">
        {certifications.map((certificate) => {
          return (
            <div className="mb-4" key={certificate.id}>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  alt="company_logo"
                  src={certificate.imgURL}
                  className="rounded w-12 shadow-md"
                />
                <div>
                  <h1 className="font-semibold">{certificate.title}</h1>
                  <p className="text-sm">{certificate.organization}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center font-semibold">
                  <Dot size={34} />
                  <p>Credenciais</p>
                </div>
                <div className="px-4 mx-4 border-l pb-4">
                  <div>
                    <p className="text-sm font-medium">{certificate.time}</p>
                    <p className="text-sm">{certificate.CredentialCode}</p>
                    <a
                      className="text-sm"
                      target="_blank"
                      href={certificate.URL}
                    >
                      {certificate.URL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
