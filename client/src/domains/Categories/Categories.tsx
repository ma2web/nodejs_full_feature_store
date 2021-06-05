import React, { useEffect, useState } from "react";
import useCategoriesStyles from "./useCategoriesStyles";
import CategoriesMessages from "./Categories.message";
import axios from "axios";
import { useIntl } from "react-intl";
import { api } from "domains/api";
import Table from "components/Table";
import AddCategory from "./components/AddCategory";
import classNames from "classnames";

const Header = () => (
  <tr>
    <th>عنوان</th>
    <th>توضیح</th>
    <th>حذف مورد</th>
  </tr>
);

const Row = ({ data, setCategories, classes }) => (
  <>
    {data?.map((el) => (
      <tr key={el?._id}>
        <td>{el?.name}</td>
        <td>{el?.description}</td>
        <td
          onClick={() => {
            let confirm = window.confirm("آیا از حذف این مورد مطمئن هستید؟");

            if (confirm) {
              axios
                .delete(`${api}/api/category/${el?._id}`, {
                  headers: {
                    "x-auth-token": localStorage.token,
                  },
                })
                .then((result) => {
                  if (result?.status === 200) {
                    axios
                      .get(`${api}/api/category`)
                      .then((res) => setCategories(res?.data))
                      .catch((err) => console.log(err));
                  }
                })
                .catch((err) => alert("err: " + err));
            }
          }}
        >
          <span className={classes.error}>حذف</span>
        </td>
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
        <Table
          header={<Header />}
          row={
            <Row
              classes={classes}
              setCategories={setCategories}
              data={categories}
            />
          }
        />
      </div>
      <div style={{ position: "absolute", right: 20, bottom: 20 }}>
        <AddCategory {...{ categories, setCategories }} />
      </div>
    </div>
  );
};

export default Categories;
