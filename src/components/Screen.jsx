export default function Screen({ children }) {
  return (
    <div className="screen-outer">
      <div className="screen">{children}</div>
    </div>
  );
}