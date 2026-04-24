import ButtomFixedNavigation from "@/components/bottom-fixed-navigation"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-[calc(100svh-2.5rem)] min-w-svw">
      <main className="">{children}</main>
      <div className="h-10" />
      <div tabIndex={-1} className="fixed bottom-0 mb-2 w-full">
        <div className="mx-auto w-fit">
          <ButtomFixedNavigation menu="home" />
        </div>
      </div>
    </div>
  )
}
