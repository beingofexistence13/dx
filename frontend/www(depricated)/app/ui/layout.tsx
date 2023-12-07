/* eslint-disable @next/next/inline-script-id */
import Script from "next/script"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="dat-gui.js" />
      <Script src="script.js" />
      <Script>
        {`window.ga =
        window.ga ||
        function () {
          ;(ga.q = ga.q || []).push(arguments)
        }
      ga.l = +new Date()
      ga("create", "UA-105392568-1", "auto")
      ga("send", "pageview")`}
      </Script>{" "}
      <Script src="dat-gui.js" />
      <Script src="script.js" />
      <Script>
        {`window.ga =
        window.ga ||
        function () {
          ;(ga.q = ga.q || []).push(arguments)
        }
      ga.l = +new Date()
      ga("create", "UA-105392568-1", "auto")
      ga("send", "pageview")`}
      </Script>
    </>
  )
}
