import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { validateEmail, validatePassword } from "../utils/validation";
import { loginWithEmail } from "../services/authService";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be 10 characters or less");
      return;
    }

    try {
      await loginWithEmail(email, password);
      // redirect to dashboard or store token
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        mx: "auto",
        mt: 10,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          (window.location.href = "http://localhost:5000/auth/google")
        }
      >
        Sign in with Google
      </Button>
    </Box>
  );
}
export default LoginForm;