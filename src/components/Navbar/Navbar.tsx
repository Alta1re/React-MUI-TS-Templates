import React, { useState, useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  Container,
  Menu,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";

import ThemeSwitch from "../CustomButtons/ThemeSwitch";

import { ThemeContext } from "../../context/themeContext";
import { LanguageContext } from "../../context/languageContext";

// icons
import deIcon from "../../assets/icons/germany.png";
import ukIcon from "../../assets/icons/united-kingdom.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [themeMode, setThemeMode] = useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { toggleTheme } = useContext(ThemeContext);
  const { setLanguage } = useContext(LanguageContext);
  const switchThemeMode = () => {
    setThemeMode((prev) => !prev);
    toggleTheme();
  };

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                fontFamily: "Charmonman-bold",
                color: "white",
                textShadow: "2px 1px 3px black",
                fontSize: "2rem",
                padding: "5px",
              },
            }}
          >
            hager-web
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "none",
                fontFamily: "Charmonman-bold",
                color: "white",
                textShadow: "2px 1px 3px black",
                fontSize: "2rem",
                padding: "5px",
              },
            }}
          >
            hager-web
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div
            style={{
              display: "flex",
              width: 200,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <IconButton onClick={() => setLanguage("de")}>
                <img src={deIcon} width={28} />
              </IconButton>
              <IconButton onClick={() => setLanguage("en")}>
                <img src={ukIcon} width={28} />
              </IconButton>
            </div>
            <ThemeSwitch checked={themeMode} onChange={switchThemeMode} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
