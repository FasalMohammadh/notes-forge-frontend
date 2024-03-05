import FolderIcon from "@mui/icons-material/Folder";

import {
  DocumentGridViewContent,
  DocumentGridViewActionArea,
  DocumentGridViewContainer,
  DocumentGridViewIcon,
  DocumentGridViewText,
} from "@/pages/dashboard/overview/components/gird-view";

function FolderGridView(props: Readonly<Props>) {
  return (
    <DocumentGridViewContainer>
      <DocumentGridViewActionArea>
        <DocumentGridViewIcon>
          <FolderIcon fontSize="inherit" color="inherit" />
        </DocumentGridViewIcon>

        <DocumentGridViewContent>
          <DocumentGridViewText>{props.folder.name}</DocumentGridViewText>
        </DocumentGridViewContent>
      </DocumentGridViewActionArea>
    </DocumentGridViewContainer>
  );
}

type Props = {
  folder: {
    id: string;
    name: string;
  };
};

export default FolderGridView;
