import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/private-theming";
import Theme from "./styles/Styles"


function App() {

  return (
    <ThemeProvider theme={Theme}>
     <Navbar />
      </ThemeProvider>

)
};

export default App;