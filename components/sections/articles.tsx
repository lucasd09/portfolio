import { Construction } from "lucide-react";

export default function ArticlesTab() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Construction size={128} />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Em construção
      </h1>
    </div>
  );
}
