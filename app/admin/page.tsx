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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import db from "@/services/firestore";

const schema = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ required_error: "Obrigatório" })
    .min(1, { message: "Insira sua senha" }),
});

type form = z.infer<typeof schema>;

export default function Signin() {
  const form = useForm<form>({ resolver: zodResolver(schema) });
  const router = useRouter();

  async function handleForm({ email, password }: form) {
    const auth = getAuth(db);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/dashboard");
      })
      .catch(() => {
        form.setError("email", {
          message: "Email ou senha inválidos",
          type: "validate",
        });
        form.setError("password", {
          message: "Email ou senha inválidos",
          type: "validate",
        });
      });
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
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
