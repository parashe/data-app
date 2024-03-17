import React from "react";
import "./App.css";
import Themebtn from "./components/Layout/themebtn";
import { ThemeProvider } from "./Context/ThemeContext";
import { Login } from "./components/pages/Login/login";

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  React.useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
    <div className="w-full h-screen flex flex-col  items-center bg-[#5603ad] dark:bg-black">
    <div className="p-2"></div>
  <Themebtn /> {/* Assuming this is your switch button */}
  <div className="p-10"></div> {/* Placeholder for content */}
  <Login /> {/* Assuming this is your login component */}
</div>
    </ThemeProvider>
  );
}

export default App;
