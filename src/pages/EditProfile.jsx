import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserById } from "../modules/fetch/editusers/index";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import { instance } from "../axios/index"; // Import the 'instance' from Axios

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "",
    about: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }

    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      return decoded ? decoded.userId : null;
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Pengguna tidak terautentikasi");
      return;
    }
    const userId = getUserIdFromToken();

    try {
      // Mengirim data pengguna yang diperbarui ke backend
      await updateUserById(userId, formData);

      console.log("Pengguna berhasil diperbarui");
      toast.success("Pengguna berhasil diperbarui", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error updating user:", error.message);
      toast.error(`Error updating user: ${error.message}`, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Pengguna tidak terautentikasi");
        return;
      }

      // Mendapatkan ID pengguna dari token
      const userId = getUserIdFromToken();

      try {
        // Mengambil data pengguna dari backend
        const response = await instance.get(`users/${userId}`);
        const userData = response.data;

        // Mengupdate nilai formulir dengan data pengguna yang diterima
        setFormData({
          name: userData.name,
          email: userData.email,
          address: userData.address,
          phone: userData.phone,
          role: userData.role,
          about: userData.about,
          skills: userData.skills,
        });
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        // Tindakan penanganan kesalahan jika perlu
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  return (
    <>
      <Navbar />
      <form
        className="max-w-md mx-auto p-8 bg-white shadow-md rounded pt-20"
        onSubmit={handleFormSubmit}
      >
        <div className="text-center text-2xl font-bold mb-4 mt-4">
          Edit Profil
        </div>
        {/* Form Field: Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Form Field: Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Form Field: Address */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Alamat
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Form Field: Phone */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telepon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Form Field: Role */}
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Peran
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          >
            <option value="" label="-------Pilih Salah Satu-------" />
            <option value="user" label="User" />
            <option value="company" label="Perusahaan" />
          </select>
        </div>
        {/* Form Field: About User */}
        <div className="mb-6">
          <label
            htmlFor="aboutUser"
            className="block text-sm font-medium text-gray-700"
          >
            About You
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Form Field: Skills User */}
        <div className="mb-6">
          <label
            htmlFor="skillsUser"
            className="block text-sm font-medium text-gray-700"
          >
            Keahlian/Skill
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Tombol Kirim */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Simpan Profil
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default EditProfile;
