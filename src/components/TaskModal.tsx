import { useCompletedMutation } from "hooks";
import { useQueryClient } from "react-query";
import { Task } from "types";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { CompleteTag, IncompleteTag } from "./Tag";

interface Props {
  open: boolean;
  onClose: () => void;
  task: Task | null;
}

export default function TaskModal({ open, onClose, task }: Props) {
  const queryClient = useQueryClient();
  const { mutate } = useCompletedMutation(queryClient);

  if (!open || !task) {
    return null;
  }

  const clickHandler = () => mutate(task?._id);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex">
      <div className="relative p-6 bg-white w-full max-w-lg m-auto flex-col flex rounded-lg">
        <h2 className="text-base font-semibold uppercase border-b border-gray-200 py-1">
          {`UUID: ${task._id}`}
        </h2>
        <div className="py-5 text-sm capitalize">{task.title}</div>
        <div className="flex">
          <span className=" font-bold text-base">Status: </span>
          <div className="items-start ml-2">
            {task.completed ? <CompleteTag /> : <IncompleteTag />}
          </div>
        </div>
        <div className="flex container w-2/6 place-self-end justify-between">
          <PrimaryButton title="Complete" onClick={clickHandler} disabled={task.completed} />
          <SecondaryButton title="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
