import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import Swal from "sweetalert2";
export default function List() {
  // Fungsi untuk menghapus fakultas berdasarkan ID dengan konfirmasi SweetAlert2
//   const handleDelete = (id, nama) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: `You won't be able to revert this! Nama Pegawai: ${nama}`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",  
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Lakukan penghapusan jika dikonfirmasi
//         axios
//           .delete(`https://api-toko-alat-tulis.vercel.app/api/api/pegawai${id}`)
//           .then((response) => {
//             // Hapus fakultas dari state setelah sukses dihapus dari server
//             setPegawai(pegawai.filter((f) => f.id !== id));
//             // Tampilkan notifikasi sukses
//             Swal.fire("Deleted!", "Your data has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting data:", error); // Menangani error
//             Swal.fire(
//               "Error",
//               "There was an issue deleting the data.",
//               "error"
//             );
//           });
//       }
//     });
//   };

  const [pegawai, setPegawai] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-toko-alat-tulis.vercel.app/api/api/pegawai")
      .then((response) => {
        console.log(response.data.result);
        setPegawai(response.data.result);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <>
        <h2>List Pegawai</h2>
        <NavLink to="/pegawai/create" className="btn btn-primary mb-3">
            Create
        </NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">No Telp</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {pegawai.map((data) => (
            <tr key={data.id}>
              <td>{data.nama}</td>
              <td>{data.jenis_kelamin}</td>
              <td>{data.tanggal_lahir}</td>
              <td>{data.no_telp}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Action buttons"
                >
                  <NavLink
                    to={`/prodi/edit/${data.id}`}
                    className="btn btn-warning"
                  >
                    Edit
                  </NavLink>
                  {/* <button
                    onClick={() => handleDelete(data.id, data.nama)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
