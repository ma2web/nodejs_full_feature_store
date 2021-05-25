import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { api } from "domains/api";
import EditProduct from "./EditProduct";
import { Button } from "@material-ui/core";

const Product = () => {
  const { query } = useRouter();
  let { id } = query;

  const [product, setProduct] = React.useState(null);
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${api}/api/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      })
      .then((res) => setProduct(res?.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <div>
        {!edit ? (
          <>
            <Button
              color="primary"
              onClick={() => setEdit((prev) => !prev)}
              variant="outlined"
            >
              Edit Product
            </Button>
            <br />
            <br />
            <h1>{product?.name}</h1>
            <br />
            <div>
              <h3>Price:</h3>
              <ul>
                <li>{product?.price}</li>
              </ul>
            </div>
            <div>
              <h3>New Price:</h3>
              <ul>
                <li>{product?.discount}</li>
              </ul>
            </div>
            <div>
              <h3>Images:</h3>
              <ul>
                {product?.images?.length
                  ? product?.images?.map((el) => (
                      <li style={{ display: "inline-block" }}>
                        <img
                          width={200}
                          style={{ padding: 10 }}
                          src={`${api}/uploads/admin/product/${id}/${el}`}
                          alt={product?.name}
                        />
                      </li>
                    ))
                  : "No Photos Added"}
              </ul>
            </div>
            <div>
              <h3>Categories:</h3>
              <ul>
                {product?.categories?.map((el) => (
                  <li>{el?.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>In Stock:</h3>
              <ul>
                <li>{product?.stock}</li>
              </ul>
            </div>
            <div>
              <h3>Sizes:</h3>
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
              <h3>Reviews:</h3>
              <ul>
                {product?.comments?.length
                  ? product?.comments?.map((el) => el?.size)
                  : "No Comments Added"}
              </ul>
            </div>
            <div>
              <h3>Created At:</h3>
              <ul>{new Date(product?.createdAt).toLocaleString()}</ul>
            </div>
            <div>
              <h3>Last Update:</h3>
              <ul>{new Date(product?.updatedAt).toLocaleString()}</ul>
            </div>
          </>
        ) : (
          <EditProduct product={product} setProduct={setProduct} />
        )}
      </div>
    </div>
  );
};

export default Product;
