import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Not from "./Not";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  //  console.log(id);
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3004/Products/${id}`)
        .then((f) => f.json())
        .then((data) => {
          // console.log("json data",data);
          if (data.name == undefined) {
            setProduct(null);
            // console.log("Null data",product);
          } else {
            setProduct(data);
            //  console.log("Get data",product,data);
          }
        });
    }
  }, [id]);
  return (
    <>
      {/* <p>Product Id: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p> */}
      {product == null ? (
        <Not />
      ) : (
        <h1>
          {" "}
          <p>Product Id: {product.id}</p>
          <p>Product Name: {product.name}</p>
          <p>Product Price: {product.price}</p>{" "}
        </h1>
      )}
    </>
  );
}

export default Product;
