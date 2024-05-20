import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export default function Nav() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">RANDOM USER</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Switch
            defaultSelected
            size="lg"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
