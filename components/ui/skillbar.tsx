type SkillbarProps = {
  level: number;
};

export default function Skillbar({ level }: SkillbarProps) {
  const renderSkillBars = () => {
    let bars = [];

    switch (level) {
      case 1:
        bars.push(
          <div key={1} className="h-2 w-8 bg-red-500 rounded-full"></div>
        );
        break;
      case 2:
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-yellow-500 rounded-full mr-1"
          ></div>,
          <div key={2} className="h-2 w-8 bg-yellow-500 rounded-full"></div>
        );
        break;
      case 3:
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-yellow-500 rounded-full mr-1"
          ></div>,
          <div
            key={2}
            className="h-2 w-8 bg-yellow-500 rounded-full mr-1"
          ></div>,
          <div key={3} className="h-2 w-8 bg-yellow-500 rounded-full"></div>
        );
        break;
      case 4:
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={2}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={3}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div key={4} className="h-2 w-8 bg-green-500 rounded-full"></div>
        );
        break;
      case 5:
        bars.push(
          <div
            key={1}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={2}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={3}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div
            key={4}
            className="h-2 w-8 bg-green-500 rounded-full mr-1"
          ></div>,
          <div key={5} className="h-2 w-8 bg-green-500 rounded-full"></div>
        );
        break;
      default:
        break;
    }

    return bars;
  };
  return <div className="flex items-center">{renderSkillBars()}</div>;
}
