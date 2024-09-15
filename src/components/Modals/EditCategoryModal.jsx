/* eslint-disable react/prop-types */
// import { ScrollArea } from "src/components/forms/scroll-area";
import { Button } from "src/components/Form/Button";
import HookForm from "src/components/Form/Form";
// import { Input } from "components/UI/Form/Input";
import { Input } from "src/components/Form/Input";
import { TextArea } from "src/components/Form/TextArea";

import { useNavigate } from "react-router-dom";

import { categorySchema } from "src/schema/categorySchema";
import CloseModal from "./CloseModal";
// import { Label } from "../Form/Label";
// import { PlusIcon } from "../../assets/SvgsIcons";

import { useDispatch } from "react-redux";
import {
  fetchCategorys,
  updateCategory,
} from "../../Redux/category/categoriesThunk";
import CustomSelect from "src/components/Form/Select/CustomSelect";
import Uploader from "src/components/Form/Upload/uploader";
import { useState } from "react";

const EditCategoryModal = ({ setOpenModal, catData, categories }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCategory = categories?.find((cat) => cat?._id === catData?._id);

  // console.log("catData?.parent?.label", catData);
  // console.log("catData is", getCategory);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [files, setFiles] = useState(null);

  // console.log("selectedCategory", selectedCategory);

  const defaultFormValue = {
    description: catData?.description,
    label: catData?.label,
  };
  const onSubmit = (data) => {
    const filteredFormData = {
      description: data?.description,
      label: data?.label,
      parentId:
        selectedCategory === null
          ? catData?.parent?._id
          : selectedCategory?._id,
      icon: files === null ? catData?.icon : files,
    };

    console.log("filtered data", filteredFormData);

    dispatch(updateCategory({ id: catData?._id, formData: filteredFormData }));
    // alert(JSON.stringify(filteredFormData));

    setOpenModal(false);
    dispatch(fetchCategorys());
    navigate("/admin/category");
  };

  return (
    <div className="w-full h-full fixed inset-0 bg-black/70 z-50 bg-opacity-50 backdrop-blur">
      <div
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden z-50 flex justify-end items-center w-full  h-[calc(100%-1rem)]  max-h-full "
      >
        <div className="relative p-4 w-full   max-w-2xl max-h-full">
          <HookForm
            defaultValues={defaultFormValue}
            onSubmit={onSubmit}
            schema={categorySchema}
          >
            <div className="relative bg-white h-full rounded-xl shadow ">
              <div className="flex items-center justify-between p-4 md:px-5 border-b rounded-t ">
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 ">
                    Edit Category
                  </h1>
                </div>
                <CloseModal setOpenModal={setOpenModal} />
              </div>
              {/* contents below */}
              <div className=" h-[75vh]">
                {/* <ScrollArea className="h-full"> */}
                <div className="p-5">
                  <div className="">
                    <div className="">
                      <Input
                        name="label"
                        label="Category Name"
                        placeholder="Enter a category name"
                      />
                    </div>
                    <TextArea
                      name="description"
                      label="Description"
                      placholder="Enter a category description"
                    />

                    <div className="pb-4">
                      <CustomSelect
                        label="Change Sub Category"
                        selected={selectedCategory}
                        setSelected={setSelectedCategory}
                        data={categories}
                        withImage={false}
                        placeholder={
                          getCategory?.parent?.label || "Select a sub-category"
                        }
                      />
                    </div>
                    <div className="mb-6">
                      <Uploader
                        files={files}
                        setFiles={setFiles}
                        label="Upload Icon"
                        className="max-w-[320px]"
                      />
                    </div>
                  </div>
                </div>
                {/* </ScrollArea> */}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2 justify-end">
                  <Button type="submit" size="xs">
                    Update Category
                  </Button>
                </div>
              </div>
            </div>
          </HookForm>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryModal;
