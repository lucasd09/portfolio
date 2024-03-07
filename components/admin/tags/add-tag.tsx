import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string({ required_error: "Obrigatório" })
    .min(3, "Insira uma Tag válida"),
});

type form = z.infer<typeof schema>;

export default function TagForm() {
  const form = useForm<form>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  async function handleForm({ name }: form) {
    const data = { name };

    fetch("https://lucasdalan.vercel.app/api/tags", {
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

        return toast("Sucesso", {
          description: `Tag adicionada com êxito.`,
        });
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
              action=""
              className="space-y-4"
              onSubmit={form.handleSubmit(handleForm)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
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
