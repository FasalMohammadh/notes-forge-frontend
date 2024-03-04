import { Button, ButtonProps } from "@mui/material";

function ActionButton(props: Readonly<Props>) {
  return (
    <Button variant="text" {...props} className="rounded-full px-4">
      {props.children}
    </Button>
  );
}

type Props = Omit<ButtonProps, "variant"> & {
  children: React.ReactNode;
};

export default ActionButton;
