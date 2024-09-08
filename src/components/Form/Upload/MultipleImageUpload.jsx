import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import { useState } from "react";

import UploadIcon from "../../../assets/images/upload-icon.svg";
import { Label } from "../Label";
import classNames from "classnames";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";

const thumbSizes = {
  "th-thumb": { width: 544, height: 306 },
  "sl-thumb": { width: 628, height: 353 },
  "mn-thumb": { width: 1256, height: 502 },
  "tn-thumb": { width: 65, height: 65 },
  "ct-thumb": { width: 476, height: 268 },
};

function MultipleImageUpload({ label, className, files, setFiles }) {
  const [loading, setLoading] = useState(false);
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
      data.append("upload_preset", "exnzawv1");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/djvikgzb8/image/upload`,
        { method: "POST", body: data }
      );

      const uploadedFile = await res.json();

      console.log("first file uploaded", uploadedFile);
      const thumbs = await mediaUploader(imagefile);

      setFiles(thumbs);
      setLoading(false);
    },
  });

  const thumbs = files && (
    <div>
      {Object.entries(files).map(([label, url]) => (
        <Image
          key={label}
          cloudName="djvikgzb8"
          publicId={url}
          width={thumbSizes[label].width}
          height={thumbSizes[label].height}
        />
      ))}
    </div>
  );

  return (
    <div>
      <Label text={label} className="pb-2" />
      <div
        className={classNames(
          "rounded-lg border border-solid border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-light-dark sm:p-4",
          className
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
            thumbs
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

export const mediaUploader = async (file) => {
  const { secure_url, public_id } = await uploadImage(file);

  const thumbs = Object.entries(thumbSizes).reduce((acc, [label, size]) => {
    const thumbUrl =
      "https://res.cloudinary.com/djvikgzb8/image/upload/w_$" +
      size.width +
      ",h_" +
      size.height +
      ",c_fill" +
      public_id;

    acc[label] = thumbUrl;
    return acc;
  }, {});

  return {
    original: secure_url,
    ...thumbs,
  };
};

const uploadImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "exnzawv1");
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/djvikgzb8/image/upload`,
    { method: "POST", body: data }
  );

  return await res.json();
};

export default MultipleImageUpload;
