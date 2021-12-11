import axios from 'axios';
import React, {useState , useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const updateProduct =  async (e) => {
        e.preventDefault();
          
        await axios.patch(`http://localhost:3001/products/${id}`, {
            title: title,
            price: price,
            stock: stock
        });
        navigate("/");
    }

    useEffect(()=>{
        document.title = "Edit Produk";
        getProductById();
        //eslint-disable-next-line
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setTitle(response.data[0].title);
        setPrice(response.data[0].price);
        setStock(response.data[0].stock);
    }

    return (
        <div>
            <form className="mt-5" onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Nama Barang</label>
                    <input 
                        required="required"
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
                    <label className="label">Stok</label>
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
                    <button className="button is-success">Update Data</button>
                </div>

            </form>

        </div>
    )
}

export default EditProduct;
