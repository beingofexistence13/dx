"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function ActiveLink({
  isActive,
  searchParams,
  children,
}: {
  isActive: boolean
  searchParams: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <Link
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium no-underline", {
        "bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white":
          !isActive,
        "bg-vercel-blue text-white": isActive,
      })}
      href={pathname + "?" + searchParams}
    >
      {children}
    </Link>
  )
}
