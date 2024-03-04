import Folder from "@/pages/dashboard/overview/components/folder";

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

function RenderFolders() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
      {folders.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
    </div>
  );
}

export default RenderFolders;
