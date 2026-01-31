// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./home/Home";
import Auth from "./Auth";
import Memories from "./memories/Memories";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Root Layout */}
        <Route path="/" element={<RootLayout />}>

          {/* Child routes */}
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="memories" element={<Memories />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
