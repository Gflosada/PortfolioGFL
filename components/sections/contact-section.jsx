import { Mail, Linkedin, Github } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import styles from "@/components/landing-cyberpunk.module.css"

export function ContactSection() {
  return (
    <section id="contact" className={styles.cyberSection}>
      <div className="container relative z-10">
        <SectionHeading number="06" title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className={styles.contactPanel} data-landing-card>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`${styles.sectionIcon} shrink-0`}>
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className={styles.contactLabel}>Email</div>
                  <div className={`${styles.contactValue} break-all`}>gflosadaz@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${styles.sectionIcon} shrink-0`}>
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className={styles.contactLabel}>LinkedIn</div>
                  <div className={`${styles.contactValue} break-all`}>linkedin.com/in/innovativedesigner</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${styles.sectionIcon} shrink-0`}>
                  <Github className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className={styles.contactLabel}>GitHub</div>
                  <div className={`${styles.contactValue} break-all`}>github.com/Gflosada</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h4 className="text-lg font-medium mb-4">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span>Available for freelance work and full-time opportunities</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h4 className="text-lg font-medium mb-4">References</h4>
              <div className="space-y-2">
                <div className="font-medium">Tatiana P. Lozada</div>
                <div className="text-sm text-zinc-400">Board Certified Behavior Analyst</div>
              </div>
            </div>
          </div>

          <div data-landing-card>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
