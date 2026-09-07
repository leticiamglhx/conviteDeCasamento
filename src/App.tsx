import { useState } from "react";

import Abertura from "./pages/abertura/Abertura";
import Convite from "./pages/convite/Convite";

function App() {
  const [conviteAberto, setConviteAberto] = useState(false);

  return (
    <>
      {!conviteAberto ? (
        <Abertura
          onAbrir={() => setConviteAberto(true)}
        />
      ) : (
        <Convite />
      )}
    </>
  );
}

export default App;