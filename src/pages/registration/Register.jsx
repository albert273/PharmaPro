import {
  Alert,
  Button,
  Container,
  Snackbar,
  Stack,
  useTheme,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import SignpostIcon from "@mui/icons-material/Signpost";
import MedicationLiquidSharpIcon from "@mui/icons-material/MedicationLiquidSharp";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = async (data) => {
    handleClick();
    data.preventDefault();
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
          width: { md: "75%", xs: "100%" },
          border: { xs: "0", md: " 2px" },
          borderRadius: "30px",
          // @ts-ignore
          backgroundColor: {xs: "white", md: theme.palette.favColor.main},
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
            borderBottom: "2px solid ",
            width: "90%",
          }}
        >
          Registration
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
          <Stack gap={2} sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
            <TextField
              type="text"
              id="FirstName"
              label="FirstName"
              error={Boolean(errors.firstName)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              helperText={
                errors.firstName ? "You should enter your full Name" : null
              }
              {...register("FirstName", {
                required: true,
              })}
              sx={{ flex: 1 }}
            />
            <TextField
              type="text"
              id="LastName"
              label="LastName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.lastName)}
              helperText={
                errors.lastName ? "please enter your Last Name" : null
              }
              {...register("LastName", {
                required: true,
              })}
              sx={{ flex: 1 }}
            />
          </Stack>

          <TextField
            id="number"
            label="Number"
            error={Boolean(errors.number)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: theme.palette.primary.main}} />
                </InputAdornment>
              ),
            }}
            helperText={
              errors.number ? "please enter your whatsApp Number" : null
            }
            {...register("number", {
              required: true,
              pattern: phoneRegExp,
            })}
          />
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
            {...register("email", {
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
          <Stack sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}} gap={2}>
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="City"
              label="City"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.city)}
              helperText={errors.city ? "You should enter your city" : null}
              {...register("City", {
                required: true,
              })}
            />
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="Street"
              label="Street"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SignpostIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.Street)}
              helperText={errors.Street ? "You should enter your Street" : null}
              {...register("Street", {
                required: true,
              })}
            />
          </Stack>
          <TextField
            sx={{ flex: 1 }}
            type="text"
            id="ChronicDiseases"
            label="Chronic Diseases"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MedicationLiquidSharpIcon sx={{ color: theme.palette.primary.main }} />
                </InputAdornment>
              ),
            }}
            {...register("ChronicDiseases", {})}
          />

            <TextField
              type="number"
              id="Age"
              label="Age"
              error={Boolean(errors.age)}
              helperText={errors.age ? "You must be older " : null}
              {...register("Age", {
                required: true,
                min: 15,
                max: 100,
              })}
              sx={{width: "100px"}}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: {xs: "100%", md: "70%"},
                height: "3rem",
                marginX: "auto",
                justifyContent: "center",
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
              submit
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity="info"
                sx={{ width: "100%" }}
              >
                Complete the registration
              </Alert>
            </Snackbar>
        </Box>
      </Container>
    </>
  );
}
