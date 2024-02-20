import { useState } from "react";
import { useAppContext } from "./AppContextProvider";

export default function ChildP4() {
  const context = useAppContext();

  const [tempName, setTempName] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [tempRating, setTempRating] = useState(0);

  const handleReset = () => {
    setTempName("");
    setTempDescription("");
    setTempRating(0);
  };

  const handleAddItem = () => {
    context?.addItem({
      name: tempName,
      description: tempDescription,
      rating: tempRating,
    });

    handleReset();
  };

  return (
    <div style={{ paddingTop: "10px" }}>
      ChildP4
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <input
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          value={tempDescription}
          onChange={(e) => setTempDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <input
          value={tempRating}
          onChange={(e) => setTempRating(parseInt(e.target.value))}
          placeholder="Enter Rating"
          type="number"
          min={0}
          max={5}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}
