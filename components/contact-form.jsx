"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import styles from "@/components/landing-cyberpunk.module.css"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_2rw4y0b', // Replace with your EmailJS service ID
        'template_1h4n3z6', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'NEB6PfHKGvWXW74bw' // Replace with your EmailJS public key
      )

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      // Add alert message
      alert("Thank you for contacting me!")

      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      e.target.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${styles.contactPanel} h-full`}>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="rounded-none border-white/15 bg-black/45 text-white placeholder:text-zinc-500 focus:border-white/50 focus:ring-white/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="rounded-none border-white/15 bg-black/45 text-white placeholder:text-zinc-500 focus:border-white/50 focus:ring-white/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="rounded-none border-white/15 bg-black/45 text-white placeholder:text-zinc-500 focus:border-white/50 focus:ring-white/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="rounded-none border-white/15 bg-black/45 text-white placeholder:text-zinc-500 focus:border-white/50 focus:ring-white/20"
              />
            </div>
            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-none border border-white/20 bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
    </div>
  )
}
