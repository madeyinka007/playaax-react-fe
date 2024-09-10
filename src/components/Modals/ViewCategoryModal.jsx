/* eslint-disable react/prop-types */
// import { ScrollArea } from "components/UI/scroll-area";
// import { Button } from "../UI/Form/Button";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";
import { Label } from "../Form/Label";
import { Badge } from "../Form/Badge";
import { Button } from "../Form/Button";
import { formatDateTime } from "src/utils/constant";

const ViewCategoryModal = ({ setOpenModal, categoryData, loading }) => {
  return (
    <div className="w-full h-full fixed inset-0 bg-black/70 z-50 bg-opacity-50 backdrop-blur">
      <div
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center w-full  h-[calc(100%-1rem)] max-h-full "
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-2xl shadow ">
            <div className="flex items-center justify-between p-4 md:px-5 border-b rounded-t ">
              <div>
                <h1 className="text-lg font-semibold text-gray-900 ">
                  Category Details
                </h1>
              </div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                onClick={() => setOpenModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* contents below */}
            <div className=" h-[450px] ">
              {/* <ScrollArea className="h-full"> */}
              {loading ? (
                <div className="min-h-[400px] flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                <div className="p-5 space-y-6 text-sm">
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Category" />
                    <div className="text-gray-900 text-base font-medium">
                      {categoryData?.label == null ? (
                        "No  Category"
                      ) : (
                        <p>{categoryData?.label}</p>
                      )}
                    </div>
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Description" />
                    <p className="text-gray-900 font-medium">
                      {categoryData?.description}
                    </p>
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Status" />
                    {categoryData?.status === true ? (
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
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Parent Category" />
                    <div className="text-gray-900 font-medium">
                      {categoryData?.parent === null ? (
                        "No  parent category"
                      ) : (
                        <p>{categoryData?.parent?.label}</p>
                      )}
                    </div>
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Icon" />
                    <p className="text-gray-900 font-medium">
                      {categoryData?.icon === null ? (
                        "No  Icon"
                      ) : (
                        // <p>{categoryData?.icon}</p>
                        <div className="w-16 h-16 rounded-md overflow-hidden bg-red-50">
                          <img
                            src={categoryData?.icon}
                            alt=""
                            className="w-full h-16 object-cover group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      )}
                    </p>
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Created Date" />
                    <p className="text-gray-900 font-medium">
                      {formatDateTime(categoryData?.createdAt)}
                    </p>
                  </div>
                  <div className=" space-y-1 flex items-center justify-between flex-wrap">
                    <Label text="Updated Date" />
                    <p className="text-gray-900 font-medium">
                      {formatDateTime(categoryData?.updatedAt)}
                    </p>
                  </div>
                </div>
              )}
              {/* </ScrollArea> */}
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center gap-2 justify-end">
                <Button onClick={() => setOpenModal(false)} size="xs">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategoryModal;
