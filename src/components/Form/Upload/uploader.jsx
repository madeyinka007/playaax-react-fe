import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import { useState } from "react";

import UploadIcon from "src/assets/images/upload-icon.svg";
import { Label } from "../Label";
import classNames from "classnames";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";

function Uploader({ label, className, files, setFiles }) {
  const [loading, setLoading] = useState(false);
  // const [files, setFiles] = useState([]);
  // const [files, setFiles] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
      "application/pdf": [".pdf"],
    },
    multiple: false,
    maxSize: 5242880, // 5MB in bytes
    onDrop: async (acceptedFiles) => {
      setLoading(true);
      const imagefile = acceptedFiles[0];
      const data = new FormData();
      data.append("file", imagefile);
      data.append("upload_preset", "file-presets");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/djvikgzb8/image/upload`,
        { method: "POST", body: data }
      );

      const uploadedFile = await res.json();
      console.log("image upload", uploadedFile);

      setFiles(uploadedFile.secure_url);
      setLoading(false);
    },
  });

  const thumbs = <Image cloudName="djvikgzb8" publicId={files} />;

  return (
    <div>
      <Label text={label} className="pb-2" />
      <div
        className={classNames(
          "rounded-lg border border-solid border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-light-dark sm:p-4"
        )}
      >
        <div
          {...getRootProps({
            className:
              " relative border-gray-200 dark:border-gray-700 h-40 flex items-center justify-center rounded-lg",
          })}
        >
          <input {...getInputProps()} />

          {loading ? (
            <LoadingSpinner />
          ) : files ? (
            <div className={classNames(className)}>{thumbs}</div>
          ) : (
            <div className="text-center flex flex-col items-center justify-center">
              <div className=" pb-2">
                <img src={UploadIcon} alt="icon" />
              </div>
              <p className=" text-sm tracking-tighter text-gray-600 pb-2 ">
                <span className="text-primary-700 font-semibold">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className=" text-xs tracking-tighter text-gray-600 dark:text-gray-400">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Uploader;
