import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const routeCommands: Record<string, string> = {
  '/': '> cd ~/',
  '/about': '> cd /about_',
  '/skills': '> ls skills/',
  '/projects': '> ls projects/',
  '/experience': '> cat experience.log',
  '/education': '> cat education.txt',
  '/contact': '> mail --compose',
};

const wipeVariants = {
  initial: { scaleX: 1, originX: 1 },
  animate: {
    scaleX: 0,
    originX: 1,
    transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1] as const, delay: 0.05 },
  },
  exit: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const scanlineVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: 0,
    transition: { duration: 1.25, delay: 0.2 },
  },
  exit: {
    opacity: [0, 0.6, 0.4],
    transition: { duration: 1.25, times: [0, 0.4, 1] },
  },
};

const commandVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: 1.25 },
  },
  exit: {
    opacity: [0, 0, 1],
    transition: { duration: 1.25, times: [0, 0.3, 1] },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.25, delay: 0.25, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.25 },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const command = routeCommands[location.pathname] || '> cd ~/';

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="page-transition-wrapper">
        {/* Green wipe bar */}
        <motion.div
          className="wipe-bar"
          variants={wipeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />

        {/* CRT scanlines overlay */}
        <motion.div
          className="scanlines-overlay"
          variants={scanlineVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />

        {/* Terminal command text */}
        <motion.div
          className="terminal-command"
          variants={commandVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {command}
        </motion.div>

        {/* Page content */}
        <motion.div
          className="page-content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
