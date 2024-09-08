const uploadURL = "https://api.cloudinary.com/v1_1/";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "file-presets");
  const response = await fetch(uploadURL + "djvikgzb8/image/upload", {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const mediaUploader = async (file) => {
  const thumbSizes = {
    "th-thumb": { width: 544, height: 306 },
    "sl-thumb": { width: 628, height: 353 },
    "mn-thumb": { width: 1256, height: 502 },
    "tn-thumb": { width: 65, height: 65 },
    "ct-thumb": { width: 476, height: 268 },
  };
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
