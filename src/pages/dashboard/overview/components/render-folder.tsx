import ListItemGrid from "@/pages/dashboard/overview/components/list-item-grid";
import ListItemFolder from "@/pages/dashboard/overview/components/list-item-folder";
import FolderActionsMenu from "@/pages/dashboard/overview/components/folder-actions-menu";
import type { FolderViewType } from "@/pages/dashboard/overview/components/render-folders";

import { useState } from "react";

type Folder = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  files: {
    count: number;
  };
};

type Props = {
  view: FolderViewType;
  folder: Folder;
};

function RenderFolder(props: Readonly<Props>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function openSecondaryActionMenu(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setAnchorEl(event.currentTarget);
  }

  const Item = props.view === "LIST" ? ListItemFolder : ListItemGrid;

  return (
    <>
      <Item
        folder={props.folder}
        openSecondaryActionMenu={openSecondaryActionMenu}
      />

      <FolderActionsMenu
        openEditModal={() => {}}
        openDeleteConfirmationModal={() => {}}
        menuProps={{
          anchorEl,
          open: !!anchorEl,
          onClose: () => setAnchorEl(null),
        }}
      />
    </>
  );
}

export default RenderFolder;
