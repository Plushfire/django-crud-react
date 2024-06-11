import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to={"/"}>
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
      <Link to={"/tasks-create"}>
        <button className=" bg-emerald-500 px-3 py-2 rounded-lg hover:bg-emerald-700">
          Create Task
        </button>
      </Link>
    </div>
  );
}
