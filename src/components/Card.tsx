import { Task } from "types";
import { DialogButton } from "./Buttons";

type Props = {
  openHandler: (task: Task) => void;
  task: Task;
};

const Card = ({ openHandler, task }: Props) => {
  const clickHandler = () => openHandler(task);

  return (
    <div className="flex flex-col bg-white rounded-lg p-4  border-gray-200 border-2">
      <div className="flex flex-col items-start">
        <h4 className="text-l font-semibold capitalize mb-4">{task.title}</h4>
        <div className="container flex justify-end">
          <DialogButton title="Open" onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Card;
