"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Utensils } from "lucide-react";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
// import Image from "next/image";

import { Button } from "~/@/components/ui/button";
import { Checkbox } from "~/@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Item = {
  item_code: string;
  item_name: string;
  item_group: string;
  image: string | null;
};

const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    alert("Failed to copy text!");
  }
};

export const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const image = row.getValue("image");
      if (image && process.env.NEXT_PUBLIC_ERP_URL)
        return (
          // to replace with next/image
          <img
            className="h-12 w-12 rounded-md object-contain transition-all duration-300 hover:scale-110"
            src={process.env.NEXT_PUBLIC_ERP_URL.concat(image.toString() ?? "")}
            alt="Beer"
          />
        );
      return (
        <Utensils className="h-12 w-12 rounded-md text-accent transition-all duration-300 hover:scale-110" />
      );
    },
  },
  {
    accessorKey: "item_code",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2">
          Code
          <Button
            className="h-6 w-6 rounded-full transition-all duration-200 hover:scale-95 active:scale-95"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "item_name",
    header: "Name",
  },
  {
    accessorKey: "item_group",
    header: "Item Group",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  void copyToClipboard(item.item_code);
                }}
              >
                Copy Item ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>View pricing details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
