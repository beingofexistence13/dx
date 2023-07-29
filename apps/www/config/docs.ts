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
          title: "Hello Mode",
          href: "/docs/ui/hello-mode",
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
          title: "Comment",
          href: "/docs/ui/comment",
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
      title: "Database",
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
      title: "Backend",
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
      title: "Hosting",
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
      title: "Test",
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

      ],
    },
  ],
}
