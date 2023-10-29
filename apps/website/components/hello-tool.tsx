
/* eslint-disable tailwindcss/classnames-order */

"use client"

import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { BrainCircuit } from "lucide-react"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { DevMode } from "./devMode"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  ScrollArea,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  buttonVariants,
} from "./ui"







export function HelloTool() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Menubar className="hello-tool glassmorphisum 2xs:max-w-[90%] 2xs:rounded-none 2xs:px-0 xs:bottom-2 xs:max-w-[90%] xs:rounded-2xl absolute flex h-min w-full flex-row items-center justify-center border px-2 py-5 sm:bottom-3 sm:w-auto sm:rounded-2xl lg:inset-y-[15%] lg:right-3 lg:max-h-[70%] lg:max-w-[50px] lg:flex-col lg:space-x-0 lg:space-y-1">
        <MenubarMenu>
          <MenubarTrigger className="rounded-lg">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "flex h-[30px] w-[30px] items-center justify-center rounded-lg p-0"
              )}
            >
              <Icons.magic className="h-2 w-2" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Keyboard Shortcuts <MenubarShortcut>⌘K</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Command Palette <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Extentions <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Themes</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Color Theme</MenubarItem>
                <MenubarItem>File Icon Theme</MenubarItem>
                <MenubarItem>Product Icon Theme</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Profile... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "m-0 flex h-[30px] w-[30px] items-center justify-center rounded-lg p-0"
              )}
            >
              <Icons.circleDashed className="h-4 w-4 fill-current" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Keyboard Shortcuts <MenubarShortcut>⌘K</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Command Palette <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Extentions <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Themes</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Color Theme</MenubarItem>
                <MenubarItem>File Icon Theme</MenubarItem>
                <MenubarItem>Product Icon Theme</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Profile... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>


        <div className="mt-1 h-auto w-full rounded-md border"></div>

        {/* <ScrollArea className="h-[200px] w-[50px] rounded-md border p-4">
      <div className="collab mx-2 flex h-auto flex-row items-center space-x-2 border-x px-2 lg:my-2 lg:flex-col lg:space-x-0 lg:space-y-2 lg:border-x-0 lg:border-y lg:py-2">
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
          <AvatarImage src="/user-15.webp" alt="@shadcn" />
          <AvatarFallback>15</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
          <AvatarImage src="/user-14.webp" alt="@shadcn" />
          <AvatarFallback>14</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
          <AvatarImage src="/user-13.webp" alt="@shadcn" />
          <AvatarFallback>13</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
          <AvatarImage src="/user-12.webp" alt="@shadcn" />
          <AvatarFallback>12</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/user-11.webp" alt="@shadcn" />
          <AvatarFallback>11</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage
            src="/chainswap-x-force-by-deadpool.jpeg"
            alt="@shadcn"
          />
          <AvatarFallback>10</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
          <AvatarImage src="/suzume-no-tojimari.jpeg" alt="@shadcn" />
          <AvatarFallback>9</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
          <AvatarImage src="/one-punch-man.png" alt="@shadcn" />
          <AvatarFallback>8</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage src="/saturo-freeking-gojo.jpeg" alt="@shadcn" />
          <AvatarFallback>7</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage src="/night-shy.jpeg" alt="@shadcn" />
          <AvatarFallback>6</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/curse-king-sukuna.png" alt="@shadcn" />
          <AvatarFallback>5</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/nezuukoo-chaaannn.png" alt="@shadcn" />
          <AvatarFallback>4</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-two.jpg" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-three.jpg" alt="@shadcn" />
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-four.jpg" alt="@shadcn" />
          <AvatarFallback>1</AvatarFallback>
        </Avatar>

        <Dialog>
          <DialogTrigger asChild>
            <div>
              <ContextMenu>
                <ContextMenuTrigger>
                  <div className=" flex h-[30px] w-[30px] items-center justify-center rounded-full border p-0">
                    <Icons.chevronUp className="h-2 w-2" />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuItem>Billing</ContextMenuItem>
                  <ContextMenuItem>Team</ContextMenuItem>
                  <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
              <span className="sr-only">Social Medias</span>
            </div>
          </DialogTrigger>
          <DialogContent className="pb-0 pl-4 pr-1">
            <Tabs defaultValue="vlog" className="">
              <DialogHeader>
                <DialogTitle>
                  <TabsList className="absolute left-4 top-3 w-[200px]">
                    <TabsTrigger value="vlog">Vlog</TabsTrigger>
                    <TabsTrigger value="gaming">Gaming</TabsTrigger>
                    <TabsTrigger value="react">React</TabsTrigger>
                  </TabsList>
                </DialogTitle>
                <DialogDescription className=" h-[330px] overflow-y-auto overflow-x-hidden pt-7">
                  <TabsContent value="vlog">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformVlog?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="gaming">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformGaming?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="react">
                    <div className="grid grid-cols-2 justify-stretch gap-3">
                      {socialMediaConfig.platformReact?.map(
                        (item) =>
                          item.href && (
                            <SocialMedia
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </SocialMedia>
                          )
                      )}
                    </div>
                  </TabsContent>
                </DialogDescription>
              </DialogHeader>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
</ScrollArea> */}
        <ScrollArea className="h-[500px] w-min">
          <div className="space-y-3 p-3">
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
              <AvatarImage src="/user-15.webp" alt="@shadcn" />
              <AvatarFallback>15</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
              <AvatarImage src="/user-14.webp" alt="@shadcn" />
              <AvatarFallback>14</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
              <AvatarImage src="/user-13.webp" alt="@shadcn" />
              <AvatarFallback>13</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
              <AvatarImage src="/user-12.webp" alt="@shadcn" />
              <AvatarFallback>12</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
              <AvatarImage src="/user-11.webp" alt="@shadcn" />
              <AvatarFallback>11</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
              <AvatarImage
                src="/chainswap-x-force-by-deadpool.jpeg"
                alt="@shadcn"
              />
              <AvatarFallback>10</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
              <AvatarImage src="/suzume-no-tojimari.jpeg" alt="@shadcn" />
              <AvatarFallback>9</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
              <AvatarImage src="/one-punch-man.png" alt="@shadcn" />
              <AvatarFallback>8</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
              <AvatarImage src="/saturo-freeking-gojo.jpeg" alt="@shadcn" />
              <AvatarFallback>7</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
              <AvatarImage src="/night-shy.jpeg" alt="@shadcn" />
              <AvatarFallback>6</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
              <AvatarImage src="/curse-king-sukuna.png" alt="@shadcn" />
              <AvatarFallback>5</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
              <AvatarImage src="/nezuukoo-chaaannn.png" alt="@shadcn" />
              <AvatarFallback>4</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd h-[30px] w-[30px]">
              <AvatarImage src="/user-two.jpg" alt="@shadcn" />
              <AvatarFallback>3</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd h-[30px] w-[30px]">
              <AvatarImage src="/user-three.jpg" alt="@shadcn" />
              <AvatarFallback>2</AvatarFallback>
            </Avatar>
            <Avatar className="pulsate-fwd h-[30px] w-[30px]">
              <AvatarImage src="/user-four.jpg" alt="@shadcn" />
              <AvatarFallback>1</AvatarFallback>
            </Avatar>
          </div>
        </ScrollArea>

        <div className="mb-1 h-auto w-full rounded-md border"></div>
        <DevMode />

        <MenubarMenu>
          <MenubarTrigger>
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "m-0 flex h-[30px] w-[30px] items-center justify-center rounded-lg p-0"
              )}
            >
              <Icons.code className="h-2 w-2" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="codesandbox">
              <MenubarRadioItem value="gitpod">Gitpod</MenubarRadioItem>
              <MenubarRadioItem value="github-codespace">
                Github Codespace
              </MenubarRadioItem>
              <MenubarRadioItem value="visual-studio-code">
                Visual Studio Code(app + broweser)
              </MenubarRadioItem>
              <MenubarRadioItem value="codesandbox">CodeSandbox</MenubarRadioItem>
              <MenubarRadioItem value="repkit">Repkit</MenubarRadioItem>
              <MenubarRadioItem value="stackblitz">Stackblitz</MenubarRadioItem>
              <MenubarRadioItem value="codePen">CodePen</MenubarRadioItem>
              <MenubarRadioItem value="sandbox">Sandbox</MenubarRadioItem>
              <MenubarRadioItem value="js-bin">JS Bin</MenubarRadioItem>
              <MenubarRadioItem value="aws-cloud9">AWS Cloud9</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit Editor Configuration...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add A Editor...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

    </>
  )
}

interface SocialMediaProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function SocialMedia({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: SocialMediaProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "flex h-[50px] items-center justify-center rounded-md border"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}


