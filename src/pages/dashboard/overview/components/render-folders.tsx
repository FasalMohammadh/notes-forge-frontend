import RenderFolder from "@/pages/dashboard/overview/components/render-folder";

const folders = [
  {
    id: "1",
    name: "School Notes",
    updatedAt: new Date(),
    createdAt: new Date(),
    files: {
      count: 5,
    },
  },
  {
    id: "2",
    name: "Personal Notes",
    updatedAt: new Date(),
    createdAt: new Date(),
    files: {
      count: 5,
    },
  },
  {
    id: "3",
    name: "Collage Notes",
    updatedAt: new Date(),
    createdAt: new Date(),
    files: {
      count: 5,
    },
  },
];

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
        <RenderFolder key={folder.id} view={props.view} folder={folder} />
      ))}
    </menu>
  );
}

type FolderViewType = "GRID" | "LIST";

type Props = {
  view: FolderViewType;
};

export type { FolderViewType };
export default RenderFolders;
