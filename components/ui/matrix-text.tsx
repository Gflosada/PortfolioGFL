"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface LetterState {
  char: string
  isMatrix: boolean
  isSpace: boolean
}

interface MatrixTextProps {
  text?: string
  className?: string
  letterClassName?: string
  initialDelay?: number
  letterAnimationDuration?: number
  letterInterval?: number
  matrixCharacters?: string
}

const getLetters = (text: string): LetterState[] =>
  text.split("").map((char) => ({
    char,
    isMatrix: false,
    isSpace: char === " ",
  }))

export function MatrixText({
  text = "HelloWorld!",
  className,
  letterClassName,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
  matrixCharacters = "01",
}: MatrixTextProps) {
  const [letters, setLetters] = useState<LetterState[]>(() => getLetters(text))
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setLetters(getLetters(text))
  }, [text])

  useEffect(() => {
    if (reduceMotion) return

    const timers: ReturnType<typeof setTimeout>[] = []
    const randomMatrixChar = () => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)] ?? "0"

    timers.push(
      setTimeout(() => {
        text.split("").forEach((char, index) => {
          timers.push(
            setTimeout(() => {
              if (char === " ") return

              setLetters((current) => {
                const next = [...current]
                next[index] = {
                  ...next[index],
                  char: randomMatrixChar(),
                  isMatrix: true,
                }
                return next
              })

              timers.push(
                setTimeout(() => {
                  setLetters((current) => {
                    const next = [...current]
                    next[index] = {
                      ...next[index],
                      char,
                      isMatrix: false,
                    }
                    return next
                  })
                }, letterAnimationDuration),
              )
            }, index * letterInterval),
          )
        })
      }, initialDelay),
    )

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [initialDelay, letterAnimationDuration, letterInterval, matrixCharacters, reduceMotion, text])

  return (
    <span className={cn("inline-block whitespace-nowrap", className)} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className={cn("inline-block w-[1ch] text-center", letterClassName)}
          animate={letter.isMatrix ? "matrix" : "normal"}
          variants={{
            normal: {
              color: "inherit",
              textShadow: "inherit",
            },
            matrix: {
              color: "#caff25",
              textShadow: "0 0 12px rgba(202, 255, 37, 0.78), 0 0 26px rgba(202, 255, 37, 0.34)",
            },
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
        >
          {letter.isSpace ? "\u00A0" : letter.char}
        </motion.span>
      ))}
    </span>
  )
}
