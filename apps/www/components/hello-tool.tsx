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
import { cn } from "@/lib/utils"

export function HelloTool() {
  return (
    <Menubar className="fixed bottom-5 left-[50%] flex w-[380px] translate-x-[-50%] items-center justify-center overflow-hidden rounded-2xl px-5 py-6">
      <MenubarMenu>
        <MenubarTrigger className=" rounded-lg">
          <Icons.sparkles className="h-4 w-4" />
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

      <div className="collab flex space-x-2 border-x px-3">
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
        <div       className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        " flex h-[40px] w-[40px] items-center justify-center rounded-full border p-0"
      )}>
          <Icons.chevronUp className="h-4 w-4" />
        </div>
      </div>

      <MenubarMenu>
        <MenubarTrigger className="rounded-lg">
          <Icons.code className="h-4 w-4" />
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
            <MenubarRadioItem value="js-fiddle">JS Fiddle</MenubarRadioItem>
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
