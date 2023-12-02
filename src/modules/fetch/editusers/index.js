import { instance } from "../../axios/index.js";

const getUserIdFromToken = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    return decoded ? decoded.userId : null;
  } catch (error) {
    console.error("Error decoding token:", error.message);
    return null;
  }
};
// Fungsi untuk pembaruan pengguna berdasarkan ID pengguna
async function updateUserById(id, formData) {
  try {
    // Mengirim data pengguna yang diperbarui ke backend
    const response = await instance.patch(`users/${id}`, formData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.message);
    // Jika ada pesan kesalahan dalam respons, gunakan pesan tersebut; jika tidak, gunakan pesan default
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
}

export { updateUserById };
