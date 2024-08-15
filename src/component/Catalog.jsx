import { useContext,useState } from "react";
import { CartContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import 'bootstrap/dist/css/bootstrap.min.css';


function Catalog() {
  const [data, setData] = useState([
    {
      id: 1,
      pic:'image/i1.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id: 2,
      pic:'image/i2.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      pic:'image/i3.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id: 3,        
      pic:'image/i10.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:4,        
      pic:'image/i1.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:5,        
      pic:'image/i6.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
      id:6,
      pic:'image/i7.jpg',
      title:'Dell Laptop',
      desp:'An eligent slim core i9 10th Generation',
      price:'50000',
      link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
  },
  {
    id:7,
    pic:'image/i8.jpg',
    title:'Dell Laptop',
    desp:'An eligent slim core i9 10th Generation',
    price:'50000',
    link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
},
{   id:8,
    pic:'image/i10.jpg',
    title:'Dell Laptop',
    desp:'An eligent slim core i9 10th Generation',
    price:'50000',
    link:'https://www.dell.com/en-pk/shop/cty/sc/laptops'
}
  ]);
  const addProduct = (newProduct) => {
    // Update 'data' to include the new product
    setData((prevData) => [...prevData, newProduct]);

    // For demonstration purposes, I'm logging the new product here
    console.log("New Product Added:", newProduct);
  };
    
     
    const Globalstate=useContext(CartContext)
    console.log(Globalstate)
    const dispatch=Globalstate.dispatch;
    const navigate=useNavigate();
    const handleAddProduct=()=>{
        navigate('addproduct')
    }
    
    return (
      
         <div className="container mt-5" style={{marginTop:"200px"}}>
  <div className="row">
    {data.map((item, index) => {
      item.quantity=1;
    return(
      <div key={index} className="col-md-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={item.pic} alt={item.title} />
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.desp}</p>
            <h4>{item.price}</h4>
            <button className="btn btn-primary" onClick={()=>dispatch({type:'Add',payload:item})}>Add to cart</button>
          </div>
        </div>
      </div>
    )}
    )}
  </div>
  <AddProduct addProduct={addProduct} />

</div>
      
    )
  }
  
  export default Catalog;
  

