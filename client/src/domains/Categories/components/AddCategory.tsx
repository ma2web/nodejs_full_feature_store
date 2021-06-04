import {
  Modal,
  Fab,
  Card,
  Grid,
  CardHeader,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { api } from "domains/api";

const AddCategory = ({ categories, setCategories }) => {
  const [open, setOpen] = React.useState(false);

  const [newCat, setNewCat] = React.useState({
    name: "",
    description: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon style={{ color: "#fff" }} />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid xs={10} md={6}>
            <Card style={{ padding: 20 }}>
              <h3>
                <Typography variant="h4">افزودن دسته بندی</Typography>
              </h3>
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  axios
                    .post(`${api}/api/category`, newCat, {
                      headers: {
                        "x-auth-token": localStorage.token,
                      },
                    })
                    .then((res) => {
                      if (res?.status === 200) {
                        console.log(newCat);
                        setCategories([...categories, newCat]);
                        handleClose();
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                <TextField
                  type="text"
                  label="عنوان دسته بندی"
                  variant="outlined"
                  name="name"
                  onChange={(e) =>
                    setNewCat({ ...newCat, name: e.target.value })
                  }
                />
                <br />
                <br />
                <TextField
                  type="textarea"
                  label="توضیحات دسته بندی"
                  variant="outlined"
                  name="description"
                  onChange={(e) =>
                    setNewCat({ ...newCat, description: e.target.value })
                  }
                />
                <br />
                <br />
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  ساختن
                </Button>{" "}
                <Button
                  color="primary"
                  size="large"
                  variant="outlined"
                  onClick={handleClose}
                >
                  انصراف
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default AddCategory;
