import { Link } from "react-router-dom";
import "./css/header.css";
import { useSearch } from "./SearchContext";

export default function Header({ products, cart }) {
  const { search, setSearch } = useSearch(); // Use search context

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase()); // Update the global search term
  };

  return (
    <div className="header-container">
      <Link to={"/"}>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/Images/RUSHIK LOGO 732G.png`} alt="Logo" />
        </div>
      </Link>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/Product/${product.Category}`}>{product.Category}</Link>
          </li>
        ))}
      </ul>

      <div className="search">
        <input
          type="search"
          placeholder="Search for product..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="cart">
        <h2>
          <Link to={"/cart"}>
            <span>{cart.length}</span> Cart
          </Link>
        </h2>
      </div>
    </div>
  );
}
