/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

export default function ImagemCustom({ urlImagem, xl = '550px' }) {
  return (
    <Stack
      sx={{
        width: {
          md: "360px",
          lg: "360px",
          xl: xl,
        },
      }}
    >
      <img src={urlImagem} alt="hero" width={"100%"} />
    </Stack>
  );
}
