import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import type { ButtonGroupProps } from "../types/ButtonGroup/buttobGroupTypes";

const GroupButton = ({
  button1,
  button2,
  variant,
  color,
  handleOnClickBtn1,
  handleOnClickBtn2,
  role,
}: ButtonGroupProps) => {
  return (
    <ButtonGroup
      variant={variant}
      color={color}
      aria-label="Basic button group"
      size="large"
    >
      <Button
        onClick={handleOnClickBtn1}
        variant={role === "candidate" ? "outlined" : "contained"}
      
      >
        {button1}
      </Button>
      <Button
        onClick={handleOnClickBtn2}
        variant={role === "employer" ? "outlined" : "contained"}
      >
        {button2}
      </Button>
    </ButtonGroup>
  );
};

export default GroupButton;
