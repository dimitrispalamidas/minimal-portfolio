import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-950">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Page not found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">That URL is not part of this site.</p>
      <Button asChild className="rounded-full">
        <Link href="/">Back to dimitrispalamidas.com</Link>
      </Button>
    </div>
  )
}
