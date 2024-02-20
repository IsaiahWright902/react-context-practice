import Parent from "./components/Parent";
import Parent2 from "./components/Parent2/Parent2";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        gap: "25px",
      }}
    >
      <Parent />
      <Parent2 />
    </div>
  );
}
