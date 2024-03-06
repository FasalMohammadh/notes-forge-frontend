import { useBoolean } from "ahooks";

import { useState } from "react";

import NewFolderForm from "@/pages/dashboard/components/popups/new-folder-form";
import EditFolderForm from "@/pages/dashboard/components/popups/edit-folder-form";
import PrimaryActions from "@/pages/dashboard/overview/components/primary-actions";
import FolderViewControlActions from "@/pages/dashboard/overview/components/folder-view-control-actions";
import RenderFolders, {
  FolderViewType,
} from "@/pages/dashboard/overview/components/render-folders";

function OverviewPage() {
  const [folderView, setFolderView] = useState<FolderViewType>("GRID");
  const [chooseFolderId, setChooseFolderId] = useState<null | string>(null);

  const [
    isNewFolderModalOpen,
    { setTrue: openNewFolderModal, setFalse: closeNewFolderModal },
  ] = useBoolean(false);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Overview</h1>
      <p className="text-neutral-500">Notes</p>

      <div className="flex justify-end">
        <FolderViewControlActions setFolderView={setFolderView} />
        <PrimaryActions openNewFolderModal={openNewFolderModal} />
      </div>
      <RenderFolders view={folderView} />

      {chooseFolderId && (
        <EditFolderForm
          folderId={chooseFolderId}
          dialogProps={{
            open: !!chooseFolderId,
            onClose: () => setChooseFolderId(null),
          }}
        />
      )}

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
