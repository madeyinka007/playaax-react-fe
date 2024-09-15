// import { ScrollArea } from "src/components/Form/scroll-area";
import { Button } from "src/components/Form/Button";
import HookForm from "src/components/Form/Form";
// import { Input } from "components/UI/Form/Input";
import { Input } from "src/components/Form/Input";
import { TextArea } from "src/components/Form/TextArea";

import { useNavigate } from "react-router-dom";

import { authorSchema } from "src/schema/authorSchema";
import CloseModal from "./CloseModal";

import { useDispatch } from "react-redux";

import { addNewAuthor, fetchAuthors } from "../../Redux/author/authorThunk";
import { useState } from "react";
import Uploader from "src/components/Form/Upload/uploader";

// eslint-disable-next-line react/prop-types
const AddAuthorModal = ({ setOpenModal }) => {
  // console.log("sgow", categoryData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState("");

  // const [selectedCategory, setSelectedCategory] = useState(null);
  const defaultFormValue = {
    profile: "",
    name: "",
  };
  // console.log("session", selectedCategory);
  const onSubmit = (data) => {
    const filteredFormData = {
      profile: data?.profile,
      name: data?.name,
      image: files,
    };

    // console.log("filtered data", filteredFormData);
    dispatch(addNewAuthor(filteredFormData));
    // alert(JSON.stringify(filteredFormData));

    setOpenModal(false);
    dispatch(fetchAuthors("posts/author/pull?del_flag=0"));
    navigate("/admin/author");
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
            schema={authorSchema}
          >
            <div className="relative bg-white h-full rounded-xl shadow ">
              <div className="flex items-center justify-between p-4 md:px-5 border-b rounded-t ">
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 ">
                    Create New Author
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
                        name="name"
                        label="Author Full Name"
                        placeholder="Enter an author name"
                      />
                    </div>
                    <TextArea
                      name="profile"
                      label="Profile Description"
                      placholder="Enter a description"
                    />
                  </div>
                  <div className="mb-6">
                    <Uploader
                      files={files}
                      setFiles={setFiles}
                      label="Upload Profile Images"
                      className="max-w-[320px]"
                    />
                  </div>
                </div>
                {/* </ScrollArea> */}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2 justify-end">
                  <Button type="submit" size="xs">
                    Save Author
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

export default AddAuthorModal;
