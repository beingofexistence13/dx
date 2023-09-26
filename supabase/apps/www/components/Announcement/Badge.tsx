/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react'
import { Badge } from 'ui'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface Props {
  url: string
  announcement: string
  badge?: string
  target?: '_self' | '_blank'
}

const AnnouncementBadge = ({ url, announcement, badge, target = '_self' }: PropsWithChildren<Props>) => (
  <div className="flex w-full max-w-xl !animate-[fadeIn_0.5s_cubic-bezier(0.25,0.25,0,1)_0.5s_both] justify-center opacity-0">
    <Link href={url} passHref>
      <a
        target={target}
        className="
          border-background-surface-100
          hover:border-background-surface-300
          focus:ring-brand-600 group
          relative
          flex w-auto
          flex-row
          items-center
          gap-2
          overflow-hidden
          rounded-full
          border
          bg-opacity-20
          p-1
          pr-3
          text-left
          text-sm focus:rounded-full focus:outline-none focus:ring-2
          "
      >
        {badge && (
          <Badge color="brand" size="large" className="py-1">
            {badge}
          </Badge>
        )}
        <span className="text-foreground">{announcement}</span>
        <ArrowNarrowRightIcon className="ml-2 h-4 -translate-x-1 transition-transform group-hover:translate-x-0" />
        <div
          className="from-background-surface-100 to-background-surface-300 absolute inset-0
            -z-10
            overflow-hidden rounded-full
            bg-gradient-to-br
            opacity-70
            backdrop-blur-md
            "
        />
      </a>
    </Link>
  </div>
)

export default AnnouncementBadge

