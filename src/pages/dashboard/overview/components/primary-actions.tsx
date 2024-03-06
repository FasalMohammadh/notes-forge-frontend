import Button from "@mui/material/Button";

import NewFolderIcon from "@mui/icons-material/CreateNewFolder";

type Props = {
  openNewFolderModal: () => void;
};

function PrimaryActions(props: Readonly<Props>) {
  return (
    <menu className="*:list-none p-0 flex items-center">
      <li>
        <Button
          startIcon={<NewFolderIcon />}
          onClick={props.openNewFolderModal}
        >
          New Folder
        </Button>
      </li>
    </menu>
  );
}

export default PrimaryActions;
