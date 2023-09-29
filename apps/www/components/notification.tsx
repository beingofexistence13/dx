import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "./icons"
import { Bell } from "lucide-react"

export function NotificationAction() {
    return (
        <Popover>
            <PopoverTrigger asChild>
            <div className="nav-toggles flex h-[35px] w-[35px] items-center justify-center">
            <Bell className="h-4 w-4"/>
          </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <h1>Notifiations</h1>
            </PopoverContent>
        </Popover>
    )
}
