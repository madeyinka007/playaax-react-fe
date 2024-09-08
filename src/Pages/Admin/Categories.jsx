/* eslint-disable no-unused-vars */
// import { Link } from "react-router-dom";

import { Badge } from "../../components/Form/Badge";
import { Button } from "../../components/Form/Button";

import {
  DeleteIcon,
  EditIcon,
  EyeIconBold,
  PlusIcon,
  SearchIcon,
} from "../../assets/SvgsIcons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ErrorStatus from "src/components/ui/ErrorStatus";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";
import { formatDate } from "src/utils/constant";
import {
  fetchCategory,
  fetchCategorys,
  deleteCategory,
} from "../../Redux/category/categoriesThunk";
import AddCategoryModal from "../../components/Modals/AddCategoryModal";
import EditCategoryModal from "../../components/Modals/EditCategoryModal";
import Notification from "../../components/Form/Notification";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import axios from "axios";

import { fuzzyFilter } from "src/utils/TableUtils";

import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import DataTable from "../../components/Form/Table/DataTable";
import ViewCategoryModal from "../../components/Modals/ViewCategoryModal";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [viewCategory, setViewCategory] = useState(false);
  const [deleteCategoryData, setDeleteCategoryData] = useState(false);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://bi08fsi8i7.execute-api.us-east-1.amazonaws.com/api/posts/category/pull?del_flag=0"
  //     )
  //     .then((response) => {
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const { categories, category, loading, error } = useSelector(
    (state) => state.category
  );
  // console.log("categories podt", categories);

  const fetchCategorysHandler = () => {
    dispatch(fetchCategorys("posts/category/pull?del_flag=0"));
  };
  useEffect(() => {
    fetchCategorysHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const fetchSingleCategory = (Category_id) => {
    // console.log("Category", Category_id);
    dispatch(fetchCategory(Category_id));
    setViewCategory(true);
  };

  // const checkDetail = async (data) => {
  //   try {
  //     navigate(`/admin/product/categories/update/${data.id}`);
  //   } catch (error) {
  //     console.error("Error navigating to product details:", error);
  //   }
  // };
  // const editCategoryData = (cat_id) => {
  //   dispatch(fetchCategory(cat_id));
  //   setEditCategory(true);
  // };

  const deleteCategoryHandler = (cat_id) => {
    dispatch(fetchCategory(cat_id));
    setDeleteCategoryData(true);
  };

  const handleDelete = async (category) => {
    // console.log("coupon is here", coupon);
    if (category) {
      // Handle delete category logic here
      try {
        // setLoading(true);
        dispatch(deleteCategory(category?.id));
        navigate("/admin/product/categories");
      } catch (error) {
        console.log(error);

        toast.error(error.response.data.message);
      } finally {
        setDeleteCategoryData(false);
      }
    }
  };

  // const data = categories?.response;

  const tableHeader = {
    tableHeadings: [
      "S/N",
      "Category Name",
      "Description",
      "Parent Category",
      "Icon",

      "Status",
      "Action",
    ],
  };

  return (
    <>
      <div className="p-4 ">
        <div className=" flex items-center justify-between ">
          <div className="pb-4 pt-1">
            <h1 className=" text-xl font-semibold text-gray-900 pb-1.5">
              Categories
            </h1>
            <h5 className="text-gray-500 text-sm font-normal max-w-lg">
              Set up categories to group similar posts together at the front
              end, and make the post search easier for users
            </h5>
          </div>
          <div className="flex items-center gap-3">
            {/* <Link to="/admin/product/categories/create"> */}
            <Button
              onClick={() => setOpenCreateCategory(true)}
              leftIcon={<PlusIcon />}
            >
              Add New Category
            </Button>
            {/* </Link> */}
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl ">
          <div className="flex items-center justify-between p-4 rounded-t-xl border-b bg-white">
            <div className="font-normal text-gray-600 text-xs">
              Showing 1 to {categories?.response?.length} of{" "}
              {categories?.response?.length} categories
            </div>
            <div className="flex items-center gap-2">
              <form className="max-w-[430px] w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon className="text-gray-400" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full lg:w-[400px] px-4 py-2.5 ps-10 text-sm text-gray-900 border font-Inter border-gray-300 rounded-md bg-white outline-none  "
                    placeholder="Search by Name"
                    required=""
                  />
                </div>
              </form>
              {/* <Button outline color="gray" size="md" leftIcon={<FilterIcon />}>
                Filter
              </Button> */}
            </div>
          </div>

          <>
            {loading ? (
              <div className="min-h-[200px] flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : error ? (
              <ErrorStatus
                message={JSON.stringify(error?.message)}
                statusCode={error?.status_code || error?.status}
                link="/admin/product/categories"
                reload
              />
            ) : (
              <div>
                {/* {categories?.response?.map((cet, cetIndex) => (
                    <p key={cetIndex}>{cet?.label}</p>
                  ))} */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-600">
                    <thead className="text-xs text-gray-700 bg-gray-50">
                      <tr className="font-Inter">
                        {tableHeader.tableHeadings.map(
                          (heading, headingIndex) => (
                            <th
                              key={headingIndex}
                              scope="col"
                              className="px-6 py-4 whitespace-nowrap font-Inter uppercase"
                            >
                              {heading}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.response?.map((item, rowIndex) => {
                        return (
                          <tr
                            key={rowIndex}
                            className="bg-white border-b text-gray-400  hover:bg-gray-50 [&_tr:last-child]:border-0 font-Inter"
                          >
                            <th
                              scope="row"
                              className="px-6 py-5 font-medium whitespace-nowrap "
                            >
                              {rowIndex + 1}
                            </th>
                            {/* <td className="px-6 py-5 whitespace-nowrap">
                              {item?.shipping_id}
                            </td> */}
                            <td className="px-6 py-5 whitespace-nowrap text-gray-900 font-medium inline-flex items-center gap-2">
                              {/* {item?.label} */}
                              {item?.label === null ? (
                                "No  Name"
                              ) : (
                                <p>{item?.label}</p>
                              )}
                            </td>
                            <td className="px-6 py-5 w-[400px]">
                              {item?.description}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              {item?.parent === null ? (
                                "No  parent category"
                              ) : (
                                <p>{item?.parent?.label}</p>
                              )}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              {item?.icon === null ? (
                                "No  Icon"
                              ) : (
                                <p>{item?.icon}</p>
                              )}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              {item?.status === true ? (
                                <Badge
                                  rounded
                                  className="capitalize"
                                  color="success"
                                  text="Active"
                                ></Badge>
                              ) : (
                                <Badge
                                  rounded
                                  className="capitalize"
                                  color="error"
                                  text="InActive"
                                ></Badge>
                              )}
                            </td>

                            <td
                              onClick={() => fetchSingleCategory(item?._id)}
                              className="px-6 py-5 whitespace-nowrap cursor-pointer"
                            >
                              <EyeIconBold />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* <div className="py-10 px-4">
          {transactions.length !== 0 && (
            <Pagination
              meta={transactions?.data}
              handlePaginate={handlePaginate}
            />
          )}
        </div> */}
          </>
        </div>
        <div className="flex items-center justify-between py-10">
          {/* Previous Button */}
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </a>

          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-primary-700 border border-gray-300 bg-primary-50/50 hover:bg-primary-100 hover:text-primary-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      {openCreateCategory && (
        <AddCategoryModal
          setOpenModal={setOpenCreateCategory}
          categoryData={categories?.response}
        />
      )}

      {viewCategory && (
        <ViewCategoryModal
          setOpenModal={setViewCategory}
          categoryData={category?.response}
          loading={loading}
        />
      )}
      {/* <div>
        {editCategory && (
          <div>
            {loading ? (
              <div className="min-h-[400px] flex items-center justify-center">
             
                ...
              </div>
            ) : (
              <EditCategoryModal
                setOpenModal={setEditCategory}
                categoryData={category?.data}
                loading={loading}
              />
            )}
          </div>
        )}
      </div>

      {deleteCategoryData && (
        <>
          <Notification
            message="Are you sure you want to delete this category?"
            type="warning"
            onCancel={() => setDeleteCategoryData(false)}
            onApprove={() => {
              handleDelete(category?.data);
              setDeleteCategoryData(false);
            }}
          />
        </>
      )} */}
    </>
  );
};

export default Categories;
