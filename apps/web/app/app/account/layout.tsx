import ButtomFixedNavigation from "@/components/bottom-fixed-navigation"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <div className="fixed bottom-0 mb-2 w-svw">
        <div className="mx-auto w-fit">
          <ButtomFixedNavigation menu="account" />
        </div>
      </div>
    </div>
  )
}
