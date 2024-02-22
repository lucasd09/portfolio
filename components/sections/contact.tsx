import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactTab() {
  return (
    <div className="flex flex-col justify-center items-start my-8 space-y-6">
      <div className="flex space-x-4 items-center">
        <Phone size={32} />
        <h1 className="scroll-m-20 text-lg font-medium tracking-tight">
          +55 (14) 99194-4869
        </h1>
      </div>
      <div className="flex space-x-4 items-center ">
        <Mail size={32} />
        <h1 className="scroll-m-20 text-lg font-medium tracking-tight">
          lucasdalan09@gmail.com
        </h1>
      </div>
      <div className="flex space-x-4 items-center ">
        <Linkedin size={32} />
        <a
          href="https://www.linkedin.com/in/lucasdalan/"
          target="_blank"
          className="scroll-m-20 text-lg font-medium tracking-tight"
        >
          /lucasdalan
        </a>
      </div>
    </div>
  );
}
