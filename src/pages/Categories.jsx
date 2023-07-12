import "../components/Product/ProudProducts.css";
import CategoriesHeader from "../components/Category/CategoriesHeader";
import { Outlet } from "react-router";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
