type SkillbarProps = {
  level: "beginner" | "intermediate" | "advanced";
};

export default function Skillbar({ level }: SkillbarProps) {
  const renderSkillBars = () => {
    let bars = [];

    switch (level) {
      case "beginner":
        bars.push(
          <div key={1} className="h-2 w-8 bg-red-500 rounded-full"></div>
        );
        break;
      case "intermediate":
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-yellow-500 rounded-full mr-1"
          ></div>,
          <div key={2} className="h-2 w-8 bg-yellow-500 rounded-full"></div>
        );
        break;
      case "advanced":
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={2}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div key={3} className="h-2 w-8 bg-green-500 rounded-full"></div>
        );
        break;
      default:
        break;
    }

    return bars;
  };
  return <div className="flex items-center">{renderSkillBars()}</div>;
}
