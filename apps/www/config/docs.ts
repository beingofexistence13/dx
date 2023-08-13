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
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "SQL Converters",
          href: "/docs/generators/sql-converters",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "Encode and Decode",
          href: "/docs/generators/encode-and-decode",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image Tools",
          href: "/docs/generators/image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "Color Converters",
          href: "/docs/generators/color-converters",
          items: [],
        },{
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "Unit Converter",
          href: "/docs/generators/unit-converter",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "SQL Converters",
          href: "/docs/generators/sql-converters",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "Encode and Decode",
          href: "/docs/generators/encode-and-decode",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image Tools",
          href: "/docs/generators/image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "Converters",
          href: "/docs/generators/converters",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "JSON Converters",
          href: "/docs/generators/json-converters",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "XML Converters",
          href: "/docs/generators/xml-converters",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "HTML Converters",
          href: "/docs/generators/html-converters",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "YAML Converters",
          href: "/docs/generators/yaml-converters",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "Utility",
          href: "/docs/generators/utility",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Chart Tools",
          href: "/docs/generators/chart-tools",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Converters",
          href: "/docs/generators/converters",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "JSON Converters",
          href: "/docs/generators/json-converters",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "XML Converters",
          href: "/docs/generators/xml-converters",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "HTML Converters",
          href: "/docs/generators/html-converters",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "YAML Converters",
          href: "/docs/generators/yaml-converters",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "Utility",
          href: "/docs/generators/utility",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Chart Tools",
          href: "/docs/generators/chart-tools",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Viewers",
          href: "/docs/generators/viewers",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "Programming Editors",
          href: "/docs/generators/programming-editors",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "Parsers",
          href: "/docs/generators/parsers",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "Escape Unescape",
          href: "/docs/generators/escape-unescape",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "CryptoGraphy Tools",
          href: "/docs/generators/cryptography-tools",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Viewers",
          href: "/docs/generators/viewers",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "Programming Editors",
          href: "/docs/generators/programming-editors",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "Parsers",
          href: "/docs/generators/parsers",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "Escape Unescape",
          href: "/docs/generators/escape-unescape",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "CryptoGraphy Tools",
          href: "/docs/generators/cryptography-tools",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Beautifiers",
          href: "/docs/generators/beautifiers",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "Minifier",
          href: "/docs/generators/minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "String Utilities",
          href: "/docs/generators/string-utilities",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Syntax Highlighting",
          href: "/docs/generators/syntax-highlighting",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "Compress",
          href: "/docs/generators/compress",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "Beautifiers",
          href: "/docs/generators/beautifiers",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "Minifier",
          href: "/docs/generators/minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "String Utilities",
          href: "/docs/generators/string-utilities",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Syntax Highlighting",
          href: "/docs/generators/syntax-highlighting",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "Compress",
          href: "/docs/generators/compress",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "Number Utilities",
          href: "/docs/generators/number-utilities",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "Bitwise Tools",
          href: "/docs/generators/bitwise-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "Number Utilities",
          href: "/docs/generators/number-utilities",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "Bitwise Tools",
          href: "/docs/generators/bitwise-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Popular Functionality",
          href: "/docs/generators/popular-functionality",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "Number to Words",
          href: "/docs/generators/number-to-words",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "HEX to Pantone",
          href: "/docs/generators/hex-to-pantone",
          items: [],
        },{
          title: "Source Code Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "Excel to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "ONLINE JSON EDITOR",
          href: "/docs/generators/online-json-editor",
          items: [],
        },{
          title: "Decimal to Hex",
          href: "/docs/generators/decimal-to-hex",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Random Emoji Generator",
          href: "/docs/generators/random-emoji-generator",
          items: [],
        },{
          title: "REM to PX Converter",
          href: "/docs/generators/rem-to-px-converter",
          items: [],
        },{
          title: "New Functionality",
          href: "/docs/generators/new-functionality",
          items: [],
        },{
          title: "Random Trivia Generator",
          href: "/docs/generators/random-trivia-generator",
          items: [],
        },{
          title: "Random Website Generator",
          href: "/docs/generators/random-website-generator",
          items: [],
        },{
          title: "Random Proverb Generator",
          href: "/docs/generators/random-proverb-generator",
          items: [],
        },{
          title: "Memorable Password Generator",
          href: "/docs/generators/memorable-password-generator",
          items: [],
        },{
          title: "Harry Potter Spells Generator",
          href: "/docs/generators/harry-potter-spells-generator",
          items: [],
        },{
          title: "Random New York Address",
          href: "/docs/generators/random-new-york-address",
          items: [],
        },{
          title: "Random Noun Generator",
          href: "/docs/generators/random-noun-generator",
          items: [],
        },{
          title: "Random Spanish Word Generator",
          href: "/docs/generators/random-spanish-word-generator",
          items: [],
        },{
          title: "Random Location Generator",
          href: "/docs/generators/random-location-generator",
          items: [],
        },{
          title: "Random Town Generator",
          href: "/docs/generators/random-town-generator",
          items: [],
        },{
          title: "Goth Name Generator",
          href: "/docs/generators/goth-name-generator",
          items: [],
        },{
          title: "Fantasy Name Generator",
          href: "/docs/generators/fantasy-name-generator",
          items: [],
        },{
          title: "Victorian Name Generator",
          href: "/docs/generators/victorian-name-generator",
          items: [],
        },{
          title: "Magic School Name",
          href: "/docs/generators/magic-school-name",
          items: [],
        },{
          title: "Halloween Costume Generator",
          href: "/docs/generators/halloween-costume-generator",
          items: [],
        },{
          title: "Book",
          href: "/docs/generators/book",
          items: [],
        },{
          title: "Disney Character Generator",
          href: "/docs/generators/disney-character-generator",
          items: [],
        },{
          title: "God Name Generator",
          href: "/docs/generators/god-name-generator",
          items: [],
        },{
          title: "Random Setting Generator",
          href: "/docs/generators/random-setting-generator",
          items: [],
        },{
          title: "Twitch Name Generator",
          href: "/docs/generators/twitch-name-generator",
          items: [],
        },{
          title: "Villager Name Generator",
          href: "/docs/generators/villager-name-generator",
          items: [],
        },{
          title: "Vampire Name Generator",
          href: "/docs/generators/vampire-name-generator",
          items: [],
        },{
          title: "Dwarf Name Generator",
          href: "/docs/generators/dwarf-name-generator",
          items: [],
        },{
          title: "DND Name Generator",
          href: "/docs/generators/dnd-name-generator",
          items: [],
        },{
          title: "Random Kingdom Name Generator",
          href: "/docs/generators/random-kingdom-name-generator",
          items: [],
        },{
          title: "Random Japanese Name Generator",
          href: "/docs/generators/random-japanese-name-generator",
          items: [],
        },{
          title: "Random School Name Generator",
          href: "/docs/generators/random-school-name-generator",
          items: [],
        },{
          title: "Glitch Text Generator",
          href: "/docs/generators/glitch-text-generator",
          items: [],
        },{
          title: "YAML Cheat Sheet",
          href: "/docs/generators/yaml-cheat-sheet",
          items: [],
        },{
          title: "JSON Cheat Sheet",
          href: "/docs/generators/json-cheat-sheet",
          items: [],
        },{
          title: "Random Username Generator",
          href: "/docs/generators/random-username-generator",
          items: [],
        },{
          title: "Random Cat Name Generator",
          href: "/docs/generators/random-cat-name-generator",
          items: [],
        },{
          title: "Random Food Generator",
          href: "/docs/generators/random-food-generator",
          items: [],
        },{
          title: "Scenario Generator",
          href: "/docs/generators/scenario-generator",
          items: [],
        },{
          title: "JSON to String",
          href: "/docs/generators/json-to-string",
          items: [],
        },{
          title: "Random New Zealand Address",
          href: "/docs/generators/random-new-zealand-address",
          items: [],
        },{
          title: "Random Paragraph Generator",
          href: "/docs/generators/random-paragraph-generator",
          items: [],
        },{
          title: "Fake ChatGPT Generator",
          href: "/docs/generators/fake-chatgpt-generator",
          items: [],
        },{
          title: "JavaScript Cheat Sheet",
          href: "/docs/generators/javascript-cheat-sheet",
          items: [],
        },{
          title: "Text Formatter",
          href: "/docs/generators/text-formatter",
          items: [],
        },{
          title: "Time Sheet Calculator",
          href: "/docs/generators/time-sheet-calculator",
          items: [],
        },{
          title: "Random Video Game Generator",
          href: "/docs/generators/random-video-game-generator",
          items: [],
        },{
          title: "Address in Spain",
          href: "/docs/generators/address-in-spain",
          items: [],
        },{
          title: "Random Actor Generator",
          href: "/docs/generators/random-actor-generator",
          items: [],
        },{
          title: "Random Song Lyrics",
          href: "/docs/generators/random-song-lyrics",
          items: [],
        },{
          title: "Random Caption Generator",
          href: "/docs/generators/random-caption-generator",
          items: [],
        },{
          title: "Random Celebrity Generator",
          href: "/docs/generators/random-celebrity-generator",
          items: [],
        },{
          title: "Sort XML Online",
          href: "/docs/generators/sort-xml-online",
          items: [],
        },{
          title: "SVG Viewer",
          href: "/docs/generators/svg-viewer",
          items: [],
        },{
          title: "SVG Formatter",
          href: "/docs/generators/svg-formatter",
          items: [],
        },{
          title: "Cursed Text Generator",
          href: "/docs/generators/cursed-text-generator",
          items: [],
        },{
          title: "Random Superhero Generator",
          href: "/docs/generators/random-superhero-generator",
          items: [],
        },{
          title: "CSS Selectors Cheat Sheet",
          href: "/docs/generators/css-selectors-cheat-sheet",
          items: [],
        },{
          title: "HEX to RGBA Converter",
          href: "/docs/generators/hex-to-rgba-converter",
          items: [],
        },{
          title: "Sentence Counter",
          href: "/docs/generators/sentence-counter",
          items: [],
        },{
          title: "JSON to One Line",
          href: "/docs/generators/json-to-one-line",
          items: [],
        },{
          title: "Paragraph Counter",
          href: "/docs/generators/paragraph-counter",
          items: [],
        },{
          title: "Javascript Tester",
          href: "/docs/generators/javascript-tester",
          items: [],
        },{
          title: "Random Pokemon Team Generator",
          href: "/docs/generators/random-pokemon-team-generator",
          items: [],
        },{
          title: "Vim Cheat Sheet",
          href: "/docs/generators/vim-cheat-sheet",
          items: [],
        },{
          title: "Random Canada Address Generator",
          href: "/docs/generators/random-canada-address-generator",
          items: [],
        },{
          title: "Random Pokemon Generator",
          href: "/docs/generators/random-pokemon-generator",
          items: [],
        },{
          title: "Random Address in California",
          href: "/docs/generators/random-address-in-california",
          items: [],
        },{
          title: "Random Movie Generator",
          href: "/docs/generators/random-movie-generator",
          items: [],
        },{
          title: "Character Trait Generator",
          href: "/docs/generators/character-trait-generator",
          items: [],
        },{
          title: "Random Flower Generator",
          href: "/docs/generators/random-flower-generator",
          items: [],
        },{
          title: "Random Quote Generator",
          href: "/docs/generators/random-quote-generator",
          items: [],
        },{
          title: "Random Sentence Generator",
          href: "/docs/generators/random-sentence-generator",
          items: [],
        },{
          title: "Random Element Generator",
          href: "/docs/generators/random-element-generator",
          items: [],
        },{
          title: "Random Planet Generator",
          href: "/docs/generators/random-planet-generator",
          items: [],
        },{
          title: "Random Holiday Generator",
          href: "/docs/generators/random-holiday-generator",
          items: [],
        },{
          title: "Random Last Name Generator",
          href: "/docs/generators/random-last-name-generator",
          items: [],
        },{
          title: "Random Cat Generator",
          href: "/docs/generators/random-cat-generator",
          items: [],
        },{
          title: "Random College Generator",
          href: "/docs/generators/random-college-generator",
          items: [],
        },{
          title: "Random Bird Generator",
          href: "/docs/generators/random-bird-generator",
          items: [],
        },{
          title: "Random Book Generator",
          href: "/docs/generators/random-book-generator",
          items: [],
        },{
          title: "Random Job Generator",
          href: "/docs/generators/random-job-generator",
          items: [],
        },{
          title: "Random Link Generator",
          href: "/docs/generators/random-link-generator",
          items: [],
        },{
          title: "Tweet to Image Converter",
          href: "/docs/generators/tweet-to-image-converter",
          items: [],
        },{
          title: "PSN Name Generator",
          href: "/docs/generators/psn-name-generator",
          items: [],
        },{
          title: "Monster Generator",
          href: "/docs/generators/monster-generator",
          items: [],
        },{
          title: "Random League Champion",
          href: "/docs/generators/random-league-champion",
          items: [],
        },{
          title: "Random Body Part Generator",
          href: "/docs/generators/random-body-part-generator",
          items: [],
        },{
          title: "Social Tools",
          href: "/docs/generators/social-tools",
          items: [],
        },{
          title: "Aesthetic Emoji Generator",
          href: "/docs/generators/aesthetic-emoji-generator",
          items: [],
        },{
          title: "Random Superpower Generator",
          href: "/docs/generators/random-superpower-generator",
          items: [],
        },{
          title: "Random Anime Character Generator",
          href: "/docs/generators/random-anime-character-generator",
          items: [],
        },{
          title: "Random Dinosaur Generator",
          href: "/docs/generators/random-dinosaur-generator",
          items: [],
        },{
          title: "Fursona Generator",
          href: "/docs/generators/fursona-generator",
          items: [],
        },{
          title: "Sims 3 Trait Generator",
          href: "/docs/generators/sims-3-trait-generator",
          items: [],
        },{
          title: "Random Emotion Generator",
          href: "/docs/generators/random-emotion-generator",
          items: [],
        },{
          title: "Random Year Generator",
          href: "/docs/generators/random-year-generator",
          items: [],
        },{
          title: "Random Cartoon Character Generator",
          href: "/docs/generators/random-cartoon-character-generator",
          items: [],
        },{
          title: "Random 6 Digit Number Generator",
          href: "/docs/generators/random-6-digit-number-generator",
          items: [],
        },{
          title: "Random 4 Digit Number Generator",
          href: "/docs/generators/random-4-digit-number-generator",
          items: [],
        },{
          title: "Random Birthday Generator",
          href: "/docs/generators/random-birthday-generator",
          items: [],
        },{
          title: "Letter Randomizer",
          href: "/docs/generators/letter-randomizer",
          items: [],
        },{
          title: "Text Replacer",
          href: "/docs/generators/text-replacer",
          items: [],
        },{
          title: "Random Tarot Card Generator",
          href: "/docs/generators/random-tarot-card-generator",
          items: [],
        },{
          title: "Random Dog Breed Generator",
          href: "/docs/generators/random-dog-breed-generator",
          items: [],
        },{
          title: "Random Car Generator",
          href: "/docs/generators/random-car-generator",
          items: [],
        },{
          title: "Lord Of The Rings Name Generator",
          href: "/docs/generators/lord-of-the-rings-name-generator",
          items: [],
        },{
          title: "Fortune Cookie Generator",
          href: "/docs/generators/fortune-cookie-generator",
          items: [],
        },{
          title: "Random Charades Generator",
          href: "/docs/generators/random-charades-generator",
          items: [],
        },{
          title: "Instagram Caption Generator",
          href: "/docs/generators/instagram-caption-generator",
          items: [],
        },{
          title: "Snapchat Fonts Generator",
          href: "/docs/generators/snapchat-fonts-generator",
          items: [],
        },{
          title: "Reddit Username Generator",
          href: "/docs/generators/reddit-username-generator",
          items: [],
        },{
          title: "Random Adjective Generator",
          href: "/docs/generators/random-adjective-generator",
          items: [],
        },{
          title: "Goofy Ahh Names Generator",
          href: "/docs/generators/goofy-ahh-names-generator",
          items: [],
        },{
          title: "Random City Generator",
          href: "/docs/generators/random-city-generator",
          items: [],
        },{
          title: "Personality Generator",
          href: "/docs/generators/personality-generator",
          items: [],
        },{
          title: "Random Girl Name Generator",
          href: "/docs/generators/random-girl-name-generator",
          items: [],
        },{
          title: "Random State Generator",
          href: "/docs/generators/random-state-generator",
          items: [],
        },{
          title: "Full White Screen",
          href: "/docs/generators/full-white-screen",
          items: [],
        },{
          title: "Full Blue Screen",
          href: "/docs/generators/full-blue-screen",
          items: [],
        },{
          title: "Full Red Screen",
          href: "/docs/generators/full-red-screen",
          items: [],
        },{
          title: "Full Black Screen",
          href: "/docs/generators/full-black-screen",
          items: [],
        },{
          title: "Aesthetic Username Generator",
          href: "/docs/generators/aesthetic-username-generator",
          items: [],
        },{
          title: "Word Replacer",
          href: "/docs/generators/word-replacer",
          items: [],
        },{
          title: "Moodboard Generator",
          href: "/docs/generators/moodboard-generator",
          items: [],
        },{
          title: "Valorant Crosshair Generator",
          href: "/docs/generators/valorant-crosshair-generator",
          items: [],
        },{
          title: "Cookie Run Character Generator",
          href: "/docs/generators/cookie-run-character-generator",
          items: [],
        },{
          title: "JoJo Stand Generator",
          href: "/docs/generators/jojo-stand-generator",
          items: [],
        },{
          title: "OTP Prompt Generator",
          href: "/docs/generators/otp-prompt-generator",
          items: [],
        },{
          title: "Random Minecraft Block Generator",
          href: "/docs/generators/random-minecraft-block-generator",
          items: [],
        },{
          title: "Random Theme Generator",
          href: "/docs/generators/random-theme-generator",
          items: [],
        },{
          title: "SQL Code Generator",
          href: "/docs/generators/sql-code-generator",
          items: [],
        },{
          title: "Random Pokemon Type Generator",
          href: "/docs/generators/random-pokemon-type-generator",
          items: [],
        },{
          title: "Fake Instagram Post Generator",
          href: "/docs/generators/fake-instagram-post-generator",
          items: [],
        },{
          title: "Random Aesthetic Generator",
          href: "/docs/generators/random-aesthetic-generator",
          items: [],
        },{
          title: "Random Environment Generator",
          href: "/docs/generators/random-environment-generator",
          items: [],
        },{
          title: "Random Scene Generator",
          href: "/docs/generators/random-scene-generator",
          items: [],
        },{
          title: "XBOX GamerTag Generator",
          href: "/docs/generators/xbox-gamertag-generator",
          items: [],
        },{
          title: "Elf Name Generator",
          href: "/docs/generators/elf-name-generator",
          items: [],
        },{
          title: "Twitalics Twitter Italics Generator",
          href: "/docs/generators/twitalics-twitter-italics-generator",
          items: [],
        },{
          title: "XBOX Name Generator",
          href: "/docs/generators/xbox-name-generator",
          items: [],
        },{
          title: "Warrior Cat Name Generator",
          href: "/docs/generators/warrior-cat-name-generator",
          items: [],
        },{
          title: "Fake Tweet Generator",
          href: "/docs/generators/fake-tweet-generator",
          items: [],
        },{
          title: "Random Topic Generator",
          href: "/docs/generators/random-topic-generator",
          items: [],
        },{
          title: "Pictionary Word Generator",
          href: "/docs/generators/pictionary-word-generator",
          items: [],
        },{
          title: "Random Things to Draw Generator",
          href: "/docs/generators/random-things-to-draw-generator",
          items: [],
        },{
          title: "Random Nationality Generator",
          href: "/docs/generators/random-nationality-generator",
          items: [],
        },{
          title: "Random Ethnicity Generator",
          href: "/docs/generators/random-ethnicity-generator",
          items: [],
        },{
          title: "Random Pet Generator",
          href: "/docs/generators/random-pet-generator",
          items: [],
        },{
          title: "Billing Postal Code Generator",
          href: "/docs/generators/billing-postal-code-generator",
          items: [],
        },{
          title: "Random Male Name Generator",
          href: "/docs/generators/random-male-name-generator",
          items: [],
        },{
          title: "Random Boy Name Generator",
          href: "/docs/generators/random-boy-name-generator",
          items: [],
        },{
          title: "Random Things Generator",
          href: "/docs/generators/random-things-generator",
          items: [],
        },{
          title: "Random NHL Team Generator",
          href: "/docs/generators/random-nhl-team-generator",
          items: [],
        },{
          title: "Random Zip Code",
          href: "/docs/generators/random-zip-code",
          items: [],
        },{
          title: "Random Team Generator",
          href: "/docs/generators/random-team-generator",
          items: [],
        },{
          title: "Random Billing Address",
          href: "/docs/generators/random-billing-address",
          items: [],
        },{
          title: "Random House Address",
          href: "/docs/generators/random-house-address",
          items: [],
        },{
          title: "Random Street Address",
          href: "/docs/generators/random-street-address",
          items: [],
        },{
          title: "Random Address Generator",
          href: "/docs/generators/random-address-generator",
          items: [],
        },{
          title: "Incorrect Quotes Generator",
          href: "/docs/generators/incorrect-quotes-generator",
          items: [],
        },{
          title: "Random Flag Generator",
          href: "/docs/generators/random-flag-generator",
          items: [],
        },{
          title: "Random Country Generator",
          href: "/docs/generators/random-country-generator",
          items: [],
        },{
          title: "Random US Area Codes",
          href: "/docs/generators/random-us-area-codes",
          items: [],
        },{
          title: "Random Phone Number",
          href: "/docs/generators/random-phone-number",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "JSON Fixer",
          href: "/docs/generators/json-fixer",
          items: [],
        },{
          title: "JSON Navigator",
          href: "/docs/generators/json-navigator",
          items: [],
        },{
          title: "Random Emoji Generator",
          href: "/docs/generators/random-emoji-generator",
          items: [],
        },{
          title: "Favicon Generator",
          href: "/docs/generators/favicon-generator",
          items: [],
        },{
          title: "CIDR Calculator",
          href: "/docs/generators/cidr-calculator",
          items: [],
        },{
          title: "Marquee Generator",
          href: "/docs/generators/marquee-generator",
          items: [],
        },{
          title: "Meta Tag Generator",
          href: "/docs/generators/meta-tag-generator",
          items: [],
        },{
          title: "Screenshot Beautifier",
          href: "/docs/generators/screenshot-beautifier",
          items: [],
        },{
          title: "Tweet Ideas",
          href: "/docs/generators/tweet-ideas",
          items: [],
        },{
          title: "Number To WhatsApp",
          href: "/docs/generators/number-to-whatsapp",
          items: [],
        },{
          title: "Twitter Header Generator",
          href: "/docs/generators/twitter-header-generator",
          items: [],
        },{
          title: "Twitter Image Downloader",
          href: "/docs/generators/twitter-image-downloader",
          items: [],
        },{
          title: "Random MLB Team Generator",
          href: "/docs/generators/random-mlb-team-generator",
          items: [],
        },{
          title: "Random NBA Team Generator",
          href: "/docs/generators/random-nba-team-generator",
          items: [],
        },{
          title: "Random NCAA Football Team",
          href: "/docs/generators/random-ncaa-football-team",
          items: [],
        },{
          title: "Random NCAA Basketball Team",
          href: "/docs/generators/random-ncaa-basketball-team",
          items: [],
        },{
          title: "Random IPL Team Generator",
          href: "/docs/generators/random-ipl-team-generator",
          items: [],
        },{
          title: "Random NFL Team Generator",
          href: "/docs/generators/random-nfl-team-generator",
          items: [],
        },{
          title: "Random Object Generator",
          href: "/docs/generators/random-object-generator",
          items: [],
        },{
          title: "Random Animal Generator",
          href: "/docs/generators/random-animal-generator",
          items: [],
        },{
          title: "Random Hobby Generator",
          href: "/docs/generators/random-hobby-generator",
          items: [],
        },{
          title: "Code to Image Converter",
          href: "/docs/generators/code-to-image-converter",
          items: [],
        },{
          title: "Multiple URL Opener",
          href: "/docs/generators/multiple-url-opener",
          items: [],
        },{
          title: "Tweet Beautifier",
          href: "/docs/generators/tweet-beautifier",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "Share Code Snippets",
          href: "/docs/generators/share-code-snippets",
          items: [],
        },{
          title: "Convert Text to Handwriting",
          href: "/docs/generators/convert-text-to-handwriting",
          items: [],
        },{
          title: "Image Beautifier",
          href: "/docs/generators/image-beautifier",
          items: [],
        },{
          title: "SVG to Base64",
          href: "/docs/generators/svg-to-base64",
          items: [],
        },{
          title: "Turbo Search",
          href: "/docs/generators/turbo-search",
          items: [],
        },{
          title: "Text Cleaner",
          href: "/docs/generators/text-cleaner",
          items: [],
        },{
          title: "JSON Cleaner",
          href: "/docs/generators/json-cleaner",
          items: [],
        },{
          title: "JSON to Typescript Code",
          href: "/docs/generators/json-to-typescript-code",
          items: [],
        },{
          title: "Online Vibration Simulator",
          href: "/docs/generators/online-vibration-simulator",
          items: [],
        },{
          title: "JSON to PHP Array Converter",
          href: "/docs/generators/json-to-php-array-converter",
          items: [],
        },{
          title: "IELTS to CLB",
          href: "/docs/generators/ielts-to-clb",
          items: [],
        },{
          title: "Hyperlink Generator",
          href: "/docs/generators/hyperlink-generator",
          items: [],
        },{
          title: "REM to PX Converter",
          href: "/docs/generators/rem-to-px-converter",
          items: [],
        },{
          title: "Facebook Bold Text",
          href: "/docs/generators/facebook-bold-text",
          items: [],
        },{
          title: "What is My Zodiac Sign",
          href: "/docs/generators/what-is-my-zodiac-sign",
          items: [],
        },{
          title: "Checksum Calculator",
          href: "/docs/generators/checksum-calculator",
          items: [],
        },{
          title: "SOAP Formatter",
          href: "/docs/generators/soap-formatter",
          items: [],
        },{
          title: "WSDL Formatter",
          href: "/docs/generators/wsdl-formatter",
          items: [],
        },{
          title: "Javascript Pretty Print",
          href: "/docs/generators/javascript-pretty-print",
          items: [],
        },{
          title: "Visualize JSON Data Graph",
          href: "/docs/generators/visualize-json-data-graph",
          items: [],
        },{
          title: "Morse Code Translator",
          href: "/docs/generators/morse-code-translator",
          items: [],
        },{
          title: "Alphabetical Order",
          href: "/docs/generators/alphabetical-order",
          items: [],
        },{
          title: "Random AlphaNumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "Byte to String",
          href: "/docs/generators/byte-to-string",
          items: [],
        },{
          title: "UTF8 to ASCII",
          href: "/docs/generators/utf8-to-ascii",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Phone Number to IP",
          href: "/docs/generators/phone-number-to-ip",
          items: [],
        },{
          title: "Yaml Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "Gzip Decompress",
          href: "/docs/generators/gzip-decompress",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML Link Generator",
          href: "/docs/generators/html-link-generator",
          items: [],
        },{
          title: "MP3 to Base64",
          href: "/docs/generators/mp3-to-base64",
          items: [],
        },{
          title: "Base64 to Text",
          href: "/docs/generators/base64-to-text",
          items: [],
        },{
          title: "Base64 to Ascii",
          href: "/docs/generators/base64-to-ascii",
          items: [],
        },{
          title: "STYLUS Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "YAML Pretty Print",
          href: "/docs/generators/yaml-pretty-print",
          items: [],
        },{
          title: "YouTube Thumbnail Grabber",
          href: "/docs/generators/youtube-thumbnail-grabber",
          items: [],
        },{
          title: "Trending Tools",
          href: "/docs/generators/trending-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "Number Sorter",
          href: "/docs/generators/number-sorter",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "Wordpress Password Hash",
          href: "/docs/generators/wordpress-password-hash",
          items: [],
        },{
          title: "Mirror Online",
          href: "/docs/generators/mirror-online",
          items: [],
        },{
          title: "PHP Formatter",
          href: "/docs/generators/php-formatter",
          items: [],
        },{
          title: "Image to ASCII Art",
          href: "/docs/generators/image-to-ascii-art",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "Excel Viewer",
          href: "/docs/generators/excel-viewer",
          items: [],
        },{
          title: "Paraphrasing tool",
          href: "/docs/generators/paraphrasing-tool",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Developer Tools",
          href: "/docs/generators/developer-tools",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Formatters",
          href: "/docs/generators/formatters",
          items: [],
        },{
          title: "Image Converter Tools",
          href: "/docs/generators/image-converter-tools",
          items: [],
        },{
          title: "Finance Tools",
          href: "/docs/generators/finance-tools",
          items: [],
        },{
          title: "TSV Tools",
          href: "/docs/generators/tsv-tools",
          items: [],
        },{
          title: "JSON Tools",
          href: "/docs/generators/json-tools",
          items: [],
        },{
          title: "XML Tools",
          href: "/docs/generators/xml-tools",
          items: [],
        },{
          title: "YAML Tools",
          href: "/docs/generators/yaml-tools",
          items: [],
        },{
          title: "HTML Tools",
          href: "/docs/generators/html-tools",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "Javascript Tools",
          href: "/docs/generators/javascript-tools",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "SQL Tools",
          href: "/docs/generators/sql-tools",
          items: [],
        },{
          title: "Color Tools",
          href: "/docs/generators/color-tools",
          items: [],
        },{
          title: "Unit Tools",
          href: "/docs/generators/unit-tools",
          items: [],
        },{
          title: "Number Tools",
          href: "/docs/generators/number-tools",
          items: [],
        },{
          title: "String Tools",
          href: "/docs/generators/string-tools",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Minifiers",
          href: "/docs/generators/minifiers",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "Cryptography",
          href: "/docs/generators/cryptography",
          items: [],
        },{
          title: "Escape Unescape Tools",
          href: "/docs/generators/escape-unescape-tools",
          items: [],
        },{
          title: "UTF Tools",
          href: "/docs/generators/utf-tools",
          items: [],
        },{
          title: "Compress Decompress",
          href: "/docs/generators/compress-decompress",
          items: [],
        },{
          title: "HTML Generators",
          href: "/docs/generators/html-generators",
          items: [],
        },{
          title: "CSS Generators",
          href: "/docs/generators/css-generators",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Text Style Tools",
          href: "/docs/generators/text-style-tools",
          items: [],
        },{
          title: "CSS Unit Converter Tools",
          href: "/docs/generators/css-unit-converter-tools",
          items: [],
        },{
          title: "POJO Tools",
          href: "/docs/generators/pojo-tools",
          items: [],
        },{
          title: "Twitter Tools",
          href: "/docs/generators/twitter-tools",
          items: [],
        },{
          title: "Random Generators",
          href: "/docs/generators/random-generators",
          items: [],
        },{
          title: "Generators",
          href: "/docs/generators/generators",
          items: [],
        },{
          title: "CSS",
          href: "/docs/generators/css",
          items: [],
        },{
          title: "ANIMATION",
          href: "/docs/generators/animation",
          items: [],
        },{
          title: "Keyframe Animation",
          href: "/docs/generators/keyframe-animation",
          items: [],
        },{
          title: "BACKGROUND",
          href: "/docs/generators/background",
          items: [],
        },{
          title: "Background Color",
          href: "/docs/generators/background-color",
          items: [],
        },{
          title: "Background Gradient",
          href: "/docs/generators/background-gradient",
          items: [],
        },{
          title: "Background Image",
          href: "/docs/generators/background-image",
          items: [],
        },{
          title: "BOX",
          href: "/docs/generators/box",
          items: [],
        },{
          title: "Border",
          href: "/docs/generators/border",
          items: [],
        },{
          title: "Border Image",
          href: "/docs/generators/border-image",
          items: [],
        },{
          title: "Border Radius",
          href: "/docs/generators/border-radius",
          items: [],
        },{
          title: "Box Resize",
          href: "/docs/generators/box-resize",
          items: [],
        },{
          title: "Box Shadow",
          href: "/docs/generators/box-shadow",
          items: [],
        },{
          title: "Opacity",
          href: "/docs/generators/opacity",
          items: [],
        },{
          title: "Outline",
          href: "/docs/generators/outline",
          items: [],
        },{
          title: "Overflow",
          href: "/docs/generators/overflow",
          items: [],
        },{
          title: "COLOR",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "Text Color",
          href: "/docs/generators/text-color",
          items: [],
        },{
          title: "FILTER",
          href: "/docs/generators/filter",
          items: [],
        },{
          title: "Blur",
          href: "/docs/generators/blur",
          items: [],
        },{
          title: "Brightness",
          href: "/docs/generators/brightness",
          items: [],
        },{
          title: "Contrast",
          href: "/docs/generators/contrast",
          items: [],
        },{
          title: "Drop Shadow",
          href: "/docs/generators/drop-shadow",
          items: [],
        },{
          title: "Grayscale",
          href: "/docs/generators/grayscale",
          items: [],
        },{
          title: "Hue-Rotate",
          href: "/docs/generators/hue-rotate",
          items: [],
        },{
          title: "Invert",
          href: "/docs/generators/invert",
          items: [],
        },{
          title: "Saturate",
          href: "/docs/generators/saturate",
          items: [],
        },{
          title: "Sepia",
          href: "/docs/generators/sepia",
          items: [],
        },{
          title: "LAYOUT",
          href: "/docs/generators/layout",
          items: [],
        },{
          title: "Columns",
          href: "/docs/generators/columns",
          items: [],
        },{
          title: "Display",
          href: "/docs/generators/display",
          items: [],
        },{
          title: "Visibility",
          href: "/docs/generators/visibility",
          items: [],
        },{
          title: "LIST",
          href: "/docs/generators/list",
          items: [],
        },{
          title: "List Style",
          href: "/docs/generators/list-style",
          items: [],
        },{
          title: "MISCELLANEOUS",
          href: "/docs/generators/miscellaneous",
          items: [],
        },{
          title: "Cursor",
          href: "/docs/generators/cursor",
          items: [],
        },{
          title: "TEXT",
          href: "/docs/generators/text",
          items: [],
        },{
          title: "Letter Spacing",
          href: "/docs/generators/letter-spacing",
          items: [],
        },{
          title: "Line Height",
          href: "/docs/generators/line-height",
          items: [],
        },{
          title: "Overflow Wrap",
          href: "/docs/generators/overflow-wrap",
          items: [],
        },{
          title: "Tab Size",
          href: "/docs/generators/tab-size",
          items: [],
        },{
          title: "Text Align",
          href: "/docs/generators/text-align",
          items: [],
        },{
          title: "Text Decoration",
          href: "/docs/generators/text-decoration",
          items: [],
        },{
          title: "Text Indent",
          href: "/docs/generators/text-indent",
          items: [],
        },{
          title: "Text Shadow",
          href: "/docs/generators/text-shadow",
          items: [],
        },{
          title: "Text Transform",
          href: "/docs/generators/text-transform",
          items: [],
        },{
          title: "White Space",
          href: "/docs/generators/white-space",
          items: [],
        },{
          title: "Word Break",
          href: "/docs/generators/word-break",
          items: [],
        },{
          title: "Word Spacing",
          href: "/docs/generators/word-spacing",
          items: [],
        },{
          title: "TRANSFORM",
          href: "/docs/generators/transform",
          items: [],
        },{
          title: "Perspective",
          href: "/docs/generators/perspective",
          items: [],
        },{
          title: "Rotate",
          href: "/docs/generators/rotate",
          items: [],
        },{
          title: "Scale",
          href: "/docs/generators/scale",
          items: [],
        },{
          title: "Skew",
          href: "/docs/generators/skew",
          items: [],
        },{
          title: "Translate",
          href: "/docs/generators/translate",
          items: [],
        },{
          title: "TRANSITION",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "Transition",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "HTML",
          href: "/docs/generators/html",
          items: [],
        },{
          title: "INPUT",
          href: "/docs/generators/input",
          items: [],
        },{
          title: "Button",
          href: "/docs/generators/button",
          items: [],
        },{
          title: "Checkbox",
          href: "/docs/generators/checkbox",
          items: [],
        },{
          title: "Color Input",
          href: "/docs/generators/color-input",
          items: [],
        },{
          title: "Date",
          href: "/docs/generators/date",
          items: [],
        },{
          title: "Email Input",
          href: "/docs/generators/email-input",
          items: [],
        },{
          title: "File Input",
          href: "/docs/generators/file-input",
          items: [],
        },{
          title: "Image Button",
          href: "/docs/generators/image-button",
          items: [],
        },{
          title: "Number Input",
          href: "/docs/generators/number-input",
          items: [],
        },{
          title: "Password Input",
          href: "/docs/generators/password-input",
          items: [],
        },{
          title: "Range Input",
          href: "/docs/generators/range-input",
          items: [],
        },{
          title: "Search Input",
          href: "/docs/generators/search-input",
          items: [],
        },{
          title: "Submit",
          href: "/docs/generators/submit",
          items: [],
        },{
          title: "Telephone Input",
          href: "/docs/generators/telephone-input",
          items: [],
        },{
          title: "Text Input",
          href: "/docs/generators/text-input",
          items: [],
        },{
          title: "Textarea",
          href: "/docs/generators/textarea",
          items: [],
        },{
          title: "URL Input",
          href: "/docs/generators/url-input",
          items: [],
        },{
          title: "MEDIA",
          href: "/docs/generators/media",
          items: [],
        },{
          title: "Audio",
          href: "/docs/generators/audio",
          items: [],
        },{
          title: "Image",
          href: "/docs/generators/image",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "TEXT",
          href: "/docs/generators/text",
          items: [],
        },{
          title: "Bi-directional Override",
          href: "/docs/generators/bi-directional-override",
          items: [],
        },{
          title: "Bold",
          href: "/docs/generators/bold",
          items: [],
        },{
          title: "Cite",
          href: "/docs/generators/cite",
          items: [],
        },{
          title: "Code",
          href: "/docs/generators/code",
          items: [],
        },{
          title: "Italic",
          href: "/docs/generators/italic",
          items: [],
        },{
          title: "Highlight",
          href: "/docs/generators/highlight",
          items: [],
        },{
          title: "Quote",
          href: "/docs/generators/quote",
          items: [],
        },{
          title: "Strikethrough",
          href: "/docs/generators/strikethrough",
          items: [],
        },{
          title: "Superscript",
          href: "/docs/generators/superscript",
          items: [],
        },{
          title: "Underline",
          href: "/docs/generators/underline",
          items: [],
        },{
          title: "OTHER",
          href: "/docs/generators/other",
          items: [],
        },{
          title: "Details",
          href: "/docs/generators/details",
          items: [],
        },{
          title: "Dialog",
          href: "/docs/generators/dialog",
          items: [],
        },{
          title: "Hyperlink",
          href: "/docs/generators/hyperlink",
          items: [],
        },{
          title: "iFrame",
          href: "/docs/generators/iframe",
          items: [],
        },{
          title: "Meter",
          href: "/docs/generators/meter",
          items: [],
        },{
          title: "Progress",
          href: "/docs/generators/progress",
          items: [],
        },{
          title: "Meta Tags",
          href: "/docs/generators/meta-tags",
          items: [],
        },{
          title: "Structured Data",
          href: "/docs/generators/structured-data",
          items: [],
        },{
          title: "Article",
          href: "/docs/generators/article",
          items: [],
        },{
          title: "Breadcrumb",
          href: "/docs/generators/breadcrumb",
          items: [],
        },{
          title: "Event",
          href: "/docs/generators/event",
          items: [],
        },{
          title: "FAQ",
          href: "/docs/generators/faq",
          items: [],
        },{
          title: "How-to",
          href: "/docs/generators/how-to",
          items: [],
        },{
          title: "Job Posting",
          href: "/docs/generators/job-posting",
          items: [],
        },{
          title: "Local Business",
          href: "/docs/generators/local-business",
          items: [],
        },{
          title: "Organization",
          href: "/docs/generators/organization",
          items: [],
        },{
          title: "Person",
          href: "/docs/generators/person",
          items: [],
        },{
          title: "Product",
          href: "/docs/generators/product",
          items: [],
        },{
          title: "Recipe",
          href: "/docs/generators/recipe",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "Website",
          href: "/docs/generators/website",
          items: [],
        },{
          title: "open Graph",
          href: "/docs/generators/open-graph",
          items: [],
        },{
          title: "Article",
          href: "/docs/generators/article",
          items: [],
        },{
          title: "Book",
          href: "/docs/generators/book",
          items: [],
        },{
          title: "Business",
          href: "/docs/generators/business",
          items: [],
        },{
          title: "Music Album",
          href: "/docs/generators/music-album",
          items: [],
        },{
          title: "Music Playlist",
          href: "/docs/generators/music-playlist",
          items: [],
        },{
          title: "Music Radio Station",
          href: "/docs/generators/music-radio-station",
          items: [],
        },{
          title: "Music Song",
          href: "/docs/generators/music-song",
          items: [],
        },{
          title: "Product",
          href: "/docs/generators/product",
          items: [],
        },{
          title: "Profile",
          href: "/docs/generators/profile",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "Video Episode",
          href: "/docs/generators/video-episode",
          items: [],
        },{
          title: "Video Movie",
          href: "/docs/generators/video-movie",
          items: [],
        },{
          title: "Video TV Show",
          href: "/docs/generators/video-tv-show",
          items: [],
        },{
          title: "Website",
          href: "/docs/generators/website",
          items: [],
        },{
          title: "Twitter Card",
          href: "/docs/generators/twitter-card",
          items: [],
        },{
          title: "App",
          href: "/docs/generators/app",
          items: [],
        },{
          title: "Player",
          href: "/docs/generators/player",
          items: [],
        },{
          title: "Summary",
          href: "/docs/generators/summary",
          items: [],
        },{
          title: "Summary with Large Image",
          href: "/docs/generators/summary-with-large-image",
          items: [],
        },{
          title: "Robots.txt",
          href: "/docs/generators/robots.txt",
          items: [],
        },{
          title: "Code Converter",
          href: "/docs/generators/code-converter",
          items: [],
        },{
          title: "SVG",
          href: "/docs/generators/svg",
          items: [],
        },{
          title: "to JSX",
          href: "/docs/generators/to-jsx",
          items: [],
        },{
          title: "to React Native",
          href: "/docs/generators/to-react-native",
          items: [],
        },{
          title: "HTML",
          href: "/docs/generators/html",
          items: [],
        },{
          title: "to JSX",
          href: "/docs/generators/to-jsx",
          items: [],
        },{
          title: "to Pug",
          href: "/docs/generators/to-pug",
          items: [],
        },{
          title: "JSON",
          href: "/docs/generators/json",
          items: [],
        },{
          title: "to Big Query Schema",
          href: "/docs/generators/to-big-query-schema",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to Go Bson",
          href: "/docs/generators/to-go-bson",
          items: [],
        },{
          title: "to Go Struct",
          href: "/docs/generators/to-go-struct",
          items: [],
        },{
          title: "to GraphQL",
          href: "/docs/generators/to-graphql",
          items: [],
        },{
          title: "to io-ts",
          href: "/docs/generators/to-io-ts",
          items: [],
        },{
          title: "to Java",
          href: "/docs/generators/to-java",
          items: [],
        },{
          title: "to JSDoc",
          href: "/docs/generators/to-jsdoc",
          items: [],
        },{
          title: "to JSON Schema",
          href: "/docs/generators/to-json-schema",
          items: [],
        },{
          title: "to Kotlin",
          href: "/docs/generators/to-kotlin",
          items: [],
        },{
          title: "to MobX-State-Tree Model",
          href: "/docs/generators/to-mobx-state-tree-model",
          items: [],
        },{
          title: "to Mongoose Schema",
          href: "/docs/generators/to-mongoose-schema",
          items: [],
        },{
          title: "to MySQL",
          href: "/docs/generators/to-mysql",
          items: [],
        },{
          title: "to React PropTypes",
          href: "/docs/generators/to-react-proptypes",
          items: [],
        },{
          title: "to Rust Serde",
          href: "/docs/generators/to-rust-serde",
          items: [],
        },{
          title: "to Sarcastic",
          href: "/docs/generators/to-sarcastic",
          items: [],
        },{
          title: "to Scala Case Class",
          href: "/docs/generators/to-scala-case-class",
          items: [],
        },{
          title: "to TOML",
          href: "/docs/generators/to-toml",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to YAML",
          href: "/docs/generators/to-yaml",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "JSON Schema",
          href: "/docs/generators/json-schema",
          items: [],
        },{
          title: "to OpenAPI Schema",
          href: "/docs/generators/to-openapi-schema",
          items: [],
        },{
          title: "to Protobuf",
          href: "/docs/generators/to-protobuf",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "CSS",
          href: "/docs/generators/css",
          items: [],
        },{
          title: "to JS Objects",
          href: "/docs/generators/to-js-objects",
          items: [],
        },{
          title: "to TailwindCSS",
          href: "/docs/generators/to-tailwindcss",
          items: [],
        },{
          title: "to template literal",
          href: "/docs/generators/to-template-literal",
          items: [],
        },{
          title: "JavaScript",
          href: "/docs/generators/javascript",
          items: [],
        },{
          title: "to JSON",
          href: "/docs/generators/to-json",
          items: [],
        },{
          title: "GraphQL",
          href: "/docs/generators/graphql",
          items: [],
        },{
          title: "to Components",
          href: "/docs/generators/to-components",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to Fragment Matcher",
          href: "/docs/generators/to-fragment-matcher",
          items: [],
        },{
          title: "to Introspection JSON",
          href: "/docs/generators/to-introspection-json",
          items: [],
        },{
          title: "to JAVA",
          href: "/docs/generators/to-java",
          items: [],
        },{
          title: "to Resolvers Signature",
          href: "/docs/generators/to-resolvers-signature",
          items: [],
        },{
          title: "to Schema AST",
          href: "/docs/generators/to-schema-ast",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to TypeScript MongoDB",
          href: "/docs/generators/to-typescript-mongodb",
          items: [],
        },{
          title: "JSON-LD",
          href: "/docs/generators/json-ld",
          items: [],
        },{
          title: "to Compacted",
          href: "/docs/generators/to-compacted",
          items: [],
        },{
          title: "to Expanded",
          href: "/docs/generators/to-expanded",
          items: [],
        },{
          title: "to Flattened",
          href: "/docs/generators/to-flattened",
          items: [],
        },{
          title: "to Framed",
          href: "/docs/generators/to-framed",
          items: [],
        },{
          title: "to N-Quads",
          href: "/docs/generators/to-n-quads",
          items: [],
        },{
          title: "to Normalized",
          href: "/docs/generators/to-normalized",
          items: [],
        },{
          title: "TypeScript",
          href: "/docs/generators/typescript",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to JSON Schema",
          href: "/docs/generators/to-json-schema",
          items: [],
        },{
          title: "to plain JavaScript",
          href: "/docs/generators/to-plain-javascript",
          items: [],
        },{
          title: "to TypeScript Declaration",
          href: "/docs/generators/to-typescript-declaration",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "Flow",
          href: "/docs/generators/flow",
          items: [],
        },{
          title: "to plain JavaScript",
          href: "/docs/generators/to-plain-javascript",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to TypeScript Declaration",
          href: "/docs/generators/to-typescript-declaration",
          items: [],
        },{
          title: "Others",
          href: "/docs/generators/others",
          items: [],
        },{
          title: "Cadence to Go",
          href: "/docs/generators/cadence-to-go",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "TOML to JSON",
          href: "/docs/generators/toml-to-json",
          items: [],
        },{
          title: "TOML to YAML",
          href: "/docs/generators/toml-to-yaml",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to TOML",
          href: "/docs/generators/yaml-to-toml",
          items: [],
        },{
          title: "Css Generators",
          href: "/docs/generators/css-generators",
          items: [],
        },{
          title: "Animated Text Generator",
          href: "/docs/generators/animated-text-generator",
          items: [],
        },{
          title: "Border Radius Generator",
          href: "/docs/generators/border-radius-generator",
          items: [],
        },{
          title: "Box Shadow Generator",
          href: "/docs/generators/box-shadow-generator",
          items: [],
        },{
          title: "Button Generator",
          href: "/docs/generators/button-generator",
          items: [],
        },{
          title: "Clip Path Generator",
          href: "/docs/generators/clip-path-generator",
          items: [],
        },{
          title: "Column Generator",
          href: "/docs/generators/column-generator",
          items: [],
        },{
          title: "Cubic Bezier Generator",
          href: "/docs/generators/cubic-bezier-generator",
          items: [],
        },{
          title: "Flip Swith Generator",
          href: "/docs/generators/flip-swith-generator",
          items: [],
        },{
          title: "Flexbox Generator",
          href: "/docs/generators/flexbox-generator",
          items: [],
        },{
          title: "Glitch Text Effect",
          href: "/docs/generators/glitch-text-effect",
          items: [],
        },{
          title: "Google Fonts CSS",
          href: "/docs/generators/google-fonts-css",
          items: [],
        },{
          title: "Gradient Generator",
          href: "/docs/generators/gradient-generator",
          items: [],
        },{
          title: "Image Filter Generator",
          href: "/docs/generators/image-filter-generator",
          items: [],
        },{
          title: "Input Range Generator",
          href: "/docs/generators/input-range-generator",
          items: [],
        },{
          title: "Layout Generator",
          href: "/docs/generators/layout-generator",
          items: [],
        },{
          title: "Loader",
          href: "/docs/generators/loader",
          items: [],
        },{
          title: "Menu Generator",
          href: "/docs/generators/menu-generator",
          items: [],
        },{
          title: "RGBA Generator",
          href: "/docs/generators/rgba-generator",
          items: [],
        },{
          title: "Ribbon Generator",
          href: "/docs/generators/ribbon-generator",
          items: [],
        },{
          title: "Ribbon Banner Generator",
          href: "/docs/generators/ribbon-banner-generator",
          items: [],
        },{
          title: "Scrollbar Generator",
          href: "/docs/generators/scrollbar-generator",
          items: [],
        },{
          title: "Sprite Generator",
          href: "/docs/generators/sprite-generator",
          items: [],
        },{
          title: "Text Gradient Generator",
          href: "/docs/generators/text-gradient-generator",
          items: [],
        },{
          title: "Text Rotate Generator",
          href: "/docs/generators/text-rotate-generator",
          items: [],
        },{
          title: "Text Shadow Generator",
          href: "/docs/generators/text-shadow-generator",
          items: [],
        },{
          title: "Tooltip Generator",
          href: "/docs/generators/tooltip-generator",
          items: [],
        },{
          title: "Triangle Generator",
          href: "/docs/generators/triangle-generator",
          items: [],
        },{
          title: "3D Transform Generator",
          href: "/docs/generators/3d-transform-generator",
          items: [],
        },{
          title: "Css Properties",
          href: "/docs/generators/css-properties",
          items: [],
        },{
          title: "align-content",
          href: "/docs/generators/align-content",
          items: [],
        },{
          title: "align-items",
          href: "/docs/generators/align-items",
          items: [],
        },{
          title: "align-self",
          href: "/docs/generators/align-self",
          items: [],
        },{
          title: "all",
          href: "/docs/generators/all",
          items: [],
        },{
          title: "animation",
          href: "/docs/generators/animation",
          items: [],
        },{
          title: "animation-delay",
          href: "/docs/generators/animation-delay",
          items: [],
        },{
          title: "animation-direction",
          href: "/docs/generators/animation-direction",
          items: [],
        },{
          title: "animation-duration",
          href: "/docs/generators/animation-duration",
          items: [],
        },{
          title: "animation-fill-mode",
          href: "/docs/generators/animation-fill-mode",
          items: [],
        },{
          title: "animation-iteration-count",
          href: "/docs/generators/animation-iteration-count",
          items: [],
        },{
          title: "animation-name",
          href: "/docs/generators/animation-name",
          items: [],
        },{
          title: "animation-play-state",
          href: "/docs/generators/animation-play-state",
          items: [],
        },{
          title: "animation-timing-function",
          href: "/docs/generators/animation-timing-function",
          items: [],
        },{
          title: "backface-visibility",
          href: "/docs/generators/backface-visibility",
          items: [],
        },{
          title: "background",
          href: "/docs/generators/background",
          items: [],
        },{
          title: "background-attachment",
          href: "/docs/generators/background-attachment",
          items: [],
        },{
          title: "background-blend-mode",
          href: "/docs/generators/background-blend-mode",
          items: [],
        },{
          title: "background-clip",
          href: "/docs/generators/background-clip",
          items: [],
        },{
          title: "background-color",
          href: "/docs/generators/background-color",
          items: [],
        },{
          title: "background-image",
          href: "/docs/generators/background-image",
          items: [],
        },{
          title: "background-origin",
          href: "/docs/generators/background-origin",
          items: [],
        },{
          title: "background-position",
          href: "/docs/generators/background-position",
          items: [],
        },{
          title: "background-repeat",
          href: "/docs/generators/background-repeat",
          items: [],
        },{
          title: "background-size",
          href: "/docs/generators/background-size",
          items: [],
        },{
          title: "border",
          href: "/docs/generators/border",
          items: [],
        },{
          title: "border-bottom",
          href: "/docs/generators/border-bottom",
          items: [],
        },{
          title: "border-bottom-color",
          href: "/docs/generators/border-bottom-color",
          items: [],
        },{
          title: "border-bottom-left-radius",
          href: "/docs/generators/border-bottom-left-radius",
          items: [],
        },{
          title: "border-bottom-right-radius",
          href: "/docs/generators/border-bottom-right-radius",
          items: [],
        },{
          title: "border-bottom-style",
          href: "/docs/generators/border-bottom-style",
          items: [],
        },{
          title: "border-bottom-width",
          href: "/docs/generators/border-bottom-width",
          items: [],
        },{
          title: "border-collapse",
          href: "/docs/generators/border-collapse",
          items: [],
        },{
          title: "border-color",
          href: "/docs/generators/border-color",
          items: [],
        },{
          title: "border-image",
          href: "/docs/generators/border-image",
          items: [],
        },{
          title: "border-image-outset",
          href: "/docs/generators/border-image-outset",
          items: [],
        },{
          title: "border-image-repeat",
          href: "/docs/generators/border-image-repeat",
          items: [],
        },{
          title: "border-image-slice",
          href: "/docs/generators/border-image-slice",
          items: [],
        },{
          title: "border-image-source",
          href: "/docs/generators/border-image-source",
          items: [],
        },{
          title: "border-image-width",
          href: "/docs/generators/border-image-width",
          items: [],
        },{
          title: "border-left",
          href: "/docs/generators/border-left",
          items: [],
        },{
          title: "border-left-color",
          href: "/docs/generators/border-left-color",
          items: [],
        },{
          title: "border-left-style",
          href: "/docs/generators/border-left-style",
          items: [],
        },{
          title: "border-left-width",
          href: "/docs/generators/border-left-width",
          items: [],
        },{
          title: "border-radius",
          href: "/docs/generators/border-radius",
          items: [],
        },{
          title: "border-right",
          href: "/docs/generators/border-right",
          items: [],
        },{
          title: "border-right-color",
          href: "/docs/generators/border-right-color",
          items: [],
        },{
          title: "border-right-style",
          href: "/docs/generators/border-right-style",
          items: [],
        },{
          title: "border-right-width",
          href: "/docs/generators/border-right-width",
          items: [],
        },{
          title: "border-spacing",
          href: "/docs/generators/border-spacing",
          items: [],
        },{
          title: "border-style",
          href: "/docs/generators/border-style",
          items: [],
        },{
          title: "border-top",
          href: "/docs/generators/border-top",
          items: [],
        },{
          title: "border-top-color",
          href: "/docs/generators/border-top-color",
          items: [],
        },{
          title: "border-top-left-radius",
          href: "/docs/generators/border-top-left-radius",
          items: [],
        },{
          title: "border-top-right-radius",
          href: "/docs/generators/border-top-right-radius",
          items: [],
        },{
          title: "border-top-style",
          href: "/docs/generators/border-top-style",
          items: [],
        },{
          title: "border-top-width",
          href: "/docs/generators/border-top-width",
          items: [],
        },{
          title: "border-width",
          href: "/docs/generators/border-width",
          items: [],
        },{
          title: "bottom",
          href: "/docs/generators/bottom",
          items: [],
        },{
          title: "box-decoration-break",
          href: "/docs/generators/box-decoration-break",
          items: [],
        },{
          title: "box-shadow",
          href: "/docs/generators/box-shadow",
          items: [],
        },{
          title: "box-sizing",
          href: "/docs/generators/box-sizing",
          items: [],
        },{
          title: "break-after",
          href: "/docs/generators/break-after",
          items: [],
        },{
          title: "break-before",
          href: "/docs/generators/break-before",
          items: [],
        },{
          title: "break-inside",
          href: "/docs/generators/break-inside",
          items: [],
        },{
          title: "caption-side",
          href: "/docs/generators/caption-side",
          items: [],
        },{
          title: "caret-color",
          href: "/docs/generators/caret-color",
          items: [],
        },{
          title: "clear",
          href: "/docs/generators/clear",
          items: [],
        },{
          title: "clip-path",
          href: "/docs/generators/clip-path",
          items: [],
        },{
          title: "color",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "column-count",
          href: "/docs/generators/column-count",
          items: [],
        },{
          title: "column-fill",
          href: "/docs/generators/column-fill",
          items: [],
        },{
          title: "column-rule",
          href: "/docs/generators/column-rule",
          items: [],
        },{
          title: "column-rule-color",
          href: "/docs/generators/column-rule-color",
          items: [],
        },{
          title: "column-rule-style",
          href: "/docs/generators/column-rule-style",
          items: [],
        },{
          title: "column-rule-width",
          href: "/docs/generators/column-rule-width",
          items: [],
        },{
          title: "column-span",
          href: "/docs/generators/column-span",
          items: [],
        },{
          title: "column-width",
          href: "/docs/generators/column-width",
          items: [],
        },{
          title: "columns",
          href: "/docs/generators/columns",
          items: [],
        },{
          title: "content",
          href: "/docs/generators/content",
          items: [],
        },{
          title: "counter-increment",
          href: "/docs/generators/counter-increment",
          items: [],
        },{
          title: "counter-reset",
          href: "/docs/generators/counter-reset",
          items: [],
        },{
          title: "counter-set",
          href: "/docs/generators/counter-set",
          items: [],
        },{
          title: "cursor",
          href: "/docs/generators/cursor",
          items: [],
        },{
          title: "direction",
          href: "/docs/generators/direction",
          items: [],
        },{
          title: "display",
          href: "/docs/generators/display",
          items: [],
        },{
          title: "empty-cells",
          href: "/docs/generators/empty-cells",
          items: [],
        },{
          title: "filter",
          href: "/docs/generators/filter",
          items: [],
        },{
          title: "flex",
          href: "/docs/generators/flex",
          items: [],
        },{
          title: "flex-basis",
          href: "/docs/generators/flex-basis",
          items: [],
        },{
          title: "flex-direction",
          href: "/docs/generators/flex-direction",
          items: [],
        },{
          title: "flex-flow",
          href: "/docs/generators/flex-flow",
          items: [],
        },{
          title: "flex-grow",
          href: "/docs/generators/flex-grow",
          items: [],
        },{
          title: "flex-shrink",
          href: "/docs/generators/flex-shrink",
          items: [],
        },{
          title: "flex-wrap",
          href: "/docs/generators/flex-wrap",
          items: [],
        },{
          title: "float",
          href: "/docs/generators/float",
          items: [],
        },{
          title: "font",
          href: "/docs/generators/font",
          items: [],
        },{
          title: "font-family",
          href: "/docs/generators/font-family",
          items: [],
        },{
          title: "font-feature-settings",
          href: "/docs/generators/font-feature-settings",
          items: [],
        },{
          title: "font-kerning",
          href: "/docs/generators/font-kerning",
          items: [],
        },{
          title: "font-language-override",
          href: "/docs/generators/font-language-override",
          items: [],
        },{
          title: "font-size",
          href: "/docs/generators/font-size",
          items: [],
        },{
          title: "font-size-adjust",
          href: "/docs/generators/font-size-adjust",
          items: [],
        },{
          title: "font-stretch",
          href: "/docs/generators/font-stretch",
          items: [],
        },{
          title: "font-style",
          href: "/docs/generators/font-style",
          items: [],
        },{
          title: "font-synthesis",
          href: "/docs/generators/font-synthesis",
          items: [],
        },{
          title: "font-variant",
          href: "/docs/generators/font-variant",
          items: [],
        },{
          title: "font-variant-alternates",
          href: "/docs/generators/font-variant-alternates",
          items: [],
        },{
          title: "font-variant-caps",
          href: "/docs/generators/font-variant-caps",
          items: [],
        },{
          title: "font-variant-east-asian",
          href: "/docs/generators/font-variant-east-asian",
          items: [],
        },{
          title: "font-variant-ligatures",
          href: "/docs/generators/font-variant-ligatures",
          items: [],
        },{
          title: "font-variant-numeric",
          href: "/docs/generators/font-variant-numeric",
          items: [],
        },{
          title: "font-variant-position",
          href: "/docs/generators/font-variant-position",
          items: [],
        },{
          title: "font-weight",
          href: "/docs/generators/font-weight",
          items: [],
        },{
          title: "grid",
          href: "/docs/generators/grid",
          items: [],
        },{
          title: "grid-area",
          href: "/docs/generators/grid-area",
          items: [],
        },{
          title: "grid-auto-columns",
          href: "/docs/generators/grid-auto-columns",
          items: [],
        },{
          title: "grid-auto-flow",
          href: "/docs/generators/grid-auto-flow",
          items: [],
        },{
          title: "grid-auto-rows",
          href: "/docs/generators/grid-auto-rows",
          items: [],
        },{
          title: "grid-column",
          href: "/docs/generators/grid-column",
          items: [],
        },{
          title: "grid-column-end",
          href: "/docs/generators/grid-column-end",
          items: [],
        },{
          title: "grid-column-gap",
          href: "/docs/generators/grid-column-gap",
          items: [],
        },{
          title: "grid-column-start",
          href: "/docs/generators/grid-column-start",
          items: [],
        },{
          title: "grid-gap",
          href: "/docs/generators/grid-gap",
          items: [],
        },{
          title: "grid-row",
          href: "/docs/generators/grid-row",
          items: [],
        },{
          title: "grid-row-end",
          href: "/docs/generators/grid-row-end",
          items: [],
        },{
          title: "grid-row-gap",
          href: "/docs/generators/grid-row-gap",
          items: [],
        },{
          title: "grid-row-start",
          href: "/docs/generators/grid-row-start",
          items: [],
        },{
          title: "grid-template",
          href: "/docs/generators/grid-template",
          items: [],
        },{
          title: "grid-template-areas",
          href: "/docs/generators/grid-template-areas",
          items: [],
        },{
          title: "grid-template-columns",
          href: "/docs/generators/grid-template-columns",
          items: [],
        },{
          title: "grid-template-rows",
          href: "/docs/generators/grid-template-rows",
          items: [],
        },{
          title: "hanging-punctuation",
          href: "/docs/generators/hanging-punctuation",
          items: [],
        },{
          title: "height",
          href: "/docs/generators/height",
          items: [],
        },{
          title: "hyphens",
          href: "/docs/generators/hyphens",
          items: [],
        },{
          title: "image-orientation",
          href: "/docs/generators/image-orientation",
          items: [],
        },{
          title: "justify-content",
          href: "/docs/generators/justify-content",
          items: [],
        },{
          title: "justify-items",
          href: "/docs/generators/justify-items",
          items: [],
        },{
          title: "justify-self",
          href: "/docs/generators/justify-self",
          items: [],
        },{
          title: "left",
          href: "/docs/generators/left",
          items: [],
        },{
          title: "letter-spacing",
          href: "/docs/generators/letter-spacing",
          items: [],
        },{
          title: "line-break",
          href: "/docs/generators/line-break",
          items: [],
        },{
          title: "line-height",
          href: "/docs/generators/line-height",
          items: [],
        },{
          title: "list-style",
          href: "/docs/generators/list-style",
          items: [],
        },{
          title: "list-style-image",
          href: "/docs/generators/list-style-image",
          items: [],
        },{
          title: "list-style-position",
          href: "/docs/generators/list-style-position",
          items: [],
        },{
          title: "list-style-type",
          href: "/docs/generators/list-style-type",
          items: [],
        },{
          title: "margin",
          href: "/docs/generators/margin",
          items: [],
        },{
          title: "margin-bottom",
          href: "/docs/generators/margin-bottom",
          items: [],
        },{
          title: "margin-left",
          href: "/docs/generators/margin-left",
          items: [],
        },{
          title: "margin-right",
          href: "/docs/generators/margin-right",
          items: [],
        },{
          title: "margin-top",
          href: "/docs/generators/margin-top",
          items: [],
        },{
          title: "max-height",
          href: "/docs/generators/max-height",
          items: [],
        },{
          title: "max-width",
          href: "/docs/generators/max-width",
          items: [],
        },{
          title: "min-height",
          href: "/docs/generators/min-height",
          items: [],
        },{
          title: "min-width",
          href: "/docs/generators/min-width",
          items: [],
        },{
          title: "mix-blend-mode",
          href: "/docs/generators/mix-blend-mode",
          items: [],
        },{
          title: "object-fit",
          href: "/docs/generators/object-fit",
          items: [],
        },{
          title: "object-position",
          href: "/docs/generators/object-position",
          items: [],
        },{
          title: "opacity",
          href: "/docs/generators/opacity",
          items: [],
        },{
          title: "order",
          href: "/docs/generators/order",
          items: [],
        },{
          title: "orphans",
          href: "/docs/generators/orphans",
          items: [],
        },{
          title: "outline",
          href: "/docs/generators/outline",
          items: [],
        },{
          title: "outline-color",
          href: "/docs/generators/outline-color",
          items: [],
        },{
          title: "outline-offset",
          href: "/docs/generators/outline-offset",
          items: [],
        },{
          title: "outline-style",
          href: "/docs/generators/outline-style",
          items: [],
        },{
          title: "outline-width",
          href: "/docs/generators/outline-width",
          items: [],
        },{
          title: "overflow",
          href: "/docs/generators/overflow",
          items: [],
        },{
          title: "overflow-wrap",
          href: "/docs/generators/overflow-wrap",
          items: [],
        },{
          title: "overflow-x",
          href: "/docs/generators/overflow-x",
          items: [],
        },{
          title: "overflow-y",
          href: "/docs/generators/overflow-y",
          items: [],
        },{
          title: "padding",
          href: "/docs/generators/padding",
          items: [],
        },{
          title: "padding-bottom",
          href: "/docs/generators/padding-bottom",
          items: [],
        },{
          title: "padding-left",
          href: "/docs/generators/padding-left",
          items: [],
        },{
          title: "padding-right",
          href: "/docs/generators/padding-right",
          items: [],
        },{
          title: "padding-top",
          href: "/docs/generators/padding-top",
          items: [],
        },{
          title: "perspective",
          href: "/docs/generators/perspective",
          items: [],
        },{
          title: "perspective-origin",
          href: "/docs/generators/perspective-origin",
          items: [],
        },{
          title: "place-content",
          href: "/docs/generators/place-content",
          items: [],
        },{
          title: "place-items",
          href: "/docs/generators/place-items",
          items: [],
        },{
          title: "place-self",
          href: "/docs/generators/place-self",
          items: [],
        },{
          title: "position",
          href: "/docs/generators/position",
          items: [],
        },{
          title: "quotes",
          href: "/docs/generators/quotes",
          items: [],
        },{
          title: "resize",
          href: "/docs/generators/resize",
          items: [],
        },{
          title: "right",
          href: "/docs/generators/right",
          items: [],
        },{
          title: "shape-image-threshold",
          href: "/docs/generators/shape-image-threshold",
          items: [],
        },{
          title: "shape-margin",
          href: "/docs/generators/shape-margin",
          items: [],
        },{
          title: "shape-outside",
          href: "/docs/generators/shape-outside",
          items: [],
        },{
          title: "tab-size",
          href: "/docs/generators/tab-size",
          items: [],
        },{
          title: "table-layout",
          href: "/docs/generators/table-layout",
          items: [],
        },{
          title: "text-align",
          href: "/docs/generators/text-align",
          items: [],
        },{
          title: "text-align-last",
          href: "/docs/generators/text-align-last",
          items: [],
        },{
          title: "text-combine-upright",
          href: "/docs/generators/text-combine-upright",
          items: [],
        },{
          title: "text-decoration",
          href: "/docs/generators/text-decoration",
          items: [],
        },{
          title: "text-decoration-color",
          href: "/docs/generators/text-decoration-color",
          items: [],
        },{
          title: "text-decoration-line",
          href: "/docs/generators/text-decoration-line",
          items: [],
        },{
          title: "text-decoration-style",
          href: "/docs/generators/text-decoration-style",
          items: [],
        },{
          title: "text-emphasis",
          href: "/docs/generators/text-emphasis",
          items: [],
        },{
          title: "text-emphasis-color",
          href: "/docs/generators/text-emphasis-color",
          items: [],
        },{
          title: "text-emphasis-position",
          href: "/docs/generators/text-emphasis-position",
          items: [],
        },{
          title: "text-emphasis-style",
          href: "/docs/generators/text-emphasis-style",
          items: [],
        },{
          title: "text-indent",
          href: "/docs/generators/text-indent",
          items: [],
        },{
          title: "text-justify",
          href: "/docs/generators/text-justify",
          items: [],
        },{
          title: "text-orientation",
          href: "/docs/generators/text-orientation",
          items: [],
        },{
          title: "text-overflow",
          href: "/docs/generators/text-overflow",
          items: [],
        },{
          title: "text-shadow",
          href: "/docs/generators/text-shadow",
          items: [],
        },{
          title: "text-transform",
          href: "/docs/generators/text-transform",
          items: [],
        },{
          title: "text-underline-position",
          href: "/docs/generators/text-underline-position",
          items: [],
        },{
          title: "top",
          href: "/docs/generators/top",
          items: [],
        },{
          title: "transform",
          href: "/docs/generators/transform",
          items: [],
        },{
          title: "transform-origin",
          href: "/docs/generators/transform-origin",
          items: [],
        },{
          title: "transform-style",
          href: "/docs/generators/transform-style",
          items: [],
        },{
          title: "transition",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "transition-delay",
          href: "/docs/generators/transition-delay",
          items: [],
        },{
          title: "transition-duration",
          href: "/docs/generators/transition-duration",
          items: [],
        },{
          title: "transition-property",
          href: "/docs/generators/transition-property",
          items: [],
        },{
          title: "transition-timing-function",
          href: "/docs/generators/transition-timing-function",
          items: [],
        },{
          title: "unicode-bidi",
          href: "/docs/generators/unicode-bidi",
          items: [],
        },{
          title: "vertical-align",
          href: "/docs/generators/vertical-align",
          items: [],
        },{
          title: "visibility",
          href: "/docs/generators/visibility",
          items: [],
        },{
          title: "white-space",
          href: "/docs/generators/white-space",
          items: [],
        },{
          title: "widows",
          href: "/docs/generators/widows",
          items: [],
        },{
          title: "width",
          href: "/docs/generators/width",
          items: [],
        },{
          title: "word-break",
          href: "/docs/generators/word-break",
          items: [],
        },{
          title: "word-spacing",
          href: "/docs/generators/word-spacing",
          items: [],
        },{
          title: "word-wrap",
          href: "/docs/generators/word-wrap",
          items: [],
        },{
          title: "writing-mode",
          href: "/docs/generators/writing-mode",
          items: [],
        },{
          title: "z-index",
          href: "/docs/generators/z-index",
          items: [],
        },{
          title: "Css Pseudo Classes",
          href: "/docs/generators/css-pseudo-classes",
          items: [],
        },{
          title: ":active",
          href: "/docs/generators/:active",
          items: [],
        },{
          title: ":checked",
          href: "/docs/generators/:checked",
          items: [],
        },{
          title: ":default",
          href: "/docs/generators/:default",
          items: [],
        },{
          title: ":disabled",
          href: "/docs/generators/:disabled",
          items: [],
        },{
          title: ":empty",
          href: "/docs/generators/:empty",
          items: [],
        },{
          title: ":enabled",
          href: "/docs/generators/:enabled",
          items: [],
        },{
          title: ":first-child",
          href: "/docs/generators/:first-child",
          items: [],
        },{
          title: ":first-of-type",
          href: "/docs/generators/:first-of-type",
          items: [],
        },{
          title: ":focus",
          href: "/docs/generators/:focus",
          items: [],
        },{
          title: ":fullscreen",
          href: "/docs/generators/:fullscreen",
          items: [],
        },{
          title: ":hover",
          href: "/docs/generators/:hover",
          items: [],
        },{
          title: ":in-range",
          href: "/docs/generators/:in-range",
          items: [],
        },{
          title: ":indeterminate",
          href: "/docs/generators/:indeterminate",
          items: [],
        },{
          title: ":invalid",
          href: "/docs/generators/:invalid",
          items: [],
        },{
          title: ":lang",
          href: "/docs/generators/:lang",
          items: [],
        },{
          title: ":last-child",
          href: "/docs/generators/:last-child",
          items: [],
        },{
          title: ":last-of-type",
          href: "/docs/generators/:last-of-type",
          items: [],
        },{
          title: ":link",
          href: "/docs/generators/:link",
          items: [],
        },{
          title: ":not",
          href: "/docs/generators/:not",
          items: [],
        },{
          title: ":nth-child",
          href: "/docs/generators/:nth-child",
          items: [],
        },{
          title: ":nth-last-child",
          href: "/docs/generators/:nth-last-child",
          items: [],
        },{
          title: ":nth-last-of-type",
          href: "/docs/generators/:nth-last-of-type",
          items: [],
        },{
          title: ":nth-of-type",
          href: "/docs/generators/:nth-of-type",
          items: [],
        },{
          title: ":only-child",
          href: "/docs/generators/:only-child",
          items: [],
        },{
          title: ":only-of-type",
          href: "/docs/generators/:only-of-type",
          items: [],
        },{
          title: ":optional",
          href: "/docs/generators/:optional",
          items: [],
        },{
          title: ":out-of-range",
          href: "/docs/generators/:out-of-range",
          items: [],
        },{
          title: ":read-only",
          href: "/docs/generators/:read-only",
          items: [],
        },{
          title: ":read-write",
          href: "/docs/generators/:read-write",
          items: [],
        },{
          title: ":required",
          href: "/docs/generators/:required",
          items: [],
        },{
          title: ":root",
          href: "/docs/generators/:root",
          items: [],
        },{
          title: ":target",
          href: "/docs/generators/:target",
          items: [],
        },{
          title: ":valid",
          href: "/docs/generators/:valid",
          items: [],
        },{
          title: ":visited",
          href: "/docs/generators/:visited",
          items: [],
        },{
          title: "Html Tags",
          href: "/docs/generators/html-tags",
          items: [],
        },{
          title: "<a>",
          href: "/docs/generators/<a>",
          items: [],
        },{
          title: "<abbr>",
          href: "/docs/generators/<abbr>",
          items: [],
        },{
          title: "<address>",
          href: "/docs/generators/<address>",
          items: [],
        },{
          title: "<area>",
          href: "/docs/generators/<area>",
          items: [],
        },{
          title: "<article>",
          href: "/docs/generators/<article>",
          items: [],
        },{
          title: "<aside>",
          href: "/docs/generators/<aside>",
          items: [],
        },{
          title: "<audio>",
          href: "/docs/generators/<audio>",
          items: [],
        },{
          title: "<b>",
          href: "/docs/generators/<b>",
          items: [],
        },{
          title: "<base>",
          href: "/docs/generators/<base>",
          items: [],
        },{
          title: "<bdi>",
          href: "/docs/generators/<bdi>",
          items: [],
        },{
          title: "<bdo>",
          href: "/docs/generators/<bdo>",
          items: [],
        },{
          title: "<blockquote>",
          href: "/docs/generators/<blockquote>",
          items: [],
        },{
          title: "<body>",
          href: "/docs/generators/<body>",
          items: [],
        },{
          title: "<br>",
          href: "/docs/generators/<br>",
          items: [],
        },{
          title: "<button>",
          href: "/docs/generators/<button>",
          items: [],
        },{
          title: "<canvas>",
          href: "/docs/generators/<canvas>",
          items: [],
        },{
          title: "<caption>",
          href: "/docs/generators/<caption>",
          items: [],
        },{
          title: "<cite>",
          href: "/docs/generators/<cite>",
          items: [],
        },{
          title: "<code>",
          href: "/docs/generators/<code>",
          items: [],
        },{
          title: "<col>",
          href: "/docs/generators/<col>",
          items: [],
        },{
          title: "<colgroup>",
          href: "/docs/generators/<colgroup>",
          items: [],
        },{
          title: "<comment>",
          href: "/docs/generators/<comment>",
          items: [],
        },{
          title: "<datalist>",
          href: "/docs/generators/<datalist>",
          items: [],
        },{
          title: "<dd>",
          href: "/docs/generators/<dd>",
          items: [],
        },{
          title: "<del>",
          href: "/docs/generators/<del>",
          items: [],
        },{
          title: "<details>",
          href: "/docs/generators/<details>",
          items: [],
        },{
          title: "<dfn>",
          href: "/docs/generators/<dfn>",
          items: [],
        },{
          title: "<dialog>",
          href: "/docs/generators/<dialog>",
          items: [],
        },{
          title: "<div>",
          href: "/docs/generators/<div>",
          items: [],
        },{
          title: "<dl>",
          href: "/docs/generators/<dl>",
          items: [],
        },{
          title: "<doctype>",
          href: "/docs/generators/<doctype>",
          items: [],
        },{
          title: "<dt>",
          href: "/docs/generators/<dt>",
          items: [],
        },{
          title: "<em>",
          href: "/docs/generators/<em>",
          items: [],
        },{
          title: "<embed>",
          href: "/docs/generators/<embed>",
          items: [],
        },{
          title: "<fieldset>",
          href: "/docs/generators/<fieldset>",
          items: [],
        },{
          title: "<figcaption>",
          href: "/docs/generators/<figcaption>",
          items: [],
        },{
          title: "<figure>",
          href: "/docs/generators/<figure>",
          items: [],
        },{
          title: "<footer>",
          href: "/docs/generators/<footer>",
          items: [],
        },{
          title: "<form>",
          href: "/docs/generators/<form>",
          items: [],
        },{
          title: "<h1>",
          href: "/docs/generators/<h1>",
          items: [],
        },{
          title: "<h2>",
          href: "/docs/generators/<h2>",
          items: [],
        },{
          title: "<h3>",
          href: "/docs/generators/<h3>",
          items: [],
        },{
          title: "<h4>",
          href: "/docs/generators/<h4>",
          items: [],
        },{
          title: "<h5>",
          href: "/docs/generators/<h5>",
          items: [],
        },{
          title: "<h6>",
          href: "/docs/generators/<h6>",
          items: [],
        },{
          title: "<head>",
          href: "/docs/generators/<head>",
          items: [],
        },{
          title: "<header>",
          href: "/docs/generators/<header>",
          items: [],
        },{
          title: "<hr>",
          href: "/docs/generators/<hr>",
          items: [],
        },{
          title: "<html>",
          href: "/docs/generators/<html>",
          items: [],
        },{
          title: "<i>",
          href: "/docs/generators/<i>",
          items: [],
        },{
          title: "<iframe>",
          href: "/docs/generators/<iframe>",
          items: [],
        },{
          title: "<img>",
          href: "/docs/generators/<img>",
          items: [],
        },{
          title: "<input>",
          href: "/docs/generators/<input>",
          items: [],
        },{
          title: "<ins>",
          href: "/docs/generators/<ins>",
          items: [],
        },{
          title: "<kbd>",
          href: "/docs/generators/<kbd>",
          items: [],
        },{
          title: "<keygen>",
          href: "/docs/generators/<keygen>",
          items: [],
        },{
          title: "<label>",
          href: "/docs/generators/<label>",
          items: [],
        },{
          title: "<legend>",
          href: "/docs/generators/<legend>",
          items: [],
        },{
          title: "<li>",
          href: "/docs/generators/<li>",
          items: [],
        },{
          title: "<link>",
          href: "/docs/generators/<link>",
          items: [],
        },{
          title: "<map>",
          href: "/docs/generators/<map>",
          items: [],
        },{
          title: "<mark>",
          href: "/docs/generators/<mark>",
          items: [],
        },{
          title: "<menu>",
          href: "/docs/generators/<menu>",
          items: [],
        },{
          title: "<meta>",
          href: "/docs/generators/<meta>",
          items: [],
        },{
          title: "<meter>",
          href: "/docs/generators/<meter>",
          items: [],
        },{
          title: "<nav>",
          href: "/docs/generators/<nav>",
          items: [],
        },{
          title: "<noscript>",
          href: "/docs/generators/<noscript>",
          items: [],
        },{
          title: "<object>",
          href: "/docs/generators/<object>",
          items: [],
        },{
          title: "<ol>",
          href: "/docs/generators/<ol>",
          items: [],
        },{
          title: "<optgroup>",
          href: "/docs/generators/<optgroup>",
          items: [],
        },{
          title: "<option>",
          href: "/docs/generators/<option>",
          items: [],
        },{
          title: "<output>",
          href: "/docs/generators/<output>",
          items: [],
        },{
          title: "<p>",
          href: "/docs/generators/<p>",
          items: [],
        },{
          title: "<param>",
          href: "/docs/generators/<param>",
          items: [],
        },{
          title: "<picture>",
          href: "/docs/generators/<picture>",
          items: [],
        },{
          title: "<pre>",
          href: "/docs/generators/<pre>",
          items: [],
        },{
          title: "<progress>",
          href: "/docs/generators/<progress>",
          items: [],
        },{
          title: "<q>",
          href: "/docs/generators/<q>",
          items: [],
        },{
          title: "<rp>",
          href: "/docs/generators/<rp>",
          items: [],
        },{
          title: "<rt>",
          href: "/docs/generators/<rt>",
          items: [],
        },{
          title: "<ruby>",
          href: "/docs/generators/<ruby>",
          items: [],
        },{
          title: "<s>",
          href: "/docs/generators/<s>",
          items: [],
        },{
          title: "<samp>",
          href: "/docs/generators/<samp>",
          items: [],
        },{
          title: "<script>",
          href: "/docs/generators/<script>",
          items: [],
        },{
          title: "<section>",
          href: "/docs/generators/<section>",
          items: [],
        },{
          title: "<select>",
          href: "/docs/generators/<select>",
          items: [],
        },{
          title: "<small>",
          href: "/docs/generators/<small>",
          items: [],
        },{
          title: "<source>",
          href: "/docs/generators/<source>",
          items: [],
        },{
          title: "<span>",
          href: "/docs/generators/<span>",
          items: [],
        },{
          title: "<strong>",
          href: "/docs/generators/<strong>",
          items: [],
        },{
          title: "<style>",
          href: "/docs/generators/<style>",
          items: [],
        },{
          title: "<sub>",
          href: "/docs/generators/<sub>",
          items: [],
        },{
          title: "<summary>",
          href: "/docs/generators/<summary>",
          items: [],
        },{
          title: "<sup>",
          href: "/docs/generators/<sup>",
          items: [],
        },{
          title: "<table>",
          href: "/docs/generators/<table>",
          items: [],
        },{
          title: "<tbody>",
          href: "/docs/generators/<tbody>",
          items: [],
        },{
          title: "<td>",
          href: "/docs/generators/<td>",
          items: [],
        },{
          title: "<textarea>",
          href: "/docs/generators/<textarea>",
          items: [],
        },{
          title: "<tfoot>",
          href: "/docs/generators/<tfoot>",
          items: [],
        },{
          title: "<th>",
          href: "/docs/generators/<th>",
          items: [],
        },{
          title: "<thead>",
          href: "/docs/generators/<thead>",
          items: [],
        },{
          title: "<time>",
          href: "/docs/generators/<time>",
          items: [],
        },{
          title: "hello",
          href: "/docs/generators/hello",
          items: [],
        },{
          title: "<tr>",
          href: "/docs/generators/<tr>",
          items: [],
        },{
          title: "<track>",
          href: "/docs/generators/<track>",
          items: [],
        },{
          title: "<u>",
          href: "/docs/generators/<u>",
          items: [],
        },{
          title: "<ul>",
          href: "/docs/generators/<ul>",
          items: [],
        },{
          title: "<var>",
          href: "/docs/generators/<var>",
          items: [],
        },{
          title: "<video>",
          href: "/docs/generators/<video>",
          items: [],
        },{
          title: "<wbr>",
          href: "/docs/generators/<wbr>",
          items: [],
        },{
          title: "Css Functions",
          href: "/docs/generators/css-functions",
          items: [],
        },{
          title: "attr()",
          href: "/docs/generators/attr()",
          items: [],
        },{
          title: "blur()",
          href: "/docs/generators/blur()",
          items: [],
        },{
          title: "brightness()",
          href: "/docs/generators/brightness()",
          items: [],
        },{
          title: "calc()",
          href: "/docs/generators/calc()",
          items: [],
        },{
          title: "circle()",
          href: "/docs/generators/circle()",
          items: [],
        },{
          title: "contrast()",
          href: "/docs/generators/contrast()",
          items: [],
        },{
          title: "drop-shadow()",
          href: "/docs/generators/drop-shadow()",
          items: [],
        },{
          title: "ellipse()",
          href: "/docs/generators/ellipse()",
          items: [],
        },{
          title: "grayscale()",
          href: "/docs/generators/grayscale()",
          items: [],
        },{
          title: "hsl()",
          href: "/docs/generators/hsl()",
          items: [],
        },{
          title: "hsla()",
          href: "/docs/generators/hsla()",
          items: [],
        },{
          title: "hue-rotate()",
          href: "/docs/generators/hue-rotate()",
          items: [],
        },{
          title: "inset()",
          href: "/docs/generators/inset()",
          items: [],
        },{
          title: "invert()",
          href: "/docs/generators/invert()",
          items: [],
        },{
          title: "linear-gradient()",
          href: "/docs/generators/linear-gradient()",
          items: [],
        },{
          title: "matrix()",
          href: "/docs/generators/matrix()",
          items: [],
        },{
          title: "matrix3d()",
          href: "/docs/generators/matrix3d()",
          items: [],
        },{
          title: "opacity()",
          href: "/docs/generators/opacity()",
          items: [],
        },{
          title: "perspective()",
          href: "/docs/generators/perspective()",
          items: [],
        },{
          title: "polygon()",
          href: "/docs/generators/polygon()",
          items: [],
        },{
          title: "radial-gradient()",
          href: "/docs/generators/radial-gradient()",
          items: [],
        },{
          title: "repeating-linear-gradient()",
          href: "/docs/generators/repeating-linear-gradient()",
          items: [],
        },{
          title: "repeating-radial-gradient()",
          href: "/docs/generators/repeating-radial-gradient()",
          items: [],
        },{
          title: "rgb()",
          href: "/docs/generators/rgb()",
          items: [],
        },{
          title: "rgba()",
          href: "/docs/generators/rgba()",
          items: [],
        },{
          title: "rotate()",
          href: "/docs/generators/rotate()",
          items: [],
        },{
          title: "rotate3d()",
          href: "/docs/generators/rotate3d()",
          items: [],
        },{
          title: "rotateX()",
          href: "/docs/generators/rotatex()",
          items: [],
        },{
          title: "rotateY()",
          href: "/docs/generators/rotatey()",
          items: [],
        },{
          title: "rotateZ()",
          href: "/docs/generators/rotatez()",
          items: [],
        },{
          title: "saturate()",
          href: "/docs/generators/saturate()",
          items: [],
        },{
          title: "scale()",
          href: "/docs/generators/scale()",
          items: [],
        },{
          title: "scale3d()",
          href: "/docs/generators/scale3d()",
          items: [],
        },{
          title: "scaleX()",
          href: "/docs/generators/scalex()",
          items: [],
        },{
          title: "scaleY()",
          href: "/docs/generators/scaley()",
          items: [],
        },{
          title: "scaleZ()",
          href: "/docs/generators/scalez()",
          items: [],
        },{
          title: "sepia()",
          href: "/docs/generators/sepia()",
          items: [],
        },{
          title: "skew()",
          href: "/docs/generators/skew()",
          items: [],
        },{
          title: "skewX()",
          href: "/docs/generators/skewx()",
          items: [],
        },{
          title: "skewY()",
          href: "/docs/generators/skewy()",
          items: [],
        },{
          title: "translate()",
          href: "/docs/generators/translate()",
          items: [],
        },{
          title: "translate3d()",
          href: "/docs/generators/translate3d()",
          items: [],
        },{
          title: "translateX()",
          href: "/docs/generators/translatex()",
          items: [],
        },{
          title: "translateY()",
          href: "/docs/generators/translatey()",
          items: [],
        },{
          title: "translateZ()",
          href: "/docs/generators/translatez()",
          items: [],
        },{
          title: "Css At Rules",
          href: "/docs/generators/css-at-rules",
          items: [],
        },{
          title: "@charset",
          href: "/docs/generators/@charset",
          items: [],
        },{
          title: "@counter-style",
          href: "/docs/generators/@counter-style",
          items: [],
        },{
          title: "@document",
          href: "/docs/generators/@document",
          items: [],
        },{
          title: "@font-face",
          href: "/docs/generators/@font-face",
          items: [],
        },{
          title: "@font-feature-values",
          href: "/docs/generators/@font-feature-values",
          items: [],
        },{
          title: "@import",
          href: "/docs/generators/@import",
          items: [],
        },{
          title: "@keyframes",
          href: "/docs/generators/@keyframes",
          items: [],
        },{
          title: "@media",
          href: "/docs/generators/@media",
          items: [],
        },{
          title: "@namespace",
          href: "/docs/generators/@namespace",
          items: [],
        },{
          title: "@page",
          href: "/docs/generators/@page",
          items: [],
        },{
          title: "@supports",
          href: "/docs/generators/@supports",
          items: [],
        },{
          title: "Css Data types",
          href: "/docs/generators/css-data-types",
          items: [],
        },{
          title: "angle",
          href: "/docs/generators/angle",
          items: [],
        },{
          title: "basic-shape",
          href: "/docs/generators/basic-shape",
          items: [],
        },{
          title: "blend-mode",
          href: "/docs/generators/blend-mode",
          items: [],
        },{
          title: "color",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "frequency",
          href: "/docs/generators/frequency",
          items: [],
        },{
          title: "gradient",
          href: "/docs/generators/gradient",
          items: [],
        },{
          title: "image",
          href: "/docs/generators/image",
          items: [],
        },{
          title: "integer",
          href: "/docs/generators/integer",
          items: [],
        },{
          title: "length",
          href: "/docs/generators/length",
          items: [],
        },{
          title: "number",
          href: "/docs/generators/number",
          items: [],
        },{
          title: "percentage",
          href: "/docs/generators/percentage",
          items: [],
        },{
          title: "position",
          href: "/docs/generators/position",
          items: [],
        },{
          title: "ratio",
          href: "/docs/generators/ratio",
          items: [],
        },{
          title: "resolution",
          href: "/docs/generators/resolution",
          items: [],
        },{
          title: "string",
          href: "/docs/generators/string",
          items: [],
        },{
          title: "time",
          href: "/docs/generators/time",
          items: [],
        },{
          title: "url",
          href: "/docs/generators/url",
          items: [],
        },{
          title: "Css Pseudo Elements",
          href: "/docs/generators/css-pseudo-elements",
          items: [],
        },{
          title: "::after",
          href: "/docs/generators/::after",
          items: [],
        },{
          title: "::before",
          href: "/docs/generators/::before",
          items: [],
        },{
          title: "::first-letter",
          href: "/docs/generators/::first-letter",
          items: [],
        },{
          title: "::first-line",
          href: "/docs/generators/::first-line",
          items: [],
        },{
          title: "::placeholder",
          href: "/docs/generators/::placeholder",
          items: [],
        },{
          title: "::selection",
          href: "/docs/generators/::selection",
          items: [],
        },{
          title: "Html Tools",
          href: "/docs/generators/html-tools",
          items: [],
        },{
          title: "Pug to HTML Compiler",
          href: "/docs/generators/pug-to-html-compiler",
          items: [],
        },{
          title: "Markdown to HTML Compiler",
          href: "/docs/generators/markdown-to-html-compiler",
          items: [],
        },{
          title: "HTML to Pug Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "HTML to Markdown Converter",
          href: "/docs/generators/html-to-markdown-converter",
          items: [],
        },{
          title: "HTML Character Codes",
          href: "/docs/generators/html-character-codes",
          items: [],
        },{
          title: "HTML Colors",
          href: "/docs/generators/html-colors",
          items: [],
        },{
          title: "HTML Beautifier",
          href: "/docs/generators/html-beautifier",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML Tags",
          href: "/docs/generators/html-tags",
          items: [],
        },{
          title: "HTML Online Editor",
          href: "/docs/generators/html-online-editor",
          items: [],
        },{
          title: "HTML Tutorial",
          href: "/docs/generators/html-tutorial",
          items: [],
        },{
          title: "HTML Validator",
          href: "/docs/generators/html-validator",
          items: [],
        },{
          title: "Css Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "LESS to CSS Compiler",
          href: "/docs/generators/less-to-css-compiler",
          items: [],
        },{
          title: "SCSS to CSS Compiler",
          href: "/docs/generators/scss-to-css-compiler",
          items: [],
        },{
          title: "Stylus to CSS Compiler",
          href: "/docs/generators/stylus-to-css-compiler",
          items: [],
        },{
          title: "CSS to LESS Converter",
          href: "/docs/generators/css-to-less-converter",
          items: [],
        },{
          title: "CSS to SCSS Converter",
          href: "/docs/generators/css-to-scss-converter",
          items: [],
        },{
          title: "CSS to Stylus Converter",
          href: "/docs/generators/css-to-stylus-converter",
          items: [],
        },{
          title: "CSS Color Converter",
          href: "/docs/generators/css-color-converter",
          items: [],
        },{
          title: "CSS Cursor Viewer",
          href: "/docs/generators/css-cursor-viewer",
          items: [],
        },{
          title: "CSS Font Preview",
          href: "/docs/generators/css-font-preview",
          items: [],
        },{
          title: "CSS Code Formatter",
          href: "/docs/generators/css-code-formatter",
          items: [],
        },{
          title: "CSS Lengths",
          href: "/docs/generators/css-lengths",
          items: [],
        },{
          title: "CSS Code Optimizer",
          href: "/docs/generators/css-code-optimizer",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "CSS Visual Style Editor",
          href: "/docs/generators/css-visual-style-editor",
          items: [],
        },{
          title: "Convert Image to Data",
          href: "/docs/generators/convert-image-to-data",
          items: [],
        },{
          title: "Online CSS Editor",
          href: "/docs/generators/online-css-editor",
          items: [],
        },{
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "SQL Converters",
          href: "/docs/generators/sql-converters",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "Encode and Decode",
          href: "/docs/generators/encode-and-decode",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image Tools",
          href: "/docs/generators/image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "Color Converters",
          href: "/docs/generators/color-converters",
          items: [],
        },{
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "HEX to Pantone Converter",
          href: "/docs/generators/hex-to-pantone-converter",
          items: [],
        },{
          title: "RGB to Pantone Converter",
          href: "/docs/generators/rgb-to-pantone-converter",
          items: [],
        },{
          title: "HSV to Pantone Converter",
          href: "/docs/generators/hsv-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to Pantone Converter",
          href: "/docs/generators/cmyk-to-pantone-converter",
          items: [],
        },{
          title: "CMYK to HEX Converter",
          href: "/docs/generators/cmyk-to-hex-converter",
          items: [],
        },{
          title: "CMYK to RGB Converter",
          href: "/docs/generators/cmyk-to-rgb-converter",
          items: [],
        },{
          title: "CMYK to HSV Converter",
          href: "/docs/generators/cmyk-to-hsv-converter",
          items: [],
        },{
          title: "HSV to HEX Converter",
          href: "/docs/generators/hsv-to-hex-converter",
          items: [],
        },{
          title: "HSV to RGB Converter",
          href: "/docs/generators/hsv-to-rgb-converter",
          items: [],
        },{
          title: "HSV to CMYK Converter",
          href: "/docs/generators/hsv-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to HSV Converter",
          href: "/docs/generators/hex-to-hsv-converter",
          items: [],
        },{
          title: "RGB to HEX Converter",
          href: "/docs/generators/rgb-to-hex-converter",
          items: [],
        },{
          title: "RGB to HSV Converter",
          href: "/docs/generators/rgb-to-hsv-converter",
          items: [],
        },{
          title: "RGB to CMYK Converter",
          href: "/docs/generators/rgb-to-cmyk-converter",
          items: [],
        },{
          title: "HEX to RGB Converter",
          href: "/docs/generators/hex-to-rgb-converter",
          items: [],
        },{
          title: "HEX to CMYK Converter",
          href: "/docs/generators/hex-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HEX Converter",
          href: "/docs/generators/pantone-to-hex-converter",
          items: [],
        },{
          title: "Pantone to RGB Converter",
          href: "/docs/generators/pantone-to-rgb-converter",
          items: [],
        },{
          title: "Pantone to CMYK Converter",
          href: "/docs/generators/pantone-to-cmyk-converter",
          items: [],
        },{
          title: "Pantone to HSV Converter",
          href: "/docs/generators/pantone-to-hsv-converter",
          items: [],
        },{
          title: "Unit Converter",
          href: "/docs/generators/unit-converter",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "Length Converter",
          href: "/docs/generators/length-converter",
          items: [],
        },{
          title: "Weight Converter",
          href: "/docs/generators/weight-converter",
          items: [],
        },{
          title: "Volume Converter",
          href: "/docs/generators/volume-converter",
          items: [],
        },{
          title: "Area Converter",
          href: "/docs/generators/area-converter",
          items: [],
        },{
          title: "Time Converter",
          href: "/docs/generators/time-converter",
          items: [],
        },{
          title: "Unix Timestamp Converter",
          href: "/docs/generators/unix-timestamp-converter",
          items: [],
        },{
          title: "More Unit Tools",
          href: "/docs/generators/more-unit-tools",
          items: [],
        },{
          title: "SQL Converters",
          href: "/docs/generators/sql-converters",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "SQL to CSV Converter",
          href: "/docs/generators/sql-to-csv-converter",
          items: [],
        },{
          title: "SQL to JSON Converter",
          href: "/docs/generators/sql-to-json-converter",
          items: [],
        },{
          title: "SQL to XML Converter",
          href: "/docs/generators/sql-to-xml-converter",
          items: [],
        },{
          title: "SQL to YAML Converter",
          href: "/docs/generators/sql-to-yaml-converter",
          items: [],
        },{
          title: "SQL to HTML Converter",
          href: "/docs/generators/sql-to-html-converter",
          items: [],
        },{
          title: "Encode and Decode",
          href: "/docs/generators/encode-and-decode",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base32 Encode",
          href: "/docs/generators/base32-encode",
          items: [],
        },{
          title: "Base32 Decode",
          href: "/docs/generators/base32-decode",
          items: [],
        },{
          title: "Base58 Encode",
          href: "/docs/generators/base58-encode",
          items: [],
        },{
          title: "Base58 Decode",
          href: "/docs/generators/base58-decode",
          items: [],
        },{
          title: "Base64 Encode",
          href: "/docs/generators/base64-encode",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "URL Encode Online",
          href: "/docs/generators/url-encode-online",
          items: [],
        },{
          title: "URL Decode Online",
          href: "/docs/generators/url-decode-online",
          items: [],
        },{
          title: "JSON URL Encode",
          href: "/docs/generators/json-url-encode",
          items: [],
        },{
          title: "JSON URL Decode",
          href: "/docs/generators/json-url-decode",
          items: [],
        },{
          title: "HTML Encode",
          href: "/docs/generators/html-encode",
          items: [],
        },{
          title: "HTML Decode",
          href: "/docs/generators/html-decode",
          items: [],
        },{
          title: "XML URL Encoding",
          href: "/docs/generators/xml-url-encoding",
          items: [],
        },{
          title: "XML URL Decoding",
          href: "/docs/generators/xml-url-decoding",
          items: [],
        },{
          title: "UTF8 Converter",
          href: "/docs/generators/utf8-converter",
          items: [],
        },{
          title: "UTF8 Decode",
          href: "/docs/generators/utf8-decode",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "JSON Decode Online",
          href: "/docs/generators/json-decode-online",
          items: [],
        },{
          title: "JSON Encode Online",
          href: "/docs/generators/json-encode-online",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "PNG to Base64",
          href: "/docs/generators/png-to-base64",
          items: [],
        },{
          title: "JPG to Base64",
          href: "/docs/generators/jpg-to-base64",
          items: [],
        },{
          title: "JSON to Base64",
          href: "/docs/generators/json-to-base64",
          items: [],
        },{
          title: "XML to Base64",
          href: "/docs/generators/xml-to-base64",
          items: [],
        },{
          title: "YAML to Base64",
          href: "/docs/generators/yaml-to-base64",
          items: [],
        },{
          title: "Base64 to JSON",
          href: "/docs/generators/base64-to-json",
          items: [],
        },{
          title: "Base64 to XML",
          href: "/docs/generators/base64-to-xml",
          items: [],
        },{
          title: "Base64 to YAML",
          href: "/docs/generators/base64-to-yaml",
          items: [],
        },{
          title: "CSV to Base64",
          href: "/docs/generators/csv-to-base64",
          items: [],
        },{
          title: "Base64 to CSV",
          href: "/docs/generators/base64-to-csv",
          items: [],
        },{
          title: "TSV to Base64",
          href: "/docs/generators/tsv-to-base64",
          items: [],
        },{
          title: "Base64 to TSV",
          href: "/docs/generators/base64-to-tsv",
          items: [],
        },{
          title: "Binary to Base64",
          href: "/docs/generators/binary-to-base64",
          items: [],
        },{
          title: "Base64 to Binary",
          href: "/docs/generators/base64-to-binary",
          items: [],
        },{
          title: "Hex to Base64",
          href: "/docs/generators/hex-to-base64",
          items: [],
        },{
          title: "Base64 to Hex",
          href: "/docs/generators/base64-to-hex",
          items: [],
        },{
          title: "Octal to Base64",
          href: "/docs/generators/octal-to-base64",
          items: [],
        },{
          title: "More Base64 Tools",
          href: "/docs/generators/more-base64-tools",
          items: [],
        },{
          title: "Image Tools",
          href: "/docs/generators/image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "JPG to PNG",
          href: "/docs/generators/jpg-to-png",
          items: [],
        },{
          title: "BMP to PNG",
          href: "/docs/generators/bmp-to-png",
          items: [],
        },{
          title: "PNG to JPG",
          href: "/docs/generators/png-to-jpg",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "More Image Tools",
          href: "/docs/generators/more-image-tools",
          items: [],
        },{
          title: "Converters",
          href: "/docs/generators/converters",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "JSON Converters",
          href: "/docs/generators/json-converters",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "XML Converters",
          href: "/docs/generators/xml-converters",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "HTML Converters",
          href: "/docs/generators/html-converters",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "YAML Converters",
          href: "/docs/generators/yaml-converters",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "Utility",
          href: "/docs/generators/utility",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Chart Tools",
          href: "/docs/generators/chart-tools",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Converters",
          href: "/docs/generators/converters",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "Date Calculater",
          href: "/docs/generators/date-calculater",
          items: [],
        },{
          title: "EXCEL to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "EXCEL to XML",
          href: "/docs/generators/excel-to-xml",
          items: [],
        },{
          title: "EXCEL to JSON",
          href: "/docs/generators/excel-to-json",
          items: [],
        },{
          title: "OPML to JSON",
          href: "/docs/generators/opml-to-json",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "Online Tableizer",
          href: "/docs/generators/online-tableizer",
          items: [],
        },{
          title: "JSON Converters",
          href: "/docs/generators/json-converters",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "JSON to JAVA",
          href: "/docs/generators/json-to-java",
          items: [],
        },{
          title: "JSON to XML",
          href: "/docs/generators/json-to-xml",
          items: [],
        },{
          title: "JSON to YAML",
          href: "/docs/generators/json-to-yaml",
          items: [],
        },{
          title: "JSON to CSV",
          href: "/docs/generators/json-to-csv",
          items: [],
        },{
          title: "JSON to TSV",
          href: "/docs/generators/json-to-tsv",
          items: [],
        },{
          title: "JSON to Text",
          href: "/docs/generators/json-to-text",
          items: [],
        },{
          title: "JSON to Excel",
          href: "/docs/generators/json-to-excel",
          items: [],
        },{
          title: "JSON to HTML",
          href: "/docs/generators/json-to-html",
          items: [],
        },{
          title: "XML Converters",
          href: "/docs/generators/xml-converters",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "XML to YAML",
          href: "/docs/generators/xml-to-yaml",
          items: [],
        },{
          title: "XML to CSV",
          href: "/docs/generators/xml-to-csv",
          items: [],
        },{
          title: "XML to TSV",
          href: "/docs/generators/xml-to-tsv",
          items: [],
        },{
          title: "XML to Text",
          href: "/docs/generators/xml-to-text",
          items: [],
        },{
          title: "XML-XSL Transform",
          href: "/docs/generators/xml-xsl-transform",
          items: [],
        },{
          title: "XML to HTML",
          href: "/docs/generators/xml-to-html",
          items: [],
        },{
          title: "XML to Excel",
          href: "/docs/generators/xml-to-excel",
          items: [],
        },{
          title: "XML to JAVA",
          href: "/docs/generators/xml-to-java",
          items: [],
        },{
          title: "HTML Converters",
          href: "/docs/generators/html-converters",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML to CSV Converter",
          href: "/docs/generators/html-to-csv-converter",
          items: [],
        },{
          title: "HTML to TSV Converter",
          href: "/docs/generators/html-to-tsv-converter",
          items: [],
        },{
          title: "HTML to PHP Converter",
          href: "/docs/generators/html-to-php-converter",
          items: [],
        },{
          title: "HTML to CSV",
          href: "/docs/generators/html-to-csv",
          items: [],
        },{
          title: "HTML to JSON",
          href: "/docs/generators/html-to-json",
          items: [],
        },{
          title: "HTML to XML",
          href: "/docs/generators/html-to-xml",
          items: [],
        },{
          title: "HTML to YAML",
          href: "/docs/generators/html-to-yaml",
          items: [],
        },{
          title: "HTML to Text",
          href: "/docs/generators/html-to-text",
          items: [],
        },{
          title: "Text to HTML Entities",
          href: "/docs/generators/text-to-html-entities",
          items: [],
        },{
          title: "HTML Entities to Text",
          href: "/docs/generators/html-entities-to-text",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "PUG to HTML Converter",
          href: "/docs/generators/pug-to-html-converter",
          items: [],
        },{
          title: "HTML to PUG Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "JADE to HTML Converter",
          href: "/docs/generators/jade-to-html-converter",
          items: [],
        },{
          title: "HTML to JADE Converter",
          href: "/docs/generators/html-to-jade-converter",
          items: [],
        },{
          title: "HTML to BBCode Converter",
          href: "/docs/generators/html-to-bbcode-converter",
          items: [],
        },{
          title: "BBCode to HTML Converter",
          href: "/docs/generators/bbcode-to-html-converter",
          items: [],
        },{
          title: "YAML Converters",
          href: "/docs/generators/yaml-converters",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "YAML Converter",
          href: "/docs/generators/yaml-converter",
          items: [],
        },{
          title: "YAML to XML",
          href: "/docs/generators/yaml-to-xml",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to CSV",
          href: "/docs/generators/yaml-to-csv",
          items: [],
        },{
          title: "YAML to Excel",
          href: "/docs/generators/yaml-to-excel",
          items: [],
        },{
          title: "Utility",
          href: "/docs/generators/utility",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Send Snap Message",
          href: "/docs/generators/send-snap-message",
          items: [],
        },{
          title: "Responsive Website Tester",
          href: "/docs/generators/responsive-website-tester",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "Credit Card Fake Number Generator",
          href: "/docs/generators/credit-card-fake-number-generator",
          items: [],
        },{
          title: "XPath Tester",
          href: "/docs/generators/xpath-tester",
          items: [],
        },{
          title: "JSON Path Tester",
          href: "/docs/generators/json-path-tester",
          items: [],
        },{
          title: "JSON Minifier",
          href: "/docs/generators/json-minifier",
          items: [],
        },{
          title: "File Difference",
          href: "/docs/generators/file-difference",
          items: [],
        },{
          title: "JSON Diff",
          href: "/docs/generators/json-diff",
          items: [],
        },{
          title: "XML Diff",
          href: "/docs/generators/xml-diff",
          items: [],
        },{
          title: "Broken Link Checker",
          href: "/docs/generators/broken-link-checker",
          items: [],
        },{
          title: "JSON Deserialize Online",
          href: "/docs/generators/json-deserialize-online",
          items: [],
        },{
          title: "JSON Serialize Online",
          href: "/docs/generators/json-serialize-online",
          items: [],
        },{
          title: "JSON Stringify Online",
          href: "/docs/generators/json-stringify-online",
          items: [],
        },{
          title: "XML Stringify Online",
          href: "/docs/generators/xml-stringify-online",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Crontab Format",
          href: "/docs/generators/crontab-format",
          items: [],
        },{
          title: "Chart Tools",
          href: "/docs/generators/chart-tools",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Line Graph Maker",
          href: "/docs/generators/line-graph-maker",
          items: [],
        },{
          title: "Bar Graph Maker",
          href: "/docs/generators/bar-graph-maker",
          items: [],
        },{
          title: "Pie Chart Maker",
          href: "/docs/generators/pie-chart-maker",
          items: [],
        },{
          title: "Doughnut Chart Maker",
          href: "/docs/generators/doughnut-chart-maker",
          items: [],
        },{
          title: "Scatter Plot Maker",
          href: "/docs/generators/scatter-plot-maker",
          items: [],
        },{
          title: "Viewers",
          href: "/docs/generators/viewers",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "Programming Editors",
          href: "/docs/generators/programming-editors",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "Parsers",
          href: "/docs/generators/parsers",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "Escape Unescape",
          href: "/docs/generators/escape-unescape",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "CryptoGraphy Tools",
          href: "/docs/generators/cryptography-tools",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Viewers",
          href: "/docs/generators/viewers",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "YAML Viewer",
          href: "/docs/generators/yaml-viewer",
          items: [],
        },{
          title: "MXML Viewer",
          href: "/docs/generators/mxml-viewer",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "JavaScript Viewer",
          href: "/docs/generators/javascript-viewer",
          items: [],
        },{
          title: "RSS Viewer",
          href: "/docs/generators/rss-viewer",
          items: [],
        },{
          title: "SOURCE CODE Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "OPML Viewer",
          href: "/docs/generators/opml-viewer",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "BBCode Viewer",
          href: "/docs/generators/bbcode-viewer",
          items: [],
        },{
          title: "Markdown Viewer",
          href: "/docs/generators/markdown-viewer",
          items: [],
        },{
          title: "Programming Editors",
          href: "/docs/generators/programming-editors",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "XML Editor",
          href: "/docs/generators/xml-editor",
          items: [],
        },{
          title: "JSON Editor",
          href: "/docs/generators/json-editor",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "YAML Editor",
          href: "/docs/generators/yaml-editor",
          items: [],
        },{
          title: "ONLINE Editor",
          href: "/docs/generators/online-editor",
          items: [],
        },{
          title: "JAVA Editor",
          href: "/docs/generators/java-editor",
          items: [],
        },{
          title: "C# Editor",
          href: "/docs/generators/c#-editor",
          items: [],
        },{
          title: "Actionscript Editor",
          href: "/docs/generators/actionscript-editor",
          items: [],
        },{
          title: "Markdown Editor",
          href: "/docs/generators/markdown-editor",
          items: [],
        },{
          title: "Parsers",
          href: "/docs/generators/parsers",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "URL Parser",
          href: "/docs/generators/url-parser",
          items: [],
        },{
          title: "JSON Parser",
          href: "/docs/generators/json-parser",
          items: [],
        },{
          title: "XML Parser",
          href: "/docs/generators/xml-parser",
          items: [],
        },{
          title: "YAML Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "CSS to LESS",
          href: "/docs/generators/css-to-less",
          items: [],
        },{
          title: "CSS to SCSS",
          href: "/docs/generators/css-to-scss",
          items: [],
        },{
          title: "CSS to SASS",
          href: "/docs/generators/css-to-sass",
          items: [],
        },{
          title: "CSS to Stylus",
          href: "/docs/generators/css-to-stylus",
          items: [],
        },{
          title: "Stylus Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "Stylus to CSS",
          href: "/docs/generators/stylus-to-css",
          items: [],
        },{
          title: "Stylus to LESS",
          href: "/docs/generators/stylus-to-less",
          items: [],
        },{
          title: "Stylus to SCSS",
          href: "/docs/generators/stylus-to-scss",
          items: [],
        },{
          title: "Stylus to SASS",
          href: "/docs/generators/stylus-to-sass",
          items: [],
        },{
          title: "LESS Compiler",
          href: "/docs/generators/less-compiler",
          items: [],
        },{
          title: "LESS to CSS",
          href: "/docs/generators/less-to-css",
          items: [],
        },{
          title: "LESS to Stylus",
          href: "/docs/generators/less-to-stylus",
          items: [],
        },{
          title: "LESS to SCSS",
          href: "/docs/generators/less-to-scss",
          items: [],
        },{
          title: "LESS to SASS",
          href: "/docs/generators/less-to-sass",
          items: [],
        },{
          title: "SCSS Compiler",
          href: "/docs/generators/scss-compiler",
          items: [],
        },{
          title: "SCSS to CSS",
          href: "/docs/generators/scss-to-css",
          items: [],
        },{
          title: "SCSS to Stylus",
          href: "/docs/generators/scss-to-stylus",
          items: [],
        },{
          title: "SCSS to LESS",
          href: "/docs/generators/scss-to-less",
          items: [],
        },{
          title: "SCSS to SASS",
          href: "/docs/generators/scss-to-sass",
          items: [],
        },{
          title: "SASS Compiler",
          href: "/docs/generators/sass-compiler",
          items: [],
        },{
          title: "SASS to CSS",
          href: "/docs/generators/sass-to-css",
          items: [],
        },{
          title: "SASS to Stylus",
          href: "/docs/generators/sass-to-stylus",
          items: [],
        },{
          title: "SASS to SCSS",
          href: "/docs/generators/sass-to-scss",
          items: [],
        },{
          title: "SASS to LESS",
          href: "/docs/generators/sass-to-less",
          items: [],
        },{
          title: "Escape Unescape",
          href: "/docs/generators/escape-unescape",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "HTML Escape Unescape",
          href: "/docs/generators/html-escape-unescape",
          items: [],
        },{
          title: "XML Escape Unescape",
          href: "/docs/generators/xml-escape-unescape",
          items: [],
        },{
          title: "Java Escape Unescape",
          href: "/docs/generators/java-escape-unescape",
          items: [],
        },{
          title: "C# Escape Unescape",
          href: "/docs/generators/c#-escape-unescape",
          items: [],
        },{
          title: "Javascript Escape Unescape",
          href: "/docs/generators/javascript-escape-unescape",
          items: [],
        },{
          title: "CSV Escape Unescape",
          href: "/docs/generators/csv-escape-unescape",
          items: [],
        },{
          title: "SQL Escape Unescape",
          href: "/docs/generators/sql-escape-unescape",
          items: [],
        },{
          title: "JSON Escape Unescape",
          href: "/docs/generators/json-escape-unescape",
          items: [],
        },{
          title: "Un-Google Link",
          href: "/docs/generators/un-google-link",
          items: [],
        },{
          title: "CryptoGraphy Tools",
          href: "/docs/generators/cryptography-tools",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "HMAC Generator",
          href: "/docs/generators/hmac-generator",
          items: [],
        },{
          title: "MD2 Hash Generator",
          href: "/docs/generators/md2-hash-generator",
          items: [],
        },{
          title: "MD4 Hash Generator",
          href: "/docs/generators/md4-hash-generator",
          items: [],
        },{
          title: "MD5 Hash Generator",
          href: "/docs/generators/md5-hash-generator",
          items: [],
        },{
          title: "MD6 Hash Generator",
          href: "/docs/generators/md6-hash-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "SHA1 Hash Generator",
          href: "/docs/generators/sha1-hash-generator",
          items: [],
        },{
          title: "SHA2 Hash Generator",
          href: "/docs/generators/sha2-hash-generator",
          items: [],
        },{
          title: "SHA224 Hash Generator",
          href: "/docs/generators/sha224-hash-generator",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA384 Hash Generator",
          href: "/docs/generators/sha384-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "SHA512/224 Hash Generator",
          href: "/docs/generators/sha512/224-hash-generator",
          items: [],
        },{
          title: "SHA512/256 Hash Generator",
          href: "/docs/generators/sha512/256-hash-generator",
          items: [],
        },{
          title: "SHA3-224 Hash Generator",
          href: "/docs/generators/sha3-224-hash-generator",
          items: [],
        },{
          title: "SHA3-256 Hash Generator",
          href: "/docs/generators/sha3-256-hash-generator",
          items: [],
        },{
          title: "SHA3-384 Hash Generator",
          href: "/docs/generators/sha3-384-hash-generator",
          items: [],
        },{
          title: "SHA3-512 Hash Generator",
          href: "/docs/generators/sha3-512-hash-generator",
          items: [],
        },{
          title: "CRC-16 Hash Generator",
          href: "/docs/generators/crc-16-hash-generator",
          items: [],
        },{
          title: "CRC-32 Hash Generator",
          href: "/docs/generators/crc-32-hash-generator",
          items: [],
        },{
          title: "Shake-128 Hash Generator",
          href: "/docs/generators/shake-128-hash-generator",
          items: [],
        },{
          title: "Shake-256 Hash Generator",
          href: "/docs/generators/shake-256-hash-generator",
          items: [],
        },{
          title: "Whirlpool Hash Generator",
          href: "/docs/generators/whirlpool-hash-generator",
          items: [],
        },{
          title: "Wordpress Password Hash Generator",
          href: "/docs/generators/wordpress-password-hash-generator",
          items: [],
        },{
          title: "Beautifiers",
          href: "/docs/generators/beautifiers",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "Minifier",
          href: "/docs/generators/minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "String Utilities",
          href: "/docs/generators/string-utilities",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Syntax Highlighting",
          href: "/docs/generators/syntax-highlighting",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "Compress",
          href: "/docs/generators/compress",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "Beautifiers",
          href: "/docs/generators/beautifiers",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "XML Beautifier",
          href: "/docs/generators/xml-beautifier",
          items: [],
        },{
          title: "Javascript Beautifier",
          href: "/docs/generators/javascript-beautifier",
          items: [],
        },{
          title: "YAML Beautifier",
          href: "/docs/generators/yaml-beautifier",
          items: [],
        },{
          title: "C# Beautifier",
          href: "/docs/generators/c#-beautifier",
          items: [],
        },{
          title: "Java Beautifier",
          href: "/docs/generators/java-beautifier",
          items: [],
        },{
          title: "C Beautifier",
          href: "/docs/generators/c-beautifier",
          items: [],
        },{
          title: "C++ Beautifier",
          href: "/docs/generators/c++-beautifier",
          items: [],
        },{
          title: "TypeScript Formatter",
          href: "/docs/generators/typescript-formatter",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Babel Formatter",
          href: "/docs/generators/babel-formatter",
          items: [],
        },{
          title: "Markdown Formatter",
          href: "/docs/generators/markdown-formatter",
          items: [],
        },{
          title: "MDX Formatter",
          href: "/docs/generators/mdx-formatter",
          items: [],
        },{
          title: "LESS Beautifier",
          href: "/docs/generators/less-beautifier",
          items: [],
        },{
          title: "SCSS Beautifier",
          href: "/docs/generators/scss-beautifier",
          items: [],
        },{
          title: "GraphQL Beautifier",
          href: "/docs/generators/graphql-beautifier",
          items: [],
        },{
          title: "PHP Beautifier",
          href: "/docs/generators/php-beautifier",
          items: [],
        },{
          title: "Python Beautifier",
          href: "/docs/generators/python-beautifier",
          items: [],
        },{
          title: "Perl Beautifier",
          href: "/docs/generators/perl-beautifier",
          items: [],
        },{
          title: "Ruby Beautifier",
          href: "/docs/generators/ruby-beautifier",
          items: [],
        },{
          title: "Angular Formatter",
          href: "/docs/generators/angular-formatter",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "XAML Beautifier",
          href: "/docs/generators/xaml-beautifier",
          items: [],
        },{
          title: "Minifier",
          href: "/docs/generators/minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "JSON Minify",
          href: "/docs/generators/json-minify",
          items: [],
        },{
          title: "XML Minify",
          href: "/docs/generators/xml-minify",
          items: [],
        },{
          title: "Minify JS",
          href: "/docs/generators/minify-js",
          items: [],
        },{
          title: "CSS Minify",
          href: "/docs/generators/css-minify",
          items: [],
        },{
          title: "SQL Minifier",
          href: "/docs/generators/sql-minifier",
          items: [],
        },{
          title: "Minify HTML",
          href: "/docs/generators/minify-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Text Minifier",
          href: "/docs/generators/text-minifier",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "CSV Viewer",
          href: "/docs/generators/csv-viewer",
          items: [],
        },{
          title: "CSV to XML/JSON",
          href: "/docs/generators/csv-to-xml/json",
          items: [],
        },{
          title: "CSV to XML",
          href: "/docs/generators/csv-to-xml",
          items: [],
        },{
          title: "CSV to JSON",
          href: "/docs/generators/csv-to-json",
          items: [],
        },{
          title: "CSV to HTML",
          href: "/docs/generators/csv-to-html",
          items: [],
        },{
          title: "CSV to TSV",
          href: "/docs/generators/csv-to-tsv",
          items: [],
        },{
          title: "CSV to MULTILINE DATA",
          href: "/docs/generators/csv-to-multiline-data",
          items: [],
        },{
          title: "CSV to SQL",
          href: "/docs/generators/csv-to-sql",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "String Utilities",
          href: "/docs/generators/string-utilities",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Upside Down Text",
          href: "/docs/generators/upside-down-text",
          items: [],
        },{
          title: "Random Word Generator",
          href: "/docs/generators/random-word-generator",
          items: [],
        },{
          title: "NTLM Hash Generator",
          href: "/docs/generators/ntlm-hash-generator",
          items: [],
        },{
          title: "Password Generator",
          href: "/docs/generators/password-generator",
          items: [],
        },{
          title: "String Builder",
          href: "/docs/generators/string-builder",
          items: [],
        },{
          title: "Number to Word Converter",
          href: "/docs/generators/number-to-word-converter",
          items: [],
        },{
          title: "Word to Number Converter",
          href: "/docs/generators/word-to-number-converter",
          items: [],
        },{
          title: "WORD COUNTER",
          href: "/docs/generators/word-counter",
          items: [],
        },{
          title: "Word Repeater",
          href: "/docs/generators/word-repeater",
          items: [],
        },{
          title: "Reverse String",
          href: "/docs/generators/reverse-string",
          items: [],
        },{
          title: "String to Hex Converter",
          href: "/docs/generators/string-to-hex-converter",
          items: [],
        },{
          title: "Hex to String Converter",
          href: "/docs/generators/hex-to-string-converter",
          items: [],
        },{
          title: "String to Binary Converter",
          href: "/docs/generators/string-to-binary-converter",
          items: [],
        },{
          title: "Binary to String Converter",
          href: "/docs/generators/binary-to-string-converter",
          items: [],
        },{
          title: "Case Converter",
          href: "/docs/generators/case-converter",
          items: [],
        },{
          title: "Delimited Text Extractor",
          href: "/docs/generators/delimited-text-extractor",
          items: [],
        },{
          title: "Remove Accents",
          href: "/docs/generators/remove-accents",
          items: [],
        },{
          title: "Remove Duplicate Lines",
          href: "/docs/generators/remove-duplicate-lines",
          items: [],
        },{
          title: "Remove Empty Lines",
          href: "/docs/generators/remove-empty-lines",
          items: [],
        },{
          title: "Remove Extra Spaces",
          href: "/docs/generators/remove-extra-spaces",
          items: [],
        },{
          title: "Remove Whitespace",
          href: "/docs/generators/remove-whitespace",
          items: [],
        },{
          title: "Remove Line Breaks",
          href: "/docs/generators/remove-line-breaks",
          items: [],
        },{
          title: "Remove Lines Containing",
          href: "/docs/generators/remove-lines-containing",
          items: [],
        },{
          title: "Sort Text Lines",
          href: "/docs/generators/sort-text-lines",
          items: [],
        },{
          title: "Word Sorter",
          href: "/docs/generators/word-sorter",
          items: [],
        },{
          title: "Word Frequency Counter",
          href: "/docs/generators/word-frequency-counter",
          items: [],
        },{
          title: "Text Repeater",
          href: "/docs/generators/text-repeater",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "Syntax Highlighting",
          href: "/docs/generators/syntax-highlighting",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "JSON Syntax Highlighting",
          href: "/docs/generators/json-syntax-highlighting",
          items: [],
        },{
          title: "XML Highlighter",
          href: "/docs/generators/xml-highlighter",
          items: [],
        },{
          title: "XML Pretty Print",
          href: "/docs/generators/xml-pretty-print",
          items: [],
        },{
          title: "HTML Pretty Print",
          href: "/docs/generators/html-pretty-print",
          items: [],
        },{
          title: "JS Pretty Print",
          href: "/docs/generators/js-pretty-print",
          items: [],
        },{
          title: "Code Highlighter",
          href: "/docs/generators/code-highlighter",
          items: [],
        },{
          title: "Compress",
          href: "/docs/generators/compress",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "GZip Decompress Online",
          href: "/docs/generators/gzip-decompress-online",
          items: [],
        },{
          title: "Zlib Decompress Online",
          href: "/docs/generators/zlib-decompress-online",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "Number Utilities",
          href: "/docs/generators/number-utilities",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "Bitwise Tools",
          href: "/docs/generators/bitwise-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "JSON5 Validator",
          href: "/docs/generators/json5-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "Credit Card Validator",
          href: "/docs/generators/credit-card-validator",
          items: [],
        },{
          title: "API Test",
          href: "/docs/generators/api-test",
          items: [],
        },{
          title: "YAML Validator",
          href: "/docs/generators/yaml-validator",
          items: [],
        },{
          title: "Number Utilities",
          href: "/docs/generators/number-utilities",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "All Numbers Converter",
          href: "/docs/generators/all-numbers-converter",
          items: [],
        },{
          title: "Decimal to Binary",
          href: "/docs/generators/decimal-to-binary",
          items: [],
        },{
          title: "Decimal to Octal",
          href: "/docs/generators/decimal-to-octal",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "Binary to Hex",
          href: "/docs/generators/binary-to-hex",
          items: [],
        },{
          title: "Binary to Octal",
          href: "/docs/generators/binary-to-octal",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "Hex to Binary",
          href: "/docs/generators/hex-to-binary",
          items: [],
        },{
          title: "Hex to Octal",
          href: "/docs/generators/hex-to-octal",
          items: [],
        },{
          title: "Octal toDecimal",
          href: "/docs/generators/octal-todecimal",
          items: [],
        },{
          title: "Octal to Binary",
          href: "/docs/generators/octal-to-binary",
          items: [],
        },{
          title: "Octal to Hex",
          href: "/docs/generators/octal-to-hex",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "Text to Binary",
          href: "/docs/generators/text-to-binary",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Char to ASCII",
          href: "/docs/generators/char-to-ascii",
          items: [],
        },{
          title: "Reverse Hex",
          href: "/docs/generators/reverse-hex",
          items: [],
        },{
          title: "Bitwise Tools",
          href: "/docs/generators/bitwise-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "XOR Calculator",
          href: "/docs/generators/xor-calculator",
          items: [],
        },{
          title: "AND Calculator",
          href: "/docs/generators/and-calculator",
          items: [],
        },{
          title: "NAND Calculator",
          href: "/docs/generators/nand-calculator",
          items: [],
        },{
          title: "OR Calculator",
          href: "/docs/generators/or-calculator",
          items: [],
        },{
          title: "NOR Calculator",
          href: "/docs/generators/nor-calculator",
          items: [],
        },{
          title: "XNOR Calculator",
          href: "/docs/generators/xnor-calculator",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Hex to IP",
          href: "/docs/generators/hex-to-ip",
          items: [],
        },{
          title: "IP to Hex",
          href: "/docs/generators/ip-to-hex",
          items: [],
        },{
          title: "Binary to IP",
          href: "/docs/generators/binary-to-ip",
          items: [],
        },{
          title: "IP to Binary",
          href: "/docs/generators/ip-to-binary",
          items: [],
        },{
          title: "Decimal to IP",
          href: "/docs/generators/decimal-to-ip",
          items: [],
        },{
          title: "IP to Decimal",
          href: "/docs/generators/ip-to-decimal",
          items: [],
        },{
          title: "Octal to IP",
          href: "/docs/generators/octal-to-ip",
          items: [],
        },{
          title: "IP to Octal",
          href: "/docs/generators/ip-to-octal",
          items: [],
        },{
          title: "IPV6 to Binary",
          href: "/docs/generators/ipv6-to-binary",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Lorem-Ipsum",
          href: "/docs/generators/lorem-ipsum",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Hostname to IP",
          href: "/docs/generators/hostname-to-ip",
          items: [],
        },{
          title: "IP to Hostname",
          href: "/docs/generators/ip-to-hostname",
          items: [],
        },{
          title: "Phone to IP Address",
          href: "/docs/generators/phone-to-ip-address",
          items: [],
        },{
          title: "IP Address to Phone",
          href: "/docs/generators/ip-address-to-phone",
          items: [],
        },{
          title: "DNS Lookup",
          href: "/docs/generators/dns-lookup",
          items: [],
        },{
          title: "MX Lookup",
          href: "/docs/generators/mx-lookup",
          items: [],
        },{
          title: "Nameserver Lookup",
          href: "/docs/generators/nameserver-lookup",
          items: [],
        },{
          title: "Website to IP Address",
          href: "/docs/generators/website-to-ip-address",
          items: [],
        },{
          title: "Open Port Checker",
          href: "/docs/generators/open-port-checker",
          items: [],
        },{
          title: "Webcam Test",
          href: "/docs/generators/webcam-test",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Random IP Address",
          href: "/docs/generators/random-ip-address",
          items: [],
        },{
          title: "Random Time Generator",
          href: "/docs/generators/random-time-generator",
          items: [],
        },{
          title: "Random UUID Generator",
          href: "/docs/generators/random-uuid-generator",
          items: [],
        },{
          title: "Random JSON Generator",
          href: "/docs/generators/random-json-generator",
          items: [],
        },{
          title: "Random XML Generator",
          href: "/docs/generators/random-xml-generator",
          items: [],
        },{
          title: "Random Data from Regex",
          href: "/docs/generators/random-data-from-regex",
          items: [],
        },{
          title: "Random CSV Generator",
          href: "/docs/generators/random-csv-generator",
          items: [],
        },{
          title: "Random Number Generator",
          href: "/docs/generators/random-number-generator",
          items: [],
        },{
          title: "Random Integer Generator",
          href: "/docs/generators/random-integer-generator",
          items: [],
        },{
          title: "Random Prime Generator",
          href: "/docs/generators/random-prime-generator",
          items: [],
        },{
          title: "Random Date Generator",
          href: "/docs/generators/random-date-generator",
          items: [],
        },{
          title: "Random Bitmap Generator",
          href: "/docs/generators/random-bitmap-generator",
          items: [],
        },{
          title: "Random Name Picker",
          href: "/docs/generators/random-name-picker",
          items: [],
        },{
          title: "Text Lines shuffler",
          href: "/docs/generators/text-lines-shuffler",
          items: [],
        },{
          title: "MAC Address Generator",
          href: "/docs/generators/mac-address-generator",
          items: [],
        },{
          title: "Random Hex Generator",
          href: "/docs/generators/random-hex-generator",
          items: [],
        },{
          title: "Random TSV Generator",
          href: "/docs/generators/random-tsv-generator",
          items: [],
        },{
          title: "Random String Generator",
          href: "/docs/generators/random-string-generator",
          items: [],
        },{
          title: "Random Fraction Generator",
          href: "/docs/generators/random-fraction-generator",
          items: [],
        },{
          title: "Random Integer Range Generator",
          href: "/docs/generators/random-integer-range-generator",
          items: [],
        },{
          title: "Random Binary Generator",
          href: "/docs/generators/random-binary-generator",
          items: [],
        },{
          title: "Random Byte Generator",
          href: "/docs/generators/random-byte-generator",
          items: [],
        },{
          title: "Random Decimal Generator",
          href: "/docs/generators/random-decimal-generator",
          items: [],
        },{
          title: "Random Alphanumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Popular Functionality",
          href: "/docs/generators/popular-functionality",
          items: [],
        },{
          title: "JSON Beautifier",
          href: "/docs/generators/json-beautifier",
          items: [],
        },{
          title: "HTML Viewer",
          href: "/docs/generators/html-viewer",
          items: [],
        },{
          title: "Number to Words",
          href: "/docs/generators/number-to-words",
          items: [],
        },{
          title: "SQL Formatter",
          href: "/docs/generators/sql-formatter",
          items: [],
        },{
          title: "Image to Base64",
          href: "/docs/generators/image-to-base64",
          items: [],
        },{
          title: "Base64 to Image",
          href: "/docs/generators/base64-to-image",
          items: [],
        },{
          title: "HEX to Pantone",
          href: "/docs/generators/hex-to-pantone",
          items: [],
        },{
          title: "Source Code Viewer",
          href: "/docs/generators/source-code-viewer",
          items: [],
        },{
          title: "Binary to Text",
          href: "/docs/generators/binary-to-text",
          items: [],
        },{
          title: "JSON Viewer",
          href: "/docs/generators/json-viewer",
          items: [],
        },{
          title: "JSON Validator",
          href: "/docs/generators/json-validator",
          items: [],
        },{
          title: "Base64 Decode",
          href: "/docs/generators/base64-decode",
          items: [],
        },{
          title: "Hex to Decimal",
          href: "/docs/generators/hex-to-decimal",
          items: [],
        },{
          title: "XML Viewer",
          href: "/docs/generators/xml-viewer",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "Encryption-Decryption",
          href: "/docs/generators/encryption-decryption",
          items: [],
        },{
          title: "Excel to HTML",
          href: "/docs/generators/excel-to-html",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "XML Validator",
          href: "/docs/generators/xml-validator",
          items: [],
        },{
          title: "JavaScript Validator",
          href: "/docs/generators/javascript-validator",
          items: [],
        },{
          title: "CSS Beautifier",
          href: "/docs/generators/css-beautifier",
          items: [],
        },{
          title: "ONLINE JSON EDITOR",
          href: "/docs/generators/online-json-editor",
          items: [],
        },{
          title: "Decimal to Hex",
          href: "/docs/generators/decimal-to-hex",
          items: [],
        },{
          title: "Binary to Decimal",
          href: "/docs/generators/binary-to-decimal",
          items: [],
        },{
          title: "ASCII to Text",
          href: "/docs/generators/ascii-to-text",
          items: [],
        },{
          title: "Random Emoji Generator",
          href: "/docs/generators/random-emoji-generator",
          items: [],
        },{
          title: "REM to PX Converter",
          href: "/docs/generators/rem-to-px-converter",
          items: [],
        },{
          title: "New Functionality",
          href: "/docs/generators/new-functionality",
          items: [],
        },{
          title: "Random Trivia Generator",
          href: "/docs/generators/random-trivia-generator",
          items: [],
        },{
          title: "Random Website Generator",
          href: "/docs/generators/random-website-generator",
          items: [],
        },{
          title: "Random Proverb Generator",
          href: "/docs/generators/random-proverb-generator",
          items: [],
        },{
          title: "Memorable Password Generator",
          href: "/docs/generators/memorable-password-generator",
          items: [],
        },{
          title: "Harry Potter Spells Generator",
          href: "/docs/generators/harry-potter-spells-generator",
          items: [],
        },{
          title: "Random New York Address",
          href: "/docs/generators/random-new-york-address",
          items: [],
        },{
          title: "Random Noun Generator",
          href: "/docs/generators/random-noun-generator",
          items: [],
        },{
          title: "Random Spanish Word Generator",
          href: "/docs/generators/random-spanish-word-generator",
          items: [],
        },{
          title: "Random Location Generator",
          href: "/docs/generators/random-location-generator",
          items: [],
        },{
          title: "Random Town Generator",
          href: "/docs/generators/random-town-generator",
          items: [],
        },{
          title: "Goth Name Generator",
          href: "/docs/generators/goth-name-generator",
          items: [],
        },{
          title: "Fantasy Name Generator",
          href: "/docs/generators/fantasy-name-generator",
          items: [],
        },{
          title: "Victorian Name Generator",
          href: "/docs/generators/victorian-name-generator",
          items: [],
        },{
          title: "Magic School Name",
          href: "/docs/generators/magic-school-name",
          items: [],
        },{
          title: "Halloween Costume Generator",
          href: "/docs/generators/halloween-costume-generator",
          items: [],
        },{
          title: "Book",
          href: "/docs/generators/book",
          items: [],
        },{
          title: "Disney Character Generator",
          href: "/docs/generators/disney-character-generator",
          items: [],
        },{
          title: "God Name Generator",
          href: "/docs/generators/god-name-generator",
          items: [],
        },{
          title: "Random Setting Generator",
          href: "/docs/generators/random-setting-generator",
          items: [],
        },{
          title: "Twitch Name Generator",
          href: "/docs/generators/twitch-name-generator",
          items: [],
        },{
          title: "Villager Name Generator",
          href: "/docs/generators/villager-name-generator",
          items: [],
        },{
          title: "Vampire Name Generator",
          href: "/docs/generators/vampire-name-generator",
          items: [],
        },{
          title: "Dwarf Name Generator",
          href: "/docs/generators/dwarf-name-generator",
          items: [],
        },{
          title: "DND Name Generator",
          href: "/docs/generators/dnd-name-generator",
          items: [],
        },{
          title: "Random Kingdom Name Generator",
          href: "/docs/generators/random-kingdom-name-generator",
          items: [],
        },{
          title: "Random Japanese Name Generator",
          href: "/docs/generators/random-japanese-name-generator",
          items: [],
        },{
          title: "Random School Name Generator",
          href: "/docs/generators/random-school-name-generator",
          items: [],
        },{
          title: "Glitch Text Generator",
          href: "/docs/generators/glitch-text-generator",
          items: [],
        },{
          title: "YAML Cheat Sheet",
          href: "/docs/generators/yaml-cheat-sheet",
          items: [],
        },{
          title: "JSON Cheat Sheet",
          href: "/docs/generators/json-cheat-sheet",
          items: [],
        },{
          title: "Random Username Generator",
          href: "/docs/generators/random-username-generator",
          items: [],
        },{
          title: "Random Cat Name Generator",
          href: "/docs/generators/random-cat-name-generator",
          items: [],
        },{
          title: "Random Food Generator",
          href: "/docs/generators/random-food-generator",
          items: [],
        },{
          title: "Scenario Generator",
          href: "/docs/generators/scenario-generator",
          items: [],
        },{
          title: "JSON to String",
          href: "/docs/generators/json-to-string",
          items: [],
        },{
          title: "Random New Zealand Address",
          href: "/docs/generators/random-new-zealand-address",
          items: [],
        },{
          title: "Random Paragraph Generator",
          href: "/docs/generators/random-paragraph-generator",
          items: [],
        },{
          title: "Fake ChatGPT Generator",
          href: "/docs/generators/fake-chatgpt-generator",
          items: [],
        },{
          title: "JavaScript Cheat Sheet",
          href: "/docs/generators/javascript-cheat-sheet",
          items: [],
        },{
          title: "Text Formatter",
          href: "/docs/generators/text-formatter",
          items: [],
        },{
          title: "Time Sheet Calculator",
          href: "/docs/generators/time-sheet-calculator",
          items: [],
        },{
          title: "Random Video Game Generator",
          href: "/docs/generators/random-video-game-generator",
          items: [],
        },{
          title: "Address in Spain",
          href: "/docs/generators/address-in-spain",
          items: [],
        },{
          title: "Random Actor Generator",
          href: "/docs/generators/random-actor-generator",
          items: [],
        },{
          title: "Random Song Lyrics",
          href: "/docs/generators/random-song-lyrics",
          items: [],
        },{
          title: "Random Caption Generator",
          href: "/docs/generators/random-caption-generator",
          items: [],
        },{
          title: "Random Celebrity Generator",
          href: "/docs/generators/random-celebrity-generator",
          items: [],
        },{
          title: "Sort XML Online",
          href: "/docs/generators/sort-xml-online",
          items: [],
        },{
          title: "SVG Viewer",
          href: "/docs/generators/svg-viewer",
          items: [],
        },{
          title: "SVG Formatter",
          href: "/docs/generators/svg-formatter",
          items: [],
        },{
          title: "Cursed Text Generator",
          href: "/docs/generators/cursed-text-generator",
          items: [],
        },{
          title: "Random Superhero Generator",
          href: "/docs/generators/random-superhero-generator",
          items: [],
        },{
          title: "CSS Selectors Cheat Sheet",
          href: "/docs/generators/css-selectors-cheat-sheet",
          items: [],
        },{
          title: "HEX to RGBA Converter",
          href: "/docs/generators/hex-to-rgba-converter",
          items: [],
        },{
          title: "Sentence Counter",
          href: "/docs/generators/sentence-counter",
          items: [],
        },{
          title: "JSON to One Line",
          href: "/docs/generators/json-to-one-line",
          items: [],
        },{
          title: "Paragraph Counter",
          href: "/docs/generators/paragraph-counter",
          items: [],
        },{
          title: "Javascript Tester",
          href: "/docs/generators/javascript-tester",
          items: [],
        },{
          title: "Random Pokemon Team Generator",
          href: "/docs/generators/random-pokemon-team-generator",
          items: [],
        },{
          title: "Vim Cheat Sheet",
          href: "/docs/generators/vim-cheat-sheet",
          items: [],
        },{
          title: "Random Canada Address Generator",
          href: "/docs/generators/random-canada-address-generator",
          items: [],
        },{
          title: "Random Pokemon Generator",
          href: "/docs/generators/random-pokemon-generator",
          items: [],
        },{
          title: "Random Address in California",
          href: "/docs/generators/random-address-in-california",
          items: [],
        },{
          title: "Random Movie Generator",
          href: "/docs/generators/random-movie-generator",
          items: [],
        },{
          title: "Character Trait Generator",
          href: "/docs/generators/character-trait-generator",
          items: [],
        },{
          title: "Random Flower Generator",
          href: "/docs/generators/random-flower-generator",
          items: [],
        },{
          title: "Random Quote Generator",
          href: "/docs/generators/random-quote-generator",
          items: [],
        },{
          title: "Random Sentence Generator",
          href: "/docs/generators/random-sentence-generator",
          items: [],
        },{
          title: "Random Element Generator",
          href: "/docs/generators/random-element-generator",
          items: [],
        },{
          title: "Random Planet Generator",
          href: "/docs/generators/random-planet-generator",
          items: [],
        },{
          title: "Random Holiday Generator",
          href: "/docs/generators/random-holiday-generator",
          items: [],
        },{
          title: "Random Last Name Generator",
          href: "/docs/generators/random-last-name-generator",
          items: [],
        },{
          title: "Random Cat Generator",
          href: "/docs/generators/random-cat-generator",
          items: [],
        },{
          title: "Random College Generator",
          href: "/docs/generators/random-college-generator",
          items: [],
        },{
          title: "Random Bird Generator",
          href: "/docs/generators/random-bird-generator",
          items: [],
        },{
          title: "Random Book Generator",
          href: "/docs/generators/random-book-generator",
          items: [],
        },{
          title: "Random Job Generator",
          href: "/docs/generators/random-job-generator",
          items: [],
        },{
          title: "Random Link Generator",
          href: "/docs/generators/random-link-generator",
          items: [],
        },{
          title: "Tweet to Image Converter",
          href: "/docs/generators/tweet-to-image-converter",
          items: [],
        },{
          title: "PSN Name Generator",
          href: "/docs/generators/psn-name-generator",
          items: [],
        },{
          title: "Monster Generator",
          href: "/docs/generators/monster-generator",
          items: [],
        },{
          title: "Random League Champion",
          href: "/docs/generators/random-league-champion",
          items: [],
        },{
          title: "Random Body Part Generator",
          href: "/docs/generators/random-body-part-generator",
          items: [],
        },{
          title: "Social Tools",
          href: "/docs/generators/social-tools",
          items: [],
        },{
          title: "Aesthetic Emoji Generator",
          href: "/docs/generators/aesthetic-emoji-generator",
          items: [],
        },{
          title: "Random Superpower Generator",
          href: "/docs/generators/random-superpower-generator",
          items: [],
        },{
          title: "Random Anime Character Generator",
          href: "/docs/generators/random-anime-character-generator",
          items: [],
        },{
          title: "Random Dinosaur Generator",
          href: "/docs/generators/random-dinosaur-generator",
          items: [],
        },{
          title: "Fursona Generator",
          href: "/docs/generators/fursona-generator",
          items: [],
        },{
          title: "Sims 3 Trait Generator",
          href: "/docs/generators/sims-3-trait-generator",
          items: [],
        },{
          title: "Random Emotion Generator",
          href: "/docs/generators/random-emotion-generator",
          items: [],
        },{
          title: "Random Year Generator",
          href: "/docs/generators/random-year-generator",
          items: [],
        },{
          title: "Random Cartoon Character Generator",
          href: "/docs/generators/random-cartoon-character-generator",
          items: [],
        },{
          title: "Random 6 Digit Number Generator",
          href: "/docs/generators/random-6-digit-number-generator",
          items: [],
        },{
          title: "Random 4 Digit Number Generator",
          href: "/docs/generators/random-4-digit-number-generator",
          items: [],
        },{
          title: "Random Birthday Generator",
          href: "/docs/generators/random-birthday-generator",
          items: [],
        },{
          title: "Letter Randomizer",
          href: "/docs/generators/letter-randomizer",
          items: [],
        },{
          title: "Text Replacer",
          href: "/docs/generators/text-replacer",
          items: [],
        },{
          title: "Random Tarot Card Generator",
          href: "/docs/generators/random-tarot-card-generator",
          items: [],
        },{
          title: "Random Dog Breed Generator",
          href: "/docs/generators/random-dog-breed-generator",
          items: [],
        },{
          title: "Random Car Generator",
          href: "/docs/generators/random-car-generator",
          items: [],
        },{
          title: "Lord Of The Rings Name Generator",
          href: "/docs/generators/lord-of-the-rings-name-generator",
          items: [],
        },{
          title: "Fortune Cookie Generator",
          href: "/docs/generators/fortune-cookie-generator",
          items: [],
        },{
          title: "Random Charades Generator",
          href: "/docs/generators/random-charades-generator",
          items: [],
        },{
          title: "Instagram Caption Generator",
          href: "/docs/generators/instagram-caption-generator",
          items: [],
        },{
          title: "Snapchat Fonts Generator",
          href: "/docs/generators/snapchat-fonts-generator",
          items: [],
        },{
          title: "Reddit Username Generator",
          href: "/docs/generators/reddit-username-generator",
          items: [],
        },{
          title: "Random Adjective Generator",
          href: "/docs/generators/random-adjective-generator",
          items: [],
        },{
          title: "Goofy Ahh Names Generator",
          href: "/docs/generators/goofy-ahh-names-generator",
          items: [],
        },{
          title: "Random City Generator",
          href: "/docs/generators/random-city-generator",
          items: [],
        },{
          title: "Personality Generator",
          href: "/docs/generators/personality-generator",
          items: [],
        },{
          title: "Random Girl Name Generator",
          href: "/docs/generators/random-girl-name-generator",
          items: [],
        },{
          title: "Random State Generator",
          href: "/docs/generators/random-state-generator",
          items: [],
        },{
          title: "Full White Screen",
          href: "/docs/generators/full-white-screen",
          items: [],
        },{
          title: "Full Blue Screen",
          href: "/docs/generators/full-blue-screen",
          items: [],
        },{
          title: "Full Red Screen",
          href: "/docs/generators/full-red-screen",
          items: [],
        },{
          title: "Full Black Screen",
          href: "/docs/generators/full-black-screen",
          items: [],
        },{
          title: "Aesthetic Username Generator",
          href: "/docs/generators/aesthetic-username-generator",
          items: [],
        },{
          title: "Word Replacer",
          href: "/docs/generators/word-replacer",
          items: [],
        },{
          title: "Moodboard Generator",
          href: "/docs/generators/moodboard-generator",
          items: [],
        },{
          title: "Valorant Crosshair Generator",
          href: "/docs/generators/valorant-crosshair-generator",
          items: [],
        },{
          title: "Cookie Run Character Generator",
          href: "/docs/generators/cookie-run-character-generator",
          items: [],
        },{
          title: "JoJo Stand Generator",
          href: "/docs/generators/jojo-stand-generator",
          items: [],
        },{
          title: "OTP Prompt Generator",
          href: "/docs/generators/otp-prompt-generator",
          items: [],
        },{
          title: "Random Minecraft Block Generator",
          href: "/docs/generators/random-minecraft-block-generator",
          items: [],
        },{
          title: "Random Theme Generator",
          href: "/docs/generators/random-theme-generator",
          items: [],
        },{
          title: "SQL Code Generator",
          href: "/docs/generators/sql-code-generator",
          items: [],
        },{
          title: "Random Pokemon Type Generator",
          href: "/docs/generators/random-pokemon-type-generator",
          items: [],
        },{
          title: "Fake Instagram Post Generator",
          href: "/docs/generators/fake-instagram-post-generator",
          items: [],
        },{
          title: "Random Aesthetic Generator",
          href: "/docs/generators/random-aesthetic-generator",
          items: [],
        },{
          title: "Random Environment Generator",
          href: "/docs/generators/random-environment-generator",
          items: [],
        },{
          title: "Random Scene Generator",
          href: "/docs/generators/random-scene-generator",
          items: [],
        },{
          title: "XBOX GamerTag Generator",
          href: "/docs/generators/xbox-gamertag-generator",
          items: [],
        },{
          title: "Elf Name Generator",
          href: "/docs/generators/elf-name-generator",
          items: [],
        },{
          title: "Twitalics Twitter Italics Generator",
          href: "/docs/generators/twitalics-twitter-italics-generator",
          items: [],
        },{
          title: "XBOX Name Generator",
          href: "/docs/generators/xbox-name-generator",
          items: [],
        },{
          title: "Warrior Cat Name Generator",
          href: "/docs/generators/warrior-cat-name-generator",
          items: [],
        },{
          title: "Fake Tweet Generator",
          href: "/docs/generators/fake-tweet-generator",
          items: [],
        },{
          title: "Random Topic Generator",
          href: "/docs/generators/random-topic-generator",
          items: [],
        },{
          title: "Pictionary Word Generator",
          href: "/docs/generators/pictionary-word-generator",
          items: [],
        },{
          title: "Random Things to Draw Generator",
          href: "/docs/generators/random-things-to-draw-generator",
          items: [],
        },{
          title: "Random Nationality Generator",
          href: "/docs/generators/random-nationality-generator",
          items: [],
        },{
          title: "Random Ethnicity Generator",
          href: "/docs/generators/random-ethnicity-generator",
          items: [],
        },{
          title: "Random Pet Generator",
          href: "/docs/generators/random-pet-generator",
          items: [],
        },{
          title: "Billing Postal Code Generator",
          href: "/docs/generators/billing-postal-code-generator",
          items: [],
        },{
          title: "Random Male Name Generator",
          href: "/docs/generators/random-male-name-generator",
          items: [],
        },{
          title: "Random Boy Name Generator",
          href: "/docs/generators/random-boy-name-generator",
          items: [],
        },{
          title: "Random Things Generator",
          href: "/docs/generators/random-things-generator",
          items: [],
        },{
          title: "Random NHL Team Generator",
          href: "/docs/generators/random-nhl-team-generator",
          items: [],
        },{
          title: "Random Zip Code",
          href: "/docs/generators/random-zip-code",
          items: [],
        },{
          title: "Random Team Generator",
          href: "/docs/generators/random-team-generator",
          items: [],
        },{
          title: "Random Billing Address",
          href: "/docs/generators/random-billing-address",
          items: [],
        },{
          title: "Random House Address",
          href: "/docs/generators/random-house-address",
          items: [],
        },{
          title: "Random Street Address",
          href: "/docs/generators/random-street-address",
          items: [],
        },{
          title: "Random Address Generator",
          href: "/docs/generators/random-address-generator",
          items: [],
        },{
          title: "Incorrect Quotes Generator",
          href: "/docs/generators/incorrect-quotes-generator",
          items: [],
        },{
          title: "Random Flag Generator",
          href: "/docs/generators/random-flag-generator",
          items: [],
        },{
          title: "Random Country Generator",
          href: "/docs/generators/random-country-generator",
          items: [],
        },{
          title: "Random US Area Codes",
          href: "/docs/generators/random-us-area-codes",
          items: [],
        },{
          title: "Random Phone Number",
          href: "/docs/generators/random-phone-number",
          items: [],
        },{
          title: "React Formatter",
          href: "/docs/generators/react-formatter",
          items: [],
        },{
          title: "JSON Fixer",
          href: "/docs/generators/json-fixer",
          items: [],
        },{
          title: "JSON Navigator",
          href: "/docs/generators/json-navigator",
          items: [],
        },{
          title: "Random Emoji Generator",
          href: "/docs/generators/random-emoji-generator",
          items: [],
        },{
          title: "Favicon Generator",
          href: "/docs/generators/favicon-generator",
          items: [],
        },{
          title: "CIDR Calculator",
          href: "/docs/generators/cidr-calculator",
          items: [],
        },{
          title: "Marquee Generator",
          href: "/docs/generators/marquee-generator",
          items: [],
        },{
          title: "Meta Tag Generator",
          href: "/docs/generators/meta-tag-generator",
          items: [],
        },{
          title: "Screenshot Beautifier",
          href: "/docs/generators/screenshot-beautifier",
          items: [],
        },{
          title: "Tweet Ideas",
          href: "/docs/generators/tweet-ideas",
          items: [],
        },{
          title: "Number To WhatsApp",
          href: "/docs/generators/number-to-whatsapp",
          items: [],
        },{
          title: "Twitter Header Generator",
          href: "/docs/generators/twitter-header-generator",
          items: [],
        },{
          title: "Twitter Image Downloader",
          href: "/docs/generators/twitter-image-downloader",
          items: [],
        },{
          title: "Random MLB Team Generator",
          href: "/docs/generators/random-mlb-team-generator",
          items: [],
        },{
          title: "Random NBA Team Generator",
          href: "/docs/generators/random-nba-team-generator",
          items: [],
        },{
          title: "Random NCAA Football Team",
          href: "/docs/generators/random-ncaa-football-team",
          items: [],
        },{
          title: "Random NCAA Basketball Team",
          href: "/docs/generators/random-ncaa-basketball-team",
          items: [],
        },{
          title: "Random IPL Team Generator",
          href: "/docs/generators/random-ipl-team-generator",
          items: [],
        },{
          title: "Random NFL Team Generator",
          href: "/docs/generators/random-nfl-team-generator",
          items: [],
        },{
          title: "Random Object Generator",
          href: "/docs/generators/random-object-generator",
          items: [],
        },{
          title: "Random Animal Generator",
          href: "/docs/generators/random-animal-generator",
          items: [],
        },{
          title: "Random Hobby Generator",
          href: "/docs/generators/random-hobby-generator",
          items: [],
        },{
          title: "Code to Image Converter",
          href: "/docs/generators/code-to-image-converter",
          items: [],
        },{
          title: "Multiple URL Opener",
          href: "/docs/generators/multiple-url-opener",
          items: [],
        },{
          title: "Tweet Beautifier",
          href: "/docs/generators/tweet-beautifier",
          items: [],
        },{
          title: "GIF Viewer",
          href: "/docs/generators/gif-viewer",
          items: [],
        },{
          title: "GIF Splitter",
          href: "/docs/generators/gif-splitter",
          items: [],
        },{
          title: "Share Code Snippets",
          href: "/docs/generators/share-code-snippets",
          items: [],
        },{
          title: "Convert Text to Handwriting",
          href: "/docs/generators/convert-text-to-handwriting",
          items: [],
        },{
          title: "Image Beautifier",
          href: "/docs/generators/image-beautifier",
          items: [],
        },{
          title: "SVG to Base64",
          href: "/docs/generators/svg-to-base64",
          items: [],
        },{
          title: "Turbo Search",
          href: "/docs/generators/turbo-search",
          items: [],
        },{
          title: "Text Cleaner",
          href: "/docs/generators/text-cleaner",
          items: [],
        },{
          title: "JSON Cleaner",
          href: "/docs/generators/json-cleaner",
          items: [],
        },{
          title: "JSON to Typescript Code",
          href: "/docs/generators/json-to-typescript-code",
          items: [],
        },{
          title: "Online Vibration Simulator",
          href: "/docs/generators/online-vibration-simulator",
          items: [],
        },{
          title: "JSON to PHP Array Converter",
          href: "/docs/generators/json-to-php-array-converter",
          items: [],
        },{
          title: "IELTS to CLB",
          href: "/docs/generators/ielts-to-clb",
          items: [],
        },{
          title: "Hyperlink Generator",
          href: "/docs/generators/hyperlink-generator",
          items: [],
        },{
          title: "REM to PX Converter",
          href: "/docs/generators/rem-to-px-converter",
          items: [],
        },{
          title: "Facebook Bold Text",
          href: "/docs/generators/facebook-bold-text",
          items: [],
        },{
          title: "What is My Zodiac Sign",
          href: "/docs/generators/what-is-my-zodiac-sign",
          items: [],
        },{
          title: "Checksum Calculator",
          href: "/docs/generators/checksum-calculator",
          items: [],
        },{
          title: "SOAP Formatter",
          href: "/docs/generators/soap-formatter",
          items: [],
        },{
          title: "WSDL Formatter",
          href: "/docs/generators/wsdl-formatter",
          items: [],
        },{
          title: "Javascript Pretty Print",
          href: "/docs/generators/javascript-pretty-print",
          items: [],
        },{
          title: "Visualize JSON Data Graph",
          href: "/docs/generators/visualize-json-data-graph",
          items: [],
        },{
          title: "Morse Code Translator",
          href: "/docs/generators/morse-code-translator",
          items: [],
        },{
          title: "Alphabetical Order",
          href: "/docs/generators/alphabetical-order",
          items: [],
        },{
          title: "Random AlphaNumeric Generator",
          href: "/docs/generators/random-alphanumeric-generator",
          items: [],
        },{
          title: "Hex to UTF8",
          href: "/docs/generators/hex-to-utf8",
          items: [],
        },{
          title: "Byte to String",
          href: "/docs/generators/byte-to-string",
          items: [],
        },{
          title: "UTF8 to ASCII",
          href: "/docs/generators/utf8-to-ascii",
          items: [],
        },{
          title: "Curl to PHP",
          href: "/docs/generators/curl-to-php",
          items: [],
        },{
          title: "Phone Number to IP",
          href: "/docs/generators/phone-number-to-ip",
          items: [],
        },{
          title: "Yaml Parser",
          href: "/docs/generators/yaml-parser",
          items: [],
        },{
          title: "XML Converter",
          href: "/docs/generators/xml-converter",
          items: [],
        },{
          title: "Gzip Decompress",
          href: "/docs/generators/gzip-decompress",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML Link Generator",
          href: "/docs/generators/html-link-generator",
          items: [],
        },{
          title: "MP3 to Base64",
          href: "/docs/generators/mp3-to-base64",
          items: [],
        },{
          title: "Base64 to Text",
          href: "/docs/generators/base64-to-text",
          items: [],
        },{
          title: "Base64 to Ascii",
          href: "/docs/generators/base64-to-ascii",
          items: [],
        },{
          title: "STYLUS Compiler",
          href: "/docs/generators/stylus-compiler",
          items: [],
        },{
          title: "JavaScript Obfuscator",
          href: "/docs/generators/javascript-obfuscator",
          items: [],
        },{
          title: "String to JSON Online",
          href: "/docs/generators/string-to-json-online",
          items: [],
        },{
          title: "YAML Pretty Print",
          href: "/docs/generators/yaml-pretty-print",
          items: [],
        },{
          title: "YouTube Thumbnail Grabber",
          href: "/docs/generators/youtube-thumbnail-grabber",
          items: [],
        },{
          title: "Trending Tools",
          href: "/docs/generators/trending-tools",
          items: [],
        },{
          title: "Bitwise Calculator",
          href: "/docs/generators/bitwise-calculator",
          items: [],
        },{
          title: "Number Sorter",
          href: "/docs/generators/number-sorter",
          items: [],
        },{
          title: "Remove Punctuation",
          href: "/docs/generators/remove-punctuation",
          items: [],
        },{
          title: "HTML Stripper",
          href: "/docs/generators/html-stripper",
          items: [],
        },{
          title: "Real Time HTML Editor",
          href: "/docs/generators/real-time-html-editor",
          items: [],
        },{
          title: "HTML to Markdown",
          href: "/docs/generators/html-to-markdown",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "Lua Minifier",
          href: "/docs/generators/lua-minifier",
          items: [],
        },{
          title: "Lua Beautifier",
          href: "/docs/generators/lua-beautifier",
          items: [],
        },{
          title: "Wordpress Password Hash",
          href: "/docs/generators/wordpress-password-hash",
          items: [],
        },{
          title: "Mirror Online",
          href: "/docs/generators/mirror-online",
          items: [],
        },{
          title: "PHP Formatter",
          href: "/docs/generators/php-formatter",
          items: [],
        },{
          title: "Image to ASCII Art",
          href: "/docs/generators/image-to-ascii-art",
          items: [],
        },{
          title: "SHA256 Hash Generator",
          href: "/docs/generators/sha256-hash-generator",
          items: [],
        },{
          title: "SHA512 Hash Generator",
          href: "/docs/generators/sha512-hash-generator",
          items: [],
        },{
          title: "Excel Viewer",
          href: "/docs/generators/excel-viewer",
          items: [],
        },{
          title: "Paraphrasing tool",
          href: "/docs/generators/paraphrasing-tool",
          items: [],
        },{
          title: "Word to HTML",
          href: "/docs/generators/word-to-html",
          items: [],
        },{
          title: "CSV to Excel",
          href: "/docs/generators/csv-to-excel",
          items: [],
        },{
          title: "Sharelink Generator",
          href: "/docs/generators/sharelink-generator",
          items: [],
        },{
          title: "Developer Tools",
          href: "/docs/generators/developer-tools",
          items: [],
        },{
          title: "IP Tools",
          href: "/docs/generators/ip-tools",
          items: [],
        },{
          title: "Formatters",
          href: "/docs/generators/formatters",
          items: [],
        },{
          title: "Image Converter Tools",
          href: "/docs/generators/image-converter-tools",
          items: [],
        },{
          title: "Finance Tools",
          href: "/docs/generators/finance-tools",
          items: [],
        },{
          title: "TSV Tools",
          href: "/docs/generators/tsv-tools",
          items: [],
        },{
          title: "JSON Tools",
          href: "/docs/generators/json-tools",
          items: [],
        },{
          title: "XML Tools",
          href: "/docs/generators/xml-tools",
          items: [],
        },{
          title: "YAML Tools",
          href: "/docs/generators/yaml-tools",
          items: [],
        },{
          title: "HTML Tools",
          href: "/docs/generators/html-tools",
          items: [],
        },{
          title: "CSS Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "Javascript Tools",
          href: "/docs/generators/javascript-tools",
          items: [],
        },{
          title: "CSV Tools",
          href: "/docs/generators/csv-tools",
          items: [],
        },{
          title: "SQL Tools",
          href: "/docs/generators/sql-tools",
          items: [],
        },{
          title: "Color Tools",
          href: "/docs/generators/color-tools",
          items: [],
        },{
          title: "Unit Tools",
          href: "/docs/generators/unit-tools",
          items: [],
        },{
          title: "Number Tools",
          href: "/docs/generators/number-tools",
          items: [],
        },{
          title: "String Tools",
          href: "/docs/generators/string-tools",
          items: [],
        },{
          title: "Base64 Tools",
          href: "/docs/generators/base64-tools",
          items: [],
        },{
          title: "Random Tools",
          href: "/docs/generators/random-tools",
          items: [],
        },{
          title: "Minifiers",
          href: "/docs/generators/minifiers",
          items: [],
        },{
          title: "Validators",
          href: "/docs/generators/validators",
          items: [],
        },{
          title: "Cryptography",
          href: "/docs/generators/cryptography",
          items: [],
        },{
          title: "Escape Unescape Tools",
          href: "/docs/generators/escape-unescape-tools",
          items: [],
        },{
          title: "UTF Tools",
          href: "/docs/generators/utf-tools",
          items: [],
        },{
          title: "Compress Decompress",
          href: "/docs/generators/compress-decompress",
          items: [],
        },{
          title: "HTML Generators",
          href: "/docs/generators/html-generators",
          items: [],
        },{
          title: "CSS Generators",
          href: "/docs/generators/css-generators",
          items: [],
        },{
          title: "Other Tools",
          href: "/docs/generators/other-tools",
          items: [],
        },{
          title: "Text Style Tools",
          href: "/docs/generators/text-style-tools",
          items: [],
        },{
          title: "CSS Unit Converter Tools",
          href: "/docs/generators/css-unit-converter-tools",
          items: [],
        },{
          title: "POJO Tools",
          href: "/docs/generators/pojo-tools",
          items: [],
        },{
          title: "Twitter Tools",
          href: "/docs/generators/twitter-tools",
          items: [],
        },{
          title: "Random Generators",
          href: "/docs/generators/random-generators",
          items: [],
        },{
          title: "Generators",
          href: "/docs/generators/generators",
          items: [],
        },{
          title: "CSS",
          href: "/docs/generators/css",
          items: [],
        },{
          title: "ANIMATION",
          href: "/docs/generators/animation",
          items: [],
        },{
          title: "Keyframe Animation",
          href: "/docs/generators/keyframe-animation",
          items: [],
        },{
          title: "BACKGROUND",
          href: "/docs/generators/background",
          items: [],
        },{
          title: "Background Color",
          href: "/docs/generators/background-color",
          items: [],
        },{
          title: "Background Gradient",
          href: "/docs/generators/background-gradient",
          items: [],
        },{
          title: "Background Image",
          href: "/docs/generators/background-image",
          items: [],
        },{
          title: "BOX",
          href: "/docs/generators/box",
          items: [],
        },{
          title: "Border",
          href: "/docs/generators/border",
          items: [],
        },{
          title: "Border Image",
          href: "/docs/generators/border-image",
          items: [],
        },{
          title: "Border Radius",
          href: "/docs/generators/border-radius",
          items: [],
        },{
          title: "Box Resize",
          href: "/docs/generators/box-resize",
          items: [],
        },{
          title: "Box Shadow",
          href: "/docs/generators/box-shadow",
          items: [],
        },{
          title: "Opacity",
          href: "/docs/generators/opacity",
          items: [],
        },{
          title: "Outline",
          href: "/docs/generators/outline",
          items: [],
        },{
          title: "Overflow",
          href: "/docs/generators/overflow",
          items: [],
        },{
          title: "COLOR",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "Text Color",
          href: "/docs/generators/text-color",
          items: [],
        },{
          title: "FILTER",
          href: "/docs/generators/filter",
          items: [],
        },{
          title: "Blur",
          href: "/docs/generators/blur",
          items: [],
        },{
          title: "Brightness",
          href: "/docs/generators/brightness",
          items: [],
        },{
          title: "Contrast",
          href: "/docs/generators/contrast",
          items: [],
        },{
          title: "Drop Shadow",
          href: "/docs/generators/drop-shadow",
          items: [],
        },{
          title: "Grayscale",
          href: "/docs/generators/grayscale",
          items: [],
        },{
          title: "Hue-Rotate",
          href: "/docs/generators/hue-rotate",
          items: [],
        },{
          title: "Invert",
          href: "/docs/generators/invert",
          items: [],
        },{
          title: "Saturate",
          href: "/docs/generators/saturate",
          items: [],
        },{
          title: "Sepia",
          href: "/docs/generators/sepia",
          items: [],
        },{
          title: "LAYOUT",
          href: "/docs/generators/layout",
          items: [],
        },{
          title: "Columns",
          href: "/docs/generators/columns",
          items: [],
        },{
          title: "Display",
          href: "/docs/generators/display",
          items: [],
        },{
          title: "Visibility",
          href: "/docs/generators/visibility",
          items: [],
        },{
          title: "LIST",
          href: "/docs/generators/list",
          items: [],
        },{
          title: "List Style",
          href: "/docs/generators/list-style",
          items: [],
        },{
          title: "MISCELLANEOUS",
          href: "/docs/generators/miscellaneous",
          items: [],
        },{
          title: "Cursor",
          href: "/docs/generators/cursor",
          items: [],
        },{
          title: "TEXT",
          href: "/docs/generators/text",
          items: [],
        },{
          title: "Letter Spacing",
          href: "/docs/generators/letter-spacing",
          items: [],
        },{
          title: "Line Height",
          href: "/docs/generators/line-height",
          items: [],
        },{
          title: "Overflow Wrap",
          href: "/docs/generators/overflow-wrap",
          items: [],
        },{
          title: "Tab Size",
          href: "/docs/generators/tab-size",
          items: [],
        },{
          title: "Text Align",
          href: "/docs/generators/text-align",
          items: [],
        },{
          title: "Text Decoration",
          href: "/docs/generators/text-decoration",
          items: [],
        },{
          title: "Text Indent",
          href: "/docs/generators/text-indent",
          items: [],
        },{
          title: "Text Shadow",
          href: "/docs/generators/text-shadow",
          items: [],
        },{
          title: "Text Transform",
          href: "/docs/generators/text-transform",
          items: [],
        },{
          title: "White Space",
          href: "/docs/generators/white-space",
          items: [],
        },{
          title: "Word Break",
          href: "/docs/generators/word-break",
          items: [],
        },{
          title: "Word Spacing",
          href: "/docs/generators/word-spacing",
          items: [],
        },{
          title: "TRANSFORM",
          href: "/docs/generators/transform",
          items: [],
        },{
          title: "Perspective",
          href: "/docs/generators/perspective",
          items: [],
        },{
          title: "Rotate",
          href: "/docs/generators/rotate",
          items: [],
        },{
          title: "Scale",
          href: "/docs/generators/scale",
          items: [],
        },{
          title: "Skew",
          href: "/docs/generators/skew",
          items: [],
        },{
          title: "Translate",
          href: "/docs/generators/translate",
          items: [],
        },{
          title: "TRANSITION",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "Transition",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "HTML",
          href: "/docs/generators/html",
          items: [],
        },{
          title: "INPUT",
          href: "/docs/generators/input",
          items: [],
        },{
          title: "Button",
          href: "/docs/generators/button",
          items: [],
        },{
          title: "Checkbox",
          href: "/docs/generators/checkbox",
          items: [],
        },{
          title: "Color Input",
          href: "/docs/generators/color-input",
          items: [],
        },{
          title: "Date",
          href: "/docs/generators/date",
          items: [],
        },{
          title: "Email Input",
          href: "/docs/generators/email-input",
          items: [],
        },{
          title: "File Input",
          href: "/docs/generators/file-input",
          items: [],
        },{
          title: "Image Button",
          href: "/docs/generators/image-button",
          items: [],
        },{
          title: "Number Input",
          href: "/docs/generators/number-input",
          items: [],
        },{
          title: "Password Input",
          href: "/docs/generators/password-input",
          items: [],
        },{
          title: "Range Input",
          href: "/docs/generators/range-input",
          items: [],
        },{
          title: "Search Input",
          href: "/docs/generators/search-input",
          items: [],
        },{
          title: "Submit",
          href: "/docs/generators/submit",
          items: [],
        },{
          title: "Telephone Input",
          href: "/docs/generators/telephone-input",
          items: [],
        },{
          title: "Text Input",
          href: "/docs/generators/text-input",
          items: [],
        },{
          title: "Textarea",
          href: "/docs/generators/textarea",
          items: [],
        },{
          title: "URL Input",
          href: "/docs/generators/url-input",
          items: [],
        },{
          title: "MEDIA",
          href: "/docs/generators/media",
          items: [],
        },{
          title: "Audio",
          href: "/docs/generators/audio",
          items: [],
        },{
          title: "Image",
          href: "/docs/generators/image",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "TEXT",
          href: "/docs/generators/text",
          items: [],
        },{
          title: "Bi-directional Override",
          href: "/docs/generators/bi-directional-override",
          items: [],
        },{
          title: "Bold",
          href: "/docs/generators/bold",
          items: [],
        },{
          title: "Cite",
          href: "/docs/generators/cite",
          items: [],
        },{
          title: "Code",
          href: "/docs/generators/code",
          items: [],
        },{
          title: "Italic",
          href: "/docs/generators/italic",
          items: [],
        },{
          title: "Highlight",
          href: "/docs/generators/highlight",
          items: [],
        },{
          title: "Quote",
          href: "/docs/generators/quote",
          items: [],
        },{
          title: "Strikethrough",
          href: "/docs/generators/strikethrough",
          items: [],
        },{
          title: "Superscript",
          href: "/docs/generators/superscript",
          items: [],
        },{
          title: "Underline",
          href: "/docs/generators/underline",
          items: [],
        },{
          title: "OTHER",
          href: "/docs/generators/other",
          items: [],
        },{
          title: "Details",
          href: "/docs/generators/details",
          items: [],
        },{
          title: "Dialog",
          href: "/docs/generators/dialog",
          items: [],
        },{
          title: "Hyperlink",
          href: "/docs/generators/hyperlink",
          items: [],
        },{
          title: "iFrame",
          href: "/docs/generators/iframe",
          items: [],
        },{
          title: "Meter",
          href: "/docs/generators/meter",
          items: [],
        },{
          title: "Progress",
          href: "/docs/generators/progress",
          items: [],
        },{
          title: "Meta Tags",
          href: "/docs/generators/meta-tags",
          items: [],
        },{
          title: "Structured Data",
          href: "/docs/generators/structured-data",
          items: [],
        },{
          title: "Article",
          href: "/docs/generators/article",
          items: [],
        },{
          title: "Breadcrumb",
          href: "/docs/generators/breadcrumb",
          items: [],
        },{
          title: "Event",
          href: "/docs/generators/event",
          items: [],
        },{
          title: "FAQ",
          href: "/docs/generators/faq",
          items: [],
        },{
          title: "How-to",
          href: "/docs/generators/how-to",
          items: [],
        },{
          title: "Job Posting",
          href: "/docs/generators/job-posting",
          items: [],
        },{
          title: "Local Business",
          href: "/docs/generators/local-business",
          items: [],
        },{
          title: "Organization",
          href: "/docs/generators/organization",
          items: [],
        },{
          title: "Person",
          href: "/docs/generators/person",
          items: [],
        },{
          title: "Product",
          href: "/docs/generators/product",
          items: [],
        },{
          title: "Recipe",
          href: "/docs/generators/recipe",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "Website",
          href: "/docs/generators/website",
          items: [],
        },{
          title: "open Graph",
          href: "/docs/generators/open-graph",
          items: [],
        },{
          title: "Article",
          href: "/docs/generators/article",
          items: [],
        },{
          title: "Book",
          href: "/docs/generators/book",
          items: [],
        },{
          title: "Business",
          href: "/docs/generators/business",
          items: [],
        },{
          title: "Music Album",
          href: "/docs/generators/music-album",
          items: [],
        },{
          title: "Music Playlist",
          href: "/docs/generators/music-playlist",
          items: [],
        },{
          title: "Music Radio Station",
          href: "/docs/generators/music-radio-station",
          items: [],
        },{
          title: "Music Song",
          href: "/docs/generators/music-song",
          items: [],
        },{
          title: "Product",
          href: "/docs/generators/product",
          items: [],
        },{
          title: "Profile",
          href: "/docs/generators/profile",
          items: [],
        },{
          title: "Video",
          href: "/docs/generators/video",
          items: [],
        },{
          title: "Video Episode",
          href: "/docs/generators/video-episode",
          items: [],
        },{
          title: "Video Movie",
          href: "/docs/generators/video-movie",
          items: [],
        },{
          title: "Video TV Show",
          href: "/docs/generators/video-tv-show",
          items: [],
        },{
          title: "Website",
          href: "/docs/generators/website",
          items: [],
        },{
          title: "Twitter Card",
          href: "/docs/generators/twitter-card",
          items: [],
        },{
          title: "App",
          href: "/docs/generators/app",
          items: [],
        },{
          title: "Player",
          href: "/docs/generators/player",
          items: [],
        },{
          title: "Summary",
          href: "/docs/generators/summary",
          items: [],
        },{
          title: "Summary with Large Image",
          href: "/docs/generators/summary-with-large-image",
          items: [],
        },{
          title: "Robots.txt",
          href: "/docs/generators/robots.txt",
          items: [],
        },{
          title: "Code Converter",
          href: "/docs/generators/code-converter",
          items: [],
        },{
          title: "SVG",
          href: "/docs/generators/svg",
          items: [],
        },{
          title: "to JSX",
          href: "/docs/generators/to-jsx",
          items: [],
        },{
          title: "to React Native",
          href: "/docs/generators/to-react-native",
          items: [],
        },{
          title: "HTML",
          href: "/docs/generators/html",
          items: [],
        },{
          title: "to JSX",
          href: "/docs/generators/to-jsx",
          items: [],
        },{
          title: "to Pug",
          href: "/docs/generators/to-pug",
          items: [],
        },{
          title: "JSON",
          href: "/docs/generators/json",
          items: [],
        },{
          title: "to Big Query Schema",
          href: "/docs/generators/to-big-query-schema",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to Go Bson",
          href: "/docs/generators/to-go-bson",
          items: [],
        },{
          title: "to Go Struct",
          href: "/docs/generators/to-go-struct",
          items: [],
        },{
          title: "to GraphQL",
          href: "/docs/generators/to-graphql",
          items: [],
        },{
          title: "to io-ts",
          href: "/docs/generators/to-io-ts",
          items: [],
        },{
          title: "to Java",
          href: "/docs/generators/to-java",
          items: [],
        },{
          title: "to JSDoc",
          href: "/docs/generators/to-jsdoc",
          items: [],
        },{
          title: "to JSON Schema",
          href: "/docs/generators/to-json-schema",
          items: [],
        },{
          title: "to Kotlin",
          href: "/docs/generators/to-kotlin",
          items: [],
        },{
          title: "to MobX-State-Tree Model",
          href: "/docs/generators/to-mobx-state-tree-model",
          items: [],
        },{
          title: "to Mongoose Schema",
          href: "/docs/generators/to-mongoose-schema",
          items: [],
        },{
          title: "to MySQL",
          href: "/docs/generators/to-mysql",
          items: [],
        },{
          title: "to React PropTypes",
          href: "/docs/generators/to-react-proptypes",
          items: [],
        },{
          title: "to Rust Serde",
          href: "/docs/generators/to-rust-serde",
          items: [],
        },{
          title: "to Sarcastic",
          href: "/docs/generators/to-sarcastic",
          items: [],
        },{
          title: "to Scala Case Class",
          href: "/docs/generators/to-scala-case-class",
          items: [],
        },{
          title: "to TOML",
          href: "/docs/generators/to-toml",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to YAML",
          href: "/docs/generators/to-yaml",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "JSON Schema",
          href: "/docs/generators/json-schema",
          items: [],
        },{
          title: "to OpenAPI Schema",
          href: "/docs/generators/to-openapi-schema",
          items: [],
        },{
          title: "to Protobuf",
          href: "/docs/generators/to-protobuf",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "CSS",
          href: "/docs/generators/css",
          items: [],
        },{
          title: "to JS Objects",
          href: "/docs/generators/to-js-objects",
          items: [],
        },{
          title: "to TailwindCSS",
          href: "/docs/generators/to-tailwindcss",
          items: [],
        },{
          title: "to template literal",
          href: "/docs/generators/to-template-literal",
          items: [],
        },{
          title: "JavaScript",
          href: "/docs/generators/javascript",
          items: [],
        },{
          title: "to JSON",
          href: "/docs/generators/to-json",
          items: [],
        },{
          title: "GraphQL",
          href: "/docs/generators/graphql",
          items: [],
        },{
          title: "to Components",
          href: "/docs/generators/to-components",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to Fragment Matcher",
          href: "/docs/generators/to-fragment-matcher",
          items: [],
        },{
          title: "to Introspection JSON",
          href: "/docs/generators/to-introspection-json",
          items: [],
        },{
          title: "to JAVA",
          href: "/docs/generators/to-java",
          items: [],
        },{
          title: "to Resolvers Signature",
          href: "/docs/generators/to-resolvers-signature",
          items: [],
        },{
          title: "to Schema AST",
          href: "/docs/generators/to-schema-ast",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to TypeScript MongoDB",
          href: "/docs/generators/to-typescript-mongodb",
          items: [],
        },{
          title: "JSON-LD",
          href: "/docs/generators/json-ld",
          items: [],
        },{
          title: "to Compacted",
          href: "/docs/generators/to-compacted",
          items: [],
        },{
          title: "to Expanded",
          href: "/docs/generators/to-expanded",
          items: [],
        },{
          title: "to Flattened",
          href: "/docs/generators/to-flattened",
          items: [],
        },{
          title: "to Framed",
          href: "/docs/generators/to-framed",
          items: [],
        },{
          title: "to N-Quads",
          href: "/docs/generators/to-n-quads",
          items: [],
        },{
          title: "to Normalized",
          href: "/docs/generators/to-normalized",
          items: [],
        },{
          title: "TypeScript",
          href: "/docs/generators/typescript",
          items: [],
        },{
          title: "to Flow",
          href: "/docs/generators/to-flow",
          items: [],
        },{
          title: "to JSON Schema",
          href: "/docs/generators/to-json-schema",
          items: [],
        },{
          title: "to plain JavaScript",
          href: "/docs/generators/to-plain-javascript",
          items: [],
        },{
          title: "to TypeScript Declaration",
          href: "/docs/generators/to-typescript-declaration",
          items: [],
        },{
          title: "to Zod Schema",
          href: "/docs/generators/to-zod-schema",
          items: [],
        },{
          title: "Flow",
          href: "/docs/generators/flow",
          items: [],
        },{
          title: "to plain JavaScript",
          href: "/docs/generators/to-plain-javascript",
          items: [],
        },{
          title: "to TypeScript",
          href: "/docs/generators/to-typescript",
          items: [],
        },{
          title: "to TypeScript Declaration",
          href: "/docs/generators/to-typescript-declaration",
          items: [],
        },{
          title: "Others",
          href: "/docs/generators/others",
          items: [],
        },{
          title: "Cadence to Go",
          href: "/docs/generators/cadence-to-go",
          items: [],
        },{
          title: "Markdown to HTML",
          href: "/docs/generators/markdown-to-html",
          items: [],
        },{
          title: "TOML to JSON",
          href: "/docs/generators/toml-to-json",
          items: [],
        },{
          title: "TOML to YAML",
          href: "/docs/generators/toml-to-yaml",
          items: [],
        },{
          title: "XML to JSON",
          href: "/docs/generators/xml-to-json",
          items: [],
        },{
          title: "YAML to JSON",
          href: "/docs/generators/yaml-to-json",
          items: [],
        },{
          title: "YAML to TOML",
          href: "/docs/generators/yaml-to-toml",
          items: [],
        },{
          title: "Css Generators",
          href: "/docs/generators/css-generators",
          items: [],
        },{
          title: "Animated Text Generator",
          href: "/docs/generators/animated-text-generator",
          items: [],
        },{
          title: "Border Radius Generator",
          href: "/docs/generators/border-radius-generator",
          items: [],
        },{
          title: "Box Shadow Generator",
          href: "/docs/generators/box-shadow-generator",
          items: [],
        },{
          title: "Button Generator",
          href: "/docs/generators/button-generator",
          items: [],
        },{
          title: "Clip Path Generator",
          href: "/docs/generators/clip-path-generator",
          items: [],
        },{
          title: "Column Generator",
          href: "/docs/generators/column-generator",
          items: [],
        },{
          title: "Cubic Bezier Generator",
          href: "/docs/generators/cubic-bezier-generator",
          items: [],
        },{
          title: "Flip Swith Generator",
          href: "/docs/generators/flip-swith-generator",
          items: [],
        },{
          title: "Flexbox Generator",
          href: "/docs/generators/flexbox-generator",
          items: [],
        },{
          title: "Glitch Text Effect",
          href: "/docs/generators/glitch-text-effect",
          items: [],
        },{
          title: "Google Fonts CSS",
          href: "/docs/generators/google-fonts-css",
          items: [],
        },{
          title: "Gradient Generator",
          href: "/docs/generators/gradient-generator",
          items: [],
        },{
          title: "Image Filter Generator",
          href: "/docs/generators/image-filter-generator",
          items: [],
        },{
          title: "Input Range Generator",
          href: "/docs/generators/input-range-generator",
          items: [],
        },{
          title: "Layout Generator",
          href: "/docs/generators/layout-generator",
          items: [],
        },{
          title: "Loader",
          href: "/docs/generators/loader",
          items: [],
        },{
          title: "Menu Generator",
          href: "/docs/generators/menu-generator",
          items: [],
        },{
          title: "RGBA Generator",
          href: "/docs/generators/rgba-generator",
          items: [],
        },{
          title: "Ribbon Generator",
          href: "/docs/generators/ribbon-generator",
          items: [],
        },{
          title: "Ribbon Banner Generator",
          href: "/docs/generators/ribbon-banner-generator",
          items: [],
        },{
          title: "Scrollbar Generator",
          href: "/docs/generators/scrollbar-generator",
          items: [],
        },{
          title: "Sprite Generator",
          href: "/docs/generators/sprite-generator",
          items: [],
        },{
          title: "Text Gradient Generator",
          href: "/docs/generators/text-gradient-generator",
          items: [],
        },{
          title: "Text Rotate Generator",
          href: "/docs/generators/text-rotate-generator",
          items: [],
        },{
          title: "Text Shadow Generator",
          href: "/docs/generators/text-shadow-generator",
          items: [],
        },{
          title: "Tooltip Generator",
          href: "/docs/generators/tooltip-generator",
          items: [],
        },{
          title: "Triangle Generator",
          href: "/docs/generators/triangle-generator",
          items: [],
        },{
          title: "3D Transform Generator",
          href: "/docs/generators/3d-transform-generator",
          items: [],
        },{
          title: "Css Properties",
          href: "/docs/generators/css-properties",
          items: [],
        },{
          title: "align-content",
          href: "/docs/generators/align-content",
          items: [],
        },{
          title: "align-items",
          href: "/docs/generators/align-items",
          items: [],
        },{
          title: "align-self",
          href: "/docs/generators/align-self",
          items: [],
        },{
          title: "all",
          href: "/docs/generators/all",
          items: [],
        },{
          title: "animation",
          href: "/docs/generators/animation",
          items: [],
        },{
          title: "animation-delay",
          href: "/docs/generators/animation-delay",
          items: [],
        },{
          title: "animation-direction",
          href: "/docs/generators/animation-direction",
          items: [],
        },{
          title: "animation-duration",
          href: "/docs/generators/animation-duration",
          items: [],
        },{
          title: "animation-fill-mode",
          href: "/docs/generators/animation-fill-mode",
          items: [],
        },{
          title: "animation-iteration-count",
          href: "/docs/generators/animation-iteration-count",
          items: [],
        },{
          title: "animation-name",
          href: "/docs/generators/animation-name",
          items: [],
        },{
          title: "animation-play-state",
          href: "/docs/generators/animation-play-state",
          items: [],
        },{
          title: "animation-timing-function",
          href: "/docs/generators/animation-timing-function",
          items: [],
        },{
          title: "backface-visibility",
          href: "/docs/generators/backface-visibility",
          items: [],
        },{
          title: "background",
          href: "/docs/generators/background",
          items: [],
        },{
          title: "background-attachment",
          href: "/docs/generators/background-attachment",
          items: [],
        },{
          title: "background-blend-mode",
          href: "/docs/generators/background-blend-mode",
          items: [],
        },{
          title: "background-clip",
          href: "/docs/generators/background-clip",
          items: [],
        },{
          title: "background-color",
          href: "/docs/generators/background-color",
          items: [],
        },{
          title: "background-image",
          href: "/docs/generators/background-image",
          items: [],
        },{
          title: "background-origin",
          href: "/docs/generators/background-origin",
          items: [],
        },{
          title: "background-position",
          href: "/docs/generators/background-position",
          items: [],
        },{
          title: "background-repeat",
          href: "/docs/generators/background-repeat",
          items: [],
        },{
          title: "background-size",
          href: "/docs/generators/background-size",
          items: [],
        },{
          title: "border",
          href: "/docs/generators/border",
          items: [],
        },{
          title: "border-bottom",
          href: "/docs/generators/border-bottom",
          items: [],
        },{
          title: "border-bottom-color",
          href: "/docs/generators/border-bottom-color",
          items: [],
        },{
          title: "border-bottom-left-radius",
          href: "/docs/generators/border-bottom-left-radius",
          items: [],
        },{
          title: "border-bottom-right-radius",
          href: "/docs/generators/border-bottom-right-radius",
          items: [],
        },{
          title: "border-bottom-style",
          href: "/docs/generators/border-bottom-style",
          items: [],
        },{
          title: "border-bottom-width",
          href: "/docs/generators/border-bottom-width",
          items: [],
        },{
          title: "border-collapse",
          href: "/docs/generators/border-collapse",
          items: [],
        },{
          title: "border-color",
          href: "/docs/generators/border-color",
          items: [],
        },{
          title: "border-image",
          href: "/docs/generators/border-image",
          items: [],
        },{
          title: "border-image-outset",
          href: "/docs/generators/border-image-outset",
          items: [],
        },{
          title: "border-image-repeat",
          href: "/docs/generators/border-image-repeat",
          items: [],
        },{
          title: "border-image-slice",
          href: "/docs/generators/border-image-slice",
          items: [],
        },{
          title: "border-image-source",
          href: "/docs/generators/border-image-source",
          items: [],
        },{
          title: "border-image-width",
          href: "/docs/generators/border-image-width",
          items: [],
        },{
          title: "border-left",
          href: "/docs/generators/border-left",
          items: [],
        },{
          title: "border-left-color",
          href: "/docs/generators/border-left-color",
          items: [],
        },{
          title: "border-left-style",
          href: "/docs/generators/border-left-style",
          items: [],
        },{
          title: "border-left-width",
          href: "/docs/generators/border-left-width",
          items: [],
        },{
          title: "border-radius",
          href: "/docs/generators/border-radius",
          items: [],
        },{
          title: "border-right",
          href: "/docs/generators/border-right",
          items: [],
        },{
          title: "border-right-color",
          href: "/docs/generators/border-right-color",
          items: [],
        },{
          title: "border-right-style",
          href: "/docs/generators/border-right-style",
          items: [],
        },{
          title: "border-right-width",
          href: "/docs/generators/border-right-width",
          items: [],
        },{
          title: "border-spacing",
          href: "/docs/generators/border-spacing",
          items: [],
        },{
          title: "border-style",
          href: "/docs/generators/border-style",
          items: [],
        },{
          title: "border-top",
          href: "/docs/generators/border-top",
          items: [],
        },{
          title: "border-top-color",
          href: "/docs/generators/border-top-color",
          items: [],
        },{
          title: "border-top-left-radius",
          href: "/docs/generators/border-top-left-radius",
          items: [],
        },{
          title: "border-top-right-radius",
          href: "/docs/generators/border-top-right-radius",
          items: [],
        },{
          title: "border-top-style",
          href: "/docs/generators/border-top-style",
          items: [],
        },{
          title: "border-top-width",
          href: "/docs/generators/border-top-width",
          items: [],
        },{
          title: "border-width",
          href: "/docs/generators/border-width",
          items: [],
        },{
          title: "bottom",
          href: "/docs/generators/bottom",
          items: [],
        },{
          title: "box-decoration-break",
          href: "/docs/generators/box-decoration-break",
          items: [],
        },{
          title: "box-shadow",
          href: "/docs/generators/box-shadow",
          items: [],
        },{
          title: "box-sizing",
          href: "/docs/generators/box-sizing",
          items: [],
        },{
          title: "break-after",
          href: "/docs/generators/break-after",
          items: [],
        },{
          title: "break-before",
          href: "/docs/generators/break-before",
          items: [],
        },{
          title: "break-inside",
          href: "/docs/generators/break-inside",
          items: [],
        },{
          title: "caption-side",
          href: "/docs/generators/caption-side",
          items: [],
        },{
          title: "caret-color",
          href: "/docs/generators/caret-color",
          items: [],
        },{
          title: "clear",
          href: "/docs/generators/clear",
          items: [],
        },{
          title: "clip-path",
          href: "/docs/generators/clip-path",
          items: [],
        },{
          title: "color",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "column-count",
          href: "/docs/generators/column-count",
          items: [],
        },{
          title: "column-fill",
          href: "/docs/generators/column-fill",
          items: [],
        },{
          title: "column-rule",
          href: "/docs/generators/column-rule",
          items: [],
        },{
          title: "column-rule-color",
          href: "/docs/generators/column-rule-color",
          items: [],
        },{
          title: "column-rule-style",
          href: "/docs/generators/column-rule-style",
          items: [],
        },{
          title: "column-rule-width",
          href: "/docs/generators/column-rule-width",
          items: [],
        },{
          title: "column-span",
          href: "/docs/generators/column-span",
          items: [],
        },{
          title: "column-width",
          href: "/docs/generators/column-width",
          items: [],
        },{
          title: "columns",
          href: "/docs/generators/columns",
          items: [],
        },{
          title: "content",
          href: "/docs/generators/content",
          items: [],
        },{
          title: "counter-increment",
          href: "/docs/generators/counter-increment",
          items: [],
        },{
          title: "counter-reset",
          href: "/docs/generators/counter-reset",
          items: [],
        },{
          title: "counter-set",
          href: "/docs/generators/counter-set",
          items: [],
        },{
          title: "cursor",
          href: "/docs/generators/cursor",
          items: [],
        },{
          title: "direction",
          href: "/docs/generators/direction",
          items: [],
        },{
          title: "display",
          href: "/docs/generators/display",
          items: [],
        },{
          title: "empty-cells",
          href: "/docs/generators/empty-cells",
          items: [],
        },{
          title: "filter",
          href: "/docs/generators/filter",
          items: [],
        },{
          title: "flex",
          href: "/docs/generators/flex",
          items: [],
        },{
          title: "flex-basis",
          href: "/docs/generators/flex-basis",
          items: [],
        },{
          title: "flex-direction",
          href: "/docs/generators/flex-direction",
          items: [],
        },{
          title: "flex-flow",
          href: "/docs/generators/flex-flow",
          items: [],
        },{
          title: "flex-grow",
          href: "/docs/generators/flex-grow",
          items: [],
        },{
          title: "flex-shrink",
          href: "/docs/generators/flex-shrink",
          items: [],
        },{
          title: "flex-wrap",
          href: "/docs/generators/flex-wrap",
          items: [],
        },{
          title: "float",
          href: "/docs/generators/float",
          items: [],
        },{
          title: "font",
          href: "/docs/generators/font",
          items: [],
        },{
          title: "font-family",
          href: "/docs/generators/font-family",
          items: [],
        },{
          title: "font-feature-settings",
          href: "/docs/generators/font-feature-settings",
          items: [],
        },{
          title: "font-kerning",
          href: "/docs/generators/font-kerning",
          items: [],
        },{
          title: "font-language-override",
          href: "/docs/generators/font-language-override",
          items: [],
        },{
          title: "font-size",
          href: "/docs/generators/font-size",
          items: [],
        },{
          title: "font-size-adjust",
          href: "/docs/generators/font-size-adjust",
          items: [],
        },{
          title: "font-stretch",
          href: "/docs/generators/font-stretch",
          items: [],
        },{
          title: "font-style",
          href: "/docs/generators/font-style",
          items: [],
        },{
          title: "font-synthesis",
          href: "/docs/generators/font-synthesis",
          items: [],
        },{
          title: "font-variant",
          href: "/docs/generators/font-variant",
          items: [],
        },{
          title: "font-variant-alternates",
          href: "/docs/generators/font-variant-alternates",
          items: [],
        },{
          title: "font-variant-caps",
          href: "/docs/generators/font-variant-caps",
          items: [],
        },{
          title: "font-variant-east-asian",
          href: "/docs/generators/font-variant-east-asian",
          items: [],
        },{
          title: "font-variant-ligatures",
          href: "/docs/generators/font-variant-ligatures",
          items: [],
        },{
          title: "font-variant-numeric",
          href: "/docs/generators/font-variant-numeric",
          items: [],
        },{
          title: "font-variant-position",
          href: "/docs/generators/font-variant-position",
          items: [],
        },{
          title: "font-weight",
          href: "/docs/generators/font-weight",
          items: [],
        },{
          title: "grid",
          href: "/docs/generators/grid",
          items: [],
        },{
          title: "grid-area",
          href: "/docs/generators/grid-area",
          items: [],
        },{
          title: "grid-auto-columns",
          href: "/docs/generators/grid-auto-columns",
          items: [],
        },{
          title: "grid-auto-flow",
          href: "/docs/generators/grid-auto-flow",
          items: [],
        },{
          title: "grid-auto-rows",
          href: "/docs/generators/grid-auto-rows",
          items: [],
        },{
          title: "grid-column",
          href: "/docs/generators/grid-column",
          items: [],
        },{
          title: "grid-column-end",
          href: "/docs/generators/grid-column-end",
          items: [],
        },{
          title: "grid-column-gap",
          href: "/docs/generators/grid-column-gap",
          items: [],
        },{
          title: "grid-column-start",
          href: "/docs/generators/grid-column-start",
          items: [],
        },{
          title: "grid-gap",
          href: "/docs/generators/grid-gap",
          items: [],
        },{
          title: "grid-row",
          href: "/docs/generators/grid-row",
          items: [],
        },{
          title: "grid-row-end",
          href: "/docs/generators/grid-row-end",
          items: [],
        },{
          title: "grid-row-gap",
          href: "/docs/generators/grid-row-gap",
          items: [],
        },{
          title: "grid-row-start",
          href: "/docs/generators/grid-row-start",
          items: [],
        },{
          title: "grid-template",
          href: "/docs/generators/grid-template",
          items: [],
        },{
          title: "grid-template-areas",
          href: "/docs/generators/grid-template-areas",
          items: [],
        },{
          title: "grid-template-columns",
          href: "/docs/generators/grid-template-columns",
          items: [],
        },{
          title: "grid-template-rows",
          href: "/docs/generators/grid-template-rows",
          items: [],
        },{
          title: "hanging-punctuation",
          href: "/docs/generators/hanging-punctuation",
          items: [],
        },{
          title: "height",
          href: "/docs/generators/height",
          items: [],
        },{
          title: "hyphens",
          href: "/docs/generators/hyphens",
          items: [],
        },{
          title: "image-orientation",
          href: "/docs/generators/image-orientation",
          items: [],
        },{
          title: "justify-content",
          href: "/docs/generators/justify-content",
          items: [],
        },{
          title: "justify-items",
          href: "/docs/generators/justify-items",
          items: [],
        },{
          title: "justify-self",
          href: "/docs/generators/justify-self",
          items: [],
        },{
          title: "left",
          href: "/docs/generators/left",
          items: [],
        },{
          title: "letter-spacing",
          href: "/docs/generators/letter-spacing",
          items: [],
        },{
          title: "line-break",
          href: "/docs/generators/line-break",
          items: [],
        },{
          title: "line-height",
          href: "/docs/generators/line-height",
          items: [],
        },{
          title: "list-style",
          href: "/docs/generators/list-style",
          items: [],
        },{
          title: "list-style-image",
          href: "/docs/generators/list-style-image",
          items: [],
        },{
          title: "list-style-position",
          href: "/docs/generators/list-style-position",
          items: [],
        },{
          title: "list-style-type",
          href: "/docs/generators/list-style-type",
          items: [],
        },{
          title: "margin",
          href: "/docs/generators/margin",
          items: [],
        },{
          title: "margin-bottom",
          href: "/docs/generators/margin-bottom",
          items: [],
        },{
          title: "margin-left",
          href: "/docs/generators/margin-left",
          items: [],
        },{
          title: "margin-right",
          href: "/docs/generators/margin-right",
          items: [],
        },{
          title: "margin-top",
          href: "/docs/generators/margin-top",
          items: [],
        },{
          title: "max-height",
          href: "/docs/generators/max-height",
          items: [],
        },{
          title: "max-width",
          href: "/docs/generators/max-width",
          items: [],
        },{
          title: "min-height",
          href: "/docs/generators/min-height",
          items: [],
        },{
          title: "min-width",
          href: "/docs/generators/min-width",
          items: [],
        },{
          title: "mix-blend-mode",
          href: "/docs/generators/mix-blend-mode",
          items: [],
        },{
          title: "object-fit",
          href: "/docs/generators/object-fit",
          items: [],
        },{
          title: "object-position",
          href: "/docs/generators/object-position",
          items: [],
        },{
          title: "opacity",
          href: "/docs/generators/opacity",
          items: [],
        },{
          title: "order",
          href: "/docs/generators/order",
          items: [],
        },{
          title: "orphans",
          href: "/docs/generators/orphans",
          items: [],
        },{
          title: "outline",
          href: "/docs/generators/outline",
          items: [],
        },{
          title: "outline-color",
          href: "/docs/generators/outline-color",
          items: [],
        },{
          title: "outline-offset",
          href: "/docs/generators/outline-offset",
          items: [],
        },{
          title: "outline-style",
          href: "/docs/generators/outline-style",
          items: [],
        },{
          title: "outline-width",
          href: "/docs/generators/outline-width",
          items: [],
        },{
          title: "overflow",
          href: "/docs/generators/overflow",
          items: [],
        },{
          title: "overflow-wrap",
          href: "/docs/generators/overflow-wrap",
          items: [],
        },{
          title: "overflow-x",
          href: "/docs/generators/overflow-x",
          items: [],
        },{
          title: "overflow-y",
          href: "/docs/generators/overflow-y",
          items: [],
        },{
          title: "padding",
          href: "/docs/generators/padding",
          items: [],
        },{
          title: "padding-bottom",
          href: "/docs/generators/padding-bottom",
          items: [],
        },{
          title: "padding-left",
          href: "/docs/generators/padding-left",
          items: [],
        },{
          title: "padding-right",
          href: "/docs/generators/padding-right",
          items: [],
        },{
          title: "padding-top",
          href: "/docs/generators/padding-top",
          items: [],
        },{
          title: "perspective",
          href: "/docs/generators/perspective",
          items: [],
        },{
          title: "perspective-origin",
          href: "/docs/generators/perspective-origin",
          items: [],
        },{
          title: "place-content",
          href: "/docs/generators/place-content",
          items: [],
        },{
          title: "place-items",
          href: "/docs/generators/place-items",
          items: [],
        },{
          title: "place-self",
          href: "/docs/generators/place-self",
          items: [],
        },{
          title: "position",
          href: "/docs/generators/position",
          items: [],
        },{
          title: "quotes",
          href: "/docs/generators/quotes",
          items: [],
        },{
          title: "resize",
          href: "/docs/generators/resize",
          items: [],
        },{
          title: "right",
          href: "/docs/generators/right",
          items: [],
        },{
          title: "shape-image-threshold",
          href: "/docs/generators/shape-image-threshold",
          items: [],
        },{
          title: "shape-margin",
          href: "/docs/generators/shape-margin",
          items: [],
        },{
          title: "shape-outside",
          href: "/docs/generators/shape-outside",
          items: [],
        },{
          title: "tab-size",
          href: "/docs/generators/tab-size",
          items: [],
        },{
          title: "table-layout",
          href: "/docs/generators/table-layout",
          items: [],
        },{
          title: "text-align",
          href: "/docs/generators/text-align",
          items: [],
        },{
          title: "text-align-last",
          href: "/docs/generators/text-align-last",
          items: [],
        },{
          title: "text-combine-upright",
          href: "/docs/generators/text-combine-upright",
          items: [],
        },{
          title: "text-decoration",
          href: "/docs/generators/text-decoration",
          items: [],
        },{
          title: "text-decoration-color",
          href: "/docs/generators/text-decoration-color",
          items: [],
        },{
          title: "text-decoration-line",
          href: "/docs/generators/text-decoration-line",
          items: [],
        },{
          title: "text-decoration-style",
          href: "/docs/generators/text-decoration-style",
          items: [],
        },{
          title: "text-emphasis",
          href: "/docs/generators/text-emphasis",
          items: [],
        },{
          title: "text-emphasis-color",
          href: "/docs/generators/text-emphasis-color",
          items: [],
        },{
          title: "text-emphasis-position",
          href: "/docs/generators/text-emphasis-position",
          items: [],
        },{
          title: "text-emphasis-style",
          href: "/docs/generators/text-emphasis-style",
          items: [],
        },{
          title: "text-indent",
          href: "/docs/generators/text-indent",
          items: [],
        },{
          title: "text-justify",
          href: "/docs/generators/text-justify",
          items: [],
        },{
          title: "text-orientation",
          href: "/docs/generators/text-orientation",
          items: [],
        },{
          title: "text-overflow",
          href: "/docs/generators/text-overflow",
          items: [],
        },{
          title: "text-shadow",
          href: "/docs/generators/text-shadow",
          items: [],
        },{
          title: "text-transform",
          href: "/docs/generators/text-transform",
          items: [],
        },{
          title: "text-underline-position",
          href: "/docs/generators/text-underline-position",
          items: [],
        },{
          title: "top",
          href: "/docs/generators/top",
          items: [],
        },{
          title: "transform",
          href: "/docs/generators/transform",
          items: [],
        },{
          title: "transform-origin",
          href: "/docs/generators/transform-origin",
          items: [],
        },{
          title: "transform-style",
          href: "/docs/generators/transform-style",
          items: [],
        },{
          title: "transition",
          href: "/docs/generators/transition",
          items: [],
        },{
          title: "transition-delay",
          href: "/docs/generators/transition-delay",
          items: [],
        },{
          title: "transition-duration",
          href: "/docs/generators/transition-duration",
          items: [],
        },{
          title: "transition-property",
          href: "/docs/generators/transition-property",
          items: [],
        },{
          title: "transition-timing-function",
          href: "/docs/generators/transition-timing-function",
          items: [],
        },{
          title: "unicode-bidi",
          href: "/docs/generators/unicode-bidi",
          items: [],
        },{
          title: "vertical-align",
          href: "/docs/generators/vertical-align",
          items: [],
        },{
          title: "visibility",
          href: "/docs/generators/visibility",
          items: [],
        },{
          title: "white-space",
          href: "/docs/generators/white-space",
          items: [],
        },{
          title: "widows",
          href: "/docs/generators/widows",
          items: [],
        },{
          title: "width",
          href: "/docs/generators/width",
          items: [],
        },{
          title: "word-break",
          href: "/docs/generators/word-break",
          items: [],
        },{
          title: "word-spacing",
          href: "/docs/generators/word-spacing",
          items: [],
        },{
          title: "word-wrap",
          href: "/docs/generators/word-wrap",
          items: [],
        },{
          title: "writing-mode",
          href: "/docs/generators/writing-mode",
          items: [],
        },{
          title: "z-index",
          href: "/docs/generators/z-index",
          items: [],
        },{
          title: "Css Pseudo Classes",
          href: "/docs/generators/css-pseudo-classes",
          items: [],
        },{
          title: ":active",
          href: "/docs/generators/:active",
          items: [],
        },{
          title: ":checked",
          href: "/docs/generators/:checked",
          items: [],
        },{
          title: ":default",
          href: "/docs/generators/:default",
          items: [],
        },{
          title: ":disabled",
          href: "/docs/generators/:disabled",
          items: [],
        },{
          title: ":empty",
          href: "/docs/generators/:empty",
          items: [],
        },{
          title: ":enabled",
          href: "/docs/generators/:enabled",
          items: [],
        },{
          title: ":first-child",
          href: "/docs/generators/:first-child",
          items: [],
        },{
          title: ":first-of-type",
          href: "/docs/generators/:first-of-type",
          items: [],
        },{
          title: ":focus",
          href: "/docs/generators/:focus",
          items: [],
        },{
          title: ":fullscreen",
          href: "/docs/generators/:fullscreen",
          items: [],
        },{
          title: ":hover",
          href: "/docs/generators/:hover",
          items: [],
        },{
          title: ":in-range",
          href: "/docs/generators/:in-range",
          items: [],
        },{
          title: ":indeterminate",
          href: "/docs/generators/:indeterminate",
          items: [],
        },{
          title: ":invalid",
          href: "/docs/generators/:invalid",
          items: [],
        },{
          title: ":lang",
          href: "/docs/generators/:lang",
          items: [],
        },{
          title: ":last-child",
          href: "/docs/generators/:last-child",
          items: [],
        },{
          title: ":last-of-type",
          href: "/docs/generators/:last-of-type",
          items: [],
        },{
          title: ":link",
          href: "/docs/generators/:link",
          items: [],
        },{
          title: ":not",
          href: "/docs/generators/:not",
          items: [],
        },{
          title: ":nth-child",
          href: "/docs/generators/:nth-child",
          items: [],
        },{
          title: ":nth-last-child",
          href: "/docs/generators/:nth-last-child",
          items: [],
        },{
          title: ":nth-last-of-type",
          href: "/docs/generators/:nth-last-of-type",
          items: [],
        },{
          title: ":nth-of-type",
          href: "/docs/generators/:nth-of-type",
          items: [],
        },{
          title: ":only-child",
          href: "/docs/generators/:only-child",
          items: [],
        },{
          title: ":only-of-type",
          href: "/docs/generators/:only-of-type",
          items: [],
        },{
          title: ":optional",
          href: "/docs/generators/:optional",
          items: [],
        },{
          title: ":out-of-range",
          href: "/docs/generators/:out-of-range",
          items: [],
        },{
          title: ":read-only",
          href: "/docs/generators/:read-only",
          items: [],
        },{
          title: ":read-write",
          href: "/docs/generators/:read-write",
          items: [],
        },{
          title: ":required",
          href: "/docs/generators/:required",
          items: [],
        },{
          title: ":root",
          href: "/docs/generators/:root",
          items: [],
        },{
          title: ":target",
          href: "/docs/generators/:target",
          items: [],
        },{
          title: ":valid",
          href: "/docs/generators/:valid",
          items: [],
        },{
          title: ":visited",
          href: "/docs/generators/:visited",
          items: [],
        },{
          title: "Html Tags",
          href: "/docs/generators/html-tags",
          items: [],
        },{
          title: "<a>",
          href: "/docs/generators/<a>",
          items: [],
        },{
          title: "<abbr>",
          href: "/docs/generators/<abbr>",
          items: [],
        },{
          title: "<address>",
          href: "/docs/generators/<address>",
          items: [],
        },{
          title: "<area>",
          href: "/docs/generators/<area>",
          items: [],
        },{
          title: "<article>",
          href: "/docs/generators/<article>",
          items: [],
        },{
          title: "<aside>",
          href: "/docs/generators/<aside>",
          items: [],
        },{
          title: "<audio>",
          href: "/docs/generators/<audio>",
          items: [],
        },{
          title: "<b>",
          href: "/docs/generators/<b>",
          items: [],
        },{
          title: "<base>",
          href: "/docs/generators/<base>",
          items: [],
        },{
          title: "<bdi>",
          href: "/docs/generators/<bdi>",
          items: [],
        },{
          title: "<bdo>",
          href: "/docs/generators/<bdo>",
          items: [],
        },{
          title: "<blockquote>",
          href: "/docs/generators/<blockquote>",
          items: [],
        },{
          title: "<body>",
          href: "/docs/generators/<body>",
          items: [],
        },{
          title: "<br>",
          href: "/docs/generators/<br>",
          items: [],
        },{
          title: "<button>",
          href: "/docs/generators/<button>",
          items: [],
        },{
          title: "<canvas>",
          href: "/docs/generators/<canvas>",
          items: [],
        },{
          title: "<caption>",
          href: "/docs/generators/<caption>",
          items: [],
        },{
          title: "<cite>",
          href: "/docs/generators/<cite>",
          items: [],
        },{
          title: "<code>",
          href: "/docs/generators/<code>",
          items: [],
        },{
          title: "<col>",
          href: "/docs/generators/<col>",
          items: [],
        },{
          title: "<colgroup>",
          href: "/docs/generators/<colgroup>",
          items: [],
        },{
          title: "<comment>",
          href: "/docs/generators/<comment>",
          items: [],
        },{
          title: "<datalist>",
          href: "/docs/generators/<datalist>",
          items: [],
        },{
          title: "<dd>",
          href: "/docs/generators/<dd>",
          items: [],
        },{
          title: "<del>",
          href: "/docs/generators/<del>",
          items: [],
        },{
          title: "<details>",
          href: "/docs/generators/<details>",
          items: [],
        },{
          title: "<dfn>",
          href: "/docs/generators/<dfn>",
          items: [],
        },{
          title: "<dialog>",
          href: "/docs/generators/<dialog>",
          items: [],
        },{
          title: "<div>",
          href: "/docs/generators/<div>",
          items: [],
        },{
          title: "<dl>",
          href: "/docs/generators/<dl>",
          items: [],
        },{
          title: "<doctype>",
          href: "/docs/generators/<doctype>",
          items: [],
        },{
          title: "<dt>",
          href: "/docs/generators/<dt>",
          items: [],
        },{
          title: "<em>",
          href: "/docs/generators/<em>",
          items: [],
        },{
          title: "<embed>",
          href: "/docs/generators/<embed>",
          items: [],
        },{
          title: "<fieldset>",
          href: "/docs/generators/<fieldset>",
          items: [],
        },{
          title: "<figcaption>",
          href: "/docs/generators/<figcaption>",
          items: [],
        },{
          title: "<figure>",
          href: "/docs/generators/<figure>",
          items: [],
        },{
          title: "<footer>",
          href: "/docs/generators/<footer>",
          items: [],
        },{
          title: "<form>",
          href: "/docs/generators/<form>",
          items: [],
        },{
          title: "<h1>",
          href: "/docs/generators/<h1>",
          items: [],
        },{
          title: "<h2>",
          href: "/docs/generators/<h2>",
          items: [],
        },{
          title: "<h3>",
          href: "/docs/generators/<h3>",
          items: [],
        },{
          title: "<h4>",
          href: "/docs/generators/<h4>",
          items: [],
        },{
          title: "<h5>",
          href: "/docs/generators/<h5>",
          items: [],
        },{
          title: "<h6>",
          href: "/docs/generators/<h6>",
          items: [],
        },{
          title: "<head>",
          href: "/docs/generators/<head>",
          items: [],
        },{
          title: "<header>",
          href: "/docs/generators/<header>",
          items: [],
        },{
          title: "<hr>",
          href: "/docs/generators/<hr>",
          items: [],
        },{
          title: "<html>",
          href: "/docs/generators/<html>",
          items: [],
        },{
          title: "<i>",
          href: "/docs/generators/<i>",
          items: [],
        },{
          title: "<iframe>",
          href: "/docs/generators/<iframe>",
          items: [],
        },{
          title: "<img>",
          href: "/docs/generators/<img>",
          items: [],
        },{
          title: "<input>",
          href: "/docs/generators/<input>",
          items: [],
        },{
          title: "<ins>",
          href: "/docs/generators/<ins>",
          items: [],
        },{
          title: "<kbd>",
          href: "/docs/generators/<kbd>",
          items: [],
        },{
          title: "<keygen>",
          href: "/docs/generators/<keygen>",
          items: [],
        },{
          title: "<label>",
          href: "/docs/generators/<label>",
          items: [],
        },{
          title: "<legend>",
          href: "/docs/generators/<legend>",
          items: [],
        },{
          title: "<li>",
          href: "/docs/generators/<li>",
          items: [],
        },{
          title: "<link>",
          href: "/docs/generators/<link>",
          items: [],
        },{
          title: "<map>",
          href: "/docs/generators/<map>",
          items: [],
        },{
          title: "<mark>",
          href: "/docs/generators/<mark>",
          items: [],
        },{
          title: "<menu>",
          href: "/docs/generators/<menu>",
          items: [],
        },{
          title: "<meta>",
          href: "/docs/generators/<meta>",
          items: [],
        },{
          title: "<meter>",
          href: "/docs/generators/<meter>",
          items: [],
        },{
          title: "<nav>",
          href: "/docs/generators/<nav>",
          items: [],
        },{
          title: "<noscript>",
          href: "/docs/generators/<noscript>",
          items: [],
        },{
          title: "<object>",
          href: "/docs/generators/<object>",
          items: [],
        },{
          title: "<ol>",
          href: "/docs/generators/<ol>",
          items: [],
        },{
          title: "<optgroup>",
          href: "/docs/generators/<optgroup>",
          items: [],
        },{
          title: "<option>",
          href: "/docs/generators/<option>",
          items: [],
        },{
          title: "<output>",
          href: "/docs/generators/<output>",
          items: [],
        },{
          title: "<p>",
          href: "/docs/generators/<p>",
          items: [],
        },{
          title: "<param>",
          href: "/docs/generators/<param>",
          items: [],
        },{
          title: "<picture>",
          href: "/docs/generators/<picture>",
          items: [],
        },{
          title: "<pre>",
          href: "/docs/generators/<pre>",
          items: [],
        },{
          title: "<progress>",
          href: "/docs/generators/<progress>",
          items: [],
        },{
          title: "<q>",
          href: "/docs/generators/<q>",
          items: [],
        },{
          title: "<rp>",
          href: "/docs/generators/<rp>",
          items: [],
        },{
          title: "<rt>",
          href: "/docs/generators/<rt>",
          items: [],
        },{
          title: "<ruby>",
          href: "/docs/generators/<ruby>",
          items: [],
        },{
          title: "<s>",
          href: "/docs/generators/<s>",
          items: [],
        },{
          title: "<samp>",
          href: "/docs/generators/<samp>",
          items: [],
        },{
          title: "<script>",
          href: "/docs/generators/<script>",
          items: [],
        },{
          title: "<section>",
          href: "/docs/generators/<section>",
          items: [],
        },{
          title: "<select>",
          href: "/docs/generators/<select>",
          items: [],
        },{
          title: "<small>",
          href: "/docs/generators/<small>",
          items: [],
        },{
          title: "<source>",
          href: "/docs/generators/<source>",
          items: [],
        },{
          title: "<span>",
          href: "/docs/generators/<span>",
          items: [],
        },{
          title: "<strong>",
          href: "/docs/generators/<strong>",
          items: [],
        },{
          title: "<style>",
          href: "/docs/generators/<style>",
          items: [],
        },{
          title: "<sub>",
          href: "/docs/generators/<sub>",
          items: [],
        },{
          title: "<summary>",
          href: "/docs/generators/<summary>",
          items: [],
        },{
          title: "sup>",
          href: "/docs/generators/sup>",
          items: [],
        },{
          title: "<table>",
          href: "/docs/generators/<table>",
          items: [],
        },{
          title: "<tbody>",
          href: "/docs/generators/<tbody>",
          items: [],
        },{
          title: "<td>",
          href: "/docs/generators/<td>",
          items: [],
        },{
          title: "<th>",
          href: "/docs/generators/<th>",
          items: [],
        },{
          title: "<thead>",
          href: "/docs/generators/<thead>",
          items: [],
        },{
          title: "<time>",
          href: "/docs/generators/<time>",
          items: [],
        },{
          title: "<tr>",
          href: "/docs/generators/<tr>",
          items: [],
        },{
          title: "<track>",
          href: "/docs/generators/<track>",
          items: [],
        },{
          title: "<u>",
          href: "/docs/generators/<u>",
          items: [],
        },{
          title: "<ul>",
          href: "/docs/generators/<ul>",
          items: [],
        },{
          title: "<var>",
          href: "/docs/generators/<var>",
          items: [],
        },{
          title: "<video>",
          href: "/docs/generators/<video>",
          items: [],
        },{
          title: "<wbr>",
          href: "/docs/generators/<wbr>",
          items: [],
        },{
          title: "Css Functions",
          href: "/docs/generators/css-functions",
          items: [],
        },{
          title: "attr()",
          href: "/docs/generators/attr()",
          items: [],
        },{
          title: "blur()",
          href: "/docs/generators/blur()",
          items: [],
        },{
          title: "brightness()",
          href: "/docs/generators/brightness()",
          items: [],
        },{
          title: "calc()",
          href: "/docs/generators/calc()",
          items: [],
        },{
          title: "circle()",
          href: "/docs/generators/circle()",
          items: [],
        },{
          title: "contrast()",
          href: "/docs/generators/contrast()",
          items: [],
        },{
          title: "drop-shadow()",
          href: "/docs/generators/drop-shadow()",
          items: [],
        },{
          title: "ellipse()",
          href: "/docs/generators/ellipse()",
          items: [],
        },{
          title: "grayscale()",
          href: "/docs/generators/grayscale()",
          items: [],
        },{
          title: "hsl()",
          href: "/docs/generators/hsl()",
          items: [],
        },{
          title: "hsla()",
          href: "/docs/generators/hsla()",
          items: [],
        },{
          title: "hue-rotate()",
          href: "/docs/generators/hue-rotate()",
          items: [],
        },{
          title: "inset()",
          href: "/docs/generators/inset()",
          items: [],
        },{
          title: "invert()",
          href: "/docs/generators/invert()",
          items: [],
        },{
          title: "linear-gradient()",
          href: "/docs/generators/linear-gradient()",
          items: [],
        },{
          title: "matrix()",
          href: "/docs/generators/matrix()",
          items: [],
        },{
          title: "matrix3d()",
          href: "/docs/generators/matrix3d()",
          items: [],
        },{
          title: "opacity()",
          href: "/docs/generators/opacity()",
          items: [],
        },{
          title: "perspective()",
          href: "/docs/generators/perspective()",
          items: [],
        },{
          title: "polygon()",
          href: "/docs/generators/polygon()",
          items: [],
        },{
          title: "radial-gradient()",
          href: "/docs/generators/radial-gradient()",
          items: [],
        },{
          title: "repeating-linear-gradient()",
          href: "/docs/generators/repeating-linear-gradient()",
          items: [],
        },{
          title: "repeating-radial-gradient()",
          href: "/docs/generators/repeating-radial-gradient()",
          items: [],
        },{
          title: "rgb()",
          href: "/docs/generators/rgb()",
          items: [],
        },{
          title: "rgba()",
          href: "/docs/generators/rgba()",
          items: [],
        },{
          title: "rotate()",
          href: "/docs/generators/rotate()",
          items: [],
        },{
          title: "rotate3d()",
          href: "/docs/generators/rotate3d()",
          items: [],
        },{
          title: "rotateX()",
          href: "/docs/generators/rotatex()",
          items: [],
        },{
          title: "rotateY()",
          href: "/docs/generators/rotatey()",
          items: [],
        },{
          title: "rotateZ()",
          href: "/docs/generators/rotatez()",
          items: [],
        },{
          title: "saturate()",
          href: "/docs/generators/saturate()",
          items: [],
        },{
          title: "scale()",
          href: "/docs/generators/scale()",
          items: [],
        },{
          title: "scale3d()",
          href: "/docs/generators/scale3d()",
          items: [],
        },{
          title: "scaleX()",
          href: "/docs/generators/scalex()",
          items: [],
        },{
          title: "scaleY()",
          href: "/docs/generators/scaley()",
          items: [],
        },{
          title: "scaleZ()",
          href: "/docs/generators/scalez()",
          items: [],
        },{
          title: "sepia()",
          href: "/docs/generators/sepia()",
          items: [],
        },{
          title: "skew()",
          href: "/docs/generators/skew()",
          items: [],
        },{
          title: "skewX()",
          href: "/docs/generators/skewx()",
          items: [],
        },{
          title: "skewY()",
          href: "/docs/generators/skewy()",
          items: [],
        },{
          title: "translate()",
          href: "/docs/generators/translate()",
          items: [],
        },{
          title: "translate3d()",
          href: "/docs/generators/translate3d()",
          items: [],
        },{
          title: "translateX()",
          href: "/docs/generators/translatex()",
          items: [],
        },{
          title: "translateY()",
          href: "/docs/generators/translatey()",
          items: [],
        },{
          title: "translateZ()",
          href: "/docs/generators/translatez()",
          items: [],
        },{
          title: "Css At Rules",
          href: "/docs/generators/css-at-rules",
          items: [],
        },{
          title: "@charset",
          href: "/docs/generators/@charset",
          items: [],
        },{
          title: "@counter-style",
          href: "/docs/generators/@counter-style",
          items: [],
        },{
          title: "@document",
          href: "/docs/generators/@document",
          items: [],
        },{
          title: "@font-face",
          href: "/docs/generators/@font-face",
          items: [],
        },{
          title: "@font-feature-values",
          href: "/docs/generators/@font-feature-values",
          items: [],
        },{
          title: "@import",
          href: "/docs/generators/@import",
          items: [],
        },{
          title: "@keyframes",
          href: "/docs/generators/@keyframes",
          items: [],
        },{
          title: "@media",
          href: "/docs/generators/@media",
          items: [],
        },{
          title: "@namespace",
          href: "/docs/generators/@namespace",
          items: [],
        },{
          title: "@page",
          href: "/docs/generators/@page",
          items: [],
        },{
          title: "@supports",
          href: "/docs/generators/@supports",
          items: [],
        },{
          title: "Css Data types",
          href: "/docs/generators/css-data-types",
          items: [],
        },{
          title: "angle",
          href: "/docs/generators/angle",
          items: [],
        },{
          title: "basic-shape",
          href: "/docs/generators/basic-shape",
          items: [],
        },{
          title: "blend-mode",
          href: "/docs/generators/blend-mode",
          items: [],
        },{
          title: "color",
          href: "/docs/generators/color",
          items: [],
        },{
          title: "frequency",
          href: "/docs/generators/frequency",
          items: [],
        },{
          title: "gradient",
          href: "/docs/generators/gradient",
          items: [],
        },{
          title: "image",
          href: "/docs/generators/image",
          items: [],
        },{
          title: "integer",
          href: "/docs/generators/integer",
          items: [],
        },{
          title: "length",
          href: "/docs/generators/length",
          items: [],
        },{
          title: "number",
          href: "/docs/generators/number",
          items: [],
        },{
          title: "percentage",
          href: "/docs/generators/percentage",
          items: [],
        },{
          title: "position",
          href: "/docs/generators/position",
          items: [],
        },{
          title: "ratio",
          href: "/docs/generators/ratio",
          items: [],
        },{
          title: "resolution",
          href: "/docs/generators/resolution",
          items: [],
        },{
          title: "string",
          href: "/docs/generators/string",
          items: [],
        },{
          title: "time",
          href: "/docs/generators/time",
          items: [],
        },{
          title: "url",
          href: "/docs/generators/url",
          items: [],
        },{
          title: "Css Pseudo Elements",
          href: "/docs/generators/css-pseudo-elements",
          items: [],
        },{
          title: "::after",
          href: "/docs/generators/::after",
          items: [],
        },{
          title: "::before",
          href: "/docs/generators/::before",
          items: [],
        },{
          title: "::first-letter",
          href: "/docs/generators/::first-letter",
          items: [],
        },{
          title: "::first-line",
          href: "/docs/generators/::first-line",
          items: [],
        },{
          title: "::placeholder",
          href: "/docs/generators/::placeholder",
          items: [],
        },{
          title: "::selection",
          href: "/docs/generators/::selection",
          items: [],
        },{
          title: "Html Tools",
          href: "/docs/generators/html-tools",
          items: [],
        },{
          title: "Pug to HTML Compiler",
          href: "/docs/generators/pug-to-html-compiler",
          items: [],
        },{
          title: "Markdown to HTML Compiler",
          href: "/docs/generators/markdown-to-html-compiler",
          items: [],
        },{
          title: "HTML to Pug Converter",
          href: "/docs/generators/html-to-pug-converter",
          items: [],
        },{
          title: "HTML to Markdown Converter",
          href: "/docs/generators/html-to-markdown-converter",
          items: [],
        },{
          title: "HTML Character Codes",
          href: "/docs/generators/html-character-codes",
          items: [],
        },{
          title: "HTML Colors",
          href: "/docs/generators/html-colors",
          items: [],
        },{
          title: "HTML Beautifier",
          href: "/docs/generators/html-beautifier",
          items: [],
        },{
          title: "HTML Table Generator",
          href: "/docs/generators/html-table-generator",
          items: [],
        },{
          title: "HTML Tags",
          href: "/docs/generators/html-tags",
          items: [],
        },{
          title: "HTML Online Editor",
          href: "/docs/generators/html-online-editor",
          items: [],
        },{
          title: "HTML Tutorial",
          href: "/docs/generators/html-tutorial",
          items: [],
        },{
          title: "HTML Validator",
          href: "/docs/generators/html-validator",
          items: [],
        },{
          title: "Css Tools",
          href: "/docs/generators/css-tools",
          items: [],
        },{
          title: "LESS to CSS Compiler",
          href: "/docs/generators/less-to-css-compiler",
          items: [],
        },{
          title: "SCSS to CSS Compiler",
          href: "/docs/generators/scss-to-css-compiler",
          items: [],
        },{
          title: "Stylus to CSS Compiler",
          href: "/docs/generators/stylus-to-css-compiler",
          items: [],
        },{
          title: "CSS to LESS Converter",
          href: "/docs/generators/css-to-less-converter",
          items: [],
        },{
          title: "CSS to SCSS Converter",
          href: "/docs/generators/css-to-scss-converter",
          items: [],
        },{
          title: "CSS to Stylus Converter",
          href: "/docs/generators/css-to-stylus-converter",
          items: [],
        },{
          title: "CSS Color Converter",
          href: "/docs/generators/css-color-converter",
          items: [],
        },{
          title: "CSS Cursor Viewer",
          href: "/docs/generators/css-cursor-viewer",
          items: [],
        },{
          title: "CSS Font Preview",
          href: "/docs/generators/css-font-preview",
          items: [],
        },{
          title: "CSS Code Formatter",
          href: "/docs/generators/css-code-formatter",
          items: [],
        },{
          title: "CSS Lengths",
          href: "/docs/generators/css-lengths",
          items: [],
        },{
          title: "CSS Code Optimizer",
          href: "/docs/generators/css-code-optimizer",
          items: [],
        },{
          title: "CSS Validator",
          href: "/docs/generators/css-validator",
          items: [],
        },{
          title: "CSS Visual Style Editor",
          href: "/docs/generators/css-visual-style-editor",
          items: [],
        },{
          title: "Convert Image to Data",
          href: "/docs/generators/convert-image-to-data",
          items: [],
        },{
          title: "Online CSS Editor",
          href: "/docs/generators/online-css-editor",
          items: [],
        }
      ],
    },
    {
      title: "Packages",
      items: [
        {
          title: "Npm",
          href: "/docs/packages/prisma",
          items: [],
        },
        {
          title: "Pip",
          href: "/docs/packages/pip",
          items: [],
        },
        {
          title: "Docker",
          href: "/docs/packages/Docker",
          items: [],
        },
        {
          title: "Go",
          href: "/docs/packages/go",
          items: [],
        },
        {
          title: "Maven",
          href: "/docs/packages/maven",
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
          title: "Lisp ISO/IEC 13816",
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
