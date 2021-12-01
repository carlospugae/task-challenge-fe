type Props = {
  title: string;
  onClick: any;
  disabled?: boolean;
};

export const DialogButton = ({ title, onClick, disabled }: Props) => (
  <button
    className="border border-blue-500 bg-blue-500  text-white rounded-md px-2 py-1  transition duration-500 ease select-none hover:bg-blue-700  focus:outline-none focus:shadow-outline text-xs"
    onClick={onClick}
    disabled={disabled}>
    {title}
  </button>
);

export const PrimaryButton = ({ title, onClick, disabled }: Props) => (
  <button
    className={`border ${
      disabled
        ? "bg-green-500 text-white opacity-50 cursor-not-allowed"
        : "border-green-500 bg-green-500 text-white hover:bg-green-700"
    } rounded-md px-2 py-1  transition duration-500 ease select-none focus:outline-none focus:shadow-outline text-xs`}
    onClick={onClick}
    disabled={disabled}>
    {title}
  </button>
);

export const SecondaryButton = ({ title, onClick }: Props) => (
  <button
    className="bg-transparent border-2 border-gray-200 text-gray-400 text-xs px-2 py-1  rounded-lg transition-colors duration-700 transform hover:border-gray-500 hover:text-gray-500 focus:border-4 focus:border-gray-500"
    onClick={onClick}>
    {title}
  </button>
);
