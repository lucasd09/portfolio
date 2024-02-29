"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "E-mail inválido" }),
});

type form = z.infer<typeof schema>;

export default function Signin() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });
  const router = useRouter();

  async function handleForm({ email }: form) {
    await signIn("email", { email });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[380px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)} className="space-y-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
