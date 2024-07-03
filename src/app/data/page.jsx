// fetch data in client component

// "use client";
// import { useState, useEffect } from "react";
// const Data = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//       data = await data.json();
//       setProduct(data);
//     }
//     fetchData();
//   });
//   return (
//     <ul>
//       {product?.map((product) => (
//         <li className="border p-2 my-4" key={product.id}>
//           {product.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Data;

// fetch data in server Component
import React from "react";

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();

  return data;
}

const Data = async () => {
  const res = await fetchData();
  return (
    <ul>
      {res.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
};

export default Data;
