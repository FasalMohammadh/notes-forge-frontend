import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import FolderIcon from "@mui/icons-material/Folder";

function Folder(props: Readonly<Props>) {
  return (
    <Card className="shadow-none rounded-lg text-center border border-solid border-neutral-300">
      <CardActionArea>
        <CardMedia>
          <div className="text-yellow-500 text-9xl aspect-square w-32 h-32 flex mx-auto">
            <FolderIcon fontSize="inherit" color="inherit" />
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {props.folder.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

interface Props {
  folder: {
    id: string;
    name: string;
  };
}

export default Folder;
