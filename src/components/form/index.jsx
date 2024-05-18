import { useCreatePost } from "../../hook/useCreatePost";
import CustomInput from "./input";

const Form = () => {
  const { values, onChange, handleSubmit, status, inputLists } =
    useCreatePost();
  return (
    <form
      className="w-80 py-6 space-y-4 bg-gray-200 p-2"
      onSubmit={handleSubmit}
    >
      {inputLists.map((input) => (
        <CustomInput
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          value={values[input.name]}
          placeholder={input.placeholder}
          onChange={onChange}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-500 py-2 px-4 rounded-md w-full text-white"
      >
        {status === "pending" ? "Loading..." : " Submit"}
      </button>
    </form>
  );
};

export default Form;
