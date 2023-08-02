"use client"

import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
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
} from "@/components/ui/menubar"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { buttonVariants } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function HelloTool() {
  const [open, setOpen] = React.useState(false)

  return (
    <Menubar className="fixed bottom-[50%] right-5 flex h-auto w-[70px] translate-y-[50%] flex-col items-center justify-center space-y-2 overflow-hidden rounded-2xl px-0 py-3">
      <MenubarMenu>
        <MenubarTrigger className=" rounded-lg">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              " flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.magic className="h-4 w-4" />
          </ div>
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
      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <div>
            {/* <Icons.chevronDown className="h-4 w-4" /> */}

            <ContextMenu>
              <ContextMenuTrigger>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    " flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
                  )}
                >
                  <Icons.inbox className="h-4 w-4" />
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
          {/* <Button variant="outline">Edit Profile</Button> */}
        </DialogTrigger>
        <DialogContent className=" pb-0 pl-4 pr-1">
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
                  <div className="grid grid-cols-2 justify-stretch gap-3 ">
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
                  <div className="grid grid-cols-2 justify-stretch gap-3 ">
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

      <div className="collab flex flex-col space-y-2 border-y py-3">
        <Avatar>
          <AvatarImage src="/user-one.jpg" alt="@shadcn" />
          <AvatarFallback>1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-two.jpg" alt="@shadcn" />
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-three.jpg" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/user-four.jpg" alt="@shadcn" />
          <AvatarFallback>4</AvatarFallback>
        </Avatar>

        {/* Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <div>
              {/* <Icons.chevronDown className="h-4 w-4" /> */}

              <ContextMenu>
                <ContextMenuTrigger>
                  <div className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border p-0">
                    <Icons.chevronUp className="h-4 w-4" />
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
            {/* <Button variant="outline">Edit Profile</Button> */}
          </DialogTrigger>
          <DialogContent className=" pb-0 pl-4 pr-1">
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
                    <div className="grid grid-cols-2 justify-stretch gap-3 ">
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
                    <div className="grid grid-cols-2 justify-stretch gap-3 ">
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
      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <div>
            {/* <Icons.chevronDown className="h-4 w-4" /> */}

            <ContextMenu>
              <ContextMenuTrigger>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    " flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
                  )}
                >
                  <Icons.sparkles className="h-4 w-4" />
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
          {/* <Button variant="outline">Edit Profile</Button> */}
        </DialogTrigger>
        <DialogContent className=" pb-0 pl-4 pr-1">
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
                  <div className="grid grid-cols-2 justify-stretch gap-3 ">
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
                  <div className="grid grid-cols-2 justify-stretch gap-3 ">
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

      <MenubarMenu>
        <MenubarTrigger className="rounded-lg">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              " flex h-[35px] w-[45px] items-center justify-center rounded-lg p-0"
            )}
          >
            <Icons.code className="h-4 w-4" />
          </ div>
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
        " flex h-[50px] items-center justify-center rounded-md border"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
