"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { useRef } from "react";
import { readFileAsDataURL } from "@/lib/utils";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  repo: z.string(),
  url: z.string(),
});

type form = z.infer<typeof schema>;

export default function ProjectForm() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", description: "", image: "", repo: "", url: "" },
  });
  const fileInputRef = useRef(HTMLInputElement);

  async function handleForm({ title, description, image, repo, url }: form) {
    const file = fileInputRef.current.files[0];

    const imgUrl = await readFileAsDataURL(file);

    console.log(file);
    const data = {
      title,
      description,
      image,
      repo,
      url,
      user: { connect: { id: 1 } },
      userId: "1",
    };

    fetch("http://localhost:3000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao realizar requisição.");
        }
        return response.json();
      })
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="mb-4">
        <Button>Adicionar</Button>
      </DialogTrigger>
      <DialogContent>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleForm)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagem</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repositório</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL do projeto</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button>Adicionar</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
