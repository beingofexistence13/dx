import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  description?: string
  website_url?: string
  appStore_url?: string
  googleplayStore_url?: string
  chromewebStore_url?: string
  download?: string
  star?: string
  version?: string
  updated?: string
  logo?: string
  github_repository?: string
  github_repo?: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {
  [x: string]: any
}

export interface SidebarNavItem extends NavItemWithChildren {}
