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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z.string({ required_error: "Obrigatório" }),
});

type form = z.infer<typeof schema>;

export default function Admin() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const router = useRouter();

  async function handleForm({ email, password }: form) {
    signIn("credentials", { email, password, redirect: false });
    router.push("/admin/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[380px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)} className="space-y-8">
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
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
