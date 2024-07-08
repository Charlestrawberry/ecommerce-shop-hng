import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavigationDrop = ({ title, sectionOne, sectionTwo, SectionThree }) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <h4 className="font-medium">{title}</h4>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <ul className="w-[25%] mx-44">
                  <li>{sectionOne}</li>
                  <li>{sectionTwo}</li>
                  <li>{SectionThree}</li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationDrop;
