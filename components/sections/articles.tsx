import { Construction } from "lucide-react";
import SkeletonCard from "./skeleton-card";

export default function ArticlesTab() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Construction size={128} />
      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
        Em construção
      </h1>
      <SkeletonCard />
    </div>
  );
}
