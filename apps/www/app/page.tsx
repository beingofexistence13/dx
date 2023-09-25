"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as z from "zod"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { updateDevMode } from "@/hooks/slices/devModeSlice"
import { updateHello } from "@/hooks/slices/helloToolSlice"
import { Icons } from "@/components/icons"
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
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button as ButtonShadcnUi,
  Calendar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
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
  Dialog,
  DialogContent,
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
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  navigationMenuTriggerStyle,
  toast,
  toggleVariants,
  useFormField,
  useToast,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui"


const github_repos = [
  { name: "adobe-alternatives", description: "A list of alternatives for Adobe software" },
  { name: "ai-photo-restorer", description: "null" },
  { name: "ai_summerizer", description: "This will be a step forward for me as ManFromEarth" },
  { name: "aladdin", description: ":pancakes: Pancake main features (farms, pools, IFO, lottery, profiles)" },
  { name: "aladdin-website-builder", description: "Low code project to build admin panels, internal tools, and dashboards. Integrates with 15+ databases and any API." },
  { name: "algo", description: "Set up a personal VPN in the cloud" },
  { name: "analytics", description: "Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics alternative to Google Analytics." },
  { name: "anime", description: "JavaScript animation engine" },
  { name: "ansible", description: "Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com." },
  { name: "app-directory", description: "null" },
  { name: "app-ideas", description: "A Collection of application ideas which can be used to improve your coding skills." },
  { name: "app-playground", description: "https://app-dir.vercel.app/" },
  { name: "appflow", description: "Appflow -> Website Builder with AI (If you really want to make a scalable website then you should use a freelancer. But still, by AppFlow you can have a starter template. And if you are a client, then you can use this to give anidea of how your website should be!!!)" },
  { name: "appflow-native", description: "Appflow Native ->Native Apps Builder with AI (If you really want to make a scalable app then you should use a freelancer. But still, by AppFlow Native you can have a starter template. And if you are a client, then you canuse this to give an idea of how your app should be!!!)" },
  { name: "ar.js", description: "Image tracking, Location Based AR, Marker tracking. All on the Web." },
  { name: "arduino-ide", description: "Arduino IDE 2.x" },
  { name: "arduinocore-api", description: "Hardware independent layer of the Arduino cores defining the official API" },
  { name: "argparse", description: "CLI arguments parser for node.js. JS port of python's argparse module." },
  { name: "astro", description: "The all-in-one web framework designed for speed. ⭐️ Star to support our work!" },
  { name: "awesome-arduino", description: "A curated list of awesome Arduino hardwares, libraries and softwares with update script" },
  { name: "awesome-chatgpt-prompts", description: "This repo includes ChatGPT prompt curation to use ChatGPT better." },
  { name: "awesome-cpp", description: "A curated list of awesome C++ (or C) frameworks, libraries, resources, and shiny things. Inspired by awesome-... stuff." },
  { name: "awesome-dataScience", description: "Python Data Science Handbook: full text in Jupyter Notebooks" },
  { name: "awesome-docker", description: ":whale: A curated list of Docker resources and projects" },
  { name: "awesome-github-user", description: "😎 Awesome lists about all kinds of interesting topics" },
  { name: "awesome-hacking", description: "A collection of various awesome lists for hackers, pentesters and security researchers" },
  { name: "awesome-machine-learning", description: "A curated list of awesome Machine Learning frameworks, libraries and software." },
  { name: "awesome-php", description: "A curated list of amazingly awesome PHP libraries, resources and shiny things." },
  { name: "awesome-python", description: "A curated list of awesome Python frameworks, libraries, software and resources" },
  { name: "awesome-react", description: "A collection of awesome things regarding React ecosystem" },
  { name: "awesome-react-native", description: "Awesome React Native components, news, tools, and learning material!" },
  { name: "bash", description: "How to deploy vscode in the browser" },
  { name: "BeingOfExistence", description: "Just a boy!!!" },
  { name: "best-websites-a-programmer-should-visit", description: ":link: Some useful websites for programmers." },
  { name: "bitcoin", description: "Bitcoin Core integration/staging tree" },
  { name: "blink", description: "tiniest x86-64-linux emulator" },
  { name: "brave-browser", description: "Next generation Brave browser for Android, Linux, macOS, Windows." },
  { name: "brave-core", description: "Core engine for the Brave browser for Android, Linux, macOS, Windows. For issues https://github.com/brave/brave-browser/issues" },
  { name: "build-your-own-x", description: "Master programming by recreating your favorite technologies from scratch." },
  { name: "bun", description: "Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one" },
  { name: "caddy", description: "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS" },
  { name: "chainlist", description: "Hi" },
  { name: "chains", description: "provides metadata for chains" },
  { name: "chakra-ui", description: "⚡️ Simple, Modular & Accessible UI Components for your React Applications" },
  { name: "chalk", description: "🖍 Terminal string styling done right" },
  { name: "chalk-animation", description: ":clapper: Colorful animations in terminal output" },
  { name: "changemycursor", description: "chrome extension to change your cursor" },
  { name: "chartjs", description: "Simple HTML5 Charts using the <canvas> tag" },
  { name: "chatbot-ui", description: "null" },
  { name: "ChatGPT-Desktop", description: "🔮 ChatGPT Desktop Application (Mac, Windows and Linux)" },
  { name: "chatgpt4-nextjs", description: "A well-designed cross-platform ChatGPT UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT 应用。" },
  { name: "cheat.sh", description: "the only cheat sheet you need" },
  { name: "chromium", description: "The official GitHub mirror of the Chromium source" },
  { name: "clean-code-javascript", description: ":bathtub: Clean Code concepts adapted for JavaScript" },
  { name: "clean-code-typescript", description: "Clean Code concepts adapted for TypeScript" },
  { name: "cleave.js", description: "Format input text content when you are typing..." },
  { name: "clients", description: "Bitwarden client applications (web, browser extension, desktop, and cli)" },
  { name: "cliui", description: "easily create complex multi-column command-line-interfaces." },
  { name: "clone-wars", description: "100+ open-source clones of popular sites like Airbnb, Amazon, Instagram, Netflix, Tiktok, Spotify, Whatsapp, Youtube etc. See source code, demo links, tech stack, github stars." },
  { name: "cockroach", description: "CockroachDB - the open source, cloud-native distributed SQL database." },
  { name: "commander.js", description: "node.js command-line interfaces made easy" },
  { name: "connect", description: "Will intregate youtube,facebook and.." },
  { name: "cpp-learning", description: "Curated list of project-based tutorials" },
  { name: "cpp-notes", description: ":books: 技术面试必备基础知识、Leetcode、计算机操作系统、计算机网络、系统设计" },
  { name: "cpython", description: "The Python programming language" },
  { name: "css-protips", description: "⚡️ A collection of tips to help take your CSS skills pro 🦾" },
  { name: "daisyui", description: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️  The most popular, free and open-source Tailwind CSS component library" },
  { name: "dall-e", description: "null" },
  { name: "dashboard", description: "thirdweb.com and the thirdweb dashboard" },
  { name: "datasets", description: "🤗 The largest hub of ready-to-use datasets for ML models with fast, easy-to-use and efficient data manipulation tools" },
  { name: "definitelytyped", description: "The repository for high quality TypeScript type definitions." },
  { name: "design-resources-for-developers", description: "Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more" },
  { name: "detectron2", description: "Detectron2 is a platform for object detection, segmentation and other visual recognition tasks." },
  { name: "developer-roadmap", description: "Interactive roadmaps, guides and other educational content to help developers grow in their careers." },
  { name: "devhome", description: "Dev Home Experience" },
  { name: "devtools", description: "⚙️ Browser devtools extension for debugging Vue.js applications." },
  { name: "diagrams", description: ":art: Diagram as Code for prototyping cloud system architectures" },
  { name: "discord-open-source", description: "List of open source communities living on Discord" },
  { name: "django", description: "The Web framework for perfectionists with deadlines." },
  { name: "docker-compose", description: "Define and run multi-container applications with Docker" },
  { name: "dom-examples", description: "Code examples that accompany various MDN DOM and Web API documentation pages" },
  { name: "drawio", description: "draw.io is a JavaScript, client-side editor for general diagramming and whiteboarding" },
  { name: "drizzle-orm", description: "TypeScript ORM that feels like writing SQL." },
  { name: "dub", description: "An open-source link shortener with built-in analytics + free custom domains." },
  { name: "dx", description: "An opensource product (but if you are rich then you can give me some money) made for Internet WWW stuffs. If you are a full stack developer than you should visit this atleast once in your life. Flawless (Developer Experince) For Web" },
  { name: "dx---30-07-2023", description: "Flawless (Developer Experince) For Web" },
  { name: "dx-native", description: "This is an opensource product (but if you are rich then you can give me some money) made for All Operating Systems stuffs. If you are a full stack developer than you should visit this atleast once in your life. Flawless (Developer Experince) For  Native Apps" },
  { name: "dxcode", description: "Best Code Editer Made By BeingOfExistence" },
  { name: "dxcode-depricated", description: "Best Code Editor Ever Made" },
  { name: "elastic-search", description: "Free and Open, Distributed, RESTful Search Engine" },
  { name: "electron", description: ":electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS" },
  { name: "elysia", description: "Fast, and friendly Bun web framework" },
  { name: "emonswap", description: "The new gen of Blockchain" },
  { name: "eruda", description: "Console for mobile browsers" },
  { name: "etcher", description: "Flash OS images to SD cards & USB drives, safely and easily." },
  { name: "every-programmer-should-know", description: "A collection of (mostly) technical things every software developer should know about" },
  { name: "examples", description: "A set of examples around pytorch in Vision, Text, Reinforcement Learning, etc." },
  { name: "expo", description: "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web." },
  { name: "express", description: "Fast, unopinionated, minimalist web framework for node." },
  { name: "express-typescript", description: "null" },
  { name: "face-recognition", description: "The world's simplest facial recognition api for Python and the command line" },
  { name: "fastText", description: "Library for fast text representation and classification." },
  { name: "FaucETH", description: "Faucet for EVM chains" },
  { name: "ffmpeg", description: "Mirror of https://git.ffmpeg.org/ffmpeg.git" },
  { name: "fig-autocomplete", description: "IDE-style autocomplete for your existing terminal & shell" },
  { name: "Files", description: "Building the best file manager experience for Windows" },
  { name: "flowbite", description: "The most popular and open-source library of Tailwind CSS components" },
  { name: "font-awesome", description: "The iconic SVG, font, and CSS toolkit" },
  { name: "fonts", description: "Font files available from Google Fonts, and a public issue tracker for all things Google Fonts" },
  { name: "formatjs", description: "The monorepo home to all of the FormatJS related libraries, most notably react-intl." },
  { name: "formik", description: "Build forms in React, without the tears 😭 " },
  { name: "free-for-dev", description: "A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev" },
  { name: "friday", description: "Firday: Your Personal AI Friend. It is an advanced AI assistant designed to work seamlessly across various platforms, including websites and apps. Its capabilities extend beyond those of traditional AI assistants like Alexa, Google Assistant, and Siri." },
  { name: "friday3", description: "Never Gonna Give You Up" },
  { name: "front-end-checklist", description: "🗂 The perfect Front-End Checklist for modern websites and  meticulous developers" },
  { name: "fzf", description: ":cherry_blossom: A command-line fuzzy finder" },
  { name: "gestalt", description: "A set of React UI components that supports Pinterest’s design language" },
  { name: "ghost", description: "Turn your audience into a business. Publishing, memberships, subscriptions and newsletters." },
  { name: "github-vscode-theme", description: "GitHub's VS Code themes" },
  { name: "gitpod", description: "The developer platform for on-demand cloud development environments to create software faster and more securely." },
  { name: "gitpod-docker-compose", description: "A Docker Compose template, configured for Gitpod (www.gitpod.io) to give you pre-built, ephemeral development environments in the cloud." },
  { name: "gitstar-ranking", description: "GitHub star ranking for users, organizations and repositories" },
  { name: "givenus0026", description: "🚀givenus0026 -> This repository is dedicated to an NFT Blockchain project. It’s a one-stop solution for creating, buying, and selling NFTs in a secure environment. With robust architecture, efficient smart contracts, and anintuitive interface, this project is set to exceed expectations. Let’s bring your vision to life! 🌟" },
  { name: "go", description: "The Go programming language" },
  { name: "google-keep-clone", description: "Clone of Google Keep built using Django and Javascript" },
  { name: "Google-Keep-using-React-Native", description: "Google Keep with React Native" },
  { name: "googlesearch-termux", description: "Google Search python program.You can search any website in terminal." },
  { name: "gpt-nextjs-example", description: "null" },
  { name: "gradio", description: "Build and share delightful machine learning apps, all in Python. 🌟 Star to support our work!" },
  { name: "grafana", description: "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more. " },
  { name: "graphite", description: "2D raster & vector editor that melds traditional layers & tools with a modern node-based, fully non-destructive procedural workflow." },
  { name: "graphql-spec", description: "GraphQL is a query language and execution engine tied to any backend service." },
  { name: "hacker-scripts", description: "Based on a true story" },
  { name: "hackIn", description: "Login and Logout" },
  { name: "hammer.js", description: "A javascript library for multi-touch gestures :// You can touch this" },
  { name: "has-flag", description: "Check if argv has a specific flag" },
  { name: "head", description: "A simple guide to HTML <head> elements" },
  { name: "headlessui", description: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS." },
  { name: "hello", description: "Multiversal Social Media!!!" },
  { name: "hello-github", description: ":octocat: 分享 GitHub 上有趣、入门级的开源项目。Share interesting, entry-level open source projects on GitHub." },
  { name: "hello-gta5-wasted", description: "nothing" },
  { name: "hello-tazmi", description: "This will be the Main Hello Platform and this project will be done before 31/05/2023(Wednesday)" },
  { name: "home-assistant", description: ":house_with_garden: Open source home automation that puts local control and privacy first." },
  { name: "hoppscotch", description: "👽 Open source API development ecosystem - https://hoppscotch.io" },
  { name: "hover", description: "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, and LESS." },
  { name: "html5-boilerplate", description: "A professional front-end template for building fast, robust, and adaptable web apps or sites." },
  { name: "htmx", description: "</> htmx - high power tools for HTML" },
  { name: "hyperdx", description: "Resolve production issues, fast. An open source observability platform unifying session replays, logs, metrics, traces and errors." },
  { name: "hyperscript", description: "a small scripting language for the web" },
  { name: "hyperui", description: "Free Tailwind CSS components for application UI, ecommerce and marketing with support for dark mode, RTL and Alpine JS 🚀" },
  { name: "ImHex", description: "🔍 A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when working at 3 AM." },
  { name: "inpainter-stable-diffusion", description: "null" },
  { name: "Inquirer.js", description: "A collection of common interactive command line user interfaces." },
  { name: "ipfs", description: "Peer-to-peer hypermedia protocol" },
  { name: "jarvis", description: "JARVIS, a system to connect LLMs with ML community. Paper: https://arxiv.org/pdf/2303.17580.pdf" },
  { name: "joi", description: "The most powerful data validation library for JS" },
  { name: "joplin", description: "Joplin - the secure note taking and to-do app with synchronisation capabilities for Windows, macOS, Linux, Android and iOS." },
  { name: "json-server", description: "Get a full fake REST API with zero coding in less than 30 seconds (seriously)" },
  { name: "keep", description: "Desktop app for Google Keep packaged with Electron" },
  { name: "kiota", description: "OpenAPI based HTTP Client code generator" },
  { name: "kiota-cli-commons", description: "Common set of commands for CLI client generation" },
  { name: "langchain", description: "⚡ Building applications with LLMs through composability ⚡" },
  { name: "laravel", description: "null" },
  { name: "lazygit", description: "simple terminal UI for git commands" },
  { name: "leaflet", description: "🍃 JavaScript library for mobile-friendly interactive maps 🇺🇦" },
  { name: "learn-regex", description: "Learn regex the easy way" },
  { name: "learnopencv", description: "Learn OpenCV  : C++ and Python Examples" },
  { name: "lexical", description: "Lexical is an extensible text editor framework that provides excellent reliability, accessibility and performance." },
  { name: "libsql", description: "libSQL is a fork of SQLite that is both Open Source, and Open Contributions." },
  { name: "linux", description: "Linux kernel source tree" },
  { name: "llama", description: "Inference code for LLaMA models" },
  { name: "localstack", description: "💻 A fully functional local AWS cloud stack. Develop and test your cloud & Serverless apps offline" },
  { name: "log-symbols", description: "Colored symbols for various log levels" },
  { name: "login-widget", description: "LI.FI Widget for cross-chain bridging and swapping. It will drive your multi-chain strategy and attract new users from everywhere." },
  { name: "lottie-web", description: "Render After Effects animations natively on Web, Android and iOS, and React Native. http://airbnb.io/lottie/" },
  { name: "macos-modern-vscode-theme", description: "MacOS Modern is a theme pack styled to match native MacOS as closely as possible. Use recommended settings in the README.md for best results." },
  { name: "ManFromEarth", description: "Today I will make all things I ever wanted to make. Chances comes very less but I can use them all Sumon!!!" },
  { name: "manifesto-terraform", description: "The OpenTF Manifesto expresses concern over HashiCorp's switch of the Terraform license from open-source to the Business Source License (BSL) and calls for the tool's return to a truly open-source license." },
  { name: "manim", description: "Animation engine for explanatory math videos" },
  { name: "mantine", description: "A fully featured React components library" },
  { name: "mastodon", description: "Your self-hosted, globally interconnected microblogging community" },
  { name: "material-design-icons", description: "Material Design icons by Google" },
  { name: "matter-js", description: "a 2D rigid body physics engine for the web ▲● ■" },
  { name: "mediapipe", description: "Cross-platform, customizable ML solutions for live and streaming media." },
  { name: "mega", description: "The mega.nz web client" },
  { name: "meow", description: "🐈 CLI app helper" },
  { name: "metadata-playground", description: "Playground for Solidity metadata hash and CBOR encoded data appended to the contract bytecode." },
  { name: "minio", description: "High Performance Object Storage for AI" },
  { name: "moby", description: "Moby Project - a collaborative project for the container ecosystem to assemble container-based systems" },
  { name: "mockingbird", description: "🚀AI拟声: 5秒内克隆您的声音并生成任意语音内容 Clone a voice in 5 seconds to generate arbitrary speech in real-time" },
  { name: "moment", description: "Parse, validate, manipulate, and display dates in javascript." },
  { name: "monaco-editor", description: "A browser based code editor" },
  { name: "mongodb-starter", description: "null" },
  { name: "mongodb-starter-demo", description: "null" },
  { name: "moralis", description: "This is Moralis!!!" },
  { name: "motion", description: "Open source, production-ready animation and gesture library for React" },
  { name: "motion-canvas", description: "Visualize Complex Ideas Programmatically" },
  { name: "motrix", description: "A full-featured download manager." },
  { name: "multiverse", description: "Multivers: Your Virtual Universe  Explore, interact, and create in 2D and 3D virtual spaces with Multivers. Dive into animated worlds, meet iconic characters, and experience the internet like never before. Welcome to your virtual adventure!" },
  { name: "my-website", description: "First iteration of my personal website build with Next.js" },
  { name: "neovim", description: "Vim-fork focused on extensibility and usability" },
  { name: "netdata", description: "Monitor your servers, containers, and applications, in high-resolution and in real-time!" },
  { name: "netlify-alchemy-dapp-boilerplates", description: "null" },
  { name: "netlify-express", description: "null" },
  { name: "next-auth", description: "Authentication for the Web." },
  { name: "next-auth-example", description: "Example showing how to use NextAuth.js with Next.js" },
  { name: "next.js", description: "The React Framework" },
  { name: "nextjs-chat", description: "null" },
  { name: "nextjs-chat-demo", description: "null" },
  { name: "nextjs-libraries", description: "I will all the libraries I wanted to use ever in websites!!!" },
  { name: "nextjs-openai-doc-search-starter", description: "null" },
  { name: "nextjs-portfolio-pageview-counter", description: "null" },
  { name: "nextui", description: "🚀   Beautiful, fast and modern React UI library." },
  { name: "nodejs.org", description: "The Node.js® Website" },
  { name: "nodemon", description: "Monitor for any changes in your node.js application and automatically restart the server - perfect for development" },
  { name: "normalize.css", description: "A modern alternative to CSS resets" },
  { name: "noter-android", description: "A google keep look alike." },
  { name: "nothing", description: "halfart" },
  { name: "nuejs", description: "Build user interfaces with 10x less code. Alternative to React, Vue, and Svelte" },
  { name: "numpy", description: "The fundamental package for scientific computing with Python." },
  { name: "nuxt", description: "Nuxt is an intuitive and extendable way to create type-safe, performant and production-grade full-stack web apps and websites with Vue 3." },
  { name: "nvdia-tensorflow", description: "An Open Source Machine Learning Framework for Everyone " },
  { name: "nvidia-docker", description: "Build and run Docker containers leveraging NVIDIA GPUs" },
  { name: "nw.js", description: "Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies." },
  { name: "obs-studio", description: "OBS Studio - Free and open source software for live streaming and screen recording" },
  { name: "Obsidian", description: "All Obsidian notes will be stored or will bakeUped in this git repo!!!" },
  { name: "ohmyzsh", description: "🙃   A delightful community-driven (with 2,100+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spiceup your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community." },
  { name: "openai-node", description: "The official Node.js / Typescript library for the OpenAI API" },
  { name: "opencv", description: "Open Source Computer Vision Library" },
  { name: "openshot-qt", description: "OpenShot Video Editor is an award-winning free and open-source video editor for Linux, Mac, and Windows, and is dedicated to delivering high quality video editing and animation solutions to the world." },
  { name: "opentofu", description: "OpenTofu lets you declaratively manage your cloud infrastructure." },
  { name: "openvscode-releases", description: "This repo is only to produce releases for OpenVSCode Server." },
  { name: "OptiVideoEditor-for-android", description: "Native Video editor : Video trim, Audio, Video merge, Slow and fast motion, Text and image, etc..." },
  { name: "ora", description: "Elegant terminal spinner" },
  { name: "otterscan", description: "A blazingly fast, local, Ethereum block explorer built on top of Erigon" },
  { name: "paint-by-text", description: "null" },
  { name: "palm-rlhf-pytorch", description: "Implementation of RLHF (Reinforcement Learning with Human Feedback) on top of the PaLM architecture. Basically ChatGPT but with PaLM" },
  { name: "pandas", description: "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more" },
  { name: "papers-we-love", description: "Papers from the computer science community to read and discuss." },
  { name: "particles.js", description: "A lightweight JavaScript library for creating particles" },
  { name: "passport", description: "Simple, unobtrusive authentication for Node.js." },
  { name: "path-gradient", description: "hello how are khana khake jana!!!" },
  { name: "payloads-all-the-things", description: "A list of useful payloads and bypass for Web Application Security and Pentest/CTF" },
  { name: "pcloud.github.com", description: "pCloud's Developers Website" },
  { name: "pdf.js", description: "PDF Reader in JavaScript" },
  { name: "photo-editor", description: "A Photo Editor library with simple, easy support for image editing using paints,text,filters,emoji and Sticker like stories." },
  { name: "php-laravel", description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation for your next big idea — freeing you to create without sweating the small things." },
  { name: "playwright", description: "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. " },
  { name: "plop", description: "Consistency Made Simple" },
  { name: "pm2", description: "Node.js Production Process Manager with a built-in Load Balancer." },
  { name: "pnpm", description: "Fast, disk space efficient package manager" },
  { name: "postcss", description: "Transforming styles with JS plugins" },
  { name: "pptist", description: "基于 Vue3.x + TypeScript 的在线演示文稿（幻灯片）应用，还原了大部分 Office PowerPoint 常用功能，实现在线PPT的编辑、演示。支持导出PPT文件。" },
  { name: "preline", description: "Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework." },
  { name: "prettier", description: "Prettier is an opinionated code formatter." },
  { name: "prisma", description: "Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB" },
  { name: "project_3D_developer_portfolio", description: "null" },
  { name: "project_ai_mern_image_generation", description: "Build and Deploy a Full Stack MERN AI Image Generation App MidJourney & DALL E Clone" },
  { name: "prometheus", description: "The Prometheus monitoring system and time series database." },
  { name: "promptflow", description: "Build high-quality LLM apps - from prototyping, testing to production deployment and monitoring." },
  { name: "prompts", description: "❯ Lightweight, beautiful and user-friendly interactive prompts" },
  { name: "public-apis", description: "A collective list of free APIs" },
  { name: "puppeteer", description: "Node.js API for Chrome " },
  { name: "pygwalker", description: "PyGWalker: Turn your pandas dataframe into an interactive UI for visual analysis" },
  { name: "python-patterns", description: "A collection of design patterns/idioms in Python" },
  { name: "rath", description: "Next generation of automated data exploratory analysis and visualization platform." },
  { name: "rclone", description: "rsync for cloud storage - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files" },
  { name: "react", description: "A declarative, efficient, and flexible JavaScript library for building user interfaces." },
  { name: "react-beautiful-dnd", description: "Beautiful and accessible drag and drop for lists with React" },
  { name: "react-dnd", description: "Drag and Drop for React" },
  { name: "react-email", description: "💌 Build and send emails using React" },
  { name: "react-iconly", description: "🌈    React component for Iconly icons" },
  { name: "react-motion", description: "A spring that solves your animation problems." },
  { name: "react-native", description: "A framework for building native applications using React" },
  { name: "react-native-photo-editor", description: "🌄 Photo editor using native modules for iOS and Android. Inherit from 2 available libraries, ZLImageEditor (iOS) and PhotoEditor (Android)" },
  { name: "react-native-video-processing", description: "Native Video editing/trimming/compressing  :movie_camera: library for React-Native" },
  { name: "react-phone-input-2", description: ":telephone_receiver: Highly customizable phone input component with auto formatting" },
  { name: "react-redux", description: "Official React bindings for Redux" },
  { name: "react-three-fiber", description: "🇨🇭 A React renderer for Three.js" },
  { name: "react-use", description: "React Hooks — 👍" },
  { name: "react-virtualized", description: "React components for efficiently rendering large lists and tabular data" },
  { name: "real-time-voice-cloning", description: "Clone a voice in 5 seconds to generate arbitrary speech in real-time" },
  { name: "realworld", description: "The mother of all demo app — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more" },
  { name: "redux-form", description: "A Higher Order Component using react-redux to keep form state in a Redux store" },
  { name: "rimraf", description: "A `rm -rf` util for nodejs" },
  { name: "rippleui", description: "Clean, modern and beautiful Tailwind CSS components." },
  { name: "rocket.chat", description: "The communications platform that puts data protection first." },
  { name: "rust", description: "Empowering everyone to build reliable and efficient software." },
  { name: "rustdesk", description: "An open-source remote desktop, and alternative to TeamViewer." },
  { name: "sass", description: "Sass makes CSS fun!" },
  { name: "scrapy", description: "Scrapy, a fast high-level web crawling & scraping framework for Python." },
  { name: "scrcpy", description: "Display and control your Android device" },
  { name: "scribble-diffusion", description: "null" },
  { name: "scribble-diffusion-demo", description: "null" },
  { name: "sentry", description: "Developer-first error tracking and performance monitoring" },
  { name: "sharex", description: "ShareX is a free and open source program that lets you capture or record any area of your screen and share it with a single press of a key. It also allows uploading images, text or other types of files to many supported destinations you can choose from." },
  { name: "signal-android-app", description: "A private messenger for Android." },
  { name: "sira", description: "🕹 Customizable and 😍 accessible design system which provides TailwindCSS  component class name library to build modern UI. 💥" },
  { name: "skateshop", description: "An open source e-commerce skateshop build with everything new in Next.js 13." },
  { name: "snapdrop", description: "A Progressive Web App for local file sharing " },
  { name: "socket.io", description: "Realtime application framework (Node.JS server)" },
  { name: "solana", description: "Web-Scale Blockchain for fast, secure, scalable, decentralized apps and marketplaces." },
  { name: "solidity", description: "Solidity, the Smart Contract Programming Language" },
  { name: "spark", description: "Apache Spark - A unified analytics engine for large-scale data processing" },
  { name: "splash-screen", description: "Just a simple splash screen to work with!!!" },
  { name: "spleeter", description: "Deezer source separation library including pretrained models." },
  { name: "src", description: "Source-code used in Kiwi Browser for Android" },
  { name: "stable-diffusion", description: "A latent text-to-image diffusion model" },
  { name: "stable-diffusion-webui", description: "Stable Diffusion web UI" },
  { name: "stablediffusion", description: "High-Resolution Image Synthesis with Latent Diffusion Models" },
  { name: "storage", description: "Google Drive clone completely anonymous" },
  { name: "strapi", description: "🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first." },
  { name: "string-width", description: "Get the visual width of a string - the number of columns required to display it" },
  { name: "styled-components", description: "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅" },
  { name: "styled-icons", description: "💅 Popular icon packs like Font Awesome, Material Design, and Octicons, available as React Styled Components" },
  { name: "supabase", description: "The open source Firebase alternative. Follow to stay updated about our public Beta." },
  { name: "superplate", description: " A well-structured production-ready frontend boilerplate with Typescript, React Testing Library, styled-component, React Query, .env, Axios, Bundle Analyzer, Prettier and 30+ plugins. superplate creates projects for React.js,Next.js, and refine. https://pankod.github.io/superplate/" },
  { name: "superset", description: "Apache Superset is a Data Visualization and Data Exploration Platform" },
  { name: "swiper", description: "Most modern mobile touch slider with hardware accelerated transitions" },
  { name: "swr", description: "React Hooks for Data Fetching" },
  { name: "syncthing", description: "Open Source Continuous File Synchronization" },
  { name: "system-design-primer", description: "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards." },
  { name: "tabby", description: "A terminal for a more modern age" },
  { name: "tailgrids", description: "Free Tailwind CSS UI Components - Crafted for modern websites, landing pages and web apps. TailGrids Core is free and open-source so, feel free to use with your personal or commercial projects. If you would like to show your support and love, don't forget to give us a star 🌟" },
  { name: "tailwindcss-documentation", description: "The Tailwind CSS documentation website." },
  { name: "tailwindcss-intellisense", description: "Intelligent Tailwind CSS tooling for Visual Studio Code" },
  { name: "tauri", description: "Build smaller, faster, and more secure desktop applications with a web frontend." },
  { name: "taxonomy", description: "An open source application built using the new router, server components and everything new in Next.js 13." },
  { name: "tdesktop", description: "Telegram Desktop messaging app" },
  { name: "template-typescript-node", description: "null" },
  { name: "tensorflow", description: "An Open Source Machine Learning Framework for Everyone" },
  { name: "termux-app", description: "Termux - a terminal emulator application for Android OS extendible by variety of packages." },
  { name: "tesseract", description: "Tesseract Open Source OCR Engine (main repository)" },
  { name: "the-art-of-command-line", description: "Master the command line, in one page" },
  { name: "thirdweb-dashboard-web3", description: "null" },
  { name: "three.js", description: "JavaScript 3D Library." },
  { name: "threejs-nextjs", description: "null" },
  { name: "tmux", description: "tmux source code" },
  { name: "todo", description: "Just start!!!" },
  { name: "traefik", description: "The Cloud Native Application Proxy" },
  { name: "transform", description: "A polyglot web converter." },
  { name: "transformers", description: "🤗 Transformers: State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX." },
  { name: "trash", description: "Terabytes,Zetabytes,Qurdrillion" },
  { name: "triplex", description: "▵ Visually edit React Three Fiber components where your code is source of truth." },
  { name: "trpc", description: "🧙‍♀️  Move Fast and Break Nothing. End-to-end typesafe APIs made easy. " },
  { name: "ts-rust-zig-deez", description: "rust obsidian visulizer" },
  { name: "tts", description: ":robot: :speech_balloon: Deep learning for Text to Speech  (Discussion forum: https://discourse.mozilla.org/c/tts)" },
  { name: "twemoji", description: "Emoji for everyone. https://twemoji.twitter.com/" },
  { name: "twitter-algorithm", description: "Source code for Twitter's Recommendation Algorithm" },
  { name: "twitter-website", description: "Twitter's open source website, identifying projects we've released, organizations we support, and the work we do to support open source." },
  { name: "typeahead.js", description: "typeahead.js is a fast and fully-featured autocomplete library" },
  { name: "typed-html", description: "TypeSafe HTML templates using TypeScript. No need to learn a template library." },
  { name: "typescript", description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output." },
  { name: "unioffice", description: "Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents" },
  { name: "unsplash", description: "Image Gallery app built with React, Tailwind CSS, Unsplash API, and Axios." },
  { name: "uppy", description: "The next open source file uploader for web browsers :dog: " },
  { name: "uptime-kuma", description: "A fancy self-hosted monitoring tool" },
  { name: "vercel", description: "Develop. Preview. Ship." },
  { name: "video-editor", description: "Free and open source video editor, based on MLT Framework and KDE Frameworks 5" },
  { name: "video.js", description: "Video.js - open source HTML5 video player" },
  { name: "visx", description: "🐯 visx | visualization components" },
  { name: "vlc", description: "VLC media player - All pull requests are ignored, please follow https://wiki.videolan.org/Sending_Patches_VLC/" },
  { name: "vscode", description: "Visual Studio Code" },
  { name: "vscode-material-icon-theme", description: "Available on the VSCode Marketplace" },
  { name: "vscode-no-extention", description: "null" },
  { name: "vscode-power-mode", description: "Your code is powerful, unleash it! The extension made popular by Code in the Dark has finally made its way to VS Code." },
  { name: "vscodium-vscdoe", description: "null" },
  { name: "vue2-elm", description: "Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用" },
  { name: "wallet-adapter", description: "Modular TypeScript wallet adapters and components for Solana applications." },
  { name: "walletconnect-monorepo", description: "WalletConnect Monorepo " },
  { name: "walleth", description: "free (libre) native Android Ethereum wallet" },
  { name: "webgl-fluid-simulation", description: "Play with fluids in your browser (works even on mobile)" },
  { name: "whisper", description: "Robust Speech Recognition via Large-Scale Weak Supervision" },
  { name: "windows-terminal", description: "The new Windows Terminal and the original Windows console host, all in the same place!" },
  { name: "wrk", description: "Modern HTTP benchmarking tool" },
  { name: "x-decoder", description: "[CVPR 2023] Official Implementation of X-Decoder for generalized decoding for pixel, image and language" },
  { name: "you-get", description: ":arrow_double_down: Dumb downloader that scrapes the web" },
  { name: "youtube-api-samples", description: "Code samples for YouTube APIs, including the YouTube Data API, YouTube Analytics API, and YouTube Live Streaming API. The repo contains language-specific directories that contain the samples." },
  { name: "youtube-dl", description: "Command-line program to download videos from YouTube.com and other video sites" },
  { name: "zig", description: "General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software." },
  { name: "zx", description: "A tool for writing better scripts" },
]


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>Github Repoes will be shown here</h1>
    </section>
  )
}

{/* <div className="fluid-simulation-container w-[360px] max-w-[90%] h-[500px] overflow-y-auto overflow-x-hidden border rounded-lg p-5 space-y-3">
        <h1 className="w-full h-[50px] p-3 flex items-start justify-center hover:items-center hover:bg-[--code-foreground] bold text-md rounded-lg hover:animate-bounce">
          Fluid Simulation Controller
        </h1>
        <div className="quality-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
            Quality
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="medium">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="very-low">Very Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="simResolution-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
            Sim Re..
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className="whitespace-nowrap w-[150px] text-sm text-ellipsis placeholder:text-red-600"
                placeholder="Select a Sim R.."
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="medium">32</SelectItem>
                <SelectItem value="medium">64</SelectItem>
                <SelectItem value="low">128</SelectItem>
                <SelectItem value="very-low">258</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Density Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Pressure
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Splat Radius
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>

        <Form {...form}>
          <form
            className="h-auto w-full"
          >
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <div className="space-y-3">
                  {items.map((item) => (
                    <FormItem
                      key={item.id}
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "flex h-[50px] flex-row items-center justify-between rounded-lg border"
                      )}
                    >
                      <FormLabel className="flex items-center justify-center font-normal">
                        {item.label}
                      </FormLabel>
                      <FormControl className="flex items-center justify-center m-0 p-0">
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  ))}
                </div>
              )}
            />
          </form>
        </Form>

        <Collapsible
          open={bloom}
          onOpenChange={setBloom}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Bloom</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0 border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Enabled</h1>
            <Checkbox id="bloom" />
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Intensity
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Theshold
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={sunrays}
          onOpenChange={setSunrays}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Sunrays</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0 border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Enabled</h1>
            <Checkbox id="sunrays" />
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Weight
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={capture}
          onOpenChange={setCapture}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Capture</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0  border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Transparent</h1>
            <Checkbox id="capture" />
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
              <h1>Background Color</h1>
              <h1>(coming soon)</h1>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Take A Screenshot
            </div>
          </CollapsibleContent>
        </Collapsible>
</div> */}

