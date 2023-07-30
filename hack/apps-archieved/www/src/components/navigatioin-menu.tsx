
// Navigation Menu Start
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/src/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
const products: { title: string; href: string; description: string }[] = [
  {
    title: "Hello",
    href: "/https://hello-emon-sumon-shohan.vercel.app/",
    description:
      "Multiversal Blockchain Based Socail Media",
  },
  {
    title: "Aladdin",
    href: "/https://aladdin-emon-sumon-shohan.vercel.app/",
    description:
      "The best way to buy or sell anything in seconds",
  },
  {
    title: "Friday",
    href: "/https://friday-emon-sumon-shohan.vercel.app/",
    description:
      "Your Personal Assitence(beyond any screens) And ONE OF THE most advanced Ai",
  },
  {
    title: "Multiverse",
    href: "/https://multiverse-emon-sumon-shohan.vercel.app/",
    description:
      "A place to hangout and explore",
  },
  {
    title: "Hackin",
    href: "/https://hackin-emon-sumon-shohan.vercel.app/",
    description:
      "Login and SignUp has never been so easy",
  },
  {
    title: "Connect",
    href: "/https://connect-emon-sumon-shohan.vercel.app/",
    description:
      "Make thirdparty connects in seconds",
  },
  {
    title: "Mediaflow",
    href: "/https://mediaflow-emon-sumon-shohan.vercel.app/",
    description:
      "Where Different Kinds Of Medias Live",
  },
  {
    title: "Iconflow",
    href: "/https://iconflow-emon-sumon-shohan.vercel.app/",
    description:
      "Where All Kinds Of Icons Live",
  },
  {
    title: "Dx Native",
    href: "/https://dx-native-emon-sumon-shohan.vercel.app/",
    description:
      "Cool Developer Expreince In App Development",
  },
  {
    title: "Nextjs Native",
    href: "/https://nextjs-native-emon-sumon-shohan.vercel.app/",
    description:
      "A better and version of React Native with Expo made by me(BeingOfExistence)",
  },
  {
    title: "Nextjs",
    href: "/https://nextjs.org/",
    description:
      "The most hottest React framwork out there made by vercel",
  },
  {
    title: "Shadcn",
    href: "https://ui.shadcn.com/",
    description:
      "My favorite UI component library(Highly Recommended)",
  },
  {
    title: "Docsflow",
    href: "/https://docsflow-emon-sumon-shohan.vercel.app/",
    description:
      "The perfect way to document anything in seconds",
  },

]
const more: { title: string; href: string; description: string }[] = [
  {
    title: "Changelog",
    href: "/changelog",
    description:
      "A Complete History Of Changes Done in this software",
  },
  {
    title: "Integrations",
    href: "/integrations",
    description:
      "Things that can be integrated",
  },
  {
    title: "Templates",
    href: "/templates",
    description:
      "Some Templates To Start FAST",
  },
  {
    title: "Thanks To",
    href: "/thanks-to",
    description:
      "All the peoples I love",
  },
  {
    title: "About",
    href: "/about",
    description:
      "Why I made this??",
  },
  {
    title: "Examples",
    href: "/examples",
    description:
      "Some Examples to ues this",
  },
]

export function NavigationMenuDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {products.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      beingofexistence/dx
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {more.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
// Navigation Menu End
