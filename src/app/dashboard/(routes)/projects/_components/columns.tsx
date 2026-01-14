"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/data/projects";

import { DataTableActions } from "./data-table-actions";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <DataTableActions data={row.original} />,
  },
];
