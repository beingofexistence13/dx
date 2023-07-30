import { MainNavItem, SidebarNavItem } from "types/nav"

interface SocialMediaConfig {
  platform: MainNavItem[]
}

export const docsConfig: SocialMediaConfig = {
  platform: [
    {
      title: "BeingOfExistence - Youtube",
      logo:'',
      href: "/https://www.youtube.com/channel/UCK0IEdLWxA2EFgucri7z4SA",
    },
    {
      title: "BeingOfExistence Gaming - Youtube",
      logo:'',
      href: "/https://www.youtube.com/@manfromearth-gaming",
    },
    {
      title: "BeingOfExistence Reacts - Youtube",
      logo:'',
      href: "/https://www.youtube.com/@ManFromEarthReacts/",
    },

  ],
}
