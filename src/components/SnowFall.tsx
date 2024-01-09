export default function SnowFall() {
  return (
    <div>
      {new Array(10).fill(0).map((item: number, idx: number) => (
        <div key={idx} className="snowflake">
          ❅
        </div>
      ))}
    </div>
  );
}
