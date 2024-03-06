import Menu, { type MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function FolderActionsMenu(props: Readonly<Props>) {
  return (
    <Menu disablePortal elevation={1} {...props.menuProps}>
      <MenuItem
        className="text-neutral-500 gap-2"
        onClick={props.openEditModal}
      >
        <EditIcon color="inherit" fontSize="small" />
        <Typography>Edit</Typography>
      </MenuItem>
      <MenuItem
        className="text-neutral-500 gap-2"
        onClick={props.openDeleteConfirmationModal}
      >
        <DeleteIcon color="inherit" fontSize="small" />
        <Typography>Delete</Typography>
      </MenuItem>
    </Menu>
  );
}

type Props = {
  menuProps: MenuProps;
  openEditModal: () => void;
  openDeleteConfirmationModal: () => void;
};

export default FolderActionsMenu;
