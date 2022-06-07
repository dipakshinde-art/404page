import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      fetch("http://localhost:3004/products")
        .then((f) => f.json())
        .then((data) => {
          // console.log(data);
          setProduct(data);
        });
    };
    fetchProduct();
  }, []);
  return (
    <div>
    
      <div className="product_outlet">
        <div>
          {product.map((p) => (
            <div key={p.id}>
              <Link to={`/Products/${p.id}`}>{p.name}</Link>
            </div>
          ))}
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;
