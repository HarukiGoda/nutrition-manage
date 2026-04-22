import Link from "next/link"
import { FaHome } from "react-icons/fa"
import { IoAnalytics } from "react-icons/io5"
import { MdOutlineAccountCircle } from "react-icons/md"

export const ButtomFixedNavigationMenus = [
  "home",
  "analytics",
  "account",
] as const

export default function ButtomFixedNavigation({
  ...props
}: {
  menu: (typeof ButtomFixedNavigationMenus)[number]
}) {
  return (
    <footer className="grid w-[calc(100svw-2rem)] grid-cols-3 place-items-center rounded-2xl border bg-accent/80 text-primary/80">
      <Link
        href={"/app/home"}
        className={`m-0.5 flex items-center justify-center rounded-2xl p-2.5 px-6 ${props.menu == "home" ? "border bg-secondary" : ""}`}
      >
        <div className="pr-1.5">
          <FaHome />
        </div>
        <p className="col-span-3 text-center">Home</p>
      </Link>
      <Link
        href={"/app/analytics"}
        className={`m-0.5 flex items-center justify-center rounded-2xl p-2.5 px-6 ${props.menu == "analytics" ? "border bg-secondary" : ""}`}
      >
        <div className="pr-1.5">
          <IoAnalytics />
        </div>
        <p className="col-span-3 text-center">Analytics</p>
      </Link>
      <Link
        href={"/app/account"}
        className={`m-0.5 flex items-center justify-center rounded-2xl p-2.5 px-6 ${props.menu == "account" ? "border bg-secondary" : ""}`}
      >
        <div className="pr-1.5">
          <MdOutlineAccountCircle />
        </div>
        <p className="col-span-3 text-center">Account</p>
      </Link>
    </footer>
  )
}
