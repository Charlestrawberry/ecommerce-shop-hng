"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// next hook
import { usePathname } from "next/navigation";

const links = [
  
  { path: "/sales", name: "SALES" },
  { path: "/", name: "SHOP" },
  { path: "/collection", name: "COLLECTION" },
  { path: "/descriptionpage", name: "STORES" },
  { path: "/blog", name: "BLOG" },
];
const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={` ${containerStyles}`}>
      {links.map((link, i) => {
        return (
          <Link href={link.path} key={i} className={`capitalize ${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={` ${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};


export default Navbar;
