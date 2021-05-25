import { FC } from "react";
import Categories from "domains/Categories";

const CategoriesPage: FC = () => {
  return <Categories />;
};

(CategoriesPage as any).Layout = true;

export default CategoriesPage;
