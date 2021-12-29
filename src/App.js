import "./App.css";
import MapApp from "./MapApp";

import ErrorProvider from "./Context/ErrorContext";

function App() {
  return (
    <ErrorProvider>
      <MapApp />
    </ErrorProvider>
  );
}

export default App;
