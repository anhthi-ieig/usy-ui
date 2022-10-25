import { FC } from "react";
import { IButtonProps } from "./Button.interfaces";
import { StyledButton } from "./Button.styled";

const Button: FC<IButtonProps> = (props) => {
  const { label, testId } = props;

  return <StyledButton data-testId={testId}>{label}</StyledButton>;
};

export default Button;
