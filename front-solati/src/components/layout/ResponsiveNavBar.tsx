import {Navbar, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

// icons
import solati from "../../images/software-cobranzas_bc.png";


const ResponsiveNavBar = () => {
  return (
    <Navbar position="static">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Image
          isZoomed
          alt="Image with Zoom"
          src={solati}
          width={240}
        />
      </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default ResponsiveNavBar;