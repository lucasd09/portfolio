import { prisma } from "@/services/database";
import { NextResponse } from "next/server";

export async function GET() {
  const tags = await prisma.tag.findMany();

  return NextResponse.json(tags);
}

export async function POST(req: Request) {
  const { name } = await req.json();

  const tag = await prisma.tag.create({ data: { name } });

  if (!tag) {
    throw new Error("Error creating tag");
  }

  return NextResponse.json(tag);
}
