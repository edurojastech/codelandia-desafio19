import { Button, Stack, Typography } from "@mui/material";
import HeroImg from "../../assets/images/hero_img.png";

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
        <Button
          sx={{
            padding: '16px 36px !important',
            width: '250px',
            marginTop: 4,
            marginBottom: 4,
            borderRadius: "50px",
            backgroundColor: "#0F9AFE",
            textTransform: 'capitalize',
            fontSize: '20px',
            color: "#fff",
            ':hover':{
              color: "#0F9AFE",
              backgroundColor: "#fff",
            }
          }}
        >
          Cadastrar-se
        </Button>
      </Stack>
      <Stack
        sx={{
          width: {
            md: "360px",
            lg: "360px",
            xl: "550px",
          },
        }}
      >
        <img src={HeroImg} alt="hero" width={"100%"} />
      </Stack>
    </Stack>
  );
}
