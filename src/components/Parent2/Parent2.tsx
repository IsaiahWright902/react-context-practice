import AppProvider from "./AppContextProvider";
import ChildP from "./ChildP";

export default function Parent2() {
  return (
    <div>
      Parent2
      <div>
        <AppProvider>
          <ChildP />
        </AppProvider>
      </div>
    </div>
  );
}
