import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
    },
    background: {
      default: "#111827",
      paper: "#1F2937",
    },
    text: {
      primary: "#fff",
    },
  },
});

export default theme;

// styles/theme.js
// import { createTheme } from "@mui/material/styles";

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: { main: "#6366F1" },
//     background: { default: "#F3F4F6", paper: "#FFFFFF" },
//     text: { primary: "#111827" },
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#6366F1" },
//     background: { default: "#111827", paper: "#1F2937" },
//     text: { primary: "#fff" },
//   },
// });

