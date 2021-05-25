import { FC } from "react";
import Products from "domains/Products";

const ProductsPage: FC = () => {
  return <Products />;
};

(ProductsPage as any).Layout = true;

export default ProductsPage;
