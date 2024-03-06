import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";

import { formatDate } from "@/library/format-date";
import React from "react";

function FolderGridView(props: Readonly<Props>) {
  return (
    <Tooltip
      title={
        <>
          <Typography variant="body2">
            {props.folder.files.count} files
          </Typography>
          <Typography variant="body2">
            Created on: {formatDate(props.folder.createdAt)}
          </Typography>
          <Typography variant="body2">
            Updated on: {formatDate(props.folder.updatedAt)}
          </Typography>
        </>
      }
    >
      <Card className="rounded-lg text-center shadow-none border border-solid border-neutral-300">
        <CardActionArea className="flex flex-col items-center">
          <IconButton
            className="ml-auto"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={props.openSecondaryActionMenu}
          >
            <MenuIcon />
          </IconButton>
          <CardMedia>
            <FolderIcon
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
    </Tooltip>
  );
}

type Props = {
  folder: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    files: { count: number };
  };
  openSecondaryActionMenu: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default FolderGridView;
