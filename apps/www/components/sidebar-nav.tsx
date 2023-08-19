"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import axios from "axios"
import { MainNavItem, SidebarNavItem } from "types/nav"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

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
interface Item {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}
// interface DocsSidebarNavItemsProps {
//   items: SidebarNavItem[];
//   pathname: string | null
// }
interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  // const [descriptions, setDescriptions] = useState({});
  const [descriptions, setDescriptions] = useState<{ [key: string]: any }>({})
  const [emoji, setEmoji] = useState<{ [key: string]: any }>({})

  async function generateDescription(title: any) {
    const prompt = `Generate a unique and creative description for ${title}`
    const response = await fetch(
      "https://api.edenai.run/v1/pretrained/text/generate_text",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `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`,
        },
        body: JSON.stringify({
          text: prompt,
          provider: ["openai"],
          model: ["davinci"],
          length: 100,
        }),
      }
    )
    const data = await response.json()
    return data.result[0].output
  }
  useEffect(() => {
    async function fetchDescriptions() {
      if (items) {
        const newDescriptions: { [key: string]: any } = {}
        for (const item of items) {
          if (item.title) {
            newDescriptions[item.title] = await generateDescription(item.title)
          }
        }
        setDescriptions(newDescriptions)
        console.log("Alhamdulilla")
        console.log(descriptions["Material UI"])
      }
    }

    const fetchRandomEmoji = async () => {
      const response = await axios.get("https://api.api-ninjas.com/v1/emoji", {
        headers: {
          "X-Api-Key": "vocMEyG2QBwkfbPiD/pNug==3TPtJy5c4bUr1Fhy",
        },
      })
      const emojis = response.data
      const randomIndex = Math.floor(Math.random() * emojis.length)
      setEmoji(emojis[randomIndex].character)
    }
    fetchRandomEmoji()
    fetchDescriptions()
  }, [items])

  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter

    return result
  }

  // const RandomEmojiGenerator: React.FC = () => {
  //   const [emoji, setEmoji] = useState<string>('');

  //   useEffect(() => {
  //     const fetchRandomEmoji = async () => {
  //       const response = await axios.get('https://api.api-ninjas.com/v1/emoji', {
  //         headers: {
  //           'X-Api-Key': 'YOUR_API_KEY'
  //         }
  //       });
  //       const emojis = response.data;
  //       const randomIndex = Math.floor(Math.random() * emojis.length);
  //       setEmoji(emojis[randomIndex].character);
  //     };
  //     fetchRandomEmoji();
  //   }, []);

  //   return <div>{emoji}</div>;
  // };

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
              <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] text-center text-[12.5px]">
                  <AvatarImage
                    src={`https://logo.clearbit.com/${item.title}.com`}
                  />
                  <AvatarFallback>
                    {item.title ? logoLetter(item.title) : "Dx"}
                  </AvatarFallback>
                </Avatar>
                {item.title}
              </HoverCardTrigger>
              <HoverCardContent>
                {/* {descriptions[item.title]} */}
                {emoji + item.description}
              </HoverCardContent>
            </HoverCard>
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

              <HoverCardContent>
                {/* {descriptions[item.title] } */}
                {emoji + item.description}

              </HoverCardContent>
            </HoverCard>
            {item.label && (
              <HoverCard>
                <HoverCardTrigger>
                  {/* Render your label here */}
                </HoverCardTrigger>
                {/* Render label-related content here */}
              </HoverCard>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}

// export function DocsSidebarNavItems({
//   items,
//   pathname,
// }: DocsSidebarNavItemsProps) {
//   function logoLetter(title: string): string {
//     let text = title;
//     let firstLetter = text.charAt(0).toUpperCase();
//     let lastLetter = text.charAt(text.length - 1).toUpperCase();
//     let result = firstLetter + lastLetter;

//     return result;
//   }

//   return items?.length ? (
//     <div className="grid grid-flow-row auto-rows-max text-sm">
//       {items.map((item, index) =>
//         item.href && !item.disabled ? (
//           <Link
//             key={index}
//             href={item.href}
//             className={cn(
//               "group flex w-full items-center rounded-md border border-transparent px-2 pt-1 hover:underline",
//               item.disabled && "cursor-not-allowed opacity-60",
//               pathname === item.href
//                 ? "font-medium text-foreground"
//                 : "text-muted-foreground"
//             )}
//             target={item.external ? "_blank" : ""}
//             rel={item.external ? "noreferrer" : ""}
//           >
//             <HoverCard>
//               <HoverCardTrigger className="flex h-[35px] w-full items-center ">
//                 <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] text-center text-[12.5px]">
//                   <AvatarImage
//                     src={`https://logo.clearbit.com/${item.title}.com`}
//                   />
//                   <AvatarFallback>
//                     {item.title ? logoLetter(item.title) : 'Dx'}
//                   </AvatarFallback>
//                 </Avatar>
//                 {item.title}
//               </HoverCardTrigger>
//               <HoverCardContent>{item.description}</HoverCardContent>
//             </HoverCard>
//           </Link>
//         ) : (
//           <span
//             key={index}
//             className={cn(
//               "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
//               item.disabled && "cursor-not-allowed opacity-60"
//             )}
//           >
//             <HoverCard>
//               <HoverCardTrigger>
//                 <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
//                   Allhamdulilla
//                 </span>
//               </HoverCardTrigger>
//               <HoverCardContent>{item.description}</HoverCardContent>
//             </HoverCard>
//             {item.label && (
//               <HoverCard>
//                 <HoverCardTrigger>
//                   {/* Render your label here */}
//                 </HoverCardTrigger>
//                 {/* Render label-related content here */}
//               </HoverCard>
//             )}
//           </span>
//         )
//       )}
//     </div>
//   ) : null;
// }
