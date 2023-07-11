import Head from "next/head";
import React from "react";
import { Button } from "~/@/components/ui/button";
import { useERPNextList } from "~/hooks/useERPNextList";
import { columns } from "./columns";
import { DataTable } from "~/@/components/ui/data-table";
import { LoadingPage, LoadingSpinner } from "~/@/components/ui/loading";

export default function ItemList() {
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
            <Button variant={"secondary"} onClick={() => refetch()}>
              {loading ? (
                <div className="flex items-center gap-1">
                  <LoadingSpinner size={18} />
                  <span>Refetch</span>
                </div>
              ) : (
                <span>Refetch</span>
              )}
            </Button>
            <Button variant={"default"}>Add Item</Button>
            <Button variant={"destructive"}>Import</Button>
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
