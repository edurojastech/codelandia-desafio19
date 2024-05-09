/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export default function ButtonBlue({ description }) {
  return (
    <Button
      sx={{
        padding: "16px 36px !important",
        width: "250px",
        marginTop: 4,
        marginBottom: 4,
        borderRadius: "50px",
        backgroundColor: "#0F9AFE",
        textTransform: "capitalize",
        fontSize: "20px",
        color: "#fff",
        ":hover": {
          color: "#0F9AFE",
          backgroundColor: "#fff",
        },
      }}
    >
      { description }
    </Button>
  );
}
