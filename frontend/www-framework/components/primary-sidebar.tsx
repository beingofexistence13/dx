/* eslint-disable tailwindcss/classnames-order */

import {
    AlignCenterHorizontalIcon,
    ArrowBigLeft,
    ArrowBigLeftDash,
    ArrowBigRight,
    ArrowBigRightDash,
    ArrowLeftCircle,
    ArrowRightCircle,
    ArrowUpFromDot,
    Ban,
    Bomb,
    BookCopy,
    BookDown,
    BookKey,
    BookLock,
    BookMarked,
    BookmarkMinus,
    BookmarkPlusIcon,
    BoxSelect,
    Brackets,
    Briefcase,
    Bug,
    Check,
    ChevronLeft,
    ChevronLeftSquare,
    ChevronRight,
    ChevronRightSquare,
    ChevronsDown,
    ChevronsLeft,
    ChevronsRight,
    ChevronsUp,
    CircuitBoard,
    Clapperboard,
    Cog,
    Columns,
    ColumnsIcon,
    Copy,
    CopyCheck,
    CopySlash,
    Edit,
    Edit2,
    Expand,
    File,
    FileDown,
    FileEditIcon,
    FileOutput,
    FileTerminalIcon,
    FileText,
    FileUp,
    FlagOffIcon,
    FlagTriangleLeft,
    FlagTriangleRight,
    FlipHorizontal2,
    FlipVertical2,
    Folder,
    FolderCog,
    Footprints,
    Forward,
    Grid,
    Group,
    Lasso,
    LassoSelect,
    Layout,
    LineChart,
    ListChecks,
    ListEnd,
    ListMinus,
    ListOrdered,
    ListPlus,
    ListRestart,
    ListStart,
    ListTree,
    ListX,
    LucideSplit,
    Mail,
    Map,
    MapPin,
    Maximize,
    MenuSquare,
    MessageSquare,
    Minimize,
    MonitorDown,
    PanelRight,
    PanelTop,
    PanelTopClose,
    PanelTopOpen,
    PlaneLanding,
    Play,
    PlayCircle,
    PlusCircle,
    PlusCircleIcon,
    RectangleVertical,
    Redo,
    RefreshCcw,
    RefreshCw,
    Repeat1,
    ReplyAll,
    Rows,
    RowsIcon,
    Ruler,
    RussianRubleIcon,
    Save,
    SaveAll,
    ScissorsIcon,
    Scroll,
    SearchIcon,
    Share,
    ShieldCloseIcon,
    Shrink,
    SignalZero,
    SlidersHorizontal,
    Split,
    SplitSquareHorizontal,
    SplitSquareVertical,
    StepBack,
    StepForward,
    Terminal,
    TerminalIcon,
    TextCursor,
    ThermometerIcon,
    TimerReset,
    ToggleLeft,
    TypeIcon,
    Undo,
    UndoDot,
    View,
    WholeWord,
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
import { BookmarkFilledIcon, CursorTextIcon, FileTextIcon, PinBottomIcon, PinLeftIcon, PinRightIcon, SymbolIcon } from "@radix-ui/react-icons"

export function PrimarySidebar() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="nav-toggles 2xs:hidden xs:hidden h-24 px-2 py-5 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden lg:flex"
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
            <DropdownMenuContent className="w-max min-w-[230px]">

                {/* File */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <File className="mr-2 h-4 w-4" />
                        <span>File</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <Folder className="mr-2 h-4 w-4" />
                                <span>Open Folder</span>
                                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Briefcase className="mr-2 h-4 w-4" />
                                <span>Open Work...</span>
                                <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <TimerReset className="mr-2 h-4 w-4" />
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
                                <SaveAll className="mr-2 h-4 w-4" />
                                <span>Save All</span>
                                <DropdownMenuShortcut>⌘KS</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Save className="mr-2 h-4 w-4" />
                                <span>Save As</span>
                                <DropdownMenuShortcut>⌘SA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CopyCheck className="mr-2 h-4 w-4" />
                                <span>Duplicate Work...</span>
                                <DropdownMenuShortcut>⌘DW</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Share className="mr-2 h-4 w-4" />
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
                                    <SlidersHorizontal className="mr-2 h-4 w-4" />
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
                                <RectangleVertical className="mr-2 h-4 w-4" />
                                <span>Revert</span>
                                <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ShieldCloseIcon className="mr-2 h-4 w-4" />
                                <span>Close All</span>
                                <DropdownMenuShortcut>⌘CA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* Edit */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Cog className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <Undo className="mr-2 h-4 w-4" />
                                <span>Undo</span>
                                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Redo className="mr-2 h-4 w-4" />
                                <span>Redo</span>
                                <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <ScissorsIcon className="mr-2 h-4 w-4" />
                                <span>Cut</span>
                                <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" />
                                <span>Copy</span>
                                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <CopySlash className="mr-2 h-4 w-4" />
                                    <span>Copy As</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <FileText className="mr-2 h-4 w-4" />
                                            <span>pdf</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FileTextIcon className="mr-2 h-4 w-4" />
                                            <span>csv</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <FileTerminalIcon className="mr-2 h-4 w-4" />
                                            <span>json</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <SearchIcon className="mr-2 h-4 w-4" />
                                <span>Find</span>
                                <DropdownMenuShortcut>⌘FD</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ReplyAll className="mr-2 h-4 w-4" />
                                <span>Replace</span>
                                <DropdownMenuShortcut>⌘RE</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileDown className="mr-2 h-4 w-4" />
                                <span>Find in Files</span>
                                <DropdownMenuShortcut>⌘FDF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileEditIcon className="mr-2 h-4 w-4" />
                                <span>Replace in Files</span>
                                <DropdownMenuShortcut>⌘REF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* Selection */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <BoxSelect className="mr-2 h-4 w-4" />
                        <span>Selection</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <LassoSelect className="mr-2 h-4 w-4" />
                                <span>Select All</span>
                                <DropdownMenuShortcut>⌘STA</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Lasso className="mr-2 h-4 w-4" />
                                <span>Select All Occurence</span>
                                <DropdownMenuShortcut>⌘STAO</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Expand className="mr-2 h-4 w-4" />
                                <span>Expand Selection</span>
                                <DropdownMenuShortcut>⌘EDSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Shrink className="mr-2 h-4 w-4" />
                                <span>Shrink Selection</span>
                                <DropdownMenuShortcut>⌘SKSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CopySlash className="mr-2 h-4 w-4" />
                                <span>Duplicate Selection</span>
                                <DropdownMenuShortcut>⌘DESN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CursorTextIcon className="mr-2 h-4 w-4" />
                                <span>Multicursor Selection</span>
                                <DropdownMenuShortcut>⌘MRSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ColumnsIcon className="mr-2 h-4 w-4" />
                                <span>Column Selection</span>
                                <DropdownMenuShortcut>⌘CNSN</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* View */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <View className="mr-2 h-4 w-4" />
                        <span>View</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <span>Explorer</span>
                                <DropdownMenuShortcut>Alt + Ctrl + E</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Search</span>
                                <DropdownMenuShortcut>Alt + Ctrl + S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Source Control</span>
                                <DropdownMenuShortcut>Alt + Ctrl + SC</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Extention</span>
                                <DropdownMenuShortcut>Alt + Ctrl + EX</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Run</span>
                                <DropdownMenuShortcut>Alt + Ctrl + RN</DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Ruler className="mr-2 h-4 w-4" />
                                    <span>Appearence</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Maximize className="mr-2 h-4 w-4" />
                                            <span>Full Screen</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + FS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CircuitBoard className="mr-2 h-4 w-4" />
                                            <span>Zen Mode</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + ZM</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FlipHorizontal2 className="mr-2 h-4 w-4" />
                                            <span>Centered Layout</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + CL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <MenuSquare className="mr-2 h-4 w-4" />
                                            <span>Menubar</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + MB</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PanelTopOpen className="mr-2 h-4 w-4" />
                                            <span>Primary Sidebar</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + PS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PanelTop className="mr-2 h-4 w-4" />
                                            <span>Secondary Sidebar</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + SS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Check className="mr-2 h-4 w-4" />
                                            <span>Activitybar</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + AB</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PlaneLanding className="mr-2 h-4 w-4" />
                                            <span>Panel</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + PL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <PanelRight className="mr-2 h-4 w-4" />
                                            <span>Move Primary Sidebar Right</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + MPSR</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <PanelTopClose className="mr-2 h-4 w-4" />
                                                <span>Panel Position</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <span>Top</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <span>Bottom</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <span>Left</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <span>Right</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <Map className="mr-2 h-4 w-4" />
                                                <span>Align Position</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <span>Top</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <span>Bottom</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <span>Left</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <span>Right</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <Minimize className="mr-2 h-4 w-4" />
                                            <span>Minimap</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + MNP</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <AlignCenterHorizontalIcon className="mr-2 h-4 w-4" />
                                            <span>Breadcrumbs</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + BDS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Scroll className="mr-2 h-4 w-4" />
                                            <span>Sticky Scroll</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + SYSL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <TextCursor className="mr-2 h-4 w-4" />
                                            <span>Render Whitespace</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + RWE</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <TypeIcon className="mr-2 h-4 w-4" />
                                            <span>Render Control Caracter</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + RCC</DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Layout className="mr-2 h-4 w-4" />
                                    <span>Editor Layout</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <SplitSquareHorizontal className="mr-2 h-4 w-4" />
                                            <span>Split Up</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <LucideSplit className="mr-2 h-4 w-4" />
                                            <span>Split Down</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STD</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PinLeftIcon className="mr-2 h-4 w-4" />
                                            <span>Split Left</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PinRightIcon className="mr-2 h-4 w-4" />
                                            <span>Split Right</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STR</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <SignalZero className="mr-2 h-4 w-4" />
                                            <span>Single</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STG</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Columns className="mr-2 h-4 w-4" />
                                            <span>Two Columns</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TOC</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ThermometerIcon className="mr-2 h-4 w-4" />
                                            <span>Three Columns</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TEC</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Rows className="mr-2 h-4 w-4" />
                                            <span>Two Rows</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TOR</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <RowsIcon className="mr-2 h-4 w-4" />
                                            <span>Three Rows</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TER</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Grid className="mr-2 h-4 w-4" />
                                            <span>Grid(2*2)</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STG</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PinRightIcon className="mr-2 h-4 w-4" />
                                            <span>Two Colums Right</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TCR</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <PinBottomIcon className="mr-2 h-4 w-4" />
                                            <span>Two Colums Bottom</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + TCB</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <SplitSquareVertical className="mr-2 h-4 w-4" />
                                            <span>Split in Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STG</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FlipVertical2 className="mr-2 h-4 w-4" />
                                            <span>Flip Layout</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + FPL</DropdownMenuShortcut>
                                        </DropdownMenuItem>


                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Ban className="mr-2 h-4 w-4" />
                                <span>Problem</span>
                                <DropdownMenuShortcut>Alt + Ctrl + PM</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileOutput className="mr-2 h-4 w-4" />
                                <span>Output</span>
                                <DropdownMenuShortcut>Alt + Ctrl + OT</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bug className="mr-2 h-4 w-4" />
                                <span>Debug</span>
                                <DropdownMenuShortcut>Alt + Ctrl + DG</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Terminal className="mr-2 h-4 w-4" />
                                <span>Terminal</span>
                                <DropdownMenuShortcut>Alt + Ctrl + TL</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <WholeWord className="mr-2 h-4 w-4" />
                                <span>Wordwrap</span>
                                <DropdownMenuShortcut>Alt + Ctrl + WP</DropdownMenuShortcut>
                            </DropdownMenuItem>

                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* Go */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <RussianRubleIcon className="mr-2 h-4 w-4" />
                        <span>Go</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <UndoDot className="mr-2 h-4 w-4" />
                                <span>Back</span>
                                <DropdownMenuShortcut>Alt + Shift + BK </DropdownMenuShortcut>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Forward className="mr-2 h-4 w-4" />
                                <span>Forward</span>
                                <DropdownMenuShortcut>Alt + Shift + FD </DropdownMenuShortcut>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <MapPin className="mr-2 h-4 w-4" />
                                <span>Last Edit Location</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>

                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <ToggleLeft className="mr-2 h-4 w-4" />
                                    <span>Switch Editor</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <ArrowBigRight className="mr-2 h-4 w-4" />
                                            <span>Next Editor</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + FS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ArrowBigRightDash className="mr-2 h-4 w-4" />
                                            <span>Next Used Editor</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + ZM</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ArrowBigLeft className="mr-2 h-4 w-4" />
                                            <span>Previous Editor</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + CL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ArrowBigLeftDash className="mr-2 h-4 w-4" />
                                            <span>Previous Used Editor</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + CL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <ChevronRight className="mr-2 h-4 w-4" />
                                            <span>Next Editor in Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + FS</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronRightSquare className="mr-2 h-4 w-4" />
                                            <span>Next Used Editor in Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + ZM</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            <span>Previous Editor in Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + CL</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronLeftSquare className="mr-2 h-4 w-4" />
                                            <span>Previous Used Editor in Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + CL</DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Group className="mr-2 h-4 w-4" />
                                    <span>Switch Group</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <FileDown className="mr-2 h-4 w-4" />
                                            <span>Group 1</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FileUp className="mr-2 h-4 w-4" />
                                            <span>Group 2</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FlagTriangleLeft className="mr-2 h-4 w-4" />
                                            <span>Group 3</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FlagTriangleRight className="mr-2 h-4 w-4" />
                                            <span>Group 4</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FlagOffIcon className="mr-2 h-4 w-4" />
                                            <span>Group 5</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <ArrowRightCircle className="mr-2 h-4 w-4" />
                                            <span>Next Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ArrowLeftCircle className="mr-2 h-4 w-4" />
                                            <span>Previous Group</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                            <ChevronsUp className="mr-2 h-4 w-4" />
                                            <span>Group Top</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronsDown className="mr-2 h-4 w-4" />
                                            <span>Group Bottom</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronsLeft className="mr-2 h-4 w-4" />
                                            <span>Group Left</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ChevronsRight className="mr-2 h-4 w-4" />
                                            <span>Group Right</span>
                                            <DropdownMenuShortcut>Alt + Ctrl + STU</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <File className="mr-2 h-4 w-4" />
                                <span>Go to File</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookCopy className="mr-2 h-4 w-4" />
                                <span>Go to Reffrence</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookDown className="mr-2 h-4 w-4" />
                                <span>Go to Defination</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookLock className="mr-2 h-4 w-4" />
                                <span>Go to Declaration</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookMarked className="mr-2 h-4 w-4" />
                                <span>Go to Type Defination</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookKey className="mr-2 h-4 w-4" />
                                <span>Go to Implementation</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Brackets className="mr-2 h-4 w-4" />
                                <span>Go to Bracket</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LineChart className="mr-2 h-4 w-4" />
                                <span>Go to Line/Column</span>
                                <DropdownMenuShortcut>Alt + Shift + GTLC</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SymbolIcon className="mr-2 h-4 w-4" />
                                <span>Go to Symbol in Editor</span>
                                <DropdownMenuShortcut>Alt + Shift + GTSE</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FolderCog className="mr-2 h-4 w-4" />
                                <span>Go to Symbol in Workspace</span>
                                <DropdownMenuShortcut>Alt + Shift + GTSW</DropdownMenuShortcut>
                            </DropdownMenuItem>


                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* Run */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        <span>Run</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                <span>Start Debugging</span>
                                <DropdownMenuShortcut>Alt + Shift + BK </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                <span>Stop Debugging</span>
                                <DropdownMenuShortcut>Alt + Shift + FD </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Repeat1 className="mr-2 h-4 w-4" />
                                <span>Run without Debugging</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListRestart className="mr-2 h-4 w-4" />
                                <span>Restart Debugging</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ArrowUpFromDot className="mr-2 h-4 w-4" />
                                <span>Step Over</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <StepForward className="mr-2 h-4 w-4" />
                                <span>Step Into</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <StepBack className="mr-2 h-4 w-4" />
                                <span>Step Out</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Footprints className="mr-2 h-4 w-4" />
                                <span>Continue</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <ListChecks className="mr-2 h-4 w-4" />
                                <span>Toggle Breakpoint</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                <span>New Breakpoint</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListEnd className="mr-2 h-4 w-4" />
                                <span>Enable All Breakpoint</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListX className="mr-2 h-4 w-4" />
                                <span>Disable All Breakpoint</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListMinus className="mr-2 h-4 w-4" />
                                <span>Remove All Breakpoint</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <ListOrdered className="mr-2 h-4 w-4" />
                                <span>Open Configuretion</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListPlus className="mr-2 h-4 w-4" />
                                <span>Add Configuretion</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ListTree className="mr-2 h-4 w-4" />
                                <span>Install Additional Debugger</span>
                                <DropdownMenuShortcut>Alt + Shift + GTF</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* Terminal */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <TerminalIcon className="mr-2 h-4 w-4" />
                        <span>Terminal</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <PlusCircleIcon className="mr-2 h-4 w-4" />
                                <span>New Terminal</span>
                                <DropdownMenuShortcut>Alt + Shift + BK </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Split className="mr-2 h-4 w-4" />
                                <span>Split Terminal</span>
                                <DropdownMenuShortcut>Alt + Shift + FD </DropdownMenuShortcut>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                <span>Run Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <PlayCircle className="mr-2 h-4 w-4" />
                                <span>Run Build Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <MonitorDown className="mr-2 h-4 w-4" />
                                <span>Run Selected Content</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Clapperboard className="mr-2 h-4 w-4" />
                                <span>Show Running Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookmarkMinus className="mr-2 h-4 w-4" />
                                <span>Restart Running Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bomb className="mr-2 h-4 w-4" />
                                <span>Terminate Running Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <BookmarkPlusIcon className="mr-2 h-4 w-4" />
                                <span>Configure Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BookmarkFilledIcon className="mr-2 h-4 w-4" />
                                <span>Configure Default Build Task</span>
                                <DropdownMenuShortcut>Alt + Shift + LEL </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <span className="text-xs text-muted">Open Documentation</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <span className="text-xs text-muted">Open Changelog</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <span className="text-xs text-muted">Open Templates</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <span className="text-xs text-muted">Open Youtube</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <span className="text-xs text-muted">Open Homepage</span>
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
//                 <h4 className="text-xs font-semibold">@nextjs</h4>
//                 <p className="text-xs">
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
//             <AvatarImage src="/logo.svg" alt="@beingofexistence" />
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
//               <AvatarImage src={"/docs/metamask.jpg"} alt="@beingofexistence" />
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
