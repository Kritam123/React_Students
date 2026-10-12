import React, { useState } from "react";

const CreateProduct = () => {
    const [product,setProduct]= useState(null);
    const [error,setError]= useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmmit = async(e)=>{
    e.preventDefault();
    try {
        const response= await fetch("https://dummyjson.com/products/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        const data = await response.json();
        setProduct(data)
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <>
    
    <form onSubmit={handleSubmmit}>
      <h1 className="text-2xl p-4">New Product..</h1>
      <div className="flex flex-col space-y-5">
        <input
          onChange={handleChange}
          type="text"
          value={formData.title}
          name="title"
          className="border p-2"
          placeholder="title"
        />
        <input
          onChange={handleChange}
          type="text"
          value={formData.description}
          className="border p-2"
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={formData.price}
          type="number"
          name="price"
          className="border p-2"
          placeholder="price"
        />
      </div>
      <input
        type="submit"
        value="Create"
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </form>
    {
        JSON.stringify(product)
    }
    {error && JSON.stringify(error)}
</>
    
  );
};

export default CreateProduct;
