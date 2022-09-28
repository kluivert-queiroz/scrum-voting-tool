import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
function App() {
  return (
    <MantineProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="room/:roomId" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
