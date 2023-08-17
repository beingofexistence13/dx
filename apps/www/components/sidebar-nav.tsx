"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import axios from "axios"
import { SidebarNavItem } from "types/nav"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Item {
  id: number
  name: string
}

// function MyComponent() {
//   const [data, setData] = useState<Item[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('/api/components_logo');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="mb-10 mt-5 w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  // const components_logo_function = () => {
  //   {
  //     items.map((item, index) => {
  //       axios
  //         .get(
  //           `https://api.unsplash.com/photos?page=1&query=${item.title}&client_id=_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk`
  //         )
  //         .then((response: any) => {
  //           data = response.data
  //           console.log(data)
  //         })
  //         .catch((error: any) => {
  //           console.error("Error fetching the page:", error)
  //         })
  //     })
  //   }
  // }
  // components_logo_function();
  const [data, setData] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos?page=1&query=superman&client_id=_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk"
        )
        setData(response.data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 pt-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <HoverCard>
              <HoverCardTrigger className="flex h-[30px] w-full items-center ">
                {/* <Avatar className="mr-2 h-[25px] w-[25px]">
                  <AvatarImage src="https://images.unsplash.com/photo-1682685797857-97de838c192e?ixid=M3w0OTA0MTB8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MjMxMDI0Nnw&ixlib=rb-4.0.3" />
                  <AvatarFallback>Dx
                  </AvatarFallback>
                </Avatar> */}
                <Avatar className="mr-2 h-[25px] w-[25px]">
                  <AvatarImage
                    src={`https://logo.clearbit.com/${item.title}.com`}
                  />
                  <AvatarFallback>WF</AvatarFallback>
                </Avatar>
                {item.title}
              </HoverCardTrigger>
              <HoverCardContent>{item.description}</HoverCardContent>
            </HoverCard>
            {/* {item.title} */}
            {/* {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )} */}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                  Allhamdulilla
                </span>
              </HoverCardTrigger>
              <HoverCardContent>{item.description}</HoverCardContent>
            </HoverCard>
            {/* {item.title} */}
            {item.label && (
              <HoverCard>
                <HoverCardTrigger>
                  {/* <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                    {item.label}
                  </span> */}
                </HoverCardTrigger>
                {/* <HoverCardContent>{item.description}</HoverCardContent> */}
              </HoverCard>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}
