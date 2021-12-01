import Spinner from "components/Spinner";
import TaskGallery from "components/TaskGallery";
import TaskModal from "components/TaskModal";
import TasksForm from "components/TasksForm";
import Error from "components/Error";
import { useFetchTasks } from "hooks";
import { useEffect, useState } from "react";
import { Task } from "types";

const Home = () => {
  const [qty, setQty] = useState<number>(3);
  const { isFetching, isError, data, refetch } = useFetchTasks(qty);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const closeHandler = (): void => {
    setSelectedTask(null);
    setShowModal(false);
  };

  const openHandler = (task: Task): void => {
    setSelectedTask(task);
    setShowModal(true);
  };

  useEffect(() => {
    const updatedTask = data?.data?.filter((task) => task._id === selectedTask?._id)[0];

    if (updatedTask) {
      setSelectedTask(updatedTask);
    }
  }, [data, selectedTask]);

  useEffect(() => {
    if (qty) {
      refetch();
    }
  }, [qty, refetch]);

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <TaskModal task={selectedTask} open={showModal} onClose={closeHandler} />
      <div className="flex flex-col items-center pt-6 ">
        <TasksForm disabled={isFetching} submitHandler={setQty} qty={qty} />
      </div>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="flex flex-1 flex-col items-center py-2 px-0">
          <TaskGallery data={data?.data} openHandler={openHandler}></TaskGallery>
        </div>
      )}
    </>
  );
};

export default Home;
