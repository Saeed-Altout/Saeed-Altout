"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Project } from "@/data/projects";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { UpdateProjectSchema } from "@/schemas";
import { updateProject } from "@/actions/update-project";
import { deleteProject } from "@/actions/delete-project";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { DeleteProjectModal } from "../../_components/delete-project-modal";
import { useState } from "react";

export function ProjectForm({ initialData }: { initialData: Project }) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();

  const form = useForm<z.infer<typeof UpdateProjectSchema>>({
    resolver: zodResolver(UpdateProjectSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof UpdateProjectSchema>) => {
    startTransition(async () => {
      const res = await updateProject(values, initialData.id);
      if (res.success) {
        toast.success(res.message);
        form.reset();
        router.push("/dashboard/projects");
      }

      if (!res.success) {
        toast.error(res.message);
      }
    });
  };

  const onConfirm = () => {
    startDeleteTransition(async () => {
      const res = await deleteProject(initialData.id);
      if (res.success) {
        toast.success(res.message);
        router.refresh();
        setOpen(false);
      }

      if (!res.success) {
        toast.error(res.message);
      }
    });
  };

  return (
    <>
      <DeleteProjectModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        isPending={isDeleting}
      />

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Complete your info project</CardTitle>
          <CardDescription>
            Enter your project info below to complete your project
          </CardDescription>
          <CardAction>
            <Button variant="link" disabled={isPending} asChild>
              <Link href="/dashboard/projects">
                <ArrowLeftIcon /> Cancel
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 max-w-2xl mx-auto"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Neon Tech"
                        disabled={isPending}
                        {...field}
                      />
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Description"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending && <Spinner />}
                Update
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            className="w-full"
            disabled={isPending || isDeleting}
            onClick={() => setOpen(true)}
          >
            <TrashIcon /> Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
