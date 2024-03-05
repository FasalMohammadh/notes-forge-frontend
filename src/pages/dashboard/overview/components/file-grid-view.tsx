import FileIcon from "@mui/icons-material/InsertDriveFile";

import {
  DocumentGridViewContent,
  DocumentGridViewActionArea,
  DocumentGridViewIcon,
  DocumentGridViewText,
  DocumentGridViewContainer,
} from "@/pages/dashboard/overview/components/gird-view";

function FileGridView(props: Readonly<Props>) {
  return (
    <DocumentGridViewContainer>
      <DocumentGridViewActionArea>
        <DocumentGridViewIcon>
          <FileIcon fontSize="inherit" color="inherit" />
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

export default FileGridView;
