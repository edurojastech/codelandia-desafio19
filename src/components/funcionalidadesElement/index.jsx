import { Stack, Typography } from "@mui/material";
import userAddImg from "../../assets/images/userAdd.png";
import security from "../../assets/images/segurity.png";
import emojiHappy from "../../assets/images/happy-emoji.png";


export default function FuncionalidadesElement() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={40}
      py={12}
      sx={{
        paddingX: {
          md: 12,
          lg: 24,
          xl: 36,
        },
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <img src={userAddImg} alt="" width={60} />
        <Typography
          variant="h5"
          fontWeight={"600"}
          fontSize={"18px"}
          color={"#293145"}
          textAlign={"center"}
        >
          Crie conexões
        </Typography>
        <Typography variant="body1" color={"#6E7275"} textAlign={"center"} width={'200px'}>
          Lorem ipsum dolor sit amet, consecteteu.
        </Typography>
      </Stack>

      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <img src={security} alt="" width={60} />
        <Typography
          variant="h5"
          fontWeight={"600"}
          fontSize={"18px"}
          color={"#293145"}
          textAlign={"center"}
        >
          Crie conexões
        </Typography>
        <Typography variant="body1" color={"#6E7275"} textAlign={"center"} width={'200px'}>
          Lorem ipsum dolor sit amet, consecteteu.
        </Typography>
      </Stack>

      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <img src={emojiHappy} alt="" width={60} />
        <Typography
          variant="h5"
          fontWeight={"600"}
          fontSize={"18px"}
          textAlign={"center"}
          color={"#293145"}
        >
          Crie conexões
        </Typography>
        <Typography variant="body1" color={"#6E7275"} textAlign={"center"} width={'200px'}>
          Lorem ipsum dolor sit amet, consecteteu.
        </Typography>
      </Stack>
    </Stack>
  );
}
