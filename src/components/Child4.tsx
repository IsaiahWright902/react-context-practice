import { useContext } from "react";
import { AppContext } from "./Parent";

export default function Child4() {
  const context = useContext(AppContext);

  if (!context) return null;
  const { count, setCount } = context;

  return (
    <div>
      Child4
      <div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </div>
  );
}
