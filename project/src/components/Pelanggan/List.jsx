import React, {useEffect, useState} from "react";
import axios from "axios"
import {NavLink} from "react-router-dom"

export default function List(){
    const[pelanggan, setPelanggan] = useState([]);
    useEffect(() =>{
        axios.get('https://api-toko-alat-tulis.vercel.app/api/api/pelanggan')
        .then((response) =>{
            console.log(response.data.result)
            setPelanggan(response.data.result)
        })
        .catch((error) => {
            console.log('Error: ',error);
        })
    },[]);

    return(
        <>
        <h2>List Pelanggan</h2>
        <NavLink to="/pelanggan/create"className='btn btn-primary mb-3'>
        Create
        </NavLink>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">tanggal Lahir</th>
                <th scope="col"> No Telp</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            {
                pelanggan.map((pelanggan) =>{
                    <tr key={pelanggan.id}>
                        <td>{pelanggan.nama}</td>
                        <td>{pelanggan.jenis_kelamin}</td>
                        <td>{pelanggan.tanggal_lahir}</td>
                        <td>{pelanggan.no_telp}</td>
                        <div className="btn group" role="group" aria-label="Action buttons">
                            <NavLink to={`/pelanggan/edit/${pelanggan.id}`} className='btn btn-warning'>
                                Edit
                            </NavLink>
                        </div>
                    </tr>
                })
            }
        </tbody>

        </table>


        
        </>
    )
}