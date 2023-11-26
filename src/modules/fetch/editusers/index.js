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
async function updateUserById(userId, formData) {
  try {
    // Mengirim data pengguna yang diperbarui ke backend
    const response = await instance.patch(`users/${userId}`, formData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
}

export { updateUserById };
