/* eslint-disable react/jsx-key */
import { Link, Stack, Typography} from "@mui/material";
import LogoRachi from "../../assets/images/logo.png";

export default function HeaderElement() {
  const descLinks = [
    { link: "#funcionalidades" , description: "Funcionalidades" },
    { link: "#app" , description: "App" },
    { link: "#planos" , description: "Planos" },
    { link: "#Contato" , description: "Contato" },
  ]

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ 
        flexDirection: {
          sm: "column",
          lg: "row",
          md: "row"
        },
        paddingX: {
          md: 12,
          lg: 24,
          xl: 36
        }
      }}
      py={2}
      height={"50px"}
    >
      <img src={LogoRachi} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={8}
      >        
        {
          descLinks.map(item => 
            <Link href={item.link} sx={{ textDecoration: "none"}}>
              <Typography fontWeight={"500"} color={"#6E7275"} fontSize={"18px"}>
                {item.description}
              </Typography>
            </Link>
          )
        }
      </Stack>
    </Stack>
  );
}
