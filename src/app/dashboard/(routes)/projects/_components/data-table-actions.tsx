"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditIcon, MoreHorizontal, TrashIcon } from "lucide-react";

import { Project } from "@/data/projects";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DeleteProjectModal } from "./delete-project-modal";
import { deleteProject } from "@/actions/delete-project";
import { useTransition } from "react";
import { toast } from "sonner";

export function DataTableActions({ data }: { data: Project }) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();

  const onConfirm = () => {
    startTransition(async () => {
      const res = await deleteProject(data.id);
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
        isPending={isPending}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/projects/${data.id}`)}
          >
            <EditIcon />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={() => setOpen(true)}>
            <TrashIcon />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
