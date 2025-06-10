export type ButtonGroupProps = {
    button1: string;
    button2: string;
    variant: "text" | "outlined" | "contained";
    color: "primary" | "secondary";
    handleOnClickBtn1: () => void;
    handleOnClickBtn2: () => void;
    role?: string;
  };