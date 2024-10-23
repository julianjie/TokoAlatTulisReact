import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreatePegawai() {
    const [namaPegawai, setNamaPegawai] = useState("");
    const [jenKelPegawai, setJenKelPegawai] = useState("");
    const [tglLahirPegawai, setTglLahirPegawai] = useState("");
    const [noTelpPegawai, setNoTelpPegawai] = useState("");
    // Inisialisasi state untuk menyimpan pesan error
    const [error, setError] = useState("");
    // Inisialisasi state untuk menyimpan pesan sukses
    const [success, setSuccess] = useState("");
  
    // Fungsi yang akan dijalankan saat form disubmit
    const handleSubmit = async (e) => {
      e.preventDefault(); // Mencegah reload halaman setelah form disubmit
      setError(""); // Reset pesan error sebelum proses
      setSuccess(""); // Reset pesan sukses sebelum proses
  
      // Validasi input: jika namaFakultas kosong, set pesan error
      if (namaPegawai.trim() === "") {
        setError("Nama Pegawai is required"); // Set pesan error jika input kosong
        return; // Stop eksekusi fungsi jika input tidak valid
      }else if(jenKelPegawai.trim() === "") {
        setError("Jenis Kelamin Pegawai is required"); // Set pesan error jika input kosong
        return; // Stop eksekusi fungsi jika input tidak valid
      }else if(tglLahirPegawai.trim() === "") {
        setError("Tanggal Lahir Pegawai is required"); // Set pesan error jika input kosong
        return; // Stop eksekusi fungsi jika input tidak valid
      }else if(noTelpPegawai.trim() === "") {
        setError("No Telepon Pegawai is required"); // Set pesan error jika input kosong
        return; // Stop eksekusi fungsi jika input tidak valid
      }
      try {
        // Melakukan HTTP POST request untuk menyimpan data fakultas
        const response = await axios.post(
          "https://api-toko-alat-tulis.vercel.app/api/api/pegawai", // Endpoint API yang dituju
          {
            nama: namaPegawai,
            jenis_kelamin : jenKelPegawai,
            tglLahirPegawai : tglLahirPegawai,
            noTelpPegawai : noTelpPegawai,
          }
        );
  
        //Jika response HTTP status 201 (Created), berarti berhasil
        if (response.status === 201) {
          // Tampilkan pesan sukses jika fakultas berhasil dibuat
          setSuccess("Pegawai created successfully!");
          setNamaPegawai(""); // Kosongkan input form setelah sukses submit
          setJenKelPegawai("");
          setTglLahirPegawai(""); // Kosongkan input form setelah sukses submit
          setNoTelpPegawai(""); // Kosongkan input form setelah sukses submit
        } else {
          // Jika tidak berhasil, tampilkan pesan error
          setError("Failed to create pegawai");
        }
      } catch (error) {
        // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
        setError("An error occurred while creating pegawai");
      }
    };
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Create Pegawai</h2>
        {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
        {error && <div className="alert alert-danger">{error}</div>}
        {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
        {success && <div className="alert alert-success">{success}</div>}
        {/* Form untuk mengisi nama fakultas*/}

        <form onSubmit={handleSubmit}>
          {/* Tangani event submit dengan handleSubmit*/}
          <div className="mb-3">
            <label className="form-label">Nama Pegawai</label>
            {/* Input untuk nama fakultas dengan class bootstrap */}
            <input
              type="text"
              className="form-control"
              id="namaPegawai"
              value={namaPegawai} // Nilai input disimpan di state namaFakultas
              onChange={(e) => setNamaPegawai(e.target.value)} // Update state saat input berubah
              placeholder="Enter Pegawai Name" // Placeholder teks untuk input
            />
          </div>

          <div className="mb-3">
          <label className="form-label">Jenis Kelamin</label>
          <select
            className="form-select"
            value={jenKelPegawai}
            onChange={(e) => setJenKelPegawai(e.target.value)}
          >
            <option value="">Select Jenis Kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
          </select>
        </div>

        <div className="mb-3">
            <label className="form-label">Tanggal Lahir (YYYY-MM-DD)</label>
            {/* Input untuk nama tanggal lahir dengan class bootstrap */}
            <input
              type="date"
              className="form-control"
              id="tglLahirPegawai"
              value={tglLahirPegawai} // Nilai input disimpan di state namaFakultas
              onChange={(e) => setTglLahirPegawai(e.target.value)} // Update state saat input berubah
              placeholder="Enter Tanggal Lahir" // Placeholder teks untuk input
            />
          </div>

          <div className="mb-3">
            <label className="form-label">No Telepon</label>
            {/* Input untuk nama fakultas dengan class bootstrap */}
            <input
              type="text"
              className="form-control"
              id="noTlpPegawai"
              value={noTelpPegawai} // Nilai input disimpan di state namaFakultas
              onChange={(e) => setNoTelpPegawai(e.target.value)} // Update state saat input berubah
              placeholder="Enter No Telepon" // Placeholder teks untuk input
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }