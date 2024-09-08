// import { ScrollArea } from "src/components/Form/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "src/components/Form/Button";
import HookForm from "src/components/Form/Form";
// import { Input } from "components/UI/Form/Input";
import { Input } from "src/components/Form/Input";
import { TextArea } from "src/components/Form/TextArea";
import CustomSelect from "src/components/Form/Select/CustomSelect";

import { Link, useNavigate } from "react-router-dom";

import { postsSchema } from "src/schema/postsSchema";

import { useDispatch, useSelector } from "react-redux";

import { fetchAuthors } from "../../Redux/author/authorThunk";
import { fetchCategorys } from "../../Redux/category/categoriesThunk";
import { Label } from "../../components/Form/Label";
import TextEditor from "../../components/Form/TextEditor";
import { addNewPost, fetchPosts } from "../../Redux/posts/postsThunk";
import { ArrowLeft } from "lucide-react";
import MultipleImageUpload from "../../components/Form/Upload/MultipleImageUpload";
const articleFormat = [
  { name: "Article", format: "article" },
  { name: "Video", format: "video" },
];
const featureData = [
  { name: "Slider", feature: "slider" },
  { name: "Top Headline", feature: "top-headline" },
];
const CreatePost = () => {
  // console.log("sgow", categoryData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const [htmlContent, setHtmlContent] = useState("");
  const [files, setFiles] = useState("");

  const { categories } = useSelector((state) => state.category);
  const { authors } = useSelector((state) => state.author);
  // console.log("categories podt", categories);

  const fetchCategorysHandler = () => {
    dispatch(fetchCategorys("posts/category/pull?del_flag=0"));
  };
  useEffect(() => {
    fetchCategorysHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // console.log("aur=thor podt", authors);

  const fetchAuthorsHandler = () => {
    dispatch(fetchAuthors("posts/author/pull?del_flag=0"));
  };
  useEffect(() => {
    fetchAuthorsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const defaultFormValue = {
    short_content: "",
    title: "",
  };
  // console.log("session", selectedCategory);
  const onSubmit = (data) => {
    const filteredFormData = {
      title: data?.title,
      short_content: data?.short_content,
      categoryId: selectedCategory?._id,
      authorId: selectedAuthor?._id,
      format: selectedFormat?.format,
      feature: selectedFeature?.feature,
      content: htmlContent,
      image:
        "https://static-bettingadmin.com/betbay/sport/slider/test/6452_Baysbet%20Welcome%20Bonus%20Banner.png",
    };

    console.log("filtered data", filteredFormData);
    dispatch(addNewPost(filteredFormData));
    // alert(JSON.stringify(filteredFormData));

    dispatch(fetchPosts("posts/pull?del_flag=0"));
    navigate("/admin/posts");
  };

  return (
    <div className="w-full h-full ">
      <div className="relative p-4 w-full mx-auto max-w-5xl max-h-full">
        <HookForm
          defaultValues={defaultFormValue}
          onSubmit={onSubmit}
          schema={postsSchema}
        >
          <div className="relative bg-white h-full rounded-xl shadow ">
            <div className="flex items-center gap-4 p-4 md:px-5 border-b rounded-t ">
              <Link to="/admin/posts">
                <Button
                  // outline
                  size="xs"
                >
                  <ArrowLeft />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 ">
                  Create New Post
                </h1>
              </div>
            </div>
            {/* contents below */}
            <div className=" h-full">
              {/* <ScrollArea className="h-full"> */}
              <div className="p-5">
                <div className="">
                  <div className="">
                    <Input
                      name="title"
                      label="Post Title"
                      placeholder="Enter a post title"
                    />
                  </div>
                  <div className="lg:grid grid-cols-2 gap-4">
                    <div className="pb-4">
                      <CustomSelect
                        label="Category"
                        selected={selectedCategory}
                        setSelected={setSelectedCategory}
                        data={categories}
                        withImage={false}
                        placeholder="Select a category"
                      />
                    </div>
                    <div className="pb-4">
                      <CustomSelect
                        label="Author"
                        selected={selectedAuthor}
                        setSelected={setSelectedAuthor}
                        data={authors}
                        withImage={false}
                        placeholder="Select an author"
                      />
                    </div>
                  </div>
                  <TextArea
                    name="short_content"
                    label="Short Description"
                    placholder="Enter a description"
                  />

                  <div className="mb-6">
                    <MultipleImageUpload
                      files={files}
                      setFiles={setFiles}
                      label="Upload Images"
                      className="max-w-[150px]"
                    />
                  </div>
                  <div className="lg:grid grid-cols-2 gap-4">
                    <div className="pb-4">
                      <CustomSelect
                        label="Format"
                        selected={selectedFormat}
                        setSelected={setSelectedFormat}
                        data={articleFormat}
                        withImage={false}
                        placeholder="Select a format"
                      />
                    </div>
                    <div className="pb-4">
                      <CustomSelect
                        label="Features"
                        selected={selectedFeature}
                        setSelected={setSelectedFeature}
                        data={featureData}
                        withImage={false}
                        placeholder="Select a feature"
                      />
                    </div>
                  </div>
                  <div>
                    <Label text="Write content for the post" className="pb-2" />
                    <TextEditor
                      htmlContent={htmlContent}
                      setHtmlContent={setHtmlContent}
                    />
                  </div>
                </div>
              </div>
              {/* </ScrollArea> */}
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center gap-2 justify-end">
                <Button type="submit" size="xs">
                  Create Post
                </Button>
              </div>
            </div>
          </div>
        </HookForm>
      </div>
    </div>
  );
};

export default CreatePost;
