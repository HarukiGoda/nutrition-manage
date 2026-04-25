import {
  ChartSplineIcon,
  HomeIcon,
  ScrollTextIcon,
  ShelvingUnitIcon,
  SquarePenIcon,
} from "lucide-react"
import Link from "next/link"

export const ButtomFixedNavigationMenus = [
  "home",
  "records",
  "analytics",
  "inventory",
  "recipe",
] as const

export default function ButtomFixedNavigation({
  ...props
}: {
  menu: (typeof ButtomFixedNavigationMenus)[number]
}) {
  return (
    <footer className="grid w-[calc(100svw-2rem)] grid-cols-5 rounded-2xl border bg-accent/80 text-xs text-primary/80">
      <Link
        href={"/app/record"}
        className={`col-span-1 m-0.5 flex flex-col items-center justify-center rounded-2xl p-1.5 px-6 ${props.menu == "records" ? "border bg-secondary" : ""}`}
      >
        <SquarePenIcon />

        <p className="col-span-3 text-center">Records</p>
      </Link>

      <Link
        href={"/app/inventory"}
        className={`col-span-1 m-0.5 flex flex-col items-center justify-center rounded-2xl p-1.5 px-6 ${props.menu == "inventory" ? "border bg-secondary" : ""}`}
      >
        <ShelvingUnitIcon />
        <p className="col-span-3 text-center">Inventory</p>
      </Link>

      <Link
        href={"/app/home"}
        className={`col-span-1 m-0.5 flex flex-col items-center justify-center rounded-2xl p-1.5 px-6 ${props.menu == "home" ? "border bg-secondary" : ""}`}
      >
        <HomeIcon />
        {/* <p className="col-span-3 text-center">Home</p> */}
      </Link>

      <Link
        href={"/app/analytics"}
        className={`col-span-1 m-0.5 flex flex-col items-center justify-center rounded-2xl p-1.5 px-6 ${props.menu == "analytics" ? "border bg-secondary" : ""}`}
      >
        <ChartSplineIcon />
        <p className="col-span-3 text-center">Analytics</p>
      </Link>

      <Link
        href={"/app/recipe"}
        className={`col-span-1 m-0.5 flex flex-col items-center justify-center rounded-2xl p-1.5 px-6 ${props.menu == "recipe" ? "border bg-secondary" : ""}`}
      >
        <ScrollTextIcon />
        <p className="col-span-3 text-center">Recipe</p>
      </Link>
    </footer>
  )
}
