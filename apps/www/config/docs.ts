import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/ui/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/docs/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/beingofexistence/dx",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/beingofexistence",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/ui/typography",
          items: [],
        },
        {
          title: "Figma",
          href: "/docs/figma",
          items: [],
        },
        {
          title: "Spline",
          href: "/docs/spline",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
        {
          title: "About",
          href: "/docs/about",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "Ui",
      items: [
        {
          title: "Friday",
          href: "/docs/ui/friday",
          items: [],
        },
        {
          title: "Hello Mode",
          href: "/docs/ui/hello-mode",
          items: [],
        },
        {
          title: "Multiverse",
          href: "/docs/ui/multiverse",
          items: [],
        },
        {
          title: "Navbar",
          href: "/docs/ui/navbar",
          items: [],
        },
        {
          title: "Blockchain Status",
          href: "/docs/ui/blockchain-status",
          items: [],
        },
        {
          title: "Activitybar",
          href: "/docs/ui/activitybar",
          items: [],
        },
        {
          title: "Primary Sidebar",
          href: "/docs/ui/primary-sidebar",
          items: [],
        },
        {
          title: "Secondary Sidebar",
          href: "/docs/ui/secondary-sidebar",
          items: [],
        },
        {
          title: "Bottombar",
          href: "/docs/ui/bottombar",
          items: [],
        },
        {
          title: "Dockbar",
          href: "/docs/ui/dockbar",
          items: [],
        },
        {
          title: "Video Player",
          href: "/docs/ui/video-player",
          items: [],
        },
        {
          title: "Hello 3d",
          href: "/docs/ui/hello-3d",
          items: [],
        },
        {
          title: "Theme",
          href: "/docs/ui/theme",
          items: [],
        },
        {
          title: "Keyboard Shortcuts",
          href: "/docs/ui/keyboard-shortcuts",
          items: [],
        },
        {
          title: "Search",
          href: "/docs/ui/search",
          items: [],
        },
        {
          title: "Command Palette",
          href: "/docs/ui/command-palette",
          items: [],
        },
        {
          title: "Footer",
          href: "/docs/ui/footer",
          items: [],
        },
        {
          title: "According",
          href: "/docs/ui/according",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/ui/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/ui/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/ui/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/ui/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/ui/badge",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/ui/button",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/ui/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/ui/card",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/ui/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/ui/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/ui/combobox",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/ui/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/docs/ui/data-table",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/ui/dialog",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/ui/dropdown-menu",
          items: [],
        },
        {
          title: "Form",
          href: "/docs/ui/form",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/ui/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/ui/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/ui/label",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/ui/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/ui/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/ui/radio-group",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/ui/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/ui/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/ui/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/ui/sheet",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/ui/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/ui/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/ui/switch",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/ui/table",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/ui/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/ui/textarea",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/ui/toast",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/ui/toggle",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/ui/tooltip",
          items: [],
        },
        {
          title: "Text",
          href: "/docs/ui/text",
          items: [],
        },
        {
          title: "Charts",
          href: "/docs/ui/charts",
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/ui/pagination",
          items: [],
        },
        {
          title: "Breadcrumbs",
          href: "/docs/ui/breadcrumbs",
          items: [],
        },
        {
          title: "Chat Bubble",
          href: "/docs/ui/chat-bubble",
          items: [],
        },
        {
          title: "Date and Time Picker",
          href: "/docs/ui/date-and-time-picker",
          items: [],
        },

        {
          title: "Stacked Lists",
          href: "/docs/ui/stacked-lists",
          items: [],
        },
        {
          title: "Feeds",
          href: "/docs/ui/feeds",
          items: [],
        },
        {
          title: "Feildset",
          href: "/docs/ui/feildset",
          items: [],
        },
        {
          title: "States",
          href: "/docs/ui/states",
          items: [],
        },
        {
          title: "Action Panels",
          href: "/docs/ui/action-panels",
          items: [],
        },
        {
          title: "Checkout Form",
          href: "/docs/ui/checkout-form",
          items: [],
        },
        {
          title: "Reviews",
          href: "/docs/ui/reviews",
          items: [],
        },
        {
          title: "Order Summaries",
          href: "/docs/ui/order-summaries",
          items: [],
        },
        {
          title: "Order History",
          href: "/docs/ui/order-history",
          items: [],
        },
        {
          title: "Incentives",
          href: "/docs/ui/incentives",
          items: [],
        },
        {
          title: "Box",
          href: "/docs/ui/box",
          items: [],
        },
        {
          title: "Callout",
          href: "/docs/ui/callout",
          items: [],
        },
        {
          title: "Datapoint",
          href: "/docs/ui/datapoint",
          items: [],
        },
        {
          title: "Masonary",
          href: "/docs/ui/masonary",
          items: [],
        },
        {
          title: "Overlay Panels",
          href: "/docs/ui/overlay-panels",
          items: [],
        },
        {
          title: "Table Of Contents",
          href: "/docs/ui/table-of-contents",
          items: [],
        },
        {
          title: "Float Button",
          href: "/docs/ui/float-button",
          items: [],
        },
        {
          title: "Autocomplete",
          href: "/docs/ui/autocomplete",
          items: [],
        },
        {
          title: "Cascader",
          href: "/docs/ui/cascader",
          items: [],
        },
        {
          title: "Color Picker",
          href: "/docs/ui/color-picker",
          items: [],
        },
        {
          title: "Mentions",
          href: "/docs/ui/mentions",
          items: [],
        },
        {
          title: "Rate",
          href: "/docs/ui/rate",
          items: [],
        },
        {
          title: "Carosel",
          href: "/docs/ui/carosel",
          items: [],
        },
        {
          title: "Transfer",
          href: "/docs/ui/transfer",
          items: [],
        },
        {
          title: "Tag",
          href: "/docs/ui/tag",
          items: [],
        },
        {
          title: "QR Code",
          href: "/docs/ui/qr-code",
          items: [],
        },
        {
          title: "Statics",
          href: "/docs/ui/statics",
          items: [],
        },
        {
          title: "Timeline",
          href: "/docs/ui/timeline",
          items: [],
        },
        {
          title: "Tour",
          href: "/docs/ui/tour",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/ui/skeleton",
          items: [],
        },
        {
          title: "Affix",
          href: "/docs/ui/affix",
          items: [],
        },
        {
          title: "Segmented",
          href: "/docs/ui/segmented",
          items: [],
        },
        {
          title: "Tree",
          href: "/docs/ui/tree",
          items: [],
        },
        {
          title: "Steps",
          href: "/docs/ui/steps",
          items: [],
        },
        {
          title: "Rail",
          href: "/docs/ui/rail",
          items: [],
        },
        {
          title: "Dimmer",
          href: "/docs/ui/dimmer",
          items: [],
        },
        {
          title: "Portal",
          href: "/docs/ui/portal",
          items: [],
        },
        {
          title: "Range Selector",
          href: "/docs/ui/range-selector",
          items: [],
        },
        {
          title: "Emoji Feedback",
          href: "/docs/ui/emojif-feedback",
          items: [],
        },
        {
          title: "World Map",
          href: "/docs/ui/world-map",
          items: [],
        },
        {
          title: "Meter",
          href: "/docs/ui/meter",
          items: [],
        },
        {
          title: "College",
          href: "/docs/ui/college",
          items: [],
        },
        {
          title: "Material Ui",
          href: "/docs/ui/material-ui",
          items: [],
        },
        {
          title: "Nextui",
          href: "/docs/ui/nextui",
          items: [],
        },
        {
          title: "Background Color",
          href: "/docs/ui/background-color",
          items: [],
        },
      ],
    },
    {
      title: "Ux",
      items: [
        {
          title: "Ar and Vr",
          href: "/docs/ux/ar-and-vr",
          items: [],
        },
        {
          title: "Motionjs",
          href: "/docs/ux/motionjs",
          items: [],
        },
        {
          title: "Framer Motion",
          href: "/docs/ux/framer-motion",
          items: [],
        },
        {
          title: "Threejs",
          href: "/docs/ux/threejs",
          items: [],
        },
        {
          title: "Unreal Engine",
          href: "/docs/ux/unreal-engine",
          items: [],
        },
        {
          title: "Unity Engine",
          href: "/docs/ux/unity-engine",
          items: [],
        },
        {
          title: "Blendar",
          href: "/docs/ux/blendar",
          items: [],
        },
        {
          title: "Maya",
          href: "/docs/ux/maya",
          items: [],
        },
        {
          title: "360Deg",
          href: "/docs/ux/360deg",
          items: [],
        },
        {
          title: "WebAssembly",
          href: "/docs/ux/webassembly",
          items: [],
        },
      ],
    },
    {
      title: "Web3",
      items: [
        {
          title: "Chain",
          href: "/docs/web3/chain",
          items: [],
        },
        {
          title: "Wallet",
          href: "/docs/web3/wallet",
          items: [],
        },
        {
          title: "Smart Contract",
          href: "/docs/web3/smart-conatract",
          items: [],
        },
        {
          title: "Ipfs",
          href: "/docs/web3/ipfs",
          items: [],
        },
        {
          title: "Nft",
          href: "/docs/web3/nft",
          items: [],
        },
        {
          title: "Token",
          href: "/docs/web3/token",
          items: [],
        },
        {
          title: "Metaplex",
          href: "/docs/web3/metaplex",
          items: [],
        },
        {
          title: "Moralis",
          href: "/docs/web3/moralis",
          items: [],
        },
        {
          title: "Thirdweb",
          href: "/docs/web3/thirdweb",
          items: [],
        },
        {
          title: "Alchemy",
          href: "/docs/web3/alchemy",
          items: [],
        },
        {
          title: "Opensea",
          href: "/docs/web3/openesea",
          items: [],
        },
        {
          title: "Magiceden",
          href: "/docs/web3/magiceden",
          items: [],
        },
        {
          title: "Rareble",
          href: "/docs/web3/rareble",
          items: [],
        },
        {
          title: "Rainbow",
          href: "/docs/web3/rainbow",
          items: [],
        },
        {
          title: "Pancakeswap",
          href: "/docs/web3/pancakeswap",
          items: [],
        },
        {
          title: "Uniswap",
          href: "/docs/web3/uniswap",
          items: [],
        },
      ],
    },
    {
      title: "Ai",
      items: [
        {
          title: "Huggingface",
          href: "/docs/ai/huggingface",
          items: [],
        },
        {
          title: "Openai",
          href: "/docs/ai/openai",
          items: [],
        },
        {
          title: "Meta",
          href: "/docs/ai/meta",
          items: [],
        },
        {
          title: "Google",
          href: "/docs/ai/google",
          items: [],
        },
        {
          title: "Chatgpt",
          href: "/docs/ai/chatgpt",
          items: [],
        },
        {
          title: "Lanchain",
          href: "/docs/ai/lanchain",
          items: [],
        },
        {
          title: "Stable Diffution",
          href: "/docs/ai/stable-diffution",
          items: [],
        },
        {
          title: "Midjourney",
          href: "/docs/ai/midjourney",
          items: [],
        },
        {
          title: "Leanardoai",
          href: "/docs/ai/learnardoai",
          items: [],
        },
        {
          title: "Clipdrop",
          href: "/docs/ai/clipdrop",
          items: [],
        },
        {
          title: "Wonder Dynamics",
          href: "/docs/ai/wonder-dynamics",
          items: [],
        },
        {
          title: "Skyboxai",
          href: "/docs/ai/skyboxai",
          items: [],
        },
        {
          title: "Viam",
          href: "/docs/ai/viam",
          items: [],
        },
      ],
    },
    {
      title: "Databases",
      items: [
        {
          title: "Mysql",
          href: "/docs/database/mysql",
          items: [],
        },
        {
          title: "Postgresql",
          href: "/docs/database/postgresql",
          items: [],
        },
        {
          title: "Mongodb",
          href: "/docs/database/mongodb",
          items: [],
        },
        {
          title: "Redis",
          href: "/docs/database/redis",
          items: [],
        },
        {
          title: "Yugabyte",
          href: "/docs/database/yugabyte",
          items: [],
        },
        {
          title: "Neon",
          href: "/docs/database/neon",
          items: [],
        },
        {
          title: "Cockrockdb",
          href: "/docs/database/cockrockdb",
          items: [],
        },
        {
          title: "Xata",
          href: "/docs/database/xata",
          items: [],
        },
        {
          title: "8base",
          href: "/docs/database/8base",
          items: [],
        },
        {
          title: "Edgedb",
          href: "/docs/database/edgedb",
          items: [],
        },
        {
          title: "Fuana",
          href: "/docs/database/fuana",
          items: [],
        },
        {
          title: "Memgraph",
          href: "/docs/database/memgraph",
          items: [],
        },
        {
          title: "Planetscale",
          href: "/docs/database/planetscale",
          items: [],
        },
        {
          title: "Postgresql",
          href: "/docs/database/postgresql",
          items: [],
        },
        {
          title: "Mindsdb",
          href: "/docs/database/mindsdb",
          items: [],
        },
        {
          title: "Pocketbase",
          href: "/docs/database/pocketbase",
          items: [],
        },
        {
          title: "Firebase",
          href: "/docs/database/firebase",
          items: [],
        },
        {
          title: "Dynomodb",
          href: "/docs/database/dynomodb",
          items: [],
        },
        {
          title: "Superbase",
          href: "/docs/database/superbase",
          items: [],
        },
        {
          title: "Keydb + Neo4j",
          href: "/docs/database/keydb-plus-neo4j",
          items: [],
        },
        {
          title: "Dolt + Gun",
          href: "/docs/database/dolt-plus-gun",
          items: [],
        },
        {
          title: "Meilisearch + Algoria",
          href: "/docs/database/meilisearch-plus-algoria",
          items: [],
        },
        {
          title: "Casandra + Hasura",
          href: "/docs/database/casandr-plus-hasura",
          items: [],
        },
        {
          title: "Nhost + Appwrite",
          href: "/docs/database/nhost-plus-appwrite",
          items: [],
        },
      ],
    },
    {
      title: "Backends",
      items: [
        {
          title: "Django",
          href: "/docs/backend/django",
          items: [],
        },
        {
          title: "Express",
          href: "/docs/backend/express",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/backend/laravel",
          items: [],
        },
        {
          title: "Go",
          href: "/docs/backend/go",
          items: [],
        },
        {
          title: "Rust",
          href: "/docs/backend/rust",
          items: [],
        },
        {
          title: "Spring",
          href: "/docs/backend/spring",
          items: [],
        },
        {
          title: "Ruby On Rails",
          href: "/docs/backend/ruby-on-rails",
          items: [],
        },
        {
          title: "Flask",
          href: "/docs/backend/rflask",
          items: [],
        },
      ],
    },
    {
      title: "Hosting Platforms",
      items: [
        {
          title: "Vercel",
          href: "/docs/hosting/vercel",
          items: [],
        },
        {
          title: "Google Cloud",
          href: "/docs/hosting/google-cloud",
          items: [],
        },
        {
          title: "Aws",
          href: "/docs/hosting/aws",
          items: [],
        },
        {
          title: "Github Pages",
          href: "/docs/hosting/github-pages",
          items: [],
        },
        {
          title: "Digital Ocean",
          href: "/docs/hosting/digital-ocean",
          items: [],
        },
        {
          title: "Netlify",
          href: "/docs/hosting/netlify",
          items: [],
        },
        {
          title: "Rendar",
          href: "/docs/hosting/Rendar",
          items: [],
        },
        {
          title: "Firebase",
          href: "/docs/hosting/firebase",
          items: [],
        },
        {
          title: "Railway",
          href: "/docs/hosting/railway",
          items: [],
        },
        {
          title: "Superbase",
          href: "/docs/hosting/superbase",
          items: [],
        },
        {
          title: "Back4app",
          href: "/docs/hosting/back4app",
          items: [],
        },
        {
          title: "Cyclick",
          href: "/docs/hosting/cyclick",
          items: [],
        },
        {
          title: "Fly",
          href: "/docs/hosting/fly",
          items: [],
        },
      ],
    },
    {
      title: "Testing Libraries",
      items: [
        {
          title: "Selinium",
          href: "/docs/test/selinium",
          items: [],
        },
        {
          title: "Circleci",
          href: "/docs/test/circleci",
          items: [],
        },
        {
          title: "Jest",
          href: "/docs/test/jest",
          items: [],
        },
      ],
    },
    {
      title: "Generators",
      items: [
        {
          title: "Prisma",
          href: "/docs/others/prisma",
          items: [],
        },
        {
          title: "Graphql",
          href: "/docs/others/graphql",
          items: [],
        },
        {
          title: "End",
          href: "/docs/others/the-end",
          items: [],
        },
      ],
    },
    {
      title: "Packages",
      items: [
        {
          title: "Prisma",
          href: "/docs/others/prisma",
          items: [],
        },
        {
          title: "Graphql",
          href: "/docs/others/graphql",
          items: [],
        },
        {
          title: "End",
          href: "/docs/others/the-end",
          items: [],
        },
      ],
    },
    {
      title: "Bucket List",
      items: [
        {
          title: "Prisma",
          href: "/docs/others/prisma",
          items: [],
        },
        {
          title: "Graphql",
          href: "/docs/others/graphql",
          items: [],
        },
        {
          title: "End",
          href: "/docs/others/the-end",
          items: [],
        },
      ],
    },
    {
      title: "Programming Languages",
      items: [
        {
          title: "A# .NET",
          href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET) ",
          items: [],
        },
        {
          title: "A# (Axiom)",
          href: "https://en.wikipedia.org/wiki/A_Sharp_(Axiom)",
          items: [],
        },
        {
          title: "A-0 System",
          href: "https://en.wikipedia.org/wiki/A-0_System",
          items: [],
        },
        {
          title: "A+",
          href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)",
          items: [],
        },
        {
          title: "A++",
          href: "https://en.wikipedia.org/wiki/A%2B%2B",
          items: [],
        },
        {
          title: "ABAP",
          href: "https://en.wikipedia.org/wiki/ABAP",
          items: [],
        },
        {
          title: "ABC",
          href: "https://en.wikipedia.org/wiki/ABC_(programming_language)",
          items: [],
        },
        {
          title: "ABC ALGOL",
          href: "https://en.wikipedia.org/wiki/ABC_ALGOL",
          items: [],
        },
        {
          title: "ABSET",
          href: "https://en.wikipedia.org/wiki/ABSET",
          items: [],
        },
        {
          title: "ABSYS",
          href: "https://en.wikipedia.org/wiki/ABSYS",
          items: [],
        },
        {
          title: "ACC",
          href: "https://en.wikipedia.org/wiki/ACC_(programming_language)",
          items: [],
        },
        {
          title: "Accent",
          href: "https://en.wikipedia.org/wiki/Accent_(programming_language)",
          items: [],
        },
        {
          title: "Ace DASL",
          href: "https://en.wikipedia.org/wiki/Distributed_Application_Specification_Language",
          items: [],
        },
        {
          title: "ACL2",
          href: "https://en.wikipedia.org/wiki/ACL2",
          items: [],
        },
        {
          title: "ACT-III",
          href: "https://en.wikipedia.org/wiki/LGP-30#ACT-III_programming_language",
          items: [],
        },
        {
          title: "Action!",
          href: "https://en.wikipedia.org/wiki/Action!_(programming_language)",
          items: [],
        },
        {
          title: "ActionScript",
          href: "https://en.wikipedia.org/wiki/ActionScript",
          items: [],
        },
        {
          title: "Ada",
          href: "https://en.wikipedia.org/wiki/Ada_(programming_language)",
          items: [],
        },
        {
          title: "Adenine",
          href: "https://en.wikipedia.org/wiki/Adenine_(programming_language)",
          items: [],
        },
        {
          title: "Agda",
          href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)",
          items: [],
        },
        {
          title: "Agilent VEE",
          href: "https://en.wikipedia.org/wiki/Agilent_VEE",
          items: [],
        },
        {
          title: "Agora",
          href: "https://en.wikipedia.org/wiki/Agora_(programming_language)",
          items: [],
        },
        {
          title: "AIMMS",
          href: "https://en.wikipedia.org/wiki/AIMMS",
          items: [],
        },
        {
          title: "Alef",
          href: "https://en.wikipedia.org/wiki/Alef_(programming_language)",
          items: [],
        },
        {
          title: "ALF",
          href: "https://en.wikipedia.org/wiki/Algebraic_Logic_Functional_programming_language",
          items: [],
        },
        {
          title: "ALGOL 58",
          href: "https://en.wikipedia.org/wiki/ALGOL_58",
          items: [],
        },
        {
          title: "ALGOL 60",
          href: "https://en.wikipedia.org/wiki/ALGOL_60",
          items: [],
        },
        {
          title: "ALGOL 68",
          href: "https://en.wikipedia.org/wiki/ALGOL_68",
          items: [],
        },
        {
          title: "ALGOL W",
          href: "https://en.wikipedia.org/wiki/ALGOL_W",
          items: [],
        },
        {
          title: "Alice",
          href: "https://en.wikipedia.org/wiki/Alice_(programming_language)",
          items: [],
        },
        {
          title: "Alma-0",
          href: "https://en.wikipedia.org/wiki/Alma-0",
          items: [],
        },
        {
          title: "AmbientTalk",
          href: "https://en.wikipedia.org/wiki/AmbientTalk",
          items: [],
        },
        {
          title: "Amiga E",
          href: "https://en.wikipedia.org/wiki/Amiga_E",
          items: [],
        },
        {
          title: "AMOS",
          href: "https://en.wikipedia.org/wiki/AMOS_(programming_language)",
          items: [],
        },
        {
          title: "AMPL",
          href: "https://en.wikipedia.org/wiki/AMPL",
          items: [],
        },
        {
          title: "Apex (Salesforce.com)",
          href: "https://en.wikipedia.org/wiki/Salesforce.com#Apex",
          items: [],
        },
        {
          title: "APL",
          href: "https://en.wikipedia.org/wiki/APL_(programming_language)",
          items: [],
        },
        {
          title: "App Inventor for Android's visual block language",
          href: "https://en.wikipedia.org/wiki/App_Inventor_for_Android_(programming_language)",
          items: [],
        },
        {
          title: "AppleScript",
          href: "https://en.wikipedia.org/wiki/AppleScript",
          items: [],
        },
        {
          title: "Arc",
          href: "https://en.wikipedia.org/wiki/Arc_(programming_language)",
          items: [],
        },
        {
          title: "ARexx",
          href: "https://en.wikipedia.org/wiki/ARexx",
          items: [],
        },
        {
          title: "Argus",
          href: "https://en.wikipedia.org/wiki/Argus_(programming_language)",
          items: [],
        },
        {
          title: "AspectJ",
          href: "https://en.wikipedia.org/wiki/AspectJ",
          items: [],
        },
        {
          title: "Assembly language",
          href: "https://en.wikipedia.org/wiki/Assembly_language",
          items: [],
        },
        {
          title: "ATS",
          href: "https://en.wikipedia.org/wiki/ATS_(programming_language)",
          items: [],
        },
        {
          title: "Ateji PX",
          href: "https://en.wikipedia.org/wiki/Ateji_PX",
          items: [],
        },
        {
          title: "AutoHotkey",
          href: "https://en.wikipedia.org/wiki/AutoHotkey",
          items: [],
        },
        {
          title: "Autocoder",
          href: "https://en.wikipedia.org/wiki/Autocoder",
          items: [],
        },
        {
          title: "AutoIt",
          href: "https://en.wikipedia.org/wiki/AutoIt",
          items: [],
        },
        {
          title: "AutoLISP / Visual LISP",
          href: "https://en.wikipedia.org/wiki/AutoLISP",
          items: [],
        },
        {
          title: "Averest",
          href: "https://en.wikipedia.org/wiki/Averest",
          items: [],
        },
        {
          title: "AWK",
          href: "https://en.wikipedia.org/wiki/AWK",
          items: [],
        },
        {
          title: "Axum",
          href: "https://en.wikipedia.org/wiki/Axum_(programming_language)",
          items: [],
        },
        {
          title: "B",
          href: "https://en.wikipedia.org/wiki/B_(programming_language)",
          items: [],
        },
        {
          title: "Babbage",
          href: "https://en.wikipedia.org/wiki/Babbage_(programming_language)",
          items: [],
        },
        {
          title: "Bash",
          href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
          items: [],
        },
        {
          title: "BASIC",
          href: "https://en.wikipedia.org/wiki/BASIC",
          items: [],
        },
        {
          title: "bc",
          href: "https://en.wikipedia.org/wiki/Bc_(programming_language)",
          items: [],
        },
        {
          title: "BCPL",
          href: "https://en.wikipedia.org/wiki/BCPL",
          items: [],
        },
        {
          title: "BeanShell",
          href: "https://en.wikipedia.org/wiki/BeanShell",
          items: [],
        },
        {
          title: "Batch (Windows/Dos)",
          href: "https://en.wikipedia.org/wiki/Batch_file",
          items: [],
        },
        {
          title: "Bertrand",
          href: "https://en.wikipedia.org/wiki/Bertrand_(programming_language)",
          items: [],
        },
        {
          title: "BETA",
          href: "https://en.wikipedia.org/wiki/BETA_(programming_language)",
          items: [],
        },
        {
          title: "Bigwig",
          href: "https://en.wikipedia.org/wiki/Bigwig_(programming_language)",
          items: [],
        },
        {
          title: "Bistro",
          href: "https://en.wikipedia.org/wiki/Bistro_(programming_language)",
          items: [],
        },
        {
          title: "BitC",
          href: "https://en.wikipedia.org/wiki/BitC",
          items: [],
        },
        {
          title: "BLISS",
          href: "https://en.wikipedia.org/wiki/BLISS_(programming_language)",
          items: [],
        },
        {
          title: "Blockly",
          href: "https://en.wikipedia.org/wiki/Blockly",
          items: [],
        },
        {
          title: "BlooP",
          href: "https://en.wikipedia.org/wiki/BlooP_and_FlooP",
          items: [],
        },
        {
          title: "Blue",
          href: "https://en.wikipedia.org/wiki/Blue_(programming_language)",
          items: [],
        },
        {
          title: "Boo",
          href: "https://en.wikipedia.org/wiki/Boo_(programming_language)",
          items: [],
        },
        {
          title: "Boomerang",
          href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
          items: [],
        },
        {
          title: "Bourne shell (including",
          href: "https://en.wikipedia.org/wiki/Bourne_shell",
          items: [],
        },
        {
          title: "bash and",
          href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
          items: [],
        },
        {
          title: "ksh )",
          href: "https://en.wikipedia.org/wiki/Korn_shell",
          items: [],
        },
        {
          title: "BREW",
          href: "https://en.wikipedia.org/wiki/Qualcomm_Brew",
          items: [],
        },
        {
          title: "BPEL",
          href: "https://en.wikipedia.org/wiki/Business_Process_Execution_Language",
          items: [],
        },
        {
          title: "C",
          href: "https://en.wikipedia.org/wiki/C_(programming_language)",
          items: [],
        },
        {
          title: "C--",
          href: "https://en.wikipedia.org/wiki/C--",
          items: [],
        },
        {
          title: "C++ – ISO/IEC 14882",
          href: "https://en.wikipedia.org/wiki/C%2B%2B",
          items: [],
        },
        {
          title: "C# – ISO/IEC 23270",
          href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
          items: [],
        },
        {
          title: "C/AL",
          href: "https://en.wikipedia.org/wiki/C/AL",
          items: [],
        },
        {
          title: "Caché ObjectScript",
          href: "https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript",
          items: [],
        },
        {
          title: "C Shell",
          href: "https://en.wikipedia.org/wiki/C_Shell",
          items: [],
        },
        {
          title: "Caml",
          href: "https://en.wikipedia.org/wiki/Caml",
          items: [],
        },
        {
          title: "Cayenne",
          href: "https://en.wikipedia.org/wiki/Cayenne_(programming_language)",
          items: [],
        },
        {
          title: "CDuce",
          href: "https://en.wikipedia.org/wiki/CDuce",
          items: [],
        },
        {
          title: "Cecil",
          href: "https://en.wikipedia.org/wiki/Cecil_(programming_language)",
          items: [],
        },
        {
          title: "Cel",
          href: "https://en.wikipedia.org/wiki/Cel_(programming_language)",
          items: [],
        },
        {
          title: "Cesil",
          href: "https://en.wikipedia.org/wiki/Cesil",
          items: [],
        },
        {
          title: "Ceylon",
          href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)",
          items: [],
        },
        {
          title: "CFEngine",
          href: "https://en.wikipedia.org/wiki/CFEngine",
          items: [],
        },
        {
          title: "CFML",
          href: "https://en.wikipedia.org/wiki/ColdFusion_Markup_Language",
          items: [],
        },
        {
          title: "Cg",
          href: "https://en.wikipedia.org/wiki/Cg_(programming_language)",
          items: [],
        },
        {
          title: "Ch",
          href: "https://en.wikipedia.org/wiki/Ch_(computer_programming)",
          items: [],
        },
        {
          title: "Chapel",
          href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)",
          items: [],
        },
        {
          title: "CHAIN",
          href: "https://en.wikipedia.org/wiki/CHAIN_(programming_language)",
          items: [],
        },
        {
          title: "Charity",
          href: "https://en.wikipedia.org/wiki/Charity_(programming_language)",
          items: [],
        },
        {
          title: "Charm",
          href: "https://en.wikipedia.org/wiki/Charm_(language)",
          items: [],
        },
        {
          title: "Chef",
          href: "https://en.wikipedia.org/wiki/Chef_(programming_language)",
          items: [],
        },
        {
          title: "CHILL",
          href: "https://en.wikipedia.org/wiki/CHILL",
          items: [],
        },
        {
          title: "CHIP-8",
          href: "https://en.wikipedia.org/wiki/CHIP-8",
          items: [],
        },
        {
          title: "chomski",
          href: "https://en.wikipedia.org/wiki/Chomski",
          items: [],
        },
        {
          title: "ChucK",
          href: "https://en.wikipedia.org/wiki/ChucK",
          items: [],
        },
        {
          title: "CICS",
          href: "https://en.wikipedia.org/wiki/CICS",
          items: [],
        },
        {
          title: "Cilk",
          href: "https://en.wikipedia.org/wiki/Cilk",
          items: [],
        },
        {
          title: "Citrine (programming language)",
          href: "https://en.wikipedia.org/wiki/Citrine_(programming_language)",
          items: [],
        },
        {
          title: "CL (IBM)",
          href: "https://en.wikipedia.org/wiki/AS/400_Control_Language",
          items: [],
        },
        {
          title: "Claire",
          href: "https://en.wikipedia.org/wiki/Claire_(programming_language)",
          items: [],
        },
        {
          title: "Clarion",
          href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)",
          items: [],
        },
        {
          title: "Clean",
          href: "https://en.wikipedia.org/wiki/Clean_(programming_language)",
          items: [],
        },
        {
          title: "Clipper",
          href: "https://en.wikipedia.org/wiki/Clipper_(programming_language)",
          items: [],
        },
        {
          title: "CLIST",
          href: "https://en.wikipedia.org/wiki/CLIST",
          items: [],
        },
        {
          title: "Clojure",
          href: "https://en.wikipedia.org/wiki/Clojure",
          items: [],
        },
        {
          title: "CLU",
          href: "https://en.wikipedia.org/wiki/CLU_(programming_language)",
          items: [],
        },
        {
          title: "CMS-2",
          href: "https://en.wikipedia.org/wiki/CMS-2_(programming_language)",
          items: [],
        },
        {
          title: "COBOL – ISO/IEC 1989",
          href: "https://en.wikipedia.org/wiki/COBOL",
          items: [],
        },
        {
          title: "Cobra",
          href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)",
          items: [],
        },
        {
          title: "CODE",
          href: "https://en.wikipedia.org/wiki/CODE_(programming_language)",
          items: [],
        },
        {
          title: "CoffeeScript",
          href: "https://en.wikipedia.org/wiki/CoffeeScript",
          items: [],
        },
        {
          title: "ColdFusion",
          href: "https://en.wikipedia.org/wiki/ColdFusion",
          items: [],
        },
        {
          title: "COMAL",
          href: "https://en.wikipedia.org/wiki/COMAL",
          items: [],
        },
        {
          title: "Combined Programming Language (CPL)",
          href: "https://en.wikipedia.org/wiki/Combined_Programming_Language",
          items: [],
        },
        {
          title: "COMIT",
          href: "https://en.wikipedia.org/wiki/COMIT",
          items: [],
        },
        {
          title: "Common Intermediate Language (CIL)",
          href: "https://en.wikipedia.org/wiki/Common_Intermediate_Language",
          items: [],
        },
        {
          title: "Common Lisp (also known as CL)",
          href: "https://en.wikipedia.org/wiki/Common_Lisp",
          items: [],
        },
        {
          title: "COMPASS",
          href: "https://en.wikipedia.org/wiki/COMPASS",
          items: [],
        },
        {
          title: "Component Pascal",
          href: "https://en.wikipedia.org/wiki/Component_Pascal",
          items: [],
        },
        {
          title: "Constraint Handling Rules (CHR)",
          href: "https://en.wikipedia.org/wiki/Constraint_Handling_Rules",
          items: [],
        },
        {
          title: "Converge",
          href: "https://en.wikipedia.org/wiki/Converge_(programming_language)",
          items: [],
        },
        {
          title: "Cool",
          href: "https://en.wikipedia.org/wiki/Cool_(programming_language)",
          items: [],
        },
        {
          title: "Coq",
          href: "https://en.wikipedia.org/wiki/Coq",
          items: [],
        },
        {
          title: "Coral 66",
          href: "https://en.wikipedia.org/wiki/Coral_66",
          items: [],
        },
        {
          title: "Corn",
          href: "https://en.wikipedia.org/wiki/Corn_(emulator)",
          items: [],
        },
        {
          title: "CorVision",
          href: "https://en.wikipedia.org/wiki/CorVision",
          items: [],
        },
        {
          title: "COWSEL",
          href: "https://en.wikipedia.org/wiki/COWSEL",
          items: [],
        },
        {
          title: "CPL",
          href: "https://en.wikipedia.org/wiki/Combined_Programming_Language",
          items: [],
        },
        {
          title: "Cryptol",
          href: "https://en.wikipedia.org/wiki/Cryptol",
          items: [],
        },
        {
          title: "csh",
          href: "https://en.wikipedia.org/wiki/C_shell",
          items: [],
        },
        {
          title: "Csound",
          href: "https://en.wikipedia.org/wiki/Csound",
          items: [],
        },
        {
          title: "CSP",
          href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
          items: [],
        },
        {
          title: "CUDA",
          href: "https://en.wikipedia.org/wiki/CUDA",
          items: [],
        },
        {
          title: "Curl",
          href: "https://en.wikipedia.org/wiki/Curl_(programming_language)",
          items: [],
        },
        {
          title: "Curry",
          href: "https://en.wikipedia.org/wiki/Curry_(programming_language)",
          items: [],
        },
        {
          title: "Cyclone",
          href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)",
          items: [],
        },
        {
          title: "Cython",
          href: "https://en.wikipedia.org/wiki/Cython",
          items: [],
        },
        {
          title: "D",
          href: "https://en.wikipedia.org/wiki/D_(programming_language)",
          items: [],
        },
        {
          title: "DASL (Datapoint's Advanced Systems Language)",
          href: "https://en.wikipedia.org/wiki/Datapoint%27s_Advanced_Systems_Language",
          items: [],
        },
        {
          title: "DASL (Distributed Application Specification Language)",
          href: "https://en.wikipedia.org/wiki/Distributed_Application_Specification_Language",
          items: [],
        },
        {
          title: "Dart",
          href: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
          items: [],
        },
        {
          title: "DataFlex",
          href: "https://en.wikipedia.org/wiki/DataFlex",
          items: [],
        },
        {
          title: "Datalog",
          href: "https://en.wikipedia.org/wiki/Datalog",
          items: [],
        },
        {
          title: "DATATRIEVE",
          href: "https://en.wikipedia.org/wiki/DATATRIEVE",
          items: [],
        },
        {
          title: "dBase",
          href: "https://en.wikipedia.org/wiki/DBase",
          items: [],
        },
        {
          title: "dc",
          href: "https://en.wikipedia.org/wiki/Dc_(computer_program)",
          items: [],
        },
        {
          title: "DCL",
          href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language",
          items: [],
        },
        {
          title: "Deesel (formerly G)",
          href: "https://en.wikipedia.org/wiki/Deesel",
          items: [],
        },
        {
          title: "Delphi",
          href: "https://en.wikipedia.org/wiki/Delphi_(programming_language)",
          items: [],
        },
        {
          title: "DinkC",
          href: "https://en.wikipedia.org/wiki/Dink_Smallwood#Modification",
          items: [],
        },
        {
          title: "DIBOL",
          href: "https://en.wikipedia.org/wiki/DIBOL",
          items: [],
        },
        {
          title: "Dog",
          href: "https://en.wikipedia.org/wiki/Sepandar_Kamvar#.22Dog.22_programming_language",
          items: [],
        },
        {
          title: "Draco",
          href: "https://en.wikipedia.org/wiki/Draco_(programming_language)",
          items: [],
        },
        {
          title: "DRAKON",
          href: "https://en.wikipedia.org/wiki/DRAKON",
          items: [],
        },
        {
          title: "Dylan",
          href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)",
          items: [],
        },
        {
          title: "DYNAMO",
          href: "https://en.wikipedia.org/wiki/DYNAMO_(programming_language)",
          items: [],
        },
        {
          title: "E",
          href: "https://en.wikipedia.org/wiki/E_(programming_language)",
          items: [],
        },
        {
          title: "E#",
          href: "https://en.wikipedia.org/wiki/E_Sharp_(programming_language)",
          items: [],
        },
        {
          title: "Ease",
          href: "https://en.wikipedia.org/wiki/Ease_(programming_language)",
          items: [],
        },
        {
          title: "Easy PL/I",
          href: "https://en.wikipedia.org/wiki/PL/I",
          items: [],
        },
        {
          title: "Easy Programming Language",
          href: "https://en.wikipedia.org/wiki/Easy_Programming_Language",
          items: [],
        },
        {
          title: "EASYTRIEVE PLUS",
          href: "https://en.wikipedia.org/wiki/Easytrieve",
          items: [],
        },
        {
          title: "ECMAScript",
          href: "https://en.wikipedia.org/wiki/ECMAScript",
          items: [],
        },
        {
          title: "Edinburgh IMP",
          href: "https://en.wikipedia.org/wiki/Edinburgh_IMP",
          items: [],
        },
        {
          title: "EGL",
          href: "https://en.wikipedia.org/wiki/EGL_(programming_language)",
          items: [],
        },
        {
          title: "Eiffel",
          href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)",
          items: [],
        },
        {
          title: "ELAN",
          href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)",
          items: [],
        },
        {
          title: "Elixir",
          href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)",
          items: [],
        },
        {
          title: "Elm",
          href: "https://en.wikipedia.org/wiki/Elm_(programming_language)",
          items: [],
        },
        {
          title: "Emacs Lisp",
          href: "https://en.wikipedia.org/wiki/Emacs_Lisp",
          items: [],
        },
        {
          title: "Emerald",
          href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)",
          items: [],
        },
        {
          title: "Epigram",
          href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)",
          items: [],
        },
        {
          title: "EPL",
          href: "https://en.wikipedia.org/wiki/Easy_Programming_Language",
          items: [],
        },
        {
          title: "Erlang",
          href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
          items: [],
        },
        {
          title: "es",
          href: "https://en.wikipedia.org/wiki/Es_(Unix_shell)",
          items: [],
        },
        {
          title: "Escher",
          href: "https://en.wikipedia.org/wiki/Escher_(programming_language)",
          items: [],
        },
        {
          title: "ESPOL",
          href: "https://en.wikipedia.org/wiki/Executive_Systems_Problem_Oriented_Language",
          items: [],
        },
        {
          title: "Esterel",
          href: "https://en.wikipedia.org/wiki/Esterel",
          items: [],
        },
        {
          title: "Etoys",
          href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)",
          items: [],
        },
        {
          title: "Euclid",
          href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)",
          items: [],
        },
        {
          title: "Euler",
          href: "https://en.wikipedia.org/wiki/Euler_(programming_language)",
          items: [],
        },
        {
          title: "Euphoria",
          href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)",
          items: [],
        },
        {
          title: "EusLisp Robot Programming Language",
          href: "https://en.wikipedia.org/wiki/EusLisp_Robot_Programming_Language",
          items: [],
        },
        {
          title: "CMS EXEC (EXEC)",
          href: "https://en.wikipedia.org/wiki/CMS_EXEC",
          items: [],
        },
        {
          title: "EXEC 2",
          href: "https://en.wikipedia.org/wiki/EXEC_2",
          items: [],
        },
        {
          title: "Executable UML",
          href: "https://en.wikipedia.org/wiki/Executable_UML",
          items: [],
        },
        {
          title: "F",
          href: "https://en.wikipedia.org/wiki/F_(programming_language)",
          items: [],
        },
        {
          title: "F#",
          href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)",
          items: [],
        },
        {
          title: "Factor",
          href: "https://en.wikipedia.org/wiki/Factor_(programming_language)",
          items: [],
        },
        {
          title: "Falcon",
          href: "https://en.wikipedia.org/wiki/Falcon_(programming_language)",
          items: [],
        },
        {
          title: "Fantom",
          href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)",
          items: [],
        },
        {
          title: "FAUST",
          href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)",
          items: [],
        },
        {
          title: "FFP",
          href: "https://en.wikipedia.org/wiki/FFP_(programming_language)",
          items: [],
        },
        {
          title: "Fjölnir",
          href: "https://en.wikipedia.org/wiki/Fj%C3%B6lnir_(programming_language)",
          items: [],
        },
        {
          title: "FL",
          href: "https://en.wikipedia.org/wiki/FL_(programming_language)",
          items: [],
        },
        {
          title: "Flavors",
          href: "https://en.wikipedia.org/wiki/Flavors_(programming_language)",
          items: [],
        },
        {
          title: "Flex",
          href: "https://en.wikipedia.org/wiki/Flex_(language)",
          items: [],
        },
        {
          title: "FlooP",
          href: "https://en.wikipedia.org/wiki/BlooP_and_FlooP",
          items: [],
        },
        {
          title: "FLOW-MATIC",
          href: "https://en.wikipedia.org/wiki/FLOW-MATIC",
          items: [],
        },
        {
          title: "FOCAL",
          href: "https://en.wikipedia.org/wiki/FOCAL_(programming_language)",
          items: [],
        },
        {
          title: "FOCUS",
          href: "https://en.wikipedia.org/wiki/FOCUS",
          items: [],
        },
        {
          title: "FOIL",
          href: "https://en.wikipedia.org/wiki/FOIL_(programming_language)",
          items: [],
        },
        {
          title: "FORMAC",
          href: "https://en.wikipedia.org/wiki/FORMAC_(programming_language)",
          items: [],
        },
        {
          title: "@Formula",
          href: "https://en.wikipedia.org/wiki/Formula_language",
          items: [],
        },
        {
          title: "Forth",
          href: "https://en.wikipedia.org/wiki/Forth_(programming_language)",
          items: [],
        },
        {
          title: "Fortran – ISO/IEC 1539",
          href: "https://en.wikipedia.org/wiki/Fortran",
          items: [],
        },
        {
          title: "Fortress",
          href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)",
          items: [],
        },
        {
          title: "FoxBase",
          href: "https://en.wikipedia.org/wiki/FoxBase",
          items: [],
        },
        {
          title: "FoxPro",
          href: "https://en.wikipedia.org/wiki/FoxPro",
          items: [],
        },
        {
          title: "FP",
          href: "https://en.wikipedia.org/wiki/FP_(programming_language)",
          items: [],
        },
        {
          title: "FPr",
          href: "https://en.wikipedia.org/wiki/FPr_(programming_language)",
          items: [],
        },
        {
          title: "Franz Lisp",
          href: "https://en.wikipedia.org/wiki/Franz_Lisp",
          items: [],
        },
        {
          title: "Frege",
          href: "https://en.wikipedia.org/wiki/Frege_(programming_language)",
          items: [],
        },
        {
          title: "F-Script",
          href: "https://en.wikipedia.org/wiki/F-Script_(programming_language)",
          items: [],
        },
        {
          title: "G",
          href: "https://en.wikipedia.org/wiki/G_(programming_language)",
          items: [],
        },
        {
          title: "Game Maker Language",
          href: "https://en.wikipedia.org/wiki/GameMaker:_Studio",
          items: [],
        },
        {
          title: "GameMonkey Script",
          href: "https://en.wikipedia.org/wiki/GameMonkey_Script",
          items: [],
        },
        {
          title: "GAMS",
          href: "https://en.wikipedia.org/wiki/General_Algebraic_Modeling_System",
          items: [],
        },
        {
          title: "GAP",
          href: "https://en.wikipedia.org/wiki/GAP_computer_algebra_system",
          items: [],
        },
        {
          title: "G-code",
          href: "https://en.wikipedia.org/wiki/G-code",
          items: [],
        },
        {
          title: "Genie",
          href: "https://en.wikipedia.org/wiki/Genie_(programming_language)",
          items: [],
        },
        {
          title: "GDL",
          href: "https://en.wikipedia.org/wiki/Geometric_Description_Language",
          items: [],
        },
        {
          title: "GJ",
          href: "https://en.wikipedia.org/wiki/Generic_Java",
          items: [],
        },
        {
          title: "GEORGE",
          href: "https://en.wikipedia.org/wiki/GEORGE_(programming_language)",
          items: [],
        },
        {
          title: "GLSL",
          href: "https://en.wikipedia.org/wiki/GLSL",
          items: [],
        },
        {
          title: "GNU E",
          href: "https://en.wikipedia.org/wiki/GNU_E",
          items: [],
        },
        {
          title: "GM",
          href: "https://en.wikipedia.org/wiki/Golden_master",
          items: [],
        },
        {
          title: "Go",
          href: "https://en.wikipedia.org/wiki/Go_(programming_language)",
          items: [],
        },
        {
          title: "Go!",
          href: "https://en.wikipedia.org/wiki/Go!_(programming_language)",
          items: [],
        },
        {
          title: "GOAL",
          href: "https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp",
          items: [],
        },
        {
          title: "Gödel",
          href: "https://en.wikipedia.org/wiki/G%C3%B6del_(programming_language)",
          items: [],
        },
        {
          title: "Godiva",
          href: "https://en.wikipedia.org/wiki/Godiva_(programming_language)",
          items: [],
        },
        {
          title: "Golo",
          href: "https://en.wikipedia.org/wiki/Golo_(programming_language)",
          items: [],
        },
        {
          title: "GOM (Good Old Mad)",
          href: "https://en.wikipedia.org/wiki/MAD_(programming_language)",
          items: [],
        },
        {
          title: "Google Apps Script",
          href: "https://en.wikipedia.org/wiki/Google_Apps_Script",
          items: [],
        },
        {
          title: "Gosu",
          href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)",
          items: [],
        },
        {
          title: "GOTRAN",
          href: "https://en.wikipedia.org/wiki/IBM_1620#GOTRAN",
          items: [],
        },
        {
          title: "GPSS",
          href: "https://en.wikipedia.org/wiki/GPSS",
          items: [],
        },
        {
          title: "GraphTalk",
          href: "https://en.wikipedia.org/wiki/Computer_Sciences_Corporation",
          items: [],
        },
        {
          title: "GRASS",
          href: "https://en.wikipedia.org/wiki/GRASS_(programming_language)",
          items: [],
        },
        {
          title: "Groovy",
          href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)",
          items: [],
        },
        {
          title: "Hack",
          href: "https://en.wikipedia.org/wiki/Hack_(programming_language)",
          items: [],
        },
        {
          title: "HAL/S",
          href: "https://en.wikipedia.org/wiki/HAL/S",
          items: [],
        },
        {
          title: "Hamilton C shell",
          href: "https://en.wikipedia.org/wiki/Hamilton_C_shell",
          items: [],
        },
        {
          title: "Harbour",
          href: "https://en.wikipedia.org/wiki/Harbour_(software)",
          items: [],
        },
        {
          title: "Hartmann pipelines",
          href: "https://en.wikipedia.org/wiki/Hartmann_pipeline",
          items: [],
        },
        {
          title: "Haskell",
          href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)",
          items: [],
        },
        {
          title: "Haxe",
          href: "https://en.wikipedia.org/wiki/Haxe",
          items: [],
        },
        {
          title: "High Level Assembly",
          href: "https://en.wikipedia.org/wiki/High_Level_Assembly",
          items: [],
        },
        {
          title: "HLSL",
          href: "https://en.wikipedia.org/wiki/High_Level_Shader_Language",
          items: [],
        },
        {
          title: "Hop",
          href: "https://en.wikipedia.org/wiki/Hop_(software)",
          items: [],
        },
        {
          title: "Hopscotch",
          href: "https://en.wikipedia.org/wiki/Hopscotch_(programming_language)",
          items: [],
        },
        {
          title: "Hope",
          href: "https://en.wikipedia.org/wiki/Hope_(programming_language)",
          items: [],
        },
        {
          title: "Hugo",
          href: "https://en.wikipedia.org/wiki/Hugo_(programming_language)",
          items: [],
        },
        {
          title: "Hume",
          href: "https://en.wikipedia.org/wiki/Hume_(language)",
          items: [],
        },
        {
          title: "HyperTalk",
          href: "https://en.wikipedia.org/wiki/HyperTalk",
          items: [],
        },
        {
          title: "IBM Basic assembly language",
          href: "https://en.wikipedia.org/wiki/IBM_Basic_assembly_language",
          items: [],
        },
        {
          title: "IBM HAScript",
          href: "https://en.wikipedia.org/wiki/IBM_HAScript",
          items: [],
        },
        {
          title: "IBM Informix-4GL",
          href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL",
          items: [],
        },
        {
          title: "IBM RPG",
          href: "https://en.wikipedia.org/wiki/IBM_RPG",
          items: [],
        },
        {
          title: "ICI",
          href: "https://en.wikipedia.org/wiki/ICI_(programming_language)",
          items: [],
        },
        {
          title: "Icon",
          href: "https://en.wikipedia.org/wiki/Icon_(programming_language)",
          items: [],
        },
        {
          title: "Id",
          href: "https://en.wikipedia.org/wiki/Id_(programming_language)",
          items: [],
        },
        {
          title: "IDL",
          href: "https://en.wikipedia.org/wiki/IDL_(programming_language)",
          items: [],
        },
        {
          title: "Idris",
          href: "https://en.wikipedia.org/wiki/Idris_(programming_language)",
          items: [],
        },
        {
          title: "IMP",
          href: "https://en.wikipedia.org/wiki/IMP_(programming_language)",
          items: [],
        },
        {
          title: "Inform",
          href: "https://en.wikipedia.org/wiki/Inform",
          items: [],
        },
        {
          title: "Io",
          href: "https://en.wikipedia.org/wiki/Io_(programming_language)",
          items: [],
        },
        {
          title: "Ioke",
          href: "https://en.wikipedia.org/wiki/Ioke_(programming_language)",
          items: [],
        },
        {
          title: "IPL",
          href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
          items: [],
        },
        {
          title: "IPTSCRAE",
          href: "https://en.wikipedia.org/wiki/IPTSCRAE",
          items: [],
        },
        {
          title: "ISLISP",
          href: "https://en.wikipedia.org/wiki/ISLISP",
          items: [],
        },
        {
          title: "ISPF",
          href: "https://en.wikipedia.org/wiki/ISPF",
          items: [],
        },
        {
          title: "ISWIM",
          href: "https://en.wikipedia.org/wiki/ISWIM",
          items: [],
        },
        {
          title: "J",
          href: "https://en.wikipedia.org/wiki/J_(programming_language)",
          items: [],
        },
        {
          title: "J#",
          href: "https://en.wikipedia.org/wiki/J_Sharp",
          items: [],
        },
        {
          title: "J++",
          href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B",
          items: [],
        },
        {
          title: "JADE",
          href: "https://en.wikipedia.org/wiki/JADE_(programming_language)",
          items: [],
        },
        {
          title: "Jako",
          href: "https://en.wikipedia.org/wiki/Jako_(programming_language)",
          items: [],
        },
        {
          title: "JAL",
          href: "https://en.wikipedia.org/wiki/JAL_(compiler)",
          items: [],
        },
        {
          title: "Janus (concurrent constraint programming language)",
          href: "https://en.wikipedia.org/wiki/Janus_(concurrent_constraint_programming_language)",
          items: [],
        },
        {
          title: "Janus (time-reversible computing programming language)",
          href: "https://en.wikipedia.org/wiki/Janus_(time-reversible_computing_programming_language)",
          items: [],
        },
        {
          title: "JASS",
          href: "https://en.wikipedia.org/wiki/JASS",
          items: [],
        },
        {
          title: "Java",
          href: "https://en.wikipedia.org/wiki/Java_(programming_language)",
          items: [],
        },
        {
          title: "JavaScript",
          href: "https://en.wikipedia.org/wiki/JavaScript",
          items: [],
        },
        {
          title: "JCL",
          href: "https://en.wikipedia.org/wiki/Job_Control_Language",
          items: [],
        },
        {
          title: "JEAN",
          href: "https://en.wikipedia.org/wiki/JEAN",
          items: [],
        },
        {
          title: "Join Java",
          href: "https://en.wikipedia.org/wiki/Join_Java",
          items: [],
        },
        {
          title: "JOSS",
          href: "https://en.wikipedia.org/wiki/JOSS",
          items: [],
        },
        {
          title: "Joule",
          href: "https://en.wikipedia.org/wiki/Joule_(programming_language)",
          items: [],
        },
        {
          title: "JOVIAL",
          href: "https://en.wikipedia.org/wiki/JOVIAL",
          items: [],
        },
        {
          title: "Joy",
          href: "https://en.wikipedia.org/wiki/Joy_(programming_language)",
          items: [],
        },
        {
          title: "JScript",
          href: "https://en.wikipedia.org/wiki/JScript",
          items: [],
        },
        {
          title: "JScript .NET",
          href: "https://en.wikipedia.org/wiki/JScript_.NET",
          items: [],
        },
        {
          title: "JavaFX Script",
          href: "https://en.wikipedia.org/wiki/JavaFX_Script",
          items: [],
        },
        {
          title: "Julia",
          href: "https://en.wikipedia.org/wiki/Julia_(programming_language)",
          items: [],
        },
        {
          title: "Jython",
          href: "https://en.wikipedia.org/wiki/Jython",
          items: [],
        },
        {
          title: "K",
          href: "https://en.wikipedia.org/wiki/K_(programming_language)",
          items: [],
        },
        {
          title: "Kaleidoscope",
          href: "https://en.wikipedia.org/wiki/Kaleidoscope_(programming_language)",
          items: [],
        },
        {
          title: "Karel",
          href: "https://en.wikipedia.org/wiki/Karel_(programming_language)",
          items: [],
        },
        {
          title: "Karel++",
          href: "https://en.wikipedia.org/wiki/Karel%2B%2B",
          items: [],
        },
        {
          title: "KEE",
          href: "https://en.wikipedia.org/wiki/IntelliCorp_(Software)",
          items: [],
        },
        {
          title: "Kixtart",
          href: "https://en.wikipedia.org/wiki/KiXtart",
          items: [],
        },
        {
          title: "Klerer-May System",
          href: "https://en.wikipedia.org/wiki/Klerer-May_System",
          items: [],
        },
        {
          title: "KIF",
          href: "https://en.wikipedia.org/wiki/Knowledge_Interchange_Format",
          items: [],
        },
        {
          title: "Kojo",
          href: "https://en.wikipedia.org/wiki/Kojo_(programming_language)",
          items: [],
        },
        {
          title: "Kotlin",
          href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)",
          items: [],
        },
        {
          title: "KRC",
          href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator",
          items: [],
        },
        {
          title: "KRL",
          href: "https://en.wikipedia.org/wiki/KRL_(programming_language)",
          items: [],
        },
        {
          title: "KUKA Robot Language)",
          href: "https://en.wikipedia.org/wiki/KUKA",
          items: [],
        },
        {
          title: "KRYPTON",
          href: "https://en.wikipedia.org/wiki/KRYPTON",
          items: [],
        },
        {
          title: "ksh",
          href: "https://en.wikipedia.org/wiki/Korn_shell",
          items: [],
        },
        {
          title: "L",
          href: "https://en.wikipedia.org/wiki/L_(programming_language)",
          items: [],
        },
        {
          title: "L# .NET",
          href: "https://en.wikipedia.org/wiki/L_Sharp",
          items: [],
        },
        {
          title: "LabVIEW",
          href: "https://en.wikipedia.org/wiki/LabVIEW",
          items: [],
        },
        {
          title: "Ladder",
          href: "https://en.wikipedia.org/wiki/Ladder_logic",
          items: [],
        },
        {
          title: "Lagoona",
          href: "https://en.wikipedia.org/wiki/Lagoona_(programming_language)",
          items: [],
        },
        {
          title: "LANSA",
          href: "https://en.wikipedia.org/wiki/LANSA_(development_environment)",
          items: [],
        },
        {
          title: "Lasso",
          href: "https://en.wikipedia.org/wiki/Lasso_(programming_language)",
          items: [],
        },
        {
          title: "LaTeX",
          href: "https://en.wikipedia.org/wiki/LaTeX",
          items: [],
        },
        {
          title: "Lava",
          href: "https://en.wikipedia.org/wiki/Lava_(programming_language)",
          items: [],
        },
        {
          title: "LC-3",
          href: "https://en.wikipedia.org/wiki/LC-3",
          items: [],
        },
        {
          title: "Leda",
          href: "https://en.wikipedia.org/wiki/Leda_(programming_language)",
          items: [],
        },
        {
          title: "Legoscript",
          href: "https://en.wikipedia.org/wiki/Lego_Mindstorms",
          items: [],
        },
        {
          title: "LIL",
          href: "https://en.wikipedia.org/wiki/Little_Implementation_Language",
          items: [],
        },
        {
          title: "LilyPond",
          href: "https://en.wikipedia.org/wiki/LilyPond",
          items: [],
        },
        {
          title: "Limbo",
          href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)",
          items: [],
        },
        {
          title: "Limnor",
          href: "https://en.wikipedia.org/wiki/Limnor",
          items: [],
        },
        {
          title: "LINC",
          href: "https://en.wikipedia.org/wiki/LINC_4GL",
          items: [],
        },
        {
          title: "Lingo",
          href: "https://en.wikipedia.org/wiki/Lingo_(programming_language)",
          items: [],
        },
        {
          title: "LIS",
          href: "https://en.wikipedia.org/wiki/LIS_(programming_language)",
          items: [],
        },
        {
          title: "LISA",
          href: "https://en.wikipedia.org/wiki/Language_for_Instruction_Set_Architecture",
          items: [],
        },
        {
          title: "Lisaac",
          href: "https://en.wikipedia.org/wiki/Lisaac",
          items: [],
        },
        {
          title: "Lisp – ISO/IEC 13816",
          href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)",
          items: [],
        },
        {
          title: "Lite-C",
          href: "https://en.wikipedia.org/wiki/Lite-C",
          items: [],
        },
        {
          title: "Lithe",
          href: "https://en.wikipedia.org/wiki/Lithe_(programming_language)",
          items: [],
        },
        {
          title: "Little b",
          href: "https://en.wikipedia.org/wiki/Little_b_(programming_language)",
          items: [],
        },
        {
          title: "Logo",
          href: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
          items: [],
        },
        {
          title: "Logtalk",
          href: "https://en.wikipedia.org/wiki/Logtalk",
          items: [],
        },
        {
          title: "LotusScript",
          href: "https://en.wikipedia.org/wiki/LotusScript",
          items: [],
        },
        {
          title: "LPC",
          href: "https://en.wikipedia.org/wiki/LPC_(programming_language)",
          items: [],
        },
        {
          title: "LSE",
          href: "https://en.wikipedia.org/wiki/LSE_(programming_language)",
          items: [],
        },
        {
          title: "LSL",
          href: "https://en.wikipedia.org/wiki/Linden_Scripting_Language",
          items: [],
        },
        {
          title: "LiveCode",
          href: "https://en.wikipedia.org/wiki/LiveCode",
          items: [],
        },
        {
          title: "LiveScript",
          href: "https://en.wikipedia.org/wiki/LiveScript",
          items: [],
        },
        {
          title: "Lua",
          href: "https://en.wikipedia.org/wiki/Lua_(programming_language)",
          items: [],
        },
        {
          title: "Lucid",
          href: "https://en.wikipedia.org/wiki/Lucid_(programming_language)",
          items: [],
        },
        {
          title: "Lustre",
          href: "https://en.wikipedia.org/wiki/Lustre_(programming_language)",
          items: [],
        },
        {
          title: "LYaPAS",
          href: "https://en.wikipedia.org/wiki/LYaPAS",
          items: [],
        },
        {
          title: "Lynx",
          href: "https://en.wikipedia.org/wiki/Lynx_(programming_language)",
          items: [],
        },
        {
          title: "M2001",
          href: "https://en.wikipedia.org/wiki/M2001",
          items: [],
        },
        { title: "MarsCode (programming language)", href: "", items: [] },
        {
          title: "M4",
          href: "https://en.wikipedia.org/wiki/M4_(computer_language)",
          items: [],
        },
        {
          title: "M#",
          href: "https://en.wikipedia.org/wiki/M_Sharp_(programming_language)",
          items: [],
        },
        {
          title: "Machine code",
          href: "https://en.wikipedia.org/wiki/Machine_code",
          items: [],
        },
        {
          title: "MAD (Michigan Algorithm Decoder)",
          href: "https://en.wikipedia.org/wiki/MAD_(programming_language)",
          items: [],
        },
        {
          title: "MAD/I",
          href: "https://en.wikipedia.org/wiki/MAD_(programming_language)",
          items: [],
        },
        {
          title: "Magik",
          href: "https://en.wikipedia.org/wiki/Magik_(programming_language)",
          items: [],
        },
        {
          title: "Magma",
          href: "https://en.wikipedia.org/wiki/Magma_computer_algebra_system",
          items: [],
        },
        {
          title: "make",
          href: "https://en.wikipedia.org/wiki/Make_(software)",
          items: [],
        },
        {
          title: "Maple",
          href: "https://en.wikipedia.org/wiki/Maple_(software)",
          items: [],
        },
        {
          title: "MAPPER now part of BIS",
          href: "https://en.wikipedia.org/wiki/MAPPER",
          items: [],
        },
        {
          title: "MARK-IV now VISION:BUILDER",
          href: "https://en.wikipedia.org/wiki/MARK_IV_(software)",
          items: [],
        },
        {
          title: "Mary",
          href: "https://en.wikipedia.org/wiki/Mary_(programming_language)",
          items: [],
        },
        {
          title: "MASM Microsoft Assembly x86",
          href: "https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler",
          items: [],
        },
        {
          title: "MATH-MATIC",
          href: "https://en.wikipedia.org/wiki/MATH-MATIC",
          items: [],
        },
        {
          title: "Mathematica",
          href: "https://en.wikipedia.org/wiki/Mathematica",
          items: [],
        },
        {
          title: "MATLAB",
          href: "https://en.wikipedia.org/wiki/MATLAB",
          items: [],
        },
        {
          title: "Maxima (see also",
          href: "https://en.wikipedia.org/wiki/Maxima_(software)",
          items: [],
        },
        {
          title: "Macsyma )",
          href: "https://en.wikipedia.org/wiki/Macsyma",
          items: [],
        },
        {
          title: "Max (Max Msp – Graphical Programming Environment)",
          href: "https://en.wikipedia.org/wiki/Max_(software)",
          items: [],
        },
        {
          title: "MaxScript internal language 3D Studio Max",
          href: "https://en.wikipedia.org/wiki/Autodesk_3ds_Max",
          items: [],
        },
        {
          title: "Maya (MEL)",
          href: "https://en.wikipedia.org/wiki/Maya_Embedded_Language",
          items: [],
        },
        {
          title: "MDL",
          href: "https://en.wikipedia.org/wiki/MDL_(programming_language)",
          items: [],
        },
        {
          title: "Mercury",
          href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)",
          items: [],
        },
        {
          title: "Mesa",
          href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)",
          items: [],
        },
        {
          title: "Metacard",
          href: "https://en.wikipedia.org/wiki/Metacard",
          items: [],
        },
        {
          title: "Metafont",
          href: "https://en.wikipedia.org/wiki/Metafont",
          items: [],
        },
        {
          title: "Microcode",
          href: "https://en.wikipedia.org/wiki/Microassembler",
          items: [],
        },
        {
          title: "MicroScript",
          href: "https://en.wikipedia.org/wiki/MicroScript_(programming_language)",
          items: [],
        },
        {
          title: "MIIS",
          href: "https://en.wikipedia.org/wiki/MIIS_(programming_language)",
          items: [],
        },
        {
          title: "MillScript",
          href: "https://en.wikipedia.org/wiki/MillScript",
          items: [],
        },
        {
          title: "MIMIC",
          href: "https://en.wikipedia.org/wiki/MIMIC",
          items: [],
        },
        {
          title: "Mirah",
          href: "https://en.wikipedia.org/wiki/Mirah_(programming_language)",
          items: [],
        },
        {
          title: "Miranda",
          href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)",
          items: [],
        },
        {
          title: "MIVA Script",
          href: "https://en.wikipedia.org/wiki/MIVA_Script",
          items: [],
        },
        {
          title: "ML",
          href: "https://en.wikipedia.org/wiki/ML_(programming_language)",
          items: [],
        },
        {
          title: "Moby",
          href: "https://en.wikipedia.org/wiki/Moby_(programming_language)",
          items: [],
        },
        {
          title: "Model 204",
          href: "https://en.wikipedia.org/wiki/Model_204",
          items: [],
        },
        {
          title: "Modelica",
          href: "https://en.wikipedia.org/wiki/Modelica",
          items: [],
        },
        {
          title: "Modula",
          href: "https://en.wikipedia.org/wiki/Modula",
          items: [],
        },
        {
          title: "Modula-2",
          href: "https://en.wikipedia.org/wiki/Modula-2",
          items: [],
        },
        {
          title: "Modula-3",
          href: "https://en.wikipedia.org/wiki/Modula-3",
          items: [],
        },
        {
          title: "Mohol",
          href: "https://en.wikipedia.org/wiki/Mohol_programming_languages",
          items: [],
        },
        {
          title: "MOO",
          href: "https://en.wikipedia.org/wiki/MOO_(programming_language)",
          items: [],
        },
        {
          title: "Mortran",
          href: "https://en.wikipedia.org/wiki/Mortran",
          items: [],
        },
        {
          title: "Mouse",
          href: "https://en.wikipedia.org/wiki/Mouse_(programming_language)",
          items: [],
        },
        {
          title: "MPD",
          href: "https://en.wikipedia.org/wiki/MPD_(programming_language)",
          items: [],
        },
        {
          title: "CIL",
          href: "https://en.wikipedia.org/wiki/Common_Intermediate_Language",
          items: [],
        },
        {
          title: "MSL",
          href: "https://en.wikipedia.org/wiki/MIRC_scripting_language",
          items: [],
        },
        {
          title: "MUMPS",
          href: "https://en.wikipedia.org/wiki/MUMPS",
          items: [],
        },
        {
          title: "Mystic Programming Language (MPL)",
          href: "https://en.wikipedia.org/wiki/Mystic_BBS",
          items: [],
        },
        {
          title: "NASM",
          href: "https://en.wikipedia.org/wiki/Netwide_Assembler",
          items: [],
        },
        {
          title: "Napier88",
          href: "https://en.wikipedia.org/wiki/Napier88",
          items: [],
        },
        {
          title: "Neko",
          href: "https://en.wikipedia.org/wiki/Neko_(programming_language)",
          items: [],
        },
        {
          title: "Nemerle",
          href: "https://en.wikipedia.org/wiki/Nemerle",
          items: [],
        },
        {
          title: "nesC",
          href: "https://en.wikipedia.org/wiki/NesC",
          items: [],
        },
        {
          title: "NESL",
          href: "https://en.wikipedia.org/wiki/NESL",
          items: [],
        },
        {
          title: "Net.Data",
          href: "https://en.wikipedia.org/wiki/Net.Data",
          items: [],
        },
        {
          title: "NetLogo",
          href: "https://en.wikipedia.org/wiki/NetLogo",
          items: [],
        },
        {
          title: "NetRexx",
          href: "https://en.wikipedia.org/wiki/NetRexx",
          items: [],
        },
        {
          title: "NewLISP",
          href: "https://en.wikipedia.org/wiki/NewLISP",
          items: [],
        },
        {
          title: "NEWP",
          href: "https://en.wikipedia.org/wiki/NEWP",
          items: [],
        },
        {
          title: "Newspeak",
          href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)",
          items: [],
        },
        {
          title: "NewtonScript",
          href: "https://en.wikipedia.org/wiki/NewtonScript",
          items: [],
        },
        {
          title: "NGL",
          href: "https://en.wikipedia.org/wiki/NGL_(programming_language)",
          items: [],
        },
        {
          title: "Nial",
          href: "https://en.wikipedia.org/wiki/Nial",
          items: [],
        },
        {
          title: "Nice",
          href: "https://en.wikipedia.org/wiki/Nice_(programming_language)",
          items: [],
        },
        {
          title: "Nickle",
          href: "https://en.wikipedia.org/wiki/Nickle_(programming_language)",
          items: [],
        },
        {
          title: "Nim",
          href: "https://en.wikipedia.org/wiki/Nim_(programming_language)",
          items: [],
        },
        {
          title: "NPL",
          href: "https://en.wikipedia.org/wiki/NORD_Programming_Language",
          items: [],
        },
        {
          title: "Not eXactly C (NXC)",
          href: "https://en.wikipedia.org/wiki/Not_eXactly_C",
          items: [],
        },
        {
          title: "Not Quite C (NQC)",
          href: "https://en.wikipedia.org/wiki/Not_Quite_C",
          items: [],
        },
        {
          title: "NSIS",
          href: "https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System",
          items: [],
        },
        {
          title: "Nu",
          href: "https://en.wikipedia.org/wiki/Nu_(programming_language)",
          items: [],
        },
        {
          title: "NWScript",
          href: "https://en.wikipedia.org/wiki/NWScript",
          items: [],
        },
        {
          title: "NXT-G",
          href: "https://en.wikipedia.org/wiki/NXT-G",
          items: [],
        },
        {
          title: "o:XML",
          href: "https://en.wikipedia.org/wiki/O:XML",
          items: [],
        },
        {
          title: "Oak",
          href: "https://en.wikipedia.org/wiki/Oak_(programming_language)",
          items: [],
        },
        {
          title: "Oberon",
          href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)",
          items: [],
        },
        {
          title: "OBJ2",
          href: "https://en.wikipedia.org/wiki/OBJ2",
          items: [],
        },
        {
          title: "Object Lisp",
          href: "https://en.wikipedia.org/wiki/Object_Lisp",
          items: [],
        },
        {
          title: "ObjectLOGO",
          href: "https://en.wikipedia.org/wiki/ObjectLOGO",
          items: [],
        },
        {
          title: "Object REXX",
          href: "https://en.wikipedia.org/wiki/Object_REXX",
          items: [],
        },
        {
          title: "Object Pascal",
          href: "https://en.wikipedia.org/wiki/Object_Pascal",
          items: [],
        },
        {
          title: "Objective-C",
          href: "https://en.wikipedia.org/wiki/Objective-C",
          items: [],
        },
        {
          title: "Objective-J",
          href: "https://en.wikipedia.org/wiki/Objective-J",
          items: [],
        },
        {
          title: "Obliq",
          href: "https://en.wikipedia.org/wiki/Obliq",
          items: [],
        },
        {
          title: "OCaml",
          href: "https://en.wikipedia.org/wiki/OCaml",
          items: [],
        },
        {
          title: "occam",
          href: "https://en.wikipedia.org/wiki/Occam_(programming_language)",
          items: [],
        },
        {
          title: "occam-π",
          href: "https://en.wikipedia.org/wiki/Occam-%CF%80",
          items: [],
        },
        {
          title: "Octave",
          href: "https://en.wikipedia.org/wiki/GNU_Octave",
          items: [],
        },
        {
          title: "OmniMark",
          href: "https://en.wikipedia.org/wiki/OmniMark",
          items: [],
        },
        {
          title: "Onyx",
          href: "https://en.wikipedia.org/wiki/Onyx_(programming_language)",
          items: [],
        },
        {
          title: "Opa",
          href: "https://en.wikipedia.org/wiki/Opa_(programming_language)",
          items: [],
        },
        {
          title: "Opal",
          href: "https://en.wikipedia.org/wiki/Opal_(programming_language)",
          items: [],
        },
        {
          title: "OpenCL",
          href: "https://en.wikipedia.org/wiki/OpenCL",
          items: [],
        },
        {
          title: "OpenEdge ABL",
          href: "https://en.wikipedia.org/wiki/OpenEdge_Advanced_Business_Language",
          items: [],
        },
        {
          title: "OPL",
          href: "https://en.wikipedia.org/wiki/Open_Programming_Language",
          items: [],
        },
        {
          title: "OPS5",
          href: "https://en.wikipedia.org/wiki/OPS5",
          items: [],
        },
        {
          title: "OptimJ",
          href: "https://en.wikipedia.org/wiki/OptimJ",
          items: [],
        },
        {
          title: "Orc",
          href: "https://en.wikipedia.org/wiki/Orc_(programming_language)",
          items: [],
        },
        {
          title: "ORCA/Modula-2",
          href: "https://en.wikipedia.org/wiki/ORCA/Modula-2",
          items: [],
        },
        {
          title: "Oriel",
          href: "https://en.wikipedia.org/wiki/Oriel_(scripting_language)",
          items: [],
        },
        {
          title: "Orwell",
          href: "https://en.wikipedia.org/wiki/Orwell_(programming_language)",
          items: [],
        },
        {
          title: "Oxygene",
          href: "https://en.wikipedia.org/wiki/Oxygene_(programming_language)",
          items: [],
        },
        {
          title: "Oz",
          href: "https://en.wikipedia.org/wiki/Oz_(programming_language)",
          items: [],
        },
        {
          title: "P′′",
          href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2",
          items: [],
        },
        {
          title: "P#",
          href: "https://en.wikipedia.org/wiki/P_Sharp",
          items: [],
        },
        {
          title: "ParaSail (programming language)",
          href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)",
          items: [],
        },
        {
          title: "PARI/GP",
          href: "https://en.wikipedia.org/wiki/PARI/GP",
          items: [],
        },
        {
          title: "Pascal – ISO 7185",
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
          items: [],
        },
        {
          title: "PCASTL",
          href: "https://en.wikipedia.org/wiki/PCASTL",
          items: [],
        },
        {
          title: "PCF",
          href: "https://en.wikipedia.org/wiki/Programming_language_for_Computable_Functions",
          items: [],
        },
        {
          title: "PEARL",
          href: "https://en.wikipedia.org/wiki/PEARL_(programming_language)",
          items: [],
        },
        {
          title: "PeopleCode",
          href: "https://en.wikipedia.org/wiki/PeopleCode",
          items: [],
        },
        {
          title: "Perl",
          href: "https://en.wikipedia.org/wiki/Perl",
          items: [],
        },
        {
          title: "PDL",
          href: "https://en.wikipedia.org/wiki/Perl_Data_Language",
          items: [],
        },
        {
          title: "Perl6",
          href: "https://en.wikipedia.org/wiki/Perl6",
          items: [],
        },
        {
          title: "Pharo",
          href: "https://en.wikipedia.org/wiki/Pharo",
          items: [],
        },
        {
          title: "PHP",
          href: "https://en.wikipedia.org/wiki/PHP",
          items: [],
        },
        {
          title: "Phrogram",
          href: "https://en.wikipedia.org/wiki/Phrogram",
          items: [],
        },
        {
          title: "Pico",
          href: "https://en.wikipedia.org/wiki/Pico_(programming_language)",
          items: [],
        },
        {
          title: "Picolisp",
          href: "https://en.wikipedia.org/wiki/Picolisp",
          items: [],
        },
        {
          title: "Pict",
          href: "https://en.wikipedia.org/wiki/Pict_(programming_language)",
          items: [],
        },
        {
          title: "Pike",
          href: "https://en.wikipedia.org/wiki/Pike_(programming_language)",
          items: [],
        },
        {
          title: "PIKT",
          href: "https://en.wikipedia.org/wiki/PIKT",
          items: [],
        },
        {
          title: "PILOT",
          href: "https://en.wikipedia.org/wiki/PILOT",
          items: [],
        },
        {
          title: "Pipelines",
          href: "https://en.wikipedia.org/wiki/Hartmann_pipeline",
          items: [],
        },
        {
          title: "Pizza",
          href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)",
          items: [],
        },
        {
          title: "PL-11",
          href: "https://en.wikipedia.org/wiki/PL-11",
          items: [],
        },
        {
          title: "PL/0",
          href: "https://en.wikipedia.org/wiki/PL/0",
          items: [],
        },
        {
          title: "PL/B",
          href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business",
          items: [],
        },
        {
          title: "PL/C",
          href: "https://en.wikipedia.org/wiki/PL/C",
          items: [],
        },
        {
          title: "PL/I – ISO 6160",
          href: "https://en.wikipedia.org/wiki/PL/I",
          items: [],
        },
        {
          title: "PL/M",
          href: "https://en.wikipedia.org/wiki/PL/M",
          items: [],
        },
        {
          title: "PL/P",
          href: "https://en.wikipedia.org/wiki/PL/P",
          items: [],
        },
        {
          title: "PL/SQL",
          href: "https://en.wikipedia.org/wiki/PL/SQL",
          items: [],
        },
        {
          title: "PL360",
          href: "https://en.wikipedia.org/wiki/PL360",
          items: [],
        },
        {
          title: "PLANC",
          href: "https://en.wikipedia.org/wiki/PLANC",
          items: [],
        },
        {
          title: "Plankalkül",
          href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl",
          items: [],
        },
        {
          title: "Planner",
          href: "https://en.wikipedia.org/wiki/Planner_(programming_language)",
          items: [],
        },
        {
          title: "PLEX",
          href: "https://en.wikipedia.org/wiki/PLEX_(programming_language)",
          items: [],
        },
        {
          title: "PLEXIL",
          href: "https://en.wikipedia.org/wiki/PLEXIL",
          items: [],
        },
        {
          title: "Plus",
          href: "https://en.wikipedia.org/wiki/Plus_(programming_language)",
          items: [],
        },
        {
          title: "POP-11",
          href: "https://en.wikipedia.org/wiki/POP-11",
          items: [],
        },
        {
          title: "PostScript",
          href: "https://en.wikipedia.org/wiki/PostScript",
          items: [],
        },
        {
          title: "PortablE",
          href: "https://en.wikipedia.org/wiki/Amiga_E#PortablE",
          items: [],
        },
        {
          title: "Powerhouse",
          href: "https://en.wikipedia.org/wiki/Powerhouse_(programming_language)",
          items: [],
        },
        {
          title: "PowerBuilder – 4GL GUI applcation generator from Sybase",
          href: "https://en.wikipedia.org/wiki/PowerBuilder",
          items: [],
        },
        {
          title: "PowerShell",
          href: "https://en.wikipedia.org/wiki/PowerShell",
          items: [],
        },
        {
          title: "PPL",
          href: "https://en.wikipedia.org/wiki/Polymorphic_Programming_Language",
          items: [],
        },
        {
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
          items: [],
        },
        {
          title: "Processing.js",
          href: "https://en.wikipedia.org/wiki/Processing.js",
          items: [],
        },
        {
          title: "Prograph",
          href: "https://en.wikipedia.org/wiki/Prograph",
          items: [],
        },
        {
          title: "PROIV",
          href: "https://en.wikipedia.org/wiki/PROIV",
          items: [],
        },
        {
          title: "Prolog",
          href: "https://en.wikipedia.org/wiki/Prolog",
          items: [],
        },
        {
          title: "PROMAL",
          href: "https://en.wikipedia.org/wiki/PROMAL",
          items: [],
        },
        {
          title: "Promela",
          href: "https://en.wikipedia.org/wiki/Promela",
          items: [],
        },
        {
          title: "PROSE modeling language",
          href: "https://en.wikipedia.org/wiki/PROSE_modeling_language",
          items: [],
        },
        {
          title: "PROTEL",
          href: "https://en.wikipedia.org/wiki/Protel",
          items: [],
        },
        {
          title: "ProvideX",
          href: "https://en.wikipedia.org/wiki/ProvideX",
          items: [],
        },
        {
          title: "Pro*C",
          href: "https://en.wikipedia.org/wiki/Pro*C",
          items: [],
        },
        {
          title: "Pure",
          href: "https://en.wikipedia.org/wiki/Pure_(programming_language)",
          items: [],
        },
        {
          title: "Python",
          href: "https://en.wikipedia.org/wiki/Python_(programming_language)",
          items: [],
        },
        {
          title: "Q (equational programming language)",
          href: "https://en.wikipedia.org/wiki/Q_(equational_programming_language)",
          items: [],
        },
        {
          title: "Qalb",
          href: "https://en.wikipedia.org/wiki/Qalb_(programming_language)",
          items: [],
        },
        {
          title: "QtScript",
          href: "https://en.wikipedia.org/wiki/QtScript",
          items: [],
        },
        {
          title: "QuakeC",
          href: "https://en.wikipedia.org/wiki/QuakeC",
          items: [],
        },
        {
          title: "QPL",
          href: "https://en.wikipedia.org/wiki/Quantum_programming",
          items: [],
        },
        {
          title: "R",
          href: "https://en.wikipedia.org/wiki/R_(programming_language)",
          items: [],
        },
        {
          title: "R++",
          href: "https://en.wikipedia.org/wiki/R%2B%2B",
          items: [],
        },
        {
          title: "Racket",
          href: "https://en.wikipedia.org/wiki/Racket_(programming_language)",
          items: [],
        },
        {
          title: "RAPID",
          href: "https://en.wikipedia.org/wiki/RAPID",
          items: [],
        },
        {
          title: "Rapira",
          href: "https://en.wikipedia.org/wiki/Rapira",
          items: [],
        },
        {
          title: "Ratfiv",
          href: "https://en.wikipedia.org/wiki/Ratfiv",
          items: [],
        },
        {
          title: "Ratfor",
          href: "https://en.wikipedia.org/wiki/Ratfor",
          items: [],
        },
        {
          title: "rc",
          href: "https://en.wikipedia.org/wiki/Rc",
          items: [],
        },
        {
          title: "REBOL",
          href: "https://en.wikipedia.org/wiki/REBOL",
          items: [],
        },
        {
          title: "Red",
          href: "https://en.wikipedia.org/wiki/Red_(programming_language)",
          items: [],
        },
        {
          title: "Redcode",
          href: "https://en.wikipedia.org/wiki/Core_War",
          items: [],
        },
        {
          title: "REFAL",
          href: "https://en.wikipedia.org/wiki/REFAL",
          items: [],
        },
        {
          title: "Reia",
          href: "https://en.wikipedia.org/wiki/Reia_(programming_language)",
          items: [],
        },
        {
          title: "Revolution",
          href: "https://en.wikipedia.org/wiki/Revolution_(programming_language)",
          items: [],
        },
        {
          title: "REXX",
          href: "https://en.wikipedia.org/wiki/REXX",
          items: [],
        },
        {
          title: "Rlab",
          href: "https://en.wikipedia.org/wiki/Rlab",
          items: [],
        },
        {
          title: "ROOP",
          href: "https://en.wikipedia.org/wiki/ROOP_(programming_language)",
          items: [],
        },
        {
          title: "RPG",
          href: "https://en.wikipedia.org/wiki/IBM_RPG",
          items: [],
        },
        {
          title: "RPL",
          href: "https://en.wikipedia.org/wiki/RPL_(programming_language)",
          items: [],
        },
        {
          title: "RSL",
          href: "https://en.wikipedia.org/wiki/Robot_Battle#Robot_scripting_language",
          items: [],
        },
        {
          title: "RTL/2",
          href: "https://en.wikipedia.org/wiki/RTL/2",
          items: [],
        },
        {
          title: "Ruby",
          href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
          items: [],
        },
        {
          title: "RuneScript",
          href: "https://en.wikipedia.org/wiki/RuneScape#History_and_development",
          items: [],
        },
        {
          title: "Rust",
          href: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
          items: [],
        },
        {
          title: "S",
          href: "https://en.wikipedia.org/wiki/S_(programming_language)",
          items: [],
        },
        {
          title: "S2",
          href: "https://en.wikipedia.org/wiki/S2_(programming_language)",
          items: [],
        },
        {
          title: "S3",
          href: "https://en.wikipedia.org/wiki/S3_(programming_language)",
          items: [],
        },
        {
          title: "S-Lang",
          href: "https://en.wikipedia.org/wiki/S-Lang_(programming_language)",
          items: [],
        },
        {
          title: "S-PLUS",
          href: "https://en.wikipedia.org/wiki/S-PLUS",
          items: [],
        },
        {
          title: "SA-C",
          href: "https://en.wikipedia.org/wiki/SA-C_(programming_language)",
          items: [],
        },
        {
          title: "SabreTalk",
          href: "https://en.wikipedia.org/wiki/SabreTalk",
          items: [],
        },
        {
          title: "SAIL",
          href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)",
          items: [],
        },
        {
          title: "SALSA",
          href: "https://en.wikipedia.org/wiki/SALSA_(programming_language)",
          items: [],
        },
        {
          title: "SAM76",
          href: "https://en.wikipedia.org/wiki/SAM76",
          items: [],
        },
        {
          title: "SAS",
          href: "https://en.wikipedia.org/wiki/SAS_System",
          items: [],
        },
        {
          title: "SASL",
          href: "https://en.wikipedia.org/wiki/SASL_(programming_language)",
          items: [],
        },
        {
          title: "Sather",
          href: "https://en.wikipedia.org/wiki/Sather",
          items: [],
        },
        {
          title: "Sawzall",
          href: "https://en.wikipedia.org/wiki/Sawzall_(programming_language)",
          items: [],
        },
        {
          title: "SBL",
          href: "https://en.wikipedia.org/wiki/Superbase_database",
          items: [],
        },
        {
          title: "Scala",
          href: "https://en.wikipedia.org/wiki/Scala_(programming_language)",
          items: [],
        },
        {
          title: "Scheme",
          href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)",
          items: [],
        },
        {
          title: "Scilab",
          href: "https://en.wikipedia.org/wiki/Scilab",
          items: [],
        },
        {
          title: "Scratch",
          href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)",
          items: [],
        },
        {
          title: "Script.NET",
          href: "https://en.wikipedia.org/wiki/Script.NET",
          items: [],
        },
        {
          title: "Sed",
          href: "https://en.wikipedia.org/wiki/Sed",
          items: [],
        },
        {
          title: "Seed7",
          href: "https://en.wikipedia.org/wiki/Seed7",
          items: [],
        },
        {
          title: "Self",
          href: "https://en.wikipedia.org/wiki/Self_(programming_language)",
          items: [],
        },
        {
          title: "SenseTalk",
          href: "https://en.wikipedia.org/wiki/SenseTalk",
          items: [],
        },
        {
          title: "SequenceL",
          href: "https://en.wikipedia.org/wiki/SequenceL",
          items: [],
        },
        {
          title: "SETL",
          href: "https://en.wikipedia.org/wiki/SETL",
          items: [],
        },
        {
          title: "SIMPOL",
          href: "https://en.wikipedia.org/wiki/Superbase_database#History",
          items: [],
        },
        {
          title: "SIGNAL",
          href: "https://en.wikipedia.org/wiki/SIGNAL_(programming_language)",
          items: [],
        },
        {
          title: "SiMPLE",
          href: "https://en.wikipedia.org/wiki/SiMPLE",
          items: [],
        },
        {
          title: "SIMSCRIPT",
          href: "https://en.wikipedia.org/wiki/SIMSCRIPT",
          items: [],
        },
        {
          title: "Simula",
          href: "https://en.wikipedia.org/wiki/Simula",
          items: [],
        },
        {
          title: "Simulink",
          href: "https://en.wikipedia.org/wiki/Simulink",
          items: [],
        },
        {
          title: "SISAL",
          href: "https://en.wikipedia.org/wiki/SISAL",
          items: [],
        },
        {
          title: "SLIP",
          href: "https://en.wikipedia.org/wiki/SLIP_(programming_language)",
          items: [],
        },
        {
          title: "SMALL",
          href: "https://en.wikipedia.org/wiki/SMALL",
          items: [],
        },
        {
          title: "Smalltalk",
          href: "https://en.wikipedia.org/wiki/Smalltalk",
          items: [],
        },
        {
          title: "Small Basic",
          href: "https://en.wikipedia.org/wiki/Microsoft_Small_Basic",
          items: [],
        },
        {
          title: "SML",
          href: "https://en.wikipedia.org/wiki/Standard_ML",
          items: [],
        },
        {
          title: "Snap!",
          href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)",
          items: [],
        },
        {
          title: "SNOBOL (",
          href: "https://en.wikipedia.org/wiki/SNOBOL",
          items: [],
        },
        {
          title: "SPITBOL )",
          href: "https://en.wikipedia.org/wiki/SPITBOL_compiler",
          items: [],
        },
        {
          title: "Snowball",
          href: "https://en.wikipedia.org/wiki/Snowball_programming_language",
          items: [],
        },
        {
          title: "SOL",
          href: "https://en.wikipedia.org/wiki/Secure_Operations_Language",
          items: [],
        },
        {
          title: "Span",
          href: "https://en.wikipedia.org/wiki/Span_(programming_language)",
          items: [],
        },
        {
          title: "SPARK",
          href: "https://en.wikipedia.org/wiki/SPARK_(programming_language)",
          items: [],
        },
        {
          title: "Speedcode",
          href: "https://en.wikipedia.org/wiki/Speedcoding",
          items: [],
        },
        {
          title: "SPIN",
          href: "https://en.wikipedia.org/wiki/Parallax_Propeller",
          items: [],
        },
        {
          title: "SP/k",
          href: "https://en.wikipedia.org/wiki/SP/k",
          items: [],
        },
        {
          title: "SPS",
          href: "https://en.wikipedia.org/wiki/IBM_1401_Symbolic_Programming_System",
          items: [],
        },
        {
          title: "SQR",
          href: "https://en.wikipedia.org/wiki/SQR",
          items: [],
        },
        {
          title: "Squeak",
          href: "https://en.wikipedia.org/wiki/Squeak",
          items: [],
        },
        {
          title: "Squirrel",
          href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)",
          items: [],
        },
        {
          title: "SR",
          href: "https://en.wikipedia.org/wiki/SR_(programming_language)",
          items: [],
        },
        {
          title: "S/SL",
          href: "https://en.wikipedia.org/wiki/S/SL_programming_language",
          items: [],
        },
        {
          title: "Stackless Python",
          href: "https://en.wikipedia.org/wiki/Stackless_Python",
          items: [],
        },
        {
          title: "Starlogo",
          href: "https://en.wikipedia.org/wiki/Starlogo",
          items: [],
        },
        {
          title: "Strand",
          href: "https://en.wikipedia.org/wiki/Strand_(programming_language)",
          items: [],
        },
        {
          title: "Stata",
          href: "https://en.wikipedia.org/wiki/Stata",
          items: [],
        },
        {
          title: "Stateflow",
          href: "https://en.wikipedia.org/wiki/Stateflow",
          items: [],
        },
        {
          title: "Subtext",
          href: "https://en.wikipedia.org/wiki/Subtext_(programming_language)",
          items: [],
        },
        {
          title: "SuperCollider",
          href: "https://en.wikipedia.org/wiki/SuperCollider",
          items: [],
        },
        {
          title: "SuperTalk",
          href: "https://en.wikipedia.org/wiki/SuperTalk",
          items: [],
        },
        {
          title: "Swift (Apple programming language)",
          href: "https://en.wikipedia.org/wiki/Swift_(programming_language)",
          items: [],
        },
        {
          title: "Swift (parallel scripting language)",
          href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
          items: [],
        },
        {
          title: "SYMPL",
          href: "https://en.wikipedia.org/wiki/SYMPL",
          items: [],
        },
        {
          title: "SyncCharts",
          href: "https://en.wikipedia.org/wiki/SyncCharts",
          items: [],
        },
        {
          title: "SystemVerilog",
          href: "https://en.wikipedia.org/wiki/SystemVerilog",
          items: [],
        },
        {
          title: "T",
          href: "https://en.wikipedia.org/wiki/T_(programming_language)",
          items: [],
        },
        {
          title: "TACL",
          href: "https://en.wikipedia.org/wiki/TACL",
          items: [],
        },
        {
          title: "TACPOL",
          href: "https://en.wikipedia.org/wiki/TACPOL_(programming_language)",
          items: [],
        },
        {
          title: "TADS",
          href: "https://en.wikipedia.org/wiki/TADS",
          items: [],
        },
        {
          title: "TAL",
          href: "https://en.wikipedia.org/wiki/Transaction_Application_Language",
          items: [],
        },
        {
          title: "Tcl",
          href: "https://en.wikipedia.org/wiki/Tcl",
          items: [],
        },
        {
          title: "Tea",
          href: "https://en.wikipedia.org/wiki/Tea_(programming_language)",
          items: [],
        },
        {
          title: "TECO",
          href: "https://en.wikipedia.org/wiki/Text_Editor_and_Corrector",
          items: [],
        },
        {
          title: "TELCOMP",
          href: "https://en.wikipedia.org/wiki/TELCOMP",
          items: [],
        },
        {
          title: "TeX",
          href: "https://en.wikipedia.org/wiki/TeX",
          items: [],
        },
        {
          title: "TEX",
          href: "https://en.wikipedia.org/wiki/Text_Executive_Programming_Language",
          items: [],
        },
        {
          title: "TIE",
          href: "https://en.wikipedia.org/wiki/Tensilica_Instruction_Extension",
          items: [],
        },
        {
          title: "Timber",
          href: "https://en.wikipedia.org/wiki/Timber_(programming_language)",
          items: [],
        },
        {
          title: "TMG ",
          href: "//en.wikipedia.org/wiki/TMG_(language)",
          items: [],
        },
        {
          title: "Tom",
          href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)",
          items: [],
        },
        {
          title: "TOM",
          href: "https://en.wikipedia.org/wiki/TOM_(object-oriented_programming_language)",
          items: [],
        },
        {
          title: "TouchDevelop",
          href: "https://en.wikipedia.org/wiki/TouchDevelop",
          items: [],
        },
        {
          title: "Topspeed",
          href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)",
          items: [],
        },
        {
          title: "TPU",
          href: "https://en.wikipedia.org/wiki/Text_Processing_Utility",
          items: [],
        },
        {
          title: "Trac",
          href: "https://en.wikipedia.org/wiki/TRAC_(programming_language)",
          items: [],
        },
        {
          title: "TTM",
          href: "https://en.wikipedia.org/wiki/TTM_(programming_language)",
          items: [],
        },
        {
          title: "T-SQL",
          href: "https://en.wikipedia.org/wiki/Transact-SQL",
          items: [],
        },
        {
          title: "TTCN",
          href: "https://en.wikipedia.org/wiki/TTCN",
          items: [],
        },
        {
          title: "Turing",
          href: "https://en.wikipedia.org/wiki/Turing_(programming_language)",
          items: [],
        },
        {
          title: "TUTOR",
          href: "https://en.wikipedia.org/wiki/TUTOR_(programming_language)",
          items: [],
        },
        {
          title: "TXL",
          href: "https://en.wikipedia.org/wiki/TXL_(programming_language)",
          items: [],
        },
        {
          title: "TypeScript",
          href: "https://en.wikipedia.org/wiki/TypeScript",
          items: [],
        },
        {
          title: "Turbo C++",
          href: "https://en.wikipedia.org/wiki/Turbo_C%2B%2B",
          items: [],
        },
        {
          title: "Ubercode",
          href: "https://en.wikipedia.org/wiki/Ubercode",
          items: [],
        },
        {
          title: "UCSD Pascal",
          href: "https://en.wikipedia.org/wiki/UCSD_Pascal",
          items: [],
        },
        {
          title: "Umple",
          href: "https://en.wikipedia.org/wiki/Umple",
          items: [],
        },
        {
          title: "Unicon",
          href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)",
          items: [],
        },
        {
          title: "Uniface",
          href: "https://en.wikipedia.org/wiki/Uniface_(programming_language)",
          items: [],
        },
        {
          title: "UNITY",
          href: "https://en.wikipedia.org/wiki/UNITY_(programming_language)",
          items: [],
        },
        {
          title: "Unix shell",
          href: "https://en.wikipedia.org/wiki/Unix_shell",
          items: [],
        },
        {
          title: "UnrealScript",
          href: "https://en.wikipedia.org/wiki/UnrealScript",
          items: [],
        },
        {
          title: "Vala",
          href: "https://en.wikipedia.org/wiki/Vala_(programming_language)",
          items: [],
        },
        {
          title: "Visual DataFlex",
          href: "https://en.wikipedia.org/wiki/Visual_DataFlex",
          items: [],
        },
        {
          title: "Visual DialogScript",
          href: "https://en.wikipedia.org/wiki/Visual_DialogScript",
          items: [],
        },
        {
          title: "Visual Fortran",
          href: "https://en.wikipedia.org/wiki/Visual_Fortran",
          items: [],
        },
        {
          title: "Visual FoxPro",
          href: "https://en.wikipedia.org/wiki/Visual_FoxPro",
          items: [],
        },
        {
          title: "Visual J++",
          href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B",
          items: [],
        },
        {
          title: "Visual J#",
          href: "https://en.wikipedia.org/wiki/Visual_J",
          items: [],
        },
        {
          title: "Visual Objects",
          href: "https://en.wikipedia.org/wiki/Visual_Objects",
          items: [],
        },
        {
          title: "Visual Prolog",
          href: "https://en.wikipedia.org/wiki/Visual_Prolog",
          items: [],
        },
        {
          title: "VSXu",
          href: "https://en.wikipedia.org/wiki/VSXu",
          items: [],
        },
        {
          title: "vvvv",
          href: "https://en.wikipedia.org/wiki/Vvvv",
          items: [],
        },
        {
          title: "WATFIV",
          href: "//en.wikipedia.org/wiki/WATFIV_(programming_language)",
          items: [],
        },
        {
          title: "WebDNA",
          href: "https://en.wikipedia.org/wiki/WebDNA",
          items: [],
        },
        {
          title: "WebQL",
          href: "https://en.wikipedia.org/wiki/WebQL",
          items: [],
        },
        {
          title: "Whiley",
          href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)",
          items: [],
        },
        {
          title: "Windows PowerShell",
          href: "https://en.wikipedia.org/wiki/Windows_PowerShell",
          items: [],
        },
        {
          title: "Winbatch",
          href: "https://en.wikipedia.org/wiki/Winbatch",
          items: [],
        },
        {
          title: "Wolfram Language",
          href: "https://en.wikipedia.org/wiki/Wolfram_Language",
          items: [],
        },
        {
          title: "Wyvern",
          href: "https://en.wikipedia.org/wiki/Wyvern_(programming_language)",
          items: [],
        },
        {
          title: "X++",
          href: "https://en.wikipedia.org/wiki/Microsoft_Dynamics_AX",
          items: [],
        },
        {
          title: "X#",
          href: "https://en.wikipedia.org/wiki/X_Sharp_(programming_language)",
          items: [],
        },
        {
          title: "X10",
          href: "https://en.wikipedia.org/wiki/X10_(programming_language)",
          items: [],
        },
        {
          title: "XBL",
          href: "https://en.wikipedia.org/wiki/XBL",
          items: [],
        },
        {
          title: "XC (exploits",
          href: "https://en.wikipedia.org/wiki/XC_Programming_Language",
          items: [],
        },
        {
          title: "XMOS architecture )",
          href: "https://en.wikipedia.org/wiki/XCore_XS1",
          items: [],
        },
        {
          title: "xHarbour",
          href: "https://en.wikipedia.org/wiki/XHarbour",
          items: [],
        },
        {
          title: "XL",
          href: "https://en.wikipedia.org/wiki/XL_(programming_language)",
          items: [],
        },
        {
          title: "Xojo",
          href: "https://en.wikipedia.org/wiki/Xojo",
          items: [],
        },
        {
          title: "XOTcl",
          href: "https://en.wikipedia.org/wiki/XOTcl",
          items: [],
        },
        {
          title: "XPL",
          href: "https://en.wikipedia.org/wiki/XPL",
          items: [],
        },
        {
          title: "XPL0",
          href: "https://en.wikipedia.org/wiki/XPL0",
          items: [],
        },
        {
          title: "XQuery",
          href: "https://en.wikipedia.org/wiki/XQuery",
          items: [],
        },
        {
          title: "XSB",
          href: "https://en.wikipedia.org/wiki/XSB",
          items: [],
        },
        {
          title: "XSLT – see",
          href: "https://en.wikipedia.org/wiki/XSL_Transformations",
          items: [],
        },
        {
          title: "XPath",
          href: "https://en.wikipedia.org/wiki/XPath",
          items: [],
        },
        {
          title: "Xtend",
          href: "https://en.wikipedia.org/wiki/Xtend",
          items: [],
        },
        {
          title: "Yorick",
          href: "https://en.wikipedia.org/wiki/Yorick_(programming_language)",
          items: [],
        },
        {
          title: "YQL",
          href: "https://en.wikipedia.org/wiki/YQL_(programming_language)",
          items: [],
        },
        {
          title: "Z notation",
          href: "https://en.wikipedia.org/wiki/Z_notation",
          items: [],
        },
        {
          title: "Zeno",
          href: "https://en.wikipedia.org/wiki/Zeno_(programming_language)",
          items: [],
        },
        {
          title: "ZOPL",
          href: "https://en.wikipedia.org/wiki/ZOPL",
          items: [],
        },
        {
          title: "Zsh",
          href: "https://en.wikipedia.org/wiki/Z_shell",
          items: [],
        },
        {
          title: "ZPL",
          href: "https://en.wikipedia.org/wiki/ZPL_(programming_language)",
          items: [],
        },
        {
          title: "Q (programming language from Kx Systems)",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
          items: [],
        },
      ],
    },
    {
      title: "Others",
      items: [
        {
          title: "Prisma",
          href: "/docs/others/prisma",
          items: [],
        },
        {
          title: "Graphql",
          href: "/docs/others/graphql",
          items: [],
        },
        {
          title: "End",
          href: "/docs/others/the-end",
          items: [],
        },
      ],
    },
  ],
}
