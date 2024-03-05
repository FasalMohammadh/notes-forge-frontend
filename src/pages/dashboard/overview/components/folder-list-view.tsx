import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import { formatDate } from "@/library/format-date";

function FolderListView(props: Readonly<Props>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ListItem
        disableGutters
        disablePadding
        className="border border-solid border-neutral-300 bg-white rounded-lg hover:bg-neutral-100"
        secondaryAction={
          <IconButton onClick={handleClick}>
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
                secondaryTypographyProps={{
                  className: "text-neutral-500 text-sm",
                }}
                secondary={`Created on: ${formatDate(props.folder.createdAt)}`}
              />
              <ListItemText
                secondaryTypographyProps={{
                  className: "text-neutral-500 text-sm",
                }}
                secondary={`Updated on: ${formatDate(props.folder.updatedAt)}`}
              />
            </div>
          </Stack>
        </ListItemButton>
      </ListItem>

      <Menu
        open={!!anchorEl}
        disablePortal
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        elevation={1}
      >
        <MenuItem className="text-neutral-500 gap-2">
          <EditIcon color="inherit" fontSize="small" />
          <Typography>Edit</Typography>
        </MenuItem>
        <MenuItem className="text-neutral-500 gap-2">
          <DeleteIcon color="inherit" fontSize="small" />
          <Typography>Delete</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

type Props = {
  folder: Folder;
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
