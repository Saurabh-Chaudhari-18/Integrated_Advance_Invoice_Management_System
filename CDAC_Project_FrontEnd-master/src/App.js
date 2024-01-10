import RoutesIndex from "./routes/routeIndex";
import CircularProgress from "@mui/material/CircularProgress";
import "./assets/styles/App/app.css";
import { useSelector } from "react-redux";


function App() {
  const loader = useSelector((states) => states.loader.value);
  console.log(loader);
  
  return (
    <>
      <div
        className={
          loader
            ? "circular_progress_container"
            : "circular_progress_container hide_loader"
        }
      >
        <CircularProgress />
      </div>

      <RoutesIndex />
    </>
  );
}

export default App;
