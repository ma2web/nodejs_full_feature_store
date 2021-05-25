import { FC } from "react";
import Product from "domains/Products/components/Product";

const ProductPage: FC = () => {
  return <Product />;
};

(ProductPage as any).Layout = true;

export default ProductPage;
