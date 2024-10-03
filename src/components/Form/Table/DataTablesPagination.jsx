/* eslint-disable react/prop-types */
import classNames from "classnames";

const DataTablesPagination = ({ table }) => {
  return (
    <div className="py-10 px-4">
      <div className="flex items-center gap-4 flex-wrap  w-full">
        <div className="flex-1 text-sm whitespace-nowrap text-muted-foreground">
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}
          <div className="text-gray-500">
            Showing Page {table.getState().pagination.pageIndex + 1} out of{" "}
            {/* {table.getFilteredRowModel().rows.length} */}
            {table.getPageCount()}{" "}
            {table.getState().pagination.pageIndex + 1 === 1 ? "Page" : "Pages"}
          </div>
        </div>

        <div className="flex-none flex items-center gap-1.5">
          <button
            className={classNames(
              " border-gray-400 p-0.5 px-2  bg-white border text-primary-600",
              { "cursor-not-allowed opacity-40": !table.getCanPreviousPage() }
            )}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            &laquo; Previous
          </button>
          <ul className=" flex gap-1.5 items-center">
            {table.getPageOptions().map((page, pageIdx) => (
              <li key={`pagination-${pageIdx}`}>
                <button
                  className={` border-gray-400 p-0.5 px-2 ${
                    pageIdx === table.getState().pagination.pageIndex
                      ? "bg-primary-600  text-white border-none"
                      : "bg-white border text-primary-600"
                  }  `}
                  onClick={() => table.setPageIndex(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
          </ul>
          <button
            className={classNames(
              " border-gray-400 p-0.5 px-2 bg-white border text-primary-600",
              { "cursor-not-allowed opacity-40": !table.getCanNextPage() }
            )}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTablesPagination;
