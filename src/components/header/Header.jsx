import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Button,
  Stack,
  Typography,
  MenuItem,
  Menu,
  useTheme,
} from "@mui/material";
import { themes } from "../../pages/theme";
import NavBar from "./NavBar";
import { useState } from "react";
import "./header.css";

const Header = ({ setSelectedTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Toolbar variant="dense">
            <Link to="/">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "bolder",
                    fontSize: { xs: "1rem", sm: "1.3", md: "1.5rem" },
                    display: {xs: "none", sm: "block"}

                  }}
                >
                  Pharma
                </Typography>
                <img
                  src="/public/image/pngegg (1).png"
                  alt="logo"
                  style={{ width: "50px" }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "bolder",
                    fontSize: { xs: "1rem", sm: "1.3", md: "1.5rem" },
                    display: {xs: "none", sm: "block"}
                  }}
                >
                  Pro
                </Typography>
              </IconButton>
            </Link>
            <Box flexGrow={1}></Box>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: {xs: "2px", md: 2} }}
              >
                <AutoAwesomeIcon
                  sx={{ fontSize: { xs: ".8rem", sm: ".8rem", md: "1.2rem" } }}
                />
                <Typography
                  sx={{
                    ml: "2px",
                    fontSize:"1.2rem" ,
                    display: {xs: "none", sm: "block"}
                  }}
                >
                  Theme
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: { xs: ".8rem", sm: ".8rem", md: "1.2rem" } }}
                />
              </IconButton>

              <Menu
                className="List"
                id="theme-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{}}
              >
                {themes.map((theme) => (
                  <MenuItem
                    key={theme.id}
                    onClick={() => {
                      localStorage.setItem("theme", theme.id);
                      handleThemeChange(theme.id);
                    }}
                    sx={{gap: {xs: "1rem", md: "4rem"}}}
                  >
                    <Stack direction={"row"} sx={{gap: {xs: "1rem", md: "4rem"}}}>
                      <Box sx={{fontSize: {xs: ".8rem", md: "1.2rem"}}}>{theme.icon}</Box>
                      <Box sx={{fontSize: {xs: ".8rem", md: "1.2rem"}}}>{theme.name}</Box>
                    </Stack>
                  </MenuItem>
                ))}
              </Menu>
              <Link to="/register">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    marginRight: "10px",
                    color: theme.palette.primary.main,
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    "&:hover": { color: "#fff" },
                    fontSize: { xs: ".8rem", sm: ".8rem", md: "1rem" },
                  }}
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: "#0097a7",
                    "&:hover": { backgroundColor: "#fff", color: "#0097a7" },
                    fontSize: { xs: ".8rem", sm: ".8rem", md: "1rem" },
                  }}
                >
                  login
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <NavBar />
    </Box>
  );
};

export default Header;
