/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { fetchCategory } from "../../Redux/category/categoriesThunk";
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
import {
  deletePost,
  fetchPost,
  fetchPosts,
} from "../../Redux/posts/postsThunk";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [viewCategory, setViewCategory] = useState(false);
  const [deletePostData, setDeletePostData] = useState(false);

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

  const { posts, post, loading, error } = useSelector((state) => state.posts);
  // console.log("posts podt", posts);

  const fetchPostsHandler = () => {
    dispatch(fetchPosts("posts/pull?del_flag=0"));
  };
  useEffect(() => {
    fetchPostsHandler();
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

  const editDetail = async (data) => {
    try {
      navigate(`/admin/posts/update/${data._id}`);
    } catch (error) {
      console.error("Error navigating to product details:", error);
    }
  };

  // const editCategoryData = (cat_id) => {
  //   dispatch(fetchCategory(cat_id));
  //   setEditCategory(true);
  // };

  const deletePostHandler = (post_id) => {
    dispatch(fetchPost(post_id));
    setDeletePostData(true);
  };

  const handleDelete = async (post) => {
    // console.log("coupon is here", coupon);
    if (post) {
      // Handle delete category logic here
      try {
        // setLoading(true);
        dispatch(deletePost(post?._id));
        navigate("/admin/posts");
      } catch (error) {
        console.log(error);

        toast.error(error.response.data.message);
      } finally {
        setDeletePostData(false);
      }
    }
  };

  // const data = categories?.response;

  const tableHeader = {
    tableHeadings: [
      "S/N",
      "Title",
      "Short Description",
      "Category",
      "Author",
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
              Posts
            </h1>
            <h5 className="text-gray-500 text-sm font-normal max-w-lg">
              Create posts on the platform, and make the post search easier for
              users
            </h5>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/posts/create">
              <Button
                // onClick={() => setOpenCreateCategory(true)}
                leftIcon={<PlusIcon />}
              >
                Create Posts
              </Button>
            </Link>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl ">
          <div className="flex items-center justify-between p-4 rounded-t-xl border-b bg-white">
            <div className="font-normal text-gray-600 text-xs">
              Showing 1 to {posts?.response?.length} of{" "}
              {posts?.response?.length} Posts
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
                link="/admin/product/posts"
                reload
              />
            ) : (
              <div>
                {/* {posts?.response?.map((cet, cetIndex) => (
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
                      {posts?.map((item, rowIndex) => {
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
                            <td className="px-6 py-5  text-gray-900 font-medium inline-flex items-center w-64  gap-2">
                              {/* {item?.label} */}
                              {item?.title === null ? (
                                "No  Name"
                              ) : (
                                <p>{item?.title}</p>
                              )}
                            </td>
                            <td className="px-6 py-5 w-[500px] ">
                              {item?.short_content}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              {item?.category === null ? (
                                "No  category category"
                              ) : (
                                <p>{item?.category?.label}</p>
                              )}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              {item?.author === null ? (
                                "No  Author"
                              ) : (
                                <p>{item?.author?.name}</p>
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

                            <td>
                              <div className=" flex items-center gap-2">
                                {/* <div
                                  className="cursor-pointer "
                                  // onClick={() => fetchSingleProduct(item?.id)}
                                >
                                  <EyeIconBold />
                                </div> */}
                                <div
                                  className="cursor-pointer "
                                  onClick={() => editDetail(item)}
                                >
                                  <EditIcon />
                                </div>
                                <div
                                  className="cursor-pointer pl-2"
                                  onClick={() => deletePostHandler(item?._id)}
                                >
                                  <DeleteIcon className="text-red-600 w-6 h-6 " />
                                </div>
                              </div>
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

      {/* {openCreateCategory && (
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
      )} */}
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
      </div>*/}

      {deletePostData && (
        <>
          <Notification
            message="Are you sure you want to delete this post?"
            type="warning"
            onCancel={() => setDeletePostData(false)}
            onApprove={() => {
              handleDelete(post?.response);
              setDeletePostData(false);
            }}
          />
        </>
      )}
    </>
  );
};

export default Posts;
