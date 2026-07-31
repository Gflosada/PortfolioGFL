"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"

const GA_MEASUREMENT_ID = "G-JTVFZQFHQB"

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || typeof window === "undefined") {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments)
      }

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  )
}
