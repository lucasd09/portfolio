import { prisma } from "@/services/database";
import { NextResponse } from "next/server";
import cloudinary from "@/services/cdn";
import { createId } from "@paralleldrive/cuid2";

export async function GET() {
  const projects = await prisma.project.findMany({ include: { tags: true } });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { title, description, repo, url, image, tags, userId } =
    await req.json();

  const uploadedImage = await cloudinary.uploader.upload(image, {
    public_id: createId(),
  });

  const project = await prisma.project.create({
    data: {
      title,
      description,
      image: uploadedImage.url,
      tags,
      repo,
      url,
      userId,
    },
  });

  if (!project) {
    throw new Error("Error creating project");
  }

  return NextResponse.json(project);
}
