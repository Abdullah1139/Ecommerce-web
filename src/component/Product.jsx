import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import './Product.css'; // Link to the custom CSS file

function Product() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFilteredData(json);
        const uniqueCategories = ['All', ...new Set(json.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  useEffect(() => {
    let filtered = data;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, data]);

  const addProduct = (newProduct) => {
    setData((prevData) => [...prevData, newProduct]);
    console.log("New Product Added:", newProduct);
  };

  const handleAddProduct = () => {
    navigate('addproduct');
  };

  return (
    <div className="product-container">
      {/* Category Filter and Search Bar */}
      <div className="filter-bar">
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredData.map((item, index) => {
          item.quantity = 1;
          return (
            <div key={index} className="product-card">
              <img className="product-image" src={item.image} alt={item.title} />
              <div className="product-details">
                <h4 className="product-title">{item.title}</h4>
                <p className="product-description">{item.description}</p>
                <h4 className="product-price">${item.price}</h4>
                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch({ type: 'Add', payload: item })}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Product;
