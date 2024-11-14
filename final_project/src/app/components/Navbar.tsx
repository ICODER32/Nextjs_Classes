import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function Navbar() {
  return (
    <Menubar>
      <MenubarMenu>
        <Link href={"/"}>
          <MenubarTrigger>Headlines</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/business"}>
          <MenubarTrigger>Business</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/sports"}>
          <MenubarTrigger>Sports</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/entertainment"}>
          <MenubarTrigger>Entertainment</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
