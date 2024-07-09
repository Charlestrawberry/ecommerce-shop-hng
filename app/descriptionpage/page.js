
import { BreadcrumbHeader } from "@/components/BreadcrumbHeader";
import MoreShopPage from "@/components/MoreShopPage";
import Shop from "@/components/Shop";
import ShopContent from "@/components/ShopContent";

import React from "react";

const page = () => {
  return (
    <div className="">
      <BreadcrumbHeader />
      <Shop />
      <ShopContent />
      <MoreShopPage />
    </div>
  );
};

export default page;
