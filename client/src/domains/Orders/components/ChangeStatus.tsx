import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { api } from "domains/api";

const ChangeStatus = ({
  status,
  setOrder,
  order,
  setOrders,
  setChangeStatus,
}) => {
  const [value, setValue] = useState(null);
  // pending proccessing shipped delivered cancelled

  console.log(order);

  useEffect(() => setValue(status), [status]);
  return (
    <div style={{ width: 200 }}>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOrder({
              ...order,
              status: e.target.value,
            });
            let data = order;

            data.status = e.target.value;

            axios
              .put(
                `${api}/api/order/${order?._id}`,
                { status: e.target.value },
                {
                  headers: {
                    "x-auth-token": localStorage.token,
                  },
                }
              )
              .then((res) => {
                if (res?.status === 200) {
                  axios
                    .get(`${api}/api/order`, {
                      headers: {
                        "x-auth-token": localStorage.token,
                      },
                    })
                    .then((res) => {
                      setChangeStatus(false);
                      setOrders(res?.data);
                    });
                }
              })
              .catch((err) => console.log(err));
          }}
          variant="outlined"
        >
          <MenuItem value="pending">pending</MenuItem>
          <MenuItem value="proccessing">proccessing</MenuItem>
          <MenuItem value="shipped">shipped</MenuItem>
          <MenuItem value="delivered">delivered</MenuItem>
          <MenuItem value="cancelled">cancelled</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ChangeStatus;
