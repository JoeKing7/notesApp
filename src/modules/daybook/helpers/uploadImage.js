import axios from "axios";

const uploadImage = async (file) => {
  if (!file) {
    return;
  }

  try {
    const formData = new FormData();
    formData.append("upload_preset", "vue-fh");
    formData.append("file", file);

    const url = "https://api.cloudinary.com/v1_1/dfcwaujo8/image/upload"; //crear en el api nueva instancia para esta
    const { data } = await axios.post(url, formData);

    return data.secure_url;
  } catch (error) {
    console.log("error al cargar la imagen.");
    console.error(error);
    return null;
  }
};

export default uploadImage;
