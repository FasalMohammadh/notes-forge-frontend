import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/MoreVert";

import { formatDate } from "@/library/format-date";

function FolderListView(props: Readonly<Props>) {
  return (
    <ListItem
      disableGutters
      disablePadding
      className="border border-solid border-neutral-300 bg-white rounded-lg hover:bg-neutral-100"
      secondaryAction={
        <IconButton onClick={props.openSecondaryActionMenu}>
          <MenuIcon />
        </IconButton>
      }
    >
      <ListItemButton className="rounded-lg hover:[background-color:unset]">
        <ListItemIcon>
          <FolderIcon className="text-yellow-500 text-4xl" />
        </ListItemIcon>
        <Stack
          direction="row"
          className="items-center gap-3 w-full justify-between"
        >
          <ListItemText
            primary={props.folder.name}
            secondary={`${props.folder.files.count} files`}
          />
          <div className="flex gap-4">
            <ListItemText
              secondary={`Created on: ${formatDate(props.folder.createdAt)}`}
              secondaryTypographyProps={{
                className: "text-neutral-500 text-sm",
              }}
            />
            <ListItemText
              secondary={`Updated on: ${formatDate(props.folder.updatedAt)}`}
              secondaryTypographyProps={{
                className: "text-neutral-500 text-sm",
              }}
            />
          </div>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
}

type Props = {
  folder: Folder;
  openSecondaryActionMenu?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

type Folder = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  files: {
    count: number;
  };
};

export default FolderListView;
