import { Stack, Typography } from "@mui/material";
import HeroImg from "../../assets/images/hero_img.png";
import ButtonBlue from "../subComponents/button";
import ImagemCustom from "../subComponents/imageCustom";

export default function HeroElement() {
  return (
    <Stack
      id="funcionalidades"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxWidth={"100%"}
      bgcolor={"#EFF8FF"}
      height={"640px"}
      sx={{
        paddingX: {
          md: 12,
          lg: 24,
          xl: 36,
        },
      }}
    >
      <Stack width={"500px"}>
        <Typography
          variant="body1"
          fontWeight={"600"}
          color={"#293145"}
          sx={{
            fontSize: {
              xs: 24,
              lg: 36,
              xl: 42,
            },
          }}
        >
          Rachi, <br /> é tudo que você <br /> precisa em um só lugar.
        </Typography>
        <ButtonBlue description={'Cadastre-se'} />
      </Stack>
      <ImagemCustom urlImagem={HeroImg} />
    </Stack>
  );
}
