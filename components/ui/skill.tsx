import { ReactNode } from "react";
import Skillbar from "./skillbar";

type SkillProps = {
  icon: ReactNode;
  title: string;
  level?: "beginner" | "intermediate" | "advanced";
};

export default function Skill({ icon, level, title }: SkillProps) {
  return (
    <div className="flex justify-between">
      <div className=" flex space-x-2">
        {icon}
        <p>{title}</p>
      </div>
      <div className="flex items-center">
        {level && <Skillbar level={level} />}
      </div>
    </div>
  );
}
