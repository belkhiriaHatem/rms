import Head from "next/head";
import React from "react";
import { Button } from "~/@/components/ui/button";
import { useERPNextList } from "~/hooks/useERPNextList";
import { columns } from "~/@/lib/columns/item/columns";
import { DataTable } from "~/@/components/ui/data-table";
import { LoadingPage, LoadingSpinner } from "~/@/components/ui/loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "~/@/components/ui/use-toast";
import { ToastAction } from "~/@/components/ui/toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/@/components/ui/form";
import { Input } from "~/@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/@/components/ui/select";

const formSchema = z.object({
  item_code: z.string().min(6),
  item_group: z.string().min(6),
  standard_selling_rate: z
    .number()
    .min(0, { message: "Selling rate can not be negative." }),
  opening_stock: z
    .number()
    .min(0, { message: "Stock level can not be negative." }),
  item_name: z
    .string()
    .min(2, { message: "Item name must be at least 2 characters." })
    .max(50),
});

export default function ItemList() {
  const { toast } = useToast();
  const { data, error, loading, refetch } = useERPNextList(
    "/api/method/frappe.desk.reportview.get",
    {
      doctype: "Item",
      fields: [
        "`tabItem`.`item_code`",
        "`tabItem`.`item_name`",
        "`tabItem`.`item_group`",
        "`tabItem`.`image`",
      ],
    }
  );

  const {
    data: itemGroupData,
    error: itemGroupError,
    loading: itemGroupLoading,
  } = useERPNextList("/api/method/frappe.desk.reportview.get", {
    doctype: "Item Group",
    fields: ["`tabItem Group`.`name`"],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item_code: "",
      item_group: undefined,
      item_name: "",
      opening_stock: 0,
      standard_selling_rate: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  function onPromise(promise: (event: React.SyntheticEvent) => Promise<void>) {
    return (event: React.SyntheticEvent) => {
      if (promise) {
        promise(event).catch((error) => {
          console.log("Unexpected error", error);
        });
      }
    };
  }

  return (
    <>
      <Head>
        <title>Item List</title>
        <meta name="description" content="Item List" />
        <link rel="icon" href="/utensils-crossed.svg" />
      </Head>
      <div>
        <header className="flex justify-between py-2">
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            Item List
          </h2>
          <div className="flex gap-2">
            <Button variant={"secondary"} size={"sm"} onClick={() => refetch()}>
              {loading ? (
                <div className="flex items-center gap-1">
                  <LoadingSpinner size={18} />
                  <span>Refetch</span>
                </div>
              ) : (
                <span>Refetch</span>
              )}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"} size={"sm"}>
                  Add Item
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                {/* form header */}
                <DialogHeader>
                  <DialogTitle>New Item</DialogTitle>
                  <DialogDescription>
                    Create a new item here. Click &quot;add&quot; when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>

                {/* form */}
                <Form {...form}>
                  <form
                    onSubmit={onPromise(form.handleSubmit(onSubmit))}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="item_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Item Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is a public item name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="item_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Item Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="item_group"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Item Group</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={
                                    loading ? (
                                      <span className="flex items-center gap-2">
                                        <LoadingSpinner />
                                        Loading
                                      </span>
                                    ) : (
                                      "Select an item group"
                                    )
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {itemGroupLoading ? (
                                <SelectItem disabled value="">
                                  Loading
                                </SelectItem>
                              ) : itemGroupError ? (
                                <SelectItem disabled value="">
                                  Error!
                                </SelectItem>
                              ) : (
                                Array.isArray(itemGroupData) &&
                                itemGroupData.map(
                                  (itemGroup: { name: string }, i: number) => (
                                    <SelectItem key={i} value={itemGroup?.name}>
                                      {itemGroup?.name}
                                    </SelectItem>
                                  )
                                )
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="opening_stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Opening Stock</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Opening stock"
                              onChange={(event) => {
                                const value = parseInt(event.target.value);
                                field.onChange(
                                  !value || isNaN(value) ? 0 : value
                                );
                              }}
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="standard_selling_rate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Standard Selling Rate</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Rate"
                              onChange={(event) => {
                                const value = parseInt(event.target.value);
                                field.onChange(
                                  !value || isNaN(value) ? 0 : value
                                );
                              }}
                              value={field.value}
                            />
                          </FormControl>
                          <FormDescription>
                            This is a standard selling amount (currency).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" size={"sm"}>
                        Add
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            <Button variant={"destructive"} size={"sm"}>
              Import
            </Button>
          </div>
        </header>
        <div className="p-5">
          {loading ? (
            <LoadingPage />
          ) : error ? (
            <p>Error!</p>
          ) : (
            <DataTable
              columns={columns}
              data={Array.isArray(data) ? data : []}
            />
          )}
        </div>
      </div>
    </>
  );
}
