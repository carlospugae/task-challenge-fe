import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <BeatLoader color="#4c51bf" size={"1.5rem"}></BeatLoader>
    </div>
  );
};

export default Spinner;
