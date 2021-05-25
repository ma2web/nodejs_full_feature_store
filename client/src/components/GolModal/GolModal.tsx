import React, { FC } from "react";
import useStyles from "./useGolModal.styles";

export interface IGolModalProps {}

const GolModal: FC<IGolModalProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};

GolModal.displayName = "GolModal";
export default GolModal;
