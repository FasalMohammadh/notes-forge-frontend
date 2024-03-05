import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import ListIcon from "@mui/icons-material/List";
import GridIcon from "@mui/icons-material/Grid3x3";
import NewFolderIcon from "@mui/icons-material/CreateNewFolder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import { useState } from "react";

import NewFolderForm from "@/pages/dashboard/components/popups/new-folder-form";
import RenderFolders, {
  FolderView,
} from "@/pages/dashboard/overview/components/render-folders";
import { useBoolean } from "ahooks";

function FolderView(
  props: Readonly<{
    setFolderView: React.Dispatch<React.SetStateAction<FolderView>>;
  }>
) {
  function handleClickViewButton(view: FolderView) {
    return () => {
      props.setFolderView(view);
    };
  }

  return (
    <Toolbar disableGutters className="*:list-none" component="menu">
      <li>
        <Button
          startIcon={<GridIcon />}
          onClick={handleClickViewButton("GRID")}
        >
          Grid view
        </Button>
      </li>
      <li>
        <Button
          startIcon={<ListIcon />}
          onClick={handleClickViewButton("LIST")}
        >
          List view
        </Button>
      </li>
    </Toolbar>
  );
}

function PrimaryActions(props: { openNewFolderModal: () => void }) {
  return (
    <Toolbar disableGutters className="*:list-none" component="menu">
      <li>
        <Button
          startIcon={<NewFolderIcon />}
          onClick={props.openNewFolderModal}
        >
          New Folder
        </Button>
      </li>
      <li>
        <Button startIcon={<NoteAddIcon />}>New Note</Button>
      </li>
    </Toolbar>
  );
}

function OverviewPage() {
  const [folderView, setFolderView] = useState<FolderView>("GRID");
  const [
    isNewFolderModalOpen,
    { setTrue: openNewFolderModal, setFalse: closeNewFolderModal },
  ] = useBoolean(false);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Overview</h1>
      <p className="text-neutral-500">Notes</p>

      <div className="flex justify-end">
        <FolderView setFolderView={setFolderView} />
        <PrimaryActions openNewFolderModal={openNewFolderModal} />
      </div>
      <RenderFolders view={folderView} />

      <NewFolderForm
        dialogProps={{
          open: isNewFolderModalOpen,
          onClose: closeNewFolderModal,
        }}
      />
    </div>
  );
}

export default OverviewPage;
