import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {  

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const saveProduct =  async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/products/', {
            title: title,
            price: price,
            stock: stock
        });
        navigate("/");
    }

    useEffect(()=> {
        document.title = "Tambah Produk";
    })

    return (
        <div>
            <form className="mt-5" onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Nama Barang</label>
                    <input required="required" 
                        className="input" 
                        type="text" 
                        placeholder="Nama Barang" 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="label">Harga</label>
                    <input 
                        required="required"
                        className="input" 
                        type="number" 
                        placeholder="Harga" 
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        />
                </div>
                <div className="field">
                    <label className="label">Stock</label>
                    <input 
                        required="required"
                        className="input" 
                        type="number" 
                        placeholder="Stok" 
                        value={stock}
                        onChange={(event) => setStock(event.target.value)}
                        />
                </div>
                <div className="field">
                    <button className="button is-success">Simpan</button>
                </div>

            </form>

            {/* {title} - {price} */}

        </div>
    )
}

export default AddProduct;
