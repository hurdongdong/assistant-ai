import { MessageCircle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModelSelector } from "./model-selector"
import { SidebarToggle } from "./sidebar-toggle"
import { useRouter } from "next/navigation"
import { useSidebar } from "@/lib/hooks/use-sidebar"
import { useWindowSize } from "@/lib/hooks/use-window-size"

export function ChatHeader({ selectedModelId }: { selectedModelId: string }) {
  const router = useRouter()
  const { open } = useSidebar()
  const { width: windowWidth } = useWindowSize()

  return (
    <header className="flex sticky top-0 bg-background py-1.5 items-center px-2 md:px-2 gap-2">
      <SidebarToggle />
      {(!open || windowWidth < 768) && (
        <Button
          variant="outline"
          className="order-2 md:order-1 md:px-2 px-2 md:h-fit ml-auto md:ml-0"
          onClick={() => {
            router.push('/')
            router.refresh()
          }}
        >
          <PlusIcon />
          <span className="md:sr-only">New Chat</span>
        </Button>
      )}
      <ModelSelector
        selectedModelId={selectedModelId}
        className="order-1 md:order-2"
      />
      <Button
        className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
        asChild
      >
        <Link
          href="https://www.nousbo.com/request"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          누보에 문의하기
        </Link>
      </Button>
    </header>
  )
}

