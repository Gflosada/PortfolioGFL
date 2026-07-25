import Link from "next/link"
import { Github, Linkedin, Mail, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import styles from "@/components/landing-cyberpunk.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className={styles.footerBrand}>
            <span>German Losada_</span>
          </Link>
          <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} German Losada. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/Gflosada" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-white/15 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white flex items-center justify-center"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/innovativedesigner" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-white/15 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://www.behance.net/germanlosada" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-white/15 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white flex items-center justify-center"
            >
              <Eye className="h-5 w-5" />
              <span className="sr-only">Behance</span>
            </Button>
          </Link>
          <Link href="mailto:gflosadaz@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none border border-white/15 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white flex items-center justify-center"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
