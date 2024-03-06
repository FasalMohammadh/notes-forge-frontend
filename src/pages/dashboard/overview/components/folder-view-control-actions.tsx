import Button from "@mui/material/Button";
import ListViewIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { FolderViewType } from "@/pages/dashboard/overview/components/render-folders";

type Props = {
  setFolderView: React.Dispatch<React.SetStateAction<FolderViewType>>;
};

function FolderViewControlActions(props: Readonly<Props>) {
  function handleClickViewButton(view: FolderViewType) {
    return () => {
      props.setFolderView(view);
    };
  }

  return (
    <menu className="*:list-none flex items-center p-0 gap-3">
      <li>
        <Button
          startIcon={<GridViewIcon />}
          onClick={handleClickViewButton("GRID")}
        >
          Grid view
        </Button>
      </li>
      <li>
        <Button
          startIcon={<ListViewIcon />}
          onClick={handleClickViewButton("LIST")}
        >
          List view
        </Button>
      </li>
    </menu>
  );
}

export default FolderViewControlActions;
