import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [productData, setProductData] = useState({
    pic: "",
    title: "",
    desp: "",
    price: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if all fields are filled
    if (Object.values(productData).every((value) => value !== "")) {
      // Add the product to the data array
      addProduct(productData);

      // Clear the form after submission
      setProductData({
        pic: "",
        title: "",
        desp: "",
        price: "",
        link: "",
      });
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="pic">Image URL:</label>
              <input
                type="file"
                className="form-control"
                id="pic"
                name="pic"
                value={productData.pic}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desp">Description:</label>
              <textarea
                className="form-control"
                id="desp"
                name="desp"
                value={productData.desp}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Product Link:</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
                value={productData.link}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
