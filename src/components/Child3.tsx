import { useContext, useState } from "react";
import Child4 from "./Child4";
import { AppContext } from "./Parent";

export default function Child3() {
  const context = useContext(AppContext);
  const [tempText, setTempText] = useState<string>("");

  if (!context) return null;
  const { setText } = context;

  const handleSubmit = () => {
    setText(tempText);
    setTempText("");
  };

  return (
    <div>
      Child3
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <input
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          placeholder="Enter Text"
        />
        <button onClick={handleSubmit}>Update Text</button>
      </div>
      <div>
        <Child4 />
      </div>
    </div>
  );
}
