import data from "../data.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img id="img1" src={product.image} alt={product.name} />{" "}
            </Link>
            <div className="product-info">
              {" "}
              <Link to={`/product/${product.slug}`}>
                {" "}
                <p>{product.name}</p>{" "}
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
