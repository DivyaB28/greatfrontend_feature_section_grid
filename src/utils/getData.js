export const getData = async (filePath, fileType) => {
  try {
    const response = await fetch(filePath);
    switch (fileType.toUpperCase()) {
      case "JSON":
        return await response.json();
      default:
        return response;
    }
  } catch (err) {
    return err;
  }
};
