import React, { useEffect, useState } from "react";
import useCategoriesStyles from "./useCategoriesStyles";
import CategoriesMessages from "./Categories.message";
import axios from "axios";
import { useIntl } from "react-intl";
import { api } from "domains/api";
import Table from "components/Table";
import AddCategory from "./components/AddCategory";

const Header = () => (
  <tr>
    <th>عنوان</th>
    <th>توضیح</th>
  </tr>
);

const Row = ({ data }) => (
  <>
    {data?.map((el) => (
      <tr key={el?._id}>
        <td>{el?.name}</td>
        <td>{el?.description}</td>
      </tr>
    ))}
  </>
);

const Categories = () => {
  const classes = useCategoriesStyles();
  const { formatMessage } = useIntl();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/api/category`)
      .then((res) => setCategories(res?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <h1>{formatMessage(CategoriesMessages.categories)}</h1>
      <br />
      <div>
        <Table header={<Header />} row={<Row data={categories} />} />
      </div>
      <div style={{ position: "absolute", right: 20, bottom: 20 }}>
        <AddCategory {...{ categories, setCategories }} />
      </div>
    </div>
  );
};

export default Categories;
