import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fades and lifts its children into view once, the first time they scroll on screen.
 * Renders a plain element when the visitor prefers reduced motion.
 */
export default function Reveal({ as = 'div', children, delay = 0, y = 24, className = '', ...rest }) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
