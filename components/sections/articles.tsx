import Image from "next/image";
import PortfolioPic from "@/public/portfolio_pic.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

export default function ArticlesTab() {
  return (
    <div>
      <div className=" lg:w-[600px] sm:w-96">
        <div className="flex justify-between items-center">
          <div className="lg:w-[400px] sm:w-32 h-32 flex flex-col justify-evenly">
            <div>
              <p>01/01/2024</p>
              <h1 className="scroll-m-20 lg:text-xl sm:text-base font-bold tracking-tight">
                Apple&apos;s all new design language
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <Badge variant={"secondary"}>
                  <p className="text-sm">Apple</p>
                </Badge>
                <p className="text-sm">4 min read</p>
              </div>
              <div>
                <Button size={"sm"} className="space-x-2">
                  <p>Ler</p>
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Image alt="img" src={PortfolioPic} className=" w-24 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
