import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarWrapper,
} from "@material-tailwind/react";
import { TableCard } from "../components/TableCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minecraft Server Status [WIP] </title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar navbar>
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarBrand>Minecraft [WIP] </NavbarBrand>
          </NavbarWrapper>
        </NavbarContainer>
      </Navbar>
      <div className="pt-14 pb-28 px-3 md:px-8 h-auto" />

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard />
          </div>
        </div>
      </div>
    </>
  );
}
