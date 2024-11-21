import { useParams } from "react-router-dom";
import "./css/product.css";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { useSearch } from "./SearchContext";

export default function Products({ products }) {
  const { cart, setCart } = useContext(cartContext); // Access cart state
  const { search } = useSearch(); // Access search term
  const { Category } = useParams(); // Get category from URL

  const addCart = (product) => {
    setCart(prevCart=>[...prevCart,{...product,quantity:1}])
  };

  // Filter products based on the selected category and search term
  const selectedCategory = products.filter((item) => item.Category === Category);

  const banner=selectedCategory[0].banner;

  console.log("bann",banner)
  const filteredProducts = selectedCategory.length
    ? selectedCategory[0].Products.filter((product) =>
        product.Name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const truncateName = (name, length) =>
    name.length > length ? name.substring(0, length) + "..." : name;

  return (
    <div className="product-container">
        {banner && selectedCategory.map((bann)=>(
            <div className="banner">
            <img src={`/${banner}`} alt="" />
        </div>
        ))}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div className="product" key={index}>
            <div className="img">
              <img src={`/${product.Image}`} alt={product.Name} />
            </div>
            <div className="content">
              <h1>{truncateName(product.Name, 25)}</h1>
              <h3>Rs: {product.Price}</h3>
              <button onClick={() => addCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))
      ) : (
        <h2>No products found in this category</h2>
      )}
    </div>
  );
}
