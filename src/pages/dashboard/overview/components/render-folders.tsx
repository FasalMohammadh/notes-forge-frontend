import FolderGridView from "@/pages/dashboard/overview/components/folder-grid-view";
import FolderListView from "@/pages/dashboard/overview/components/folder-list-view";

const folders = [
  {
    id: "1",
    name: "School Notes",
  },
  {
    id: "2",
    name: "Personal Notes",
  },
  {
    id: "3",
    name: "Collage Notes",
  },
];

function RenderFolder(
  props: Readonly<{
    view: FolderView;
    folder: {
      id: string;
      name: string;
    };
  }>
) {
  if (props.view === "LIST") {
    return (
      <FolderListView
        folder={{
          ...props.folder,
          createdAt: new Date(),
          updatedAt: new Date(),
          files: { count: 10 },
        }}
      />
    );
  }

  return <FolderGridView folder={props.folder} />;
}

function RenderFolders(props: Readonly<Props>) {
  return (
    <menu
      className={`grid p-0 ${
        props.view === "LIST"
          ? "grid-flow-row gap-2"
          : "grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5"
      }`}
    >
      {folders.map((folder) => (
        <RenderFolder key={folder.id} folder={folder} view={props.view} />
      ))}
    </menu>
  );
}

type FolderView = "GRID" | "LIST";

type Props = {
  view: FolderView;
};

export type { FolderView };
export default RenderFolders;
