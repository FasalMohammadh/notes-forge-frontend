import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import CloseIcon from "@mui/icons-material/Close";

function EditFolderForm(props: Readonly<Props>) {
  return (
    <Dialog
      fullWidth
      disablePortal
      maxWidth="xs"
      component="form"
      {...props.dialogProps}
    >
      <DialogTitle>New Folder</DialogTitle>
      <IconButton
        aria-label="close"
        className="absolute right-2 top-2 text-neutral-500"
        onClick={props.dialogProps.onClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText color="GrayText">Folder name</DialogContentText>
        <TextField size="small" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" disableElevation>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  folderId: string;
  dialogProps: DialogProps & {
    onClose: () => void;
  };
};

export default EditFolderForm;
