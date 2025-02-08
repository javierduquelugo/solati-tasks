import React from 'react';
import { Grid, Box, Stack, Link } from "@mui/material/";
import { Box } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import NE from "../images/NotExist.png";

const NotExist = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ p: 4, flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Stack spacing={3}>
          <Box>
            <img
              src={NE}
              alt="Error 404"
              style={{ height: "19rem", width: "26rem" }}            
            />
          </Box>
          <Link component="button" onClick={() => navigate(-1)} underline="hover" color="#007bff">
            Volver atrás
          </Link>
        </Stack>
      </Grid>
    </Box>
  )
}

export default NotExist