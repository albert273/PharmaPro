import { Button, Container, Stack, useTheme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const theme = useTheme();
  const onSubmit = async (data) => {
    try {
      let res = await axios.post("", data);
      console.log(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  console.log(watch("example"));
  return (
    <>
      <Container
        sx={{
          width: { md: "45%", xs: "100%" },
          border: { xs: "none", md: " 2px solid window.theme.palette" },
          borderRadius: "30px",
          backgroundColor: {xs: "white", md:theme.palette.favColor.main},
          boxShadow: {xs: "none", md: ".5px .5px 15px "},  
          padding: {xs: "0", md: "30px"},

        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginX: "auto",
            marginBottom: "35px",
            padding: "15px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
            borderBottom: "2px solid theme.palette.text.primary",
            width: "50%",
          }}
        >
          Login
        </Typography>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <Stack gap={3}>
            <TextField
              sx={{ flex: 1 }}
              type="email"
              id="Email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.email)}
              helperText={errors.email ? "You should enter your Email" : null}
              {...register("Email", {
                pattern: regEmail,
                required: true,
              })}
            />
            <TextField
              sx={{ flex: 1 }}
              type="password"
              id="Password"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.password)}
              helperText={
                errors.password ? "You should enter your Password" : null
              }
              {...register("Password", {
                pattern: regPassword,
                required: true,
              })}
            />
          </Stack>

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "15rem",
              height: "3rem",
              display: "flex",
              ml: "auto",
              mr: "auto",
              alignItems: "center",
              background: theme.palette.primary.main,
              fontSize: "1.2rem",
              "&:hover": {
                color: theme.palette.primary.main,
                backgroundColor: "#fff",
                fontWeight: "bold",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
