import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbHeader() {
  return (
    <Breadcrumb className="lg:justify-center text-center place-content-center max-sm:text-xs flex items-center max-sm:justify-start font-bold py-4 px-10">
      <BreadcrumbList>

      <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/shop">HOME</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/shop">SHOP</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">DRESSES</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>IMANI</BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  )
}
