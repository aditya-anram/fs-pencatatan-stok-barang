import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">

        <section class="hero">
        <div class="hero-body">
            <p class="title">
            App Pencatatan Stok Barang
            </p>
        </div>
        </section>

          <Routes>

            <Route exact path="/" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/edit/:id" element={<EditProduct/>}></Route>

          </Routes>
          
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
