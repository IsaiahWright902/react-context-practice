import AppProvider from "./AppContextProvider";
import ChildP from "./ChildP";

export default function Parent2() {
  return (
    <div>
      <h1> Parent2</h1>
      <div>
        <AppProvider>
          <ChildP />
        </AppProvider>
      </div>
    </div>
  );
}
