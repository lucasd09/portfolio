import { prisma } from "@/services/database";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { title, description, repo, url, image, userId } = await req.json();

  const project = await prisma.project.create({
    data: { title, description, image, repo, url, userId },
  });

  if (!project) {
    throw new Error("Error creating project");
  }

  return NextResponse.json(project);
}
