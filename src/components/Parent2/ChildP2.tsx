import { ItemType, useAppContext } from "./AppContextProvider";
import ChildP3 from "./ChildP3";

export default function ChildP2() {
  const context = useAppContext();

  return (
    <div>
      ChildP2
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {context?.items.length ? (
          context.items.map((item, idx) => <Item key={idx} item={item} />)
        ) : (
          <p>No Items Yet</p>
        )}
      </div>
      <div>
        <ChildP3 />
      </div>
    </div>
  );
}

function Item({ item }: { item: ItemType }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        border: "2px solid black",
      }}
    >
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.rating}</div>
    </div>
  );
}
