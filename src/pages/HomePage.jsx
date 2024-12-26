import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Tasks Manager
      </Typography>
      <Typography variant="h6" paragraph>
        Tasks Manager is a simple and efficient tool to help you manage your
        daily tasks. You can register, log in, and start organizing your tasks
        right away.
      </Typography>
      <Box my={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          style={{ marginRight: "10px" }}
        >
          Register
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/login">
          Login
        </Button>
      </Box>
      <Typography variant="body2" color="textSecondary">
        Developed by [Your Name]. All rights reserved.
      </Typography>
    </Container>
  );
};

export default HomePage;
