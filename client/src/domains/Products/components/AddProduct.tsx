import { Button, FormHelperText, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import { api } from "domains/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: null,
    discount: null,
    images: [],
    stock: null,
    inStock: false,
    categories: [],
    sizes: [],
  });
  const [categories, setCategories] = useState([]);
  const [sCategories, setSCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [sizePrice, setSizePrice] = useState(null);
  const [file, setFile] = useState("");
  const [imageFileName, setImageFileName] = useState(null);

  let { push } = useRouter();

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
    <div>
      <div>
        <div>
          <h3>Name</h3>
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
      <div>
        <div>
          <h3>Description</h3>
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
      <div>
        <div>
          <h3>Price</h3>
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
      <div>
        <div>
          <h3>New Price</h3>
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
      <div>
        <div>
          <h3>Product Images</h3>
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
              : "No Photos Added"}
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
      <div>
        <div>
          <h3>Categories</h3>
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
              Add
            </Button>
          </div>
        </div>
      </div>
      <br />
      {/* stock */}
      <div>
        <div>
          <h3>In Stock:</h3>
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
      <div>
        <div>
          <h3>Sizes:</h3>
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
              Add
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
            if (data.stock > 0) {
              data.inStock = true;
            } else {
              data.inStock = true;
            }

            data.categories = sCategories;

            axios
              .post(`${api}/api/product`, data, {
                headers: {
                  "Content-Type": "application/json",
                  "x-auth-token": localStorage.token,
                },
              })
              .then((res) => {
                if (res?.data) {
                  var formdata = new FormData();
                  formdata.append("image", imageFileName);
                  axios
                    .post(
                      `${api}/api/product/upload/${res?.data?._id}`,
                      formdata,
                      {
                        headers: {
                          "x-auth-token": localStorage.token,
                        },
                      }
                    )
                    .then((res) => push("/products"));
                }
              })
              .catch((err) => console.log(err));
          }}
          size="large"
        >
          Create Product
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
