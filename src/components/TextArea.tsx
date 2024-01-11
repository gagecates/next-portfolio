type Props = {
  placeholder: string;
  value: string;
  setValue: (x: string) => void;
};

export default function TextArea({ placeholder, value, setValue }: Props) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className="w-full h-48 rounded-lg p-2 text-white placeholder-indigo-800 bg-white bg-opacity-5 border-indigo-800 border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
