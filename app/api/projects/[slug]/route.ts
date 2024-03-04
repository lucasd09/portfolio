import { prisma } from "@/services/database";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(params.slug) },
  });

  return NextResponse.json(project);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const project = await prisma.project.delete({
    where: { id: parseInt(params.slug) },
  });

  return NextResponse.json(project);
}
