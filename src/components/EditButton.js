export default function EditButton({openModal, id}) {
    return (
      <div
        className="cursor-pointer rounded border border-gray-400 px-4 py-1 text-black hover:bg-gray-200 active:scale-95"
        id={id}
        onClick={openModal}
      >
        Edit
      </div>
    );
  }