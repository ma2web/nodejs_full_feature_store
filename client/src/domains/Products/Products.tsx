import React, { useEffect, useState } from "react";
import useProductsStyles from "./useProductsStyles";
import ProductsMessages from "./Products.message";
import axios from "axios";
import { useIntl } from "react-intl";
import { api } from "domains/api";
import { Chip, Fab } from "@material-ui/core";
import Table from "components/Table";
import { useRouter } from "next/router";
import AddProduct from "./components/AddProduct";
import AddIcon from "@material-ui/icons/Add";

const Header = () => (
  <tr>
    <th>نام</th>
    <th>قیمت</th>
    <th>دسته بندی ها</th>
    <th>تعداد موجود در انبار</th>
    <th>حذف مورد</th>
  </tr>
);

const Row = ({ data, push, classes, setProducts }) => (
  <>
    {data?.map((el) => (
      <tr key={el?._id} onClick={() => push(`/product/?id=${el?._id}`)}>
        <td>{el?.name}</td>
        <td>{el?.price}</td>
        <td>
          {el?.categories?.map((e) => (
            <Chip
              variant="outlined"
              color="primary"
              size="small"
              label={e?.name}
            />
          ))}
        </td>
        <td>{el?.stock}</td>
        <td
          onClick={(e) => {
            e.stopPropagation();
            let confirm = window.confirm("آیا از حذف این مورد مطمئن هستید؟");

            if (confirm) {
              axios
                .delete(`${api}/api/product/${el?._id}`, {
                  headers: {
                    "x-auth-token": localStorage.token,
                  },
                })
                .then((result) => {
                  if (result?.status === 200) {
                    axios
                      .get(`${api}/api/products`)
                      .then((res) => setProducts(res?.data))
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

const Products = () => {
  const classes = useProductsStyles();
  const { formatMessage } = useIntl();
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    axios
      .get(`${api}/api/products`)
      .then((res) => setProducts(res?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <h1>{formatMessage(ProductsMessages.products)}</h1>
      <br />
      <div>
        <Table
          header={<Header />}
          row={
            <Row
              classes={classes}
              setProducts={setProducts}
              data={products}
              push={push}
            />
          }
        />
      </div>
      <div style={{ position: "absolute", right: 20, bottom: 20 }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => push("/create-product")}
        >
          <AddIcon style={{ color: "#fff" }} />
        </Fab>
      </div>
    </div>
  );
};

export default Products;
