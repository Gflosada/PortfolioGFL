"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

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
        'template_tpdcvcs', // Replace with your EmailJS template ID
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
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
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
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
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-600 font-medium py-3 px-6 rounded-xl flex justify-center items-center gap-2"
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
    </motion.div>
  )
}
