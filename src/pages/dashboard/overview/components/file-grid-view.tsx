import FileIcon from "@mui/icons-material/InsertDriveFile";
import MenuIcon from "@mui/icons-material/MoreVert";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function FileGridView(props: Readonly<Props>) {
  return (
    <Card className="rounded-lg text-center shadow-none border border-solid border-neutral-300">
      <CardActionArea className="flex flex-col items-center">
        <IconButton
          className="ml-auto"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <MenuIcon />
        </IconButton>
        <CardMedia>
          <FileIcon
            className="text-yellow-500 aspect-square text-9xl"
            fontSize="inherit"
            color="inherit"
          />
        </CardMedia>
        <CardContent>
          <Typography>{props.folder.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

type Props = {
  folder: {
    id: string;
    name: string;
  };
};

export default FileGridView;
