import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  qty: string;
};

type Props = {
  disabled: boolean;
  submitHandler: (qty: number) => void;
  qty: number;
};

const schema = yup
  .object({
    qty: yup.number().required().typeError("Please enter a number"),
  })
  .required();

export default function TasksForm({ disabled, submitHandler, qty }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormValues> = ({ qty }: FormValues) => {
    submitHandler(Number(qty));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Controller
          name="qty"
          control={control}
          render={({ field }) => (
            <input
              className={`rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 bg-white outline-none ${
                errors.qty ? "border-red-500" : "border-gray-200 "
              }`}
              placeholder="Number of Notes"
              {...field}
            />
          )}
        />

        <input
          type="submit"
          className="p-2 rounded-r-lg bg-green-400  text-gray-800 font-bold uppercase border-green-500 border-t border-b border-r"
          value="Go!"
          disabled={disabled}
        />
      </form>
      {errors.qty ? <p className="text-red-500">{errors.qty?.message}</p> : null}
    </>
  );
}
