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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertDescription,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertTitle,
    AspectRatio,
    Badge,
    badgeVariants,
    Button,
    buttonVariants,
    Calendar,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Checkbox,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
    // Dialog,
    // DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    InputShadcnUi,
    Label,
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    RadioGroup,
    RadioGroupItem,
    ScrollArea,
    ScrollBar,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    Separator,
    Sheet,
    SheetContent,
    SheetTrigger,
    Skeleton,
    Slider,
    Switch,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
    Toast,
    toast,
    ToastAction,
    ToastClose,
    ToastDescription,
    Toaster,
    ToastProvider,
    ToastTitle,
    ToastViewport,
    Toggle,
    toggleVariants,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    useFormField,
    useToast,
    type ToastActionElement,
    type ToastProps,
} from "@/components/ui"
import { Icons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui"
import Image from 'next/image'
import Script from "next/script"


export function UserAction() {
    return (
        <>
            <DropdownMenu>
           <DropdownMenuTrigger asChild>
               <div className="nav-toggles flex h-[35px] w-[35px] items-center justify-center">
                   <Avatar className="max-h-[25px] max-w-[25px] ">
                       <AvatarImage src="/emon.jpg" alt="@bigbro" />
                       <AvatarFallback>E</AvatarFallback>
                   </Avatar>
               </div>
           </DropdownMenuTrigger>
           <DropdownMenuContent className="w-56">
               <DropdownMenuLabel>User</DropdownMenuLabel>
               <DropdownMenuSeparator />
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
                       <span>Profile Settings</span>
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
            {/* <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Script src="./ux/globals.js" />
                    <nav className="navbar_profile_container NDPC">
                        <div className="navbar_profile_container_guard profile_container NDPCG overflow-y-auto overflow-x-hidden">
                            <div className="navbar_profile_container_guard_default NDPCGD ">
                                <div className="NDPCGDT">
                                    <div className="NDPCGDTT ">
                                        <div className="NDPCGDTTL">
                                            <div className="NDPCGDTTLAC">
                                                <div className="NDPCGDTTA">
                                                    <div className="NDPCGDTTAC NDPCGDTTACR">
                                                        <span className="NDPCGDTTACI" />
                                                    </div>
                                                    <div className="NDPCGDTTAC NDPCGDTTACY">
                                                        <span className="NDPCGDTTACI" />
                                                    </div>
                                                    <div className="NDPCGDTTAC NDPCGDTTACG">
                                                        <span className="NDPCGDTTACI" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="NDPCGDTTT">User</h2>
                                        </div>
                                        <div className="NDPCGDTTR">
                                            <div className="NDPCGDTTIC">
                                                <span className="NDPCGDTTI" />
                                            </div>
                                            <div className="NDPCGDTTIC">
                                                <span className="NDPCGDTTI" />
                                            </div>
                                            <div className="NDPCGDTTIC">
                                                <span

                                                    className="NDPCGDTTI icon_visible profile_var_close"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NDPCGDTC">
                                        <Image
                                            src="/docs/metamask.jpg"
                                            alt="e"
                                            className="NDPCGDTCL"
                                            height={50}
                                            width={50}
                                        />
                                        <h3 className="NDPCGDTCN">Manfromearth25</h3>
                                        <h3 className="NDPCGDTCE">manfromearth25@gmail.com</h3>
                                        <h3 className="NDPCGDTCA">QW4Q4W5YE7H8DI4JFEPOM</h3>
                                    </div>
                                    <div className="NDPCGDTB h-auto w-auto p-1 text-center">Manage Your Personal Account</div>
                                </div>
                                <ul className="NDPCGDC">
                                    <li className="NDPCGDCL profile_switch_button">
                                        <div className="NDPCGDCLIC circle_icon">
                                            <span />
                                        </div>
                                        <div className="NDPCGDCLTC">
                                            <h2 className="NDPCGDCLT">Switch &amp; Account</h2>
                                        </div>
                                        <div className="NDPCGDCLIC">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                    </li>
                                    <li className="NDPCGDCL profile_setting_button">
                                        <div className="NDPCGDCLIC circle_icon">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                        <div className="NDPCGDCLTC">
                                            <h2 className="NDPCGDCLT">Setting &amp; Privacy</h2>
                                        </div>
                                        <div className="NDPCGDCLIC">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                    </li>
                                    <li className="NDPCGDCL profile_help_button">
                                        <div className="NDPCGDCLIC circle_icon">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                        <div className="NDPCGDCLTC">
                                            <h2 className="NDPCGDCLT">Help &amp; Support</h2>
                                        </div>
                                        <div className="NDPCGDCLIC">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                    </li>
                                    <li className="NDPCGDCL profile_language_button">
                                        <div className="NDPCGDCLIC circle_icon">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                        <div className="NDPCGDCLTC">
                                            <h2 className="NDPCGDCLT">Language &amp; Audio</h2>
                                        </div>
                                        <div className="NDPCGDCLIC">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                    </li>
                                    <li className="NDPCGDCL profile_location_button">
                                        <div className="NDPCGDCLIC circle_icon">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                        <div className="NDPCGDCLTC">
                                            <h2 className="NDPCGDCLT">Location &amp; Ip</h2>
                                        </div>
                                        <div className="NDPCGDCLIC">
                                            <span className="NDPCGDCLI" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="NDPCGDB border-t">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                                <div className="NDPCGDF h-[500px] w-full">
                                    <div className="NDPCGDFB">Sign Out &amp; Remove All Data</div>
                                    <div className="NDPCGDFC text-center text-xs">
                                        Privacy • Terms • Advertising • Ad Choice • Cookies • More • Hello ©️ 2023
                                    </div>
                                </div>
                            </div>
                            <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
                                <div className="NDPCGDT NDPCGFBT">
                                    <div className="NDPCGDTT NDPCGFBTT">
                                        <div className="NDPCGDTTL NDPCGFBTTL">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span className="profile_back_button" />
                                            </div>
                                            <h2 className="NDPCGDTTT NDPCGFBTTT ">Switch &amp; Account</h2>
                                        </div>
                                        <div className="NDPCGDTTR NDPCGFBTTR">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span

                                                    className="icon_visible profile_close NDPCGDTTI"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="NDPCGDB NDPCGFBB">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
                                <div className="NDPCGDT NDPCGFBT">
                                    <div className="NDPCGDTT NDPCGFBTT">
                                        <div className="NDPCGDTTL NDPCGFBTTL">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span className="profile_back_button" />
                                            </div>
                                            <h2 className="NDPCGDTTT">Setting &amp; Privacy</h2>
                                        </div>
                                        <div className="NDPCGDTTR NDPCGFBTTR">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span

                                                    className="icon_visible profile_close NDPCGDTTI"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="NDPCGDB NDPCGFBB">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
                                <div className="NDPCGDT NDPCGFBT">
                                    <div className="NDPCGDTT NDPCGFBTT">
                                        <div className="NDPCGDTTL NDPCGFBTTL">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span className="profile_back_button" />
                                            </div>
                                            <h2 className="NDPCGDTTT">Help &amp; Support</h2>
                                        </div>
                                        <div className="NDPCGDTTR NDPCGFBTTR">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span

                                                    className="icon_visible profile_close NDPCGDTTI"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="NDPCGDB NDPCGFBB">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
                                <div className="NDPCGDT NDPCGFBT">
                                    <div className="NDPCGDTT NDPCGFBTT">
                                        <div className="NDPCGDTTL NDPCGFBTTL">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span className="profile_back_button" />
                                            </div>
                                            <h2 className="NDPCGDTTT">Language &amp; Audio</h2>
                                        </div>
                                        <div className="NDPCGDTTR NDPCGFBTTR">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span

                                                    className="icon_visible profile_close NDPCGDTTI"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="NDPCGDB NDPCGFBB">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_profile_container_guard_default NDPCGD  NDPCGS&A">
                                <div className="NDPCGDT NDPCGFBT">
                                    <div className="NDPCGDTT NDPCGFBTT">
                                        <div className="NDPCGDTTL NDPCGFBTTL">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span className="profile_back_button" />
                                            </div>
                                            <h2 className="NDPCGDTTT">Location &amp; Ip</h2>
                                        </div>
                                        <div className="NDPCGDTTR NDPCGFBTTR">
                                            <div className="NDPCGDTTIC NDPCGFBTTIC">
                                                <span

                                                    className="icon_visible profile_close NDPCGDTTI"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="NDPCGDB NDPCGFBB">
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Link Account</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Profile</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Wallet</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Activity Log</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Feed</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Theme</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Keyboard Shortcut</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Request A Feature</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_less">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Give Feedback</h2>
                                        </div>
                                    </li>
                                    <li className="NDPCGDBL show_toggler">
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                        <div className="NDPCGDBLTC">
                                            <h2 className="NDPCGDBLT">Logout</h2>
                                        </div>
                                        <div className="NDPCGDBLIC circle_icon">
                                            <span className="NDPCGDBLI" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="op">hi</div>
                        </div>
                    </nav>
                </PopoverContent>
            </Popover> */}
        </>
    )
}

























































