import React, { useEffect, useState } from "react";
import ProductsCard from "../Components/Form/Product/ProductCard";
import { Link } from "react-router-dom";
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchProducts() {
    // setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
    useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Adjust the debounce delay as needed (in milliseconds)

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts or searchTerm changes
    };
  }, [searchTerm]);
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      fetchProducts(); // Fetch all products if the search term is empty
    } else {
      fetch(
        `https://dummyjson.com/products/search?q=${debouncedSearchTerm.trim()}`,
      )
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((error) => setError(error));
    }
  }, [debouncedSearchTerm]);
  // useEffect(()=>{
  //     fetch("https://dummyjson.com/products").then(res=>res.json()).then((data)=>setProducts(data.products)).catch((error)=>setError(error)).finally(()=>setLoading(false));
  // }, [])
  // console.log(products)
//   useEffect(() => {
//      fetch(
//         `https://dummyjson.com/products/search?q=${searchTerm.trim()}`,
//       )
//         .then((res) => res.json())
//         .then((data) => setProducts(data.products))
//         .catch((error) => setError(error));
    
//   },[searchTerm])
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  //   const handleSearch = () => {
  //     fetch(`https://dummyjson.com/products/search?q=${searchTerm.trim()}`)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products))
  //       .catch((error) => setError(error));
  //   }

  return (
    // <pre>{JSON.stringify(products, null, 2)}</pre>
    <>
      <div className="flex items-center  mb-4">
        <input
          type="text"
          placeholder="Search Products"
          className="border  border-gray-300 rounded-md p-2 mb-4 w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />{" "}
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={"/product/add"}>New Product</Link>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>
        Search
      </button> */}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))} */}
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
