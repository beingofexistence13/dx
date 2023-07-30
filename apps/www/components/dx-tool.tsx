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

export function MenubarDemo() {
  return (
    <Menubar className="fixed bottom-5 left-[50%] flex w-[360px] translate-x-[-50%] items-center justify-center overflow-hidden rounded-2xl px-5 py-6">
      <MenubarMenu>
        <MenubarTrigger className="rounded-none border-r hover:rounded-lg">
          <Icons.setting className="h-4 w-4" />
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

      {/* <Separator orientation="vertical" /> */}
      {/* 
        <MenubarMenu>
          <MenubarTrigger>User1</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>User2</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>User3</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}

      {/* <Separator orientation="vertical" /> */}

      {/* <Separator className="my-4" /> */}
      {/* <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div> */}
      <div className="collab flex space-x-2 px-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>4</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>5</AvatarFallback>
        </Avatar>
      </div>

      <MenubarMenu>
        <MenubarTrigger className="rounded-none border-l  hover:rounded-lg">
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
