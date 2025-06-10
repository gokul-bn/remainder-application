export const filterValidFiles = (files) => {
  const maxSize = 5 * 1024 * 1024;
  const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
  return files.filter(
    (file) => allowedTypes.includes(file.type) && file.size <= maxSize
  );
};

export const getPreviews = (files) =>
  files.map((file) => URL.createObjectURL(file));
