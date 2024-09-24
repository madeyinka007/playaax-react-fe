/* eslint-disable react/prop-types */
import LoadingSpinner from "src/components/Loading/LoadingSpinner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/Form/TableComponent";

import { flexRender } from "@tanstack/react-table";
import DataTablesPagination from "./DataTablesPagination";
import ErrorStatus from "src/components/ui/ErrorStatus";

const DataTable = ({ table, loading, error, columns }) => {
  return (
    <>
      {loading ? (
        <div className="min-h-[200px] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <ErrorStatus
          message={JSON.stringify(error?.message)}
          statusCode={error?.status_code || error.status}
          link="/settings"
          reload
        />
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <TableRow key={`drivers-headerGroup-${index}`}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <TableHead
                        key={`drivers-header-${index}`}
                        className="text-sm bg-gray-50  text-gray-900 whitespace-nowrap"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="[&_tr:last-child]:border-1">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows?.map((row, index) => (
                  <TableRow
                    key={`drivers-bodyGroup-${index}`}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <TableCell
                        key={`drivers-bodyGroup-${index}`}
                        className=" py-5"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
      <DataTablesPagination table={table} />
    </>
    // <>
    //   {loading ? (
    //     <div className="min-h-[200px] flex items-center justify-center">
    //       <LoadingSpinner />
    //     </div>
    //   ) : error ? (
    //     <ErrorStatus
    //       message={JSON.stringify(error?.message)}
    //       statusCode={error?.status_code || error.status}
    //       link="/settings"
    //       reload
    //     />
    //   ) : (
    //     <div className="overflow-x-auto">
    //       <Table>
    //         <TableHeader>
    //           {table?.getHeaderGroups().map((headerGroup, index) => (
    //             <TableRow key={`drivers-headerGroup-${index}`}>
    //               {headerGroup.headers.map((header, index) => {
    //                 return (
    //                   <TableHead
    //                     key={`drivers-header-${index}`}
    //                     className="text-sm bg-gray-50  text-gray-900 whitespace-nowrap"
    //                   >
    //                     {header.isPlaceholder
    //                       ? null
    //                       : flexRender(
    //                           header.column.columnDef.header,
    //                           header.getContext()
    //                         )}
    //                   </TableHead>
    //                 );
    //               })}
    //             </TableRow>
    //           ))}
    //         </TableHeader>
    //         <TableBody className="[&_tr:last-child]:border-1">
    //           {table.getRowModel()?.rows?.length ? (
    //             table.getRowModel()?.rows?.map((row, index) => (
    //               <TableRow
    //                 key={`drivers-bodyGroup-${index}`}
    //                 data-state={row?.getIsSelected() && "selected"}
    //               >
    //                 {row.getVisibleCells().map((cell, index) => (
    //                   <TableCell
    //                     key={`drivers-bodyGroup-${index}`}
    //                     className=" py-5"
    //                   >
    //                     {flexRender(
    //                       cell.column.columnDef.cell,
    //                       cell.getContext()
    //                     )}
    //                   </TableCell>
    //                 ))}
    //               </TableRow>
    //             ))
    //           ) : (
    //             <TableRow>
    //               <TableCell
    //                 colSpan={columns?.length}
    //                 className="h-24 text-center"
    //               >
    //                 No results.
    //               </TableCell>
    //             </TableRow>
    //           )}
    //         </TableBody>
    //       </Table>
    //     </div>
    //   )}
    //   <DataTablesPagination table={table} />
    // </>
  );
};

export default DataTable;
