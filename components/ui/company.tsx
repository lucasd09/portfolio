import { Dot } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type BaseProps = {
  children: React.ReactNode;
};

type CompanyHeaderProps = {
  img: string | StaticImport;
  title: string;
  time: string;
};

type CompanyItemProps = {
  title: string;
  jobType?: string;
  time?: string;
  description: string;
};

export function Company({ children }: BaseProps) {
  return <div className="mb-4">{children}</div>;
}

export function CompanyHeader({ img, title, time }: CompanyHeaderProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Image alt="company_logo" src={img} className="rounded w-12 shadow-md" />
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p>{time}</p>
      </div>
    </div>
  );
}

export function CompanyItem({
  title,
  jobType,
  time,
  description,
}: CompanyItemProps) {
  return (
    <div>
      <div className="flex items-center font-semibold">
        <Dot size={34} />
        <p>{title}</p>
      </div>
      <div className="px-4 mx-4 border-l pb-4">
        <div>
          <p className="text-sm font-medium">{jobType}</p>
          <p className="text-sm">{time}</p>
          <p className="mt-2 text-sm text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
