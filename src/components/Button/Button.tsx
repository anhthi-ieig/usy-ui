import { FC } from "react";
import { IButtonProps } from "./Button.interfaces";

const Button: FC<IButtonProps> = (props) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default Button;
