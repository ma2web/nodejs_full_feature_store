import classes from "*.module.css";
import { Button, FormHelperText, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import { api } from "domains/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useProductsStyles from "../useProductsStyles";

const EditProduct = ({ product, setProduct }) => {
  const classes = useProductsStyles();
  const [categories, setCategories] = useState([]);
  const [sCategories, setSCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [sizePrice, setSizePrice] = useState(null);
  const [file, setFile] = useState("");
  const [imageFileName, setImageFileName] = useState(null);

  let { query, push } = useRouter();

  useEffect(() => {
    axios
      .get(`${api}/api/category`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      })
      .then((res) => setCategories(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.parent}>
      {/* title */}
      <div className={classes.child}>
        <div>
          <h3>عنوان محصول</h3>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="text"
            value={product?.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
      </div>
      <br />
      {/* description */}
      <div className={classes.child}>
        <div>
          <h3>توضیحات محصول</h3>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="text"
            value={product?.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
      </div>
      <br />
      {/* price */}
      <div className={classes.child}>
        <div>
          <h3>قیمت</h3>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="text"
            value={product?.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseInt(e.target.value) })
            }
          />
        </div>
      </div>
      <br />
      {/* new price */}
      <div className={classes.child}>
        <div>
          <h3>قیمت با تخفیف</h3>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="text"
            value={product?.discount}
            onChange={(e) =>
              setProduct({ ...product, discount: parseInt(e.target.value) })
            }
          />
        </div>
      </div>
      <br />
      {/* image */}
      <div className={classes.child}>
        <div>
          <h3>عکس های محصول</h3>
        </div>
        <div>
          <ul>
            {product?.images?.length
              ? product?.images?.map((el) => (
                  <li style={{ display: "inline-block" }}>
                    <img
                      style={{ padding: 10 }}
                      width={200}
                      // src={`${api}/uploads/admin/product/${product?._id}/${el}`}
                      alt={product?.name}
                    />
                  </li>
                ))
              : "عکسی یافت نشد"}
          </ul>
        </div>
        <div>
          <div>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                setImageFileName(e.target.files[0]);
                setFile(URL.createObjectURL(e.target.files[0]));
              }}
            />

            <img src={file} />
          </div>
        </div>
      </div>
      <br />
      {/* categories */}
      <div className={classes.child}>
        <div>
          <h3>دسته بندی ها</h3>
        </div>
        <div>
          <ul>
            {product?.categories?.map((el) => (
              <li>{el?.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <Autocomplete
              fullWidth
              options={categories}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
              onChange={(e, data) => {
                setCategory(data);
                if (sCategories.includes(data._id)) {
                  let newC = sCategories.filter((sc) => sc !== data._id);
                  setSCategories(newC);
                } else {
                  setSCategories([...sCategories, data._id]);
                }
              }}
            />
          </div>
          <div>
            <Button
              color="primary"
              variant="outlined"
              onClick={() =>
                setProduct({
                  ...product,
                  categories: [...product.categories, category],
                })
              }
            >
              افزودن دسته بندی
            </Button>
          </div>
        </div>
      </div>
      <br />
      {/* stock */}
      <div className={classes.child}>
        <div>
          <h3>تعداد موجود در انبار</h3>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="number"
            value={product?.stock}
            onChange={(e) =>
              setProduct({ ...product, stock: parseInt(e.target.value) })
            }
          />
        </div>
      </div>
      <br />
      {/* size */}
      <div className={classes.child}>
        <div>
          <h3>سایز های موجود</h3>
        </div>
        <div>
          <ul>
            {product?.sizes?.length
              ? product?.sizes?.map((el) => (
                  <li>
                    {el?.size} - {el?.price}
                  </li>
                ))
              : "No Sizes Added"}
          </ul>
        </div>
        <div>
          <div>
            <Autocomplete
              fullWidth
              options={["XXS", "XS", "S", "M", "L", "XL", "XXL"]}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
              onChange={(e, data) => {
                setSize(data);
              }}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              type="text"
              label="Price"
              onChange={(e) => setSizePrice(parseInt(e.target.value))}
              value={sizePrice}
            />
          </div>
          <div>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setProduct({
                  ...product,
                  sizes: [...product.sizes, { size, price: sizePrice }],
                });
              }}
            >
              افزودن سایز
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div>
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          onClick={() => {
            let data = product;
            data.user = product?.user?._id;
            if (data.stock > 0) {
              data.inStock = true;
            } else {
              data.inStock = true;
            }

            data.categories = sCategories;

            axios
              .put(`${api}/api/product/${query?.id}`, data, {
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": localStorage.token,
                },
              })
              .then((res) => {
                var formdata = new FormData();
                formdata.append("image", imageFileName);
                axios
                  .post(`${api}/api/product/upload/${data?._id}`, formdata, {
                    headers: {
                      "x-auth-token": localStorage.token,
                    },
                  })
                  .then((res) => push("/products"));
              })
              .catch((err) => console.log(err));
          }}
          size="large"
        >
          بروز رسانی محصول
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
