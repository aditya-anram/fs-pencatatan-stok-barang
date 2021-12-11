import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        document.title = "Data Produk";
        getProducts();
    }, []);

    const getProducts =  async () =>{
        const response = await axios.get(`http://localhost:3001/products/`);
        //console.log(response);
        setProducts(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        getProducts();
    } 

    return (
        <div>

            <Link to="/add" className="button is-success mt-5 mb-5">Tambah Barang</Link>

            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            (p, index)=>{
                                return(
                                    <tr key={p.id}>
                                <td>{index + 1}</td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.stock}</td>
                                <td>
                                    <Link 
                                    to={`/edit/${p.id}`}
                                    className="button is-small is-warning">Edit</Link>
                                    <button
                                     onClick={()=> window.confirm("Apakah anda yakin ingin menghapus data?") &&deleteProduct(p.id)}
                                     className="button button is-small is-danger ml-2">Hapus</button>
                                </td>
                            </tr>
                                ) 
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;
