"use client"
import React,{useState} from "react"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  // getPaginationRowModel,
  VisibilityState,
  ColumnFiltersState,
  getFilteredRowModel,

} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Sheet } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  airline:String,
  logo:String
}





export function DataTablewithFilters<TData, TValue>({
  columns,
  data,
  airline,
  logo
  
}: DataTableProps<TData, TValue>) {

  const [columnVisibility, setColumnVisibility] =
  useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
     state: {
      columnVisibility,
      columnFilters,
    },
    
  })

  

  return (
    <div>
    <div className="flex flex-row justify-between px-3 items-center mt-10  border-slate-600 bg-gradient-to-r from-blue-50 to-bg-white border mx-1 rounded-t-lg bg-opacity-45"> 
      <div className="flex flex-row gap-2 items-center w-full  text-black justify-between">
        <div className="flex w-1/4 gap-5 items-center  py-2">
        <div
            className="h-20 w-2/4 bg-cover  bg-center rounded-e-md "
            style={{ backgroundImage: `url(${logo})` }}
          ></div> 
      <div className="font-bold text-2xl min-w-max capitalize">{airline}</div>
      </div>
       <DropdownMenu >
          <DropdownMenuTrigger asChild  className="my-2">
            <Button variant="outline" className="border border-blue-900" >
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize bg-white text-black"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <Input
          placeholder="Filter zones..."
          value={(table.getColumn("zone")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("zone")?.setFilterValue(event.target.value)
          }
          className="w-3/5 placeholder-blue-600"
        /> */}
        {/* <Input
          placeholder="Filter sectors..."
          value={(table.getColumn("sector")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("sector")?.setFilterValue(event.target.value)
          }
          className="w-2/6 placeholder-blue-600"
        /> */}
        </div>
      
     
       
       {/* <div className="flex items-center justify-end space-x-2 py-2 ">
       <Button
       variant="outline"
       size="sm"
          onClick={() => table.setPageIndex(0)}
          // disabled={!table.getCanPreviousPage()}
        >
          First
        </Button>
     <Button
       variant="outline"
       size="sm"
       onClick={() => table.previousPage()}
       disabled={!table.getCanPreviousPage()}
     >
       Previous
     </Button>
     <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
     <Button
    
       variant="outline"
       size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          Last
        </Button>
   </div> */}
   </div>
  
    <div className="rounded-md  px-1">
      
      <Table>
        <TableHeader className="bg-blue-900 text-black hover:bg-blue-900 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-white border-2 border-slate-900 text-center  ">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>



        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-slate-100 text-white bg-opacity-30"
              >
                {row.getVisibleCells().map((cell) => (


                  <TableCell key={cell.id}
                  className="text-black border border-slate-500  text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  
    
 </div>
  )
}
