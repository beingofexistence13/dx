import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui"

export function PrimarySidebar() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="nav-toggles h-24 px-2 py-5 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 2xs:hidden xs:hidden sm:hidden lg:flex"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>

                    <span className="sr-only">Primary Sidebar</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {/* File */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>File</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Open Folder</span>
                                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Open Work...</span>
                                <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Open Recent</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>dx</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>appflow</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>friday</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Save All</span>
                                <DropdownMenuShortcut>⌘KS</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Save As</span>
                                <DropdownMenuShortcut>⌘SA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Duplicate Work...</span>
                                <DropdownMenuShortcut>⌘DW</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Share</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>dx</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>appflow</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>friday</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Preference</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>dx</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>appflow</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>friday</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Revert</span>
                                <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Close All</span>
                                <DropdownMenuShortcut>⌘CA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

                {/* Edit */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Undo</span>
                                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Redo</span>
                                <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Cut</span>
                                <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Copy</span>
                                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Copy As</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>pdf</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>csv</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>json</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Find</span>
                                <DropdownMenuShortcut>⌘FD</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Replace</span>
                                <DropdownMenuShortcut>⌘RE</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Find in Files</span>
                                <DropdownMenuShortcut>⌘FDF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Replace in Files</span>
                                <DropdownMenuShortcut>⌘REF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

                {/* Selection */}
                <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Selection</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Select All</span>
                                <DropdownMenuShortcut>⌘STA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Select All Occurence</span>
                                <DropdownMenuShortcut>⌘STAO</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Expand Selection</span>
                                <DropdownMenuShortcut>⌘EDSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Shrink Selection</span>
                                <DropdownMenuShortcut>⌘SKSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Duplicate Selection</span>
                                <DropdownMenuShortcut>⌘DESN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Multicursor Selection</span>
                                <DropdownMenuShortcut>⌘MRSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Column Selection</span>
                                <DropdownMenuShortcut>⌘CNSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

{/* View */}
<DropdownMenuSeparator />

{/* Go */}
<DropdownMenuSeparator />

{/* Run */}
<DropdownMenuSeparator />

                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard className="mr-2 h-4 w-4" />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4" />
                                    <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    <span>More...</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
























// export function PrimarySidebar() {
//   const [open, setOpen] = React.useState(false)

//   function logoLetter(title: string): string {
//     let text = title
//     let firstLetter = text.charAt(0).toUpperCase()
//     let lastLetter = text.charAt(text.length - 1).toUpperCase()
//     let result = firstLetter + lastLetter
//     return result
//   }

//   function transformString(str: string): string {
//     return str.replace(/\b(\w)(\w*)\b/g, (match, firstLetter, restOfWord) => {
//       let titleName = firstLetter.toUpperCase() + restOfWord.toLowerCase()
//       return titleName
//     })
//   }

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <HoverCard>
//           <HoverCardTrigger asChild>
//             <Button
//               variant="ghost"
//               className="nav-toggles h-24 px-2 py-5 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 2xs:hidden xs:hidden sm:hidden lg:flex"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 9h16.5m-16.5 6.75h16.5"
//                 />
//               </svg>

//               <span className="sr-only">Toggle Menu</span>
//             </Button>
//           </HoverCardTrigger>
//           <HoverCardContent className="w-48">
//             {/* <div className="menubar_container w-full h-auto flex flex-col items-center justify-start">
// <HoverCard>
//   <HoverCardTrigger>Hover</HoverCardTrigger>
//   <HoverCardContent>
//     The React Framework created and maintained by @vercel.
//   </HoverCardContent>
// </HoverCard>
// <HoverCard>
//   <HoverCardTrigger>Hover</HoverCardTrigger>
//   <HoverCardContent>
//     The React Framework created and maintained by @vercel.
//   </HoverCardContent>
// </HoverCard>
// <HoverCard>
//   <HoverCardTrigger>Hover</HoverCardTrigger>
//   <HoverCardContent>
//     The React Framework created and maintained by @vercel.
//   </HoverCardContent>
// </HoverCard>
// </div>
//             <div className="flex justify-between space-x-4 mb-3">
//               <Avatar>
//                 <AvatarImage src="https://github.com/vercel.png" />
//                 <AvatarFallback>VC</AvatarFallback>
//               </Avatar>
//               <div className="space-y-1">
//                 <h4 className="text-sm font-semibold">@nextjs</h4>
//                 <p className="text-sm">
//                   The React Framework created and maintained by @vercel.
//                 </p>
//                 <div className="flex items-center pt-2">
//                   <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
//                   <span className="text-xs text-muted-foreground">
//                     Joined December 2021
//                   </span>
//                 </div>
//               </div>
//             </div> */}
//             <Menubar className="w-full h-48 flex-col items-center justify-start">


//               <MenubarMenu>
//                 <MenubarTrigger>File</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarItem>
//                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarItem>
//                     New Window <MenubarShortcut>⌘N</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarItem disabled>New Incognito Window</MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarSub>
//                     <MenubarSubTrigger>Share</MenubarSubTrigger>
//                     <MenubarSubContent>
//                       <MenubarItem>Email link</MenubarItem>
//                       <MenubarItem>Messages</MenubarItem>
//                       <MenubarItem>Notes</MenubarItem>
//                     </MenubarSubContent>
//                   </MenubarSub>
//                   <MenubarSeparator />
//                   <MenubarItem>
//                     Print... <MenubarShortcut>⌘P</MenubarShortcut>
//                   </MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//               <MenubarMenu>
//                 <MenubarTrigger>Edit</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarItem>
//                     Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarItem>
//                     Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarSub>
//                     <MenubarSubTrigger>Find</MenubarSubTrigger>
//                     <MenubarSubContent>
//                       <MenubarItem>Search the web</MenubarItem>
//                       <MenubarSeparator />
//                       <MenubarItem>Find...</MenubarItem>
//                       <MenubarItem>Find Next</MenubarItem>
//                       <MenubarItem>Find Previous</MenubarItem>
//                     </MenubarSubContent>
//                   </MenubarSub>
//                   <MenubarSeparator />
//                   <MenubarItem>Cut</MenubarItem>
//                   <MenubarItem>Copy</MenubarItem>
//                   <MenubarItem>Paste</MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//               <MenubarMenu>
//                 <MenubarTrigger>View</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//                   <MenubarCheckboxItem checked>
//                     Always Show Full URLs
//                   </MenubarCheckboxItem>
//                   <MenubarSeparator />
//                   <MenubarItem inset>
//                     Reload <MenubarShortcut>⌘R</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarItem disabled inset>
//                     Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//                   </MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem inset>Hide Sidebar</MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//               <MenubarMenu>
//                 <MenubarTrigger>Profiles</MenubarTrigger>
//                 <MenubarContent>
//                   <MenubarRadioGroup value="benoit">
//                     <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//                     <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//                     <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//                   </MenubarRadioGroup>
//                   <MenubarSeparator />
//                   <MenubarItem inset>Edit...</MenubarItem>
//                   <MenubarSeparator />
//                   <MenubarItem inset>Add Profile...</MenubarItem>
//                 </MenubarContent>
//               </MenubarMenu>
//             </Menubar>
//             {/* <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline">Open</Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem>
//                     <User className="mr-2 h-4 w-4" />
//                     <span>Profile</span>
//                     <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <CreditCard className="mr-2 h-4 w-4" />
//                     <span>Billing</span>
//                     <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Settings className="mr-2 h-4 w-4" />
//                     <span>Settings</span>
//                     <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Keyboard className="mr-2 h-4 w-4" />
//                     <span>Keyboard shortcuts</span>
//                     <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem>
//                     <Users className="mr-2 h-4 w-4" />
//                     <span>Team</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuSub>
//                     <DropdownMenuSubTrigger>
//                       <UserPlus className="mr-2 h-4 w-4" />
//                       <span>Invite users</span>
//                     </DropdownMenuSubTrigger>
//                     <DropdownMenuPortal>
//                       <DropdownMenuSubContent>
//                         <DropdownMenuItem>
//                           <Mail className="mr-2 h-4 w-4" />
//                           <span>Email</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                           <MessageSquare className="mr-2 h-4 w-4" />
//                           <span>Message</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem>
//                           <PlusCircle className="mr-2 h-4 w-4" />
//                           <span>More...</span>
//                         </DropdownMenuItem>
//                       </DropdownMenuSubContent>
//                     </DropdownMenuPortal>
//                   </DropdownMenuSub>
//                   <DropdownMenuItem>
//                     <Plus className="mr-2 h-4 w-4" />
//                     <span>New Team</span>
//                     <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Github className="mr-2 h-4 w-4" />
//                   <span>GitHub</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <LifeBuoy className="mr-2 h-4 w-4" />
//                   <span>Support</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem disabled>
//                   <Cloud className="mr-2 h-4 w-4" />
//                   <span>API</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Log out</span>
//                   <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu> */}

//           </HoverCardContent>
//         </HoverCard>
//       </SheetTrigger>
//       <SheetContent side="left" className="sheetLeft m-0 p-0 z-[1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000]">
//         <PrimarySidebarLink
//           href="/"
//           className="mx-8 mt-5 flex items-center justify-center rounded-md border p-10 py-1 hover:bg-[--code-foreground]"
//           onOpenChange={setOpen}
//         >
//           <Avatar className=" font-bold">
//             <AvatarImage src="/logo.svg" alt="@shadcn" />
//             <AvatarFallback>DX</AvatarFallback>
//           </Avatar>
//           <span className="font-bold">{siteConfig.name}</span>
//         </PrimarySidebarLink>

//         <ScrollArea className="mobile-scroll mt-2 h-[100vh] px-8 pb-0 ">
//           <Accordion type="multiple" className="w-full">
//             {/* Products */}
//             <div className="flex flex-col space-y-3">
//               <AccordionItem value="products">
//                 <AccordionTrigger>All Products</AccordionTrigger>
//                 <AccordionContent className="w-full ">
//                   {products.map(
//                     (item, index) =>
//                       item.href && (
//                         <div
//                           key={index}
//                           className="flex h-12 w-full flex-row items-center justify-between"
//                         >
//                           <div className="products-logo">
//                             <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
//                               <div className="item-logo-fallback">
//                                 {item.title ? logoLetter(item.title) : "Dx"}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="products-title flex-1 items-center justify-center">
//                             <PrimarySidebarLink
//                               key={item.href}
//                               href={item.href}
//                               onOpenChange={setOpen}
//                               className="flex w-full flex-row items-center justify-center"
//                             >
//                               {item.title}
//                             </PrimarySidebarLink>
//                           </div>
//                           <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
//                             <Icons.moreHorizental className="h-4 w-4" />
//                           </div>
//                         </div>
//                       )
//                   )}
//                 </AccordionContent>
//               </AccordionItem>
//             </div>

//             {/* More */}
//             <div className="flex flex-col space-y-3">
//               <AccordionItem value="more">
//                 <AccordionTrigger>More</AccordionTrigger>
//                 <AccordionContent className="w-full ">
//                   {more.map(
//                     (item, index) =>
//                       item.href && (
//                         <div
//                           key={index}
//                           className="flex h-12 w-full flex-row items-center justify-between"
//                         >
//                           <div className="products-logo">
//                             <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
//                               <div className="item-logo-fallback">
//                                 {item.title ? logoLetter(item.title) : "Dx"}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="products-title flex-1 items-center justify-center">
//                             <PrimarySidebarLink
//                               key={item.href}
//                               href={item.href}
//                               onOpenChange={setOpen}
//                               className="flex w-full flex-row items-center justify-center"
//                             >
//                               {item.title}
//                             </PrimarySidebarLink>
//                           </div>
//                           <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
//                             <Icons.moreHorizental className="h-4 w-4" />
//                           </div>
//                         </div>
//                       )
//                   )}
//                 </AccordionContent>
//               </AccordionItem>
//             </div>

//             {/* Extra NavItem */}
//             <div className="flex flex-col space-y-3">
//               <AccordionItem value="extra-navitems">
//                 <AccordionTrigger>Extra NavItems</AccordionTrigger>
//                 <AccordionContent className="w-full ">
//                   {docsConfig.mainNav.map(
//                     (item, index) =>
//                       item.href && (
//                         <div
//                           key={index}
//                           className="flex h-12 w-full flex-row items-center justify-between"
//                         >
//                           <div className="products-logo">
//                             <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
//                               <div className="item-logo-fallback">
//                                 {item.title ? logoLetter(item.title) : "Dx"}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="products-title flex-1 items-center justify-center">
//                             <PrimarySidebarLink
//                               key={item.href}
//                               href={item.href}
//                               onOpenChange={setOpen}
//                               className="flex w-full flex-row items-center justify-center"
//                             >
//                               {item.title}
//                             </PrimarySidebarLink>
//                           </div>
//                           <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
//                             <Icons.moreHorizental className="h-4 w-4" />
//                           </div>
//                         </div>
//                       )
//                   )}
//                 </AccordionContent>
//               </AccordionItem>
//             </div>

//             {/* Main NavItems */}
//             <div className="flex flex-col space-y-3">
//               {docsConfig.sidebarNav.map((item, index) => (
//                 <div key={index} className="flex flex-col space-y-3">
//                   <AccordionItem value={item.title}>
//                     <AccordionTrigger>{item.title}</AccordionTrigger>
//                     <AccordionContent className="w-full">
//                       {item?.items?.length &&
//                         item?.items?.map((item) => (
//                           <React.Fragment key={item.href}>
//                             {!item.disabled &&
//                               (item.href ? (
//                                 <div className="flex h-12 w-full flex-row items-center justify-between">
//                                   <div className="products-logo">
//                                     <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-lg border text-center text-[12.5px] ">
//                                       <Avatar className="h-[25px] w-[25px] rounded-sm">
//                                         <AvatarImage
//                                           src={
//                                             item.logo
//                                               ? `/docs/${item.title
//                                                 .replace(/\s/g, "-")
//                                                 .toLowerCase()}.jpg`
//                                               : ""
//                                           }
//                                           alt="Dx"
//                                         />
//                                         <AvatarFallback>
//                                           {item.title
//                                             ? logoLetter(item.title)
//                                             : "Dx"}
//                                         </AvatarFallback>
//                                       </Avatar>
//                                     </div>
//                                   </div>
//                                   <div className="products-title flex-1 items-center justify-center">
//                                     <PrimarySidebarLink
//                                       key={item.href}
//                                       href={item.href}
//                                       onOpenChange={setOpen}
//                                       className="flex w-full flex-row items-center justify-center"
//                                     >
//                                       {transformString(
//                                         item.title.replace(/'S/g, "")
//                                       )}
//                                     </PrimarySidebarLink>
//                                   </div>
//                                   <DropdownMenu>
//                                     <DropdownMenuTrigger asChild>
//                                       <div className="main-navitem-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
//                                         <Icons.moreHorizental className="h-4 w-4" />
//                                       </div>
//                                     </DropdownMenuTrigger>
//                                     <DropdownMenuContent align="end">
//                                       {item.website_url ? (
//                                         <DropdownMenuItem className="flex items-center justify-center">
//                                           <Link
//                                             key={index}
//                                             href={item.website_url}
//                                             target={
//                                               item.external ? "_blank" : ""
//                                             }
//                                             rel={
//                                               item.external ? "noreferrer" : ""
//                                             }
//                                           >
//                                             Website
//                                           </Link>
//                                         </DropdownMenuItem>
//                                       ) : (
//                                         ""
//                                       )}

//                                       {item.appStore &&
//                                         item.playStore &&
//                                         item.webStore ? (
//                                         <div>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             <Link
//                                               key={index}
//                                               href={item.appStore}
//                                               target={
//                                                 item.external ? "_blank" : ""
//                                               }
//                                               rel={
//                                                 item.external
//                                                   ? "noreferrer"
//                                                   : ""
//                                               }
//                                               className="appStore hover:underline"
//                                             >
//                                               AppStore
//                                             </Link>
//                                           </DropdownMenuItem>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             <Link
//                                               key={index}
//                                               href={item.playStore}
//                                               target={
//                                                 item.external ? "_blank" : ""
//                                               }
//                                               rel={
//                                                 item.external
//                                                   ? "noreferrer"
//                                                   : ""
//                                               }
//                                               className="playStore hover:underline"
//                                             >
//                                               PlayStore
//                                             </Link>
//                                           </DropdownMenuItem>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             <Link
//                                               key={index}
//                                               href={item.webStore}
//                                               target={
//                                                 item.external ? "_blank" : ""
//                                               }
//                                               rel={
//                                                 item.external
//                                                   ? "noreferrer"
//                                                   : ""
//                                               }
//                                               className="webStore hover:underline"
//                                             >
//                                               WebStore
//                                             </Link>
//                                           </DropdownMenuItem>
//                                         </div>
//                                       ) : (
//                                         ""
//                                       )}
//                                       {item.download &&
//                                         item.star &&
//                                         item.version &&
//                                         item.updated ? (
//                                         <div>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             Downloads({item.download})
//                                           </DropdownMenuItem>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             Stars({item.star})
//                                           </DropdownMenuItem>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             Version({item.version})
//                                           </DropdownMenuItem>
//                                           <DropdownMenuItem className="flex items-center justify-center">
//                                             Updated({item.updated})
//                                           </DropdownMenuItem>
//                                         </div>
//                                       ) : (
//                                         ""
//                                       )}

//                                       {item.github_repo ? (
//                                         <DropdownMenuItem className="flex items-center justify-center">
//                                           <Link
//                                             key={index}
//                                             href={item.github_repo}
//                                             target={
//                                               item.external ? "_blank" : ""
//                                             }
//                                             rel={
//                                               item.external ? "noreferrer" : ""
//                                             }
//                                           >
//                                             Github
//                                           </Link>
//                                         </DropdownMenuItem>
//                                       ) : (
//                                         ""
//                                       )}
//                                     </DropdownMenuContent>
//                                   </DropdownMenu>
//                                 </div>
//                               ) : (
//                                 item.title
//                               ))}
//                           </React.Fragment>
//                         ))}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </div>
//               ))}
//             </div>
//           </Accordion>
//           <h5 className="mt-8 flex h-[250px] w-full items-start justify-center">
//             Build By Sumon & Loved By You!!!
//             {/* <Avatar>
//               <AvatarImage src={"/docs/metamask.jpg"} alt="@shadcn" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar> */}
//           </h5>
//         </ScrollArea>
//       </SheetContent>
//     </Sheet>
//   )
// }

// interface PrimarySidebarLinkProps extends LinkProps {
//   onOpenChange?: (open: boolean) => void
//   children: React.ReactNode
//   className?: string
// }

// function PrimarySidebarLink({
//   href,
//   onOpenChange,
//   className,
//   children,
//   ...props
// }: PrimarySidebarLinkProps) {
//   const router = useRouter()
//   return (
//     <Link
//       href={href}
//       onClick={() => {
//         router.push(href.toString())
//         onOpenChange?.(false)
//       }}
//       className={cn(className)}
//       {...props}
//     >
//       {children}
//     </Link>
//   )
// }
