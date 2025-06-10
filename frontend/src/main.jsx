// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

//work

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

//new

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { lightTheme, darkTheme } from "./styles/theme";
// import { BrowserRouter } from "react-router-dom";

// function Root() {
//   const [isDark, setIsDark] = useState(true);

//   const toggleTheme = () => setIsDark((prev) => !prev);

//   return (
//     <BrowserRouter>
//       <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
//         <CssBaseline />
//         <App toggleTheme={toggleTheme} isDarkMode={isDark} />
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );
