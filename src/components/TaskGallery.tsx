import { Task } from "types";
import Card from "./Card";

type Props = {
  openHandler: (task: Task) => void;
  data?: Task[];
};

const TaskGallery = ({ data, openHandler }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {data?.map((task) => (
            <Card openHandler={openHandler} task={task} key={task._id}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskGallery;
