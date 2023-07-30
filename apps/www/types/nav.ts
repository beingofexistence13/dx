import { Icons } from "@/components/icons"

export interface NavItem {
  title?: string
  logo?: string
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
  [x: string]: any;
}

export interface SidebarNavItem extends NavItemWithChildren {}
