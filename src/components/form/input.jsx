/* eslint-disable react/prop-types */
const CustomInput = ({ type, name, onChange, value, placeholder, label }) => {
  const className = 'border border-gray-400 rounded-md w-full p-1';
  return (
    <div>
      <label htmlFor="body">
        {label}
        {type !== 'textarea' ? (
          <input
            id={name}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        ) : (
          <textarea
            name={name}
            onChange={onChange}
            value={value}
            id={name}
            className={className}
            placeholder={placeholder}
          ></textarea>
        )}
      </label>
    </div>
  );
};

export default CustomInput;
