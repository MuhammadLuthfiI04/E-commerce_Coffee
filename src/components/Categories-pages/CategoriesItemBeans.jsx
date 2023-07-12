import { Link } from "react-router-dom";
import { items } from "../Dummy/AllData";

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "beans");

  function formatNumber(number) {
    return new Intl.NumberFormat('id-ID').format(number);
  }

  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link to={`/categories/product/${item.id}`}>
                  <div className="product-header">
                    <img src={item.img} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.description}</p>
                    <p className="item-price">Rp {formatNumber(item.price)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
