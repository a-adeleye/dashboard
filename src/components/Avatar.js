import avi from "../avi.png";

export default function Avatar() {
    return (
      <div>
        <img
          className="mx-auto h-12 w-20 h-auto rounded-full"
          src={avi}
          alt="Workflow"
        />
      </div>
    );
  }