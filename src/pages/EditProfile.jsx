import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserById } from "../modules/fetch/editusers/index";
import { instance } from "../modules/axios/index";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    profil: null, // Menggunakan null untuk merepresentasikan file yang belum dipilih
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "",
    about: "",
    skill: "",
  });
  const [saveMessage, setSaveMessage] = useState("");

  const handleChange = (e) => {
    console.log("Handling change:", e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Validasi: Pastikan file yang diunggah adalah file gambar (boleh disesuaikan)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set state dengan data URI hasil pembacaan file
        setFormData({
          ...formData,
          profil: file, // Menggunakan file langsung
        });
      };

      // Membaca file sebagai data URI
      reader.readAsDataURL(file);
    } else {
      // Menampilkan pesan error jika tipe file tidak sesuai
      console.error("File yang diunggah harus berupa gambar (JPG, PNG, GIF)");
      // Ganti pesan error dengan menggunakan toast atau cara lain untuk memberi tahu pengguna
      toast.error("File yang diunggah harus berupa gambar (JPG, PNG, GIF)", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 5000,
      });
    }
  };

  const handleDeletePhoto = () => {
    setFormData({
      ...formData,
      profil: null,
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
          ...formData,
          profil: userData.profil,
          name: userData.name,
          email: userData.email,
          address: userData.address,
          phone: userData.phone,
          role: userData.role,
          about: userData.about,
          skill: userData.skill,
        });
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        // Tindakan penanganan kesalahan jika perlu
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []); // Pastikan untuk menyertakan dependensi kosong agar efek ini hanya dijalankan sekali saat komponen mount

  return (
    <>
      <style>
        {`
        body {
          background-color: #F0F0F0;
        }
      `}
      </style>
      <Navbar />
      {saveMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4"
          role="alert"
        >
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{saveMessage}</span>
        </div>
      )}
      <form
        className="max-w-xl mx-auto p-10 bg-white shadow-md rounded my-8" // Menyesuaikan max-w-md dan menambahkan margin (my-8)
        onSubmit={handleFormSubmit}
      >
        <div className="text-center text-2xl font-bold text-blue-700 mb-4 mt-4">
          Edit Profil
        </div>
        <div className="mb-6 flex justify-center">
          <label htmlFor="profil" className="cursor-pointer">
            <input
              type="file"
              id="profil"
              name="profil"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <img
              className="h-40 w-40 rounded-full object-cover mx-auto cursor-pointer"
              src={
                formData.profil
                  ? URL.createObjectURL(formData.profil)
                  : "https://sassyboss.co/wp-content/uploads/2019/07/grava.gif"
              }
              alt="profil image"
            />
            <div className="flex justify-center mb-4 pt-1">
              <button
                type="button"
                onClick={handleDeletePhoto}
                className="ml-2 px-2 py-1 border border-black-400 rounded text-xs text-white hover:bg-blue-400 hover:text-white focus:outline-none focus:ring bg-blue-700"
              >
                Delete
              </button>
            </div>
          </label>
        </div>
        {/* Form Field: Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
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
            Address
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
            Roll
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          >
            <option value="user" label="User" />
            <option value="company" label="Perusahaan" />
          </select>
        </div>
        {/* Form Field: About User */}
        <div className="mb-6">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About User
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
        <div className="mb-6">
          <label
            htmlFor="skill"
            className="block text-sm font-medium text-gray-700"
          >
            Skill
          </label>
          <textarea
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
          />
        </div>
        {/* Tombol Kirim */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Profil
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default EditProfile;
