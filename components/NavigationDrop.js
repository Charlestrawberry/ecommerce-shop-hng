import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

const NavigationDrop = () => {
  return (
    <div>
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger><h4 className="font-medium">Language EN  </h4></NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Arabi</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>
  )
}

export default NavigationDrop