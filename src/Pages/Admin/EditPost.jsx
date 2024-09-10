// import { ScrollArea } from "src/components/Form/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "src/components/Form/Button";
import HookForm from "src/components/Form/Form";

import { Input } from "src/components/Form/Input";
import { TextArea } from "src/components/Form/TextArea";
import CustomSelect from "src/components/Form/Select/CustomSelect";

import { Link, useNavigate, useParams } from "react-router-dom";

import { postsSchema } from "src/schema/postsSchema";

import { useDispatch, useSelector } from "react-redux";

import { fetchAuthors } from "../../Redux/author/authorThunk";
import { fetchCategorys } from "../../Redux/category/categoriesThunk";
import { Label } from "../../components/Form/Label";
import TextEditor from "../../components/Form/TextEditor";
import {
  addNewPost,
  fetchPost,
  fetchPosts,
  updatePost,
} from "../../Redux/posts/postsThunk";
import { ArrowLeft } from "lucide-react";

import MediaUploader from "../../components/Form/Upload/uploaderv2";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";
import ErrorStatus from "src/components/ui/ErrorStatus";

const articleFormat = [
  { name: "Article", format: "article" },
  { name: "Video", format: "video" },
];
const featureData = [
  { name: "Slider", feature: "slider" },
  { name: "Top Headline", feature: "top-headline" },
];
const EditPost = () => {
  // console.log("sgow", categoryData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { _id } = useParams(); // Type assertion for _id
  const { posts, post, loading, error } = useSelector((state) => state.posts);
  console.log("single posts", post);
  const postData = post?.response;

  // console.log("postData gotten", postData);

  useEffect(() => {
    dispatch(fetchPost(_id));
  }, [_id, dispatch]);

  const getFormat = articleFormat.find(
    (arti) => arti?.format === postData?.format
  );
  const getFeature = featureData.find(
    (feat) => feat?.feature === postData?.feature
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(getFormat);
  const [selectedFeature, setSelectedFeature] = useState(getFeature);

  const [htmlContent, setHtmlContent] = useState("");
  const [files, setFiles] = useState(null);

  const { categories } = useSelector((state) => state.category);
  const { authors } = useSelector((state) => state.author);

  console.log("files Upload now", files);

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
    title: postData?.title,
    short_content: postData?.short_content,

    media: files,
    image: files?.original,
  };

  const onSubmit = async (data) => {
    const filteredFormData = {
      title: data?.title,
      short_content: data?.short_content,
      categoryId:
        selectedCategory?._id === undefined
          ? postData?.category?._id
          : selectedCategory?._id,

      authorId:
        selectedAuthor?._id === undefined
          ? postData?.author?._id
          : selectedAuthor?._id,

      format: selectedFormat?.format,
      feature: selectedFeature?.feature,
      content: htmlContent,

      media: files === null ? postData?.media : files,
      image: files === null ? postData?.image : files?.original,
    };

    console.log("filtered data", filteredFormData);

    dispatch(updatePost({ id: postData?._id, formData: filteredFormData }));
    // alert(JSON.stringify(filteredFormData));

    // dispatch(fetchPosts("posts/pull?del_flag=0"));
    navigate("/admin/posts");
  };

  return (
    <div className="w-full h-full ">
      <div className="relative p-4 w-full mx-auto max-w-5xl max-h-full">
        {loading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <ErrorStatus
            message={JSON.stringify(error?.message)}
            statusCode={error?.status_code || error?.status}
            link="/admin/posts"
          />
        ) : (
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
                    Update Post
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
                          placeholder={
                            postData?.category?.label || "Select a category"
                          }
                        />
                      </div>
                      <div className="pb-4">
                        <CustomSelect
                          label="Author"
                          selected={selectedAuthor}
                          setSelected={setSelectedAuthor}
                          data={authors}
                          withImage={false}
                          placeholder={
                            postData?.author?.name || "Select an author"
                          }
                        />
                      </div>
                    </div>
                    <TextArea
                      name="short_content"
                      label="Short Description"
                      placholder="Enter a description"
                    />

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
                    <div className="mb-6">
                      <MediaUploader
                        files={files}
                        setFiles={setFiles}
                        label="Upload Images"
                        className="max-w-[320px]"
                      />
                    </div>

                    <div>
                      <Label
                        text="Write content for the post"
                        className="pb-2"
                      />
                      <TextEditor
                        htmlContent={htmlContent}
                        setHtmlContent={setHtmlContent}
                        content={postData?.content}
                      />
                    </div>
                  </div>
                </div>
                {/* </ScrollArea> */}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2 justify-end">
                  <Button type="submit" size="xs">
                    Update Post
                  </Button>
                </div>
              </div>
            </div>
          </HookForm>
        )}
      </div>
    </div>
  );
};

export default EditPost;
