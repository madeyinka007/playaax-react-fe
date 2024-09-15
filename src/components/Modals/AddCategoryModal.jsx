// import { ScrollArea } from "src/components/Form/scroll-area";
import { Button } from "src/components/Form/Button";
import HookForm from "src/components/Form/Form";
// import { Input } from "components/UI/Form/Input";
import { Input } from "src/components/Form/Input";
import { TextArea } from "src/components/Form/TextArea";
import CustomSelect from "src/components/Form/Select/CustomSelect";

import { useNavigate } from "react-router-dom";

import { categorySchema } from "src/schema/categorySchema";
import CloseModal from "./CloseModal";

import { useDispatch } from "react-redux";
import {
  addNewCategory,
  fetchCategorys,
} from "../../Redux/category/categoriesThunk";
import { useState } from "react";
// import MediaUploader from "src/components/Form/Upload/uploaderv2";
import Uploader from "src/components/Form/Upload/uploader";

// eslint-disable-next-line react/prop-types
const AddCategoryModal = ({ setOpenModal, categoryData }) => {
  // console.log("sgow", categoryData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [files, setFiles] = useState("");

  // console.log("files uploader", files);

  const defaultFormValue = {
    description: "",
    name: "",
  };
  // console.log("session", selectedCategory);
  const onSubmit = (data) => {
    const filteredFormData = {
      description: data?.description,
      label: data?.label,
      parentId: selectedCategory?._id,
      icon: files,
    };

    // console.log("filtered data", filteredFormData);
    dispatch(addNewCategory(filteredFormData));
    // alert(JSON.stringify(filteredFormData));

    setOpenModal(false);
    dispatch(fetchCategorys("posts/category/pull?del_flag=0"));
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
                    Create New Category
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
                        label="Add Sub Category"
                        selected={selectedCategory}
                        setSelected={setSelectedCategory}
                        data={categoryData}
                        withImage={false}
                        placeholder="Select a sub-category"
                      />
                    </div>
                    <div className="mb-6">
                      <Uploader
                        files={files}
                        setFiles={setFiles}
                        label="Upload Icon"
                        className="max-w-[320px] w-[200px] h-[200px]"
                      />
                    </div>
                  </div>
                </div>
                {/* </ScrollArea> */}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2 justify-end">
                  <Button type="submit" size="xs">
                    Save Category
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

export default AddCategoryModal;
