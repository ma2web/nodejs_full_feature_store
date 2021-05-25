import { FC } from "react";
import AddProduct from "domains/Products/components/AddProduct";

const AddProductPage: FC = () => {
  return <AddProduct />;
};

(AddProductPage as any).Layout = true;

export default AddProductPage;
