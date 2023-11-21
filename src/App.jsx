import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
