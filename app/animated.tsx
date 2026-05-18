"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

type MotionLinkProps = RevealProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function hiddenState(direction: Direction, reducedMotion: boolean) {
  if (reducedMotion) {
    return { opacity: 1, x: 0, y: 0 };
  }

  return {
    opacity: 0,
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    y: direction === "up" ? 20 : 0,
  };
}

function revealTransition(delay: number, reducedMotion: boolean): Transition {
  return {
    delay: reducedMotion ? 0 : delay,
    duration: reducedMotion ? 0 : 0.62,
    ease: smoothEase,
  };
}

function itemVariants(reducedMotion: boolean): Variants {
  return {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.58,
        ease: smoothEase,
      },
    },
  };
}

export function HeroP({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.p
      className={className}
      initial={hiddenState(direction, reducedMotion)}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={revealTransition(delay, reducedMotion)}
    >
      {children}
    </motion.p>
  );
}

export function HeroH1({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.h1
      className={className}
      initial={hiddenState(direction, reducedMotion)}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={revealTransition(delay, reducedMotion)}
    >
      {children}
    </motion.h1>
  );
}

export function HeroDiv({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      initial={hiddenState(direction, reducedMotion)}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={revealTransition(delay, reducedMotion)}
    >
      {children}
    </motion.div>
  );
}

export function HeroAnchor({
  children,
  className,
  delay = 0,
  direction = "up",
  href,
  target,
  rel,
  "aria-label": ariaLabel,
}: MotionLinkProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      initial={hiddenState(direction, reducedMotion)}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={revealTransition(delay, reducedMotion)}
    >
      {children}
    </motion.a>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: Omit<RevealProps, "direction">) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={revealTransition(delay, reducedMotion)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
}: Omit<RevealProps, "direction">) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: reducedMotion ? 0 : delay,
            staggerChildren: reducedMotion ? 0 : 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerDiv({
  children,
  className,
}: Omit<RevealProps, "delay" | "direction">) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.div className={className} variants={itemVariants(reducedMotion)}>
      {children}
    </motion.div>
  );
}

export function StaggerArticle({
  children,
  className,
}: Omit<RevealProps, "delay" | "direction">) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.article className={className} variants={itemVariants(reducedMotion)}>
      {children}
    </motion.article>
  );
}

export function StaggerAnchor({
  children,
  className,
  href,
  target,
  rel,
  "aria-label": ariaLabel,
}: Omit<MotionLinkProps, "delay" | "direction">) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      variants={itemVariants(reducedMotion)}
    >
      {children}
    </motion.a>
  );
}
