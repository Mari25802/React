import { Link } from 'react-router-dom';
import './css/Home.css';
import { useSearch } from './SearchContext'; // Use the Search Context
import { cartContext } from './CartContext';
import { useContext } from 'react';

export default function Home({ products }) {
  const { search, setSearch } = useSearch(); // Access search state from context
  const { cart, setCart } = useContext(cartContext); // Access cart state

//   const handleSearch = (e) => {
//     setSearch(e.target.value.toLowerCase()); // Update search term in context
//   };
const addCart=(products)=>
      setCart(prevcart=>[...prevcart,{...products,Quantity:1}])




  // Flatten all products (considering products can be in categories)
  const allProducts = products.flatMap(productCategory => productCategory.Products);

  // Filter products based on search term (case-insensitive)
  const filteredProducts = allProducts.filter((product) =>
    product.Name.toLowerCase().includes(search)
  );

  const truncateName = (name, length)=>
    name.length > length ? name.substring(0,length)+"...": name;
  

  return (
    <div className="home-container">
      {/* <div className="search-box"> */}
        {/* <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        /> */}
      {/* </div> */}


      {/* Show categories only when there's no search term */}
      {!search && (
        <div className="category">
          {products.map((productCategory, index) => (
            <div className="box" key={index}>
              <Link to={`/Product/${productCategory.Category}`}>
                <div className="image">
                  <img src={`${productCategory.Image}`} alt={productCategory.Category} />
                </div>
                <h2>{productCategory.Category}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Show filtered products when search term is present */}
      {search && (
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div className="box" key={index}>
                {/* <Link to={`/Product/${product.Category}`}> */}
                  <div className="image">
                    <img src={`${product.Image}`} alt={product.Name} />
                  </div>
                  <h2>{truncateName(product.Name ,18)}</h2>
                  <p>Rs: {product.Price}</p>
                {/* </Link> */}
                <button onClick={() => addCart(product)}>Cart</button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
