import { useState } from "react";

import Abertura from "./pages/abertura/Abertura";
import Convite from "./pages/convite/Convite";

function App() {

  const [abriuConvite, setAbriuConvite] = useState(false);

  if (!abriuConvite) {
    return (
      <Abertura
        onAbrir={() => setAbriuConvite(true)}
      />
    );
  }

  return <Convite />;
}

export default App;