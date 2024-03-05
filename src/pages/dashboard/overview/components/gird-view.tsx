import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { styled } from "@mui/material";
import type { CardProps, TypographyProps } from "@mui/material";

const DocumentGridViewContainer = styled(Card)<CardProps>({
  boxShadow: "none",
  borderRadius: "8px",
  textAlign: "center",
  border: "1px solid #ccc",
  aspectRatio: "1",
});

const DocumentGridViewActionArea = styled(CardActionArea)({
  height: "100%",
});

function DocumentGridViewIcon(props: React.ComponentProps<"div">) {
  return (
    <CardMedia>
      <div
        className="text-yellow-500 text-9xl aspect-square w-32 h-32 flex mx-auto"
        {...props}
      />
    </CardMedia>
  );
}

function DocumentGridViewText(props: TypographyProps) {
  return <Typography gutterBottom variant="body1" {...props} />;
}

export {
  DocumentGridViewContainer,
  DocumentGridViewActionArea,
  DocumentGridViewIcon,
  DocumentGridViewText,
};
export { default as DocumentGridViewContent } from "@mui/material/CardContent";
