type Props = {
  placeholder: string;
  value: string;
  setValue: (x: string) => void;
};

export default function TextInput({ placeholder, value, setValue }: Props) {
  return (
    <div className="w-full h-10">
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-lg w-full h-full p-2 text-white placeholder-indigo-800 bg-white bg-opacity-5 border-indigo-800 border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
