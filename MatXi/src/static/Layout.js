import Header from './Header'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// FIX EXIT ANIMATIONS.

const layout = ((page, key) => (
  <div className='margin' >
    < Header />
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1, ease: "linear" }}
        transition={{ duration: 0.25, delay: 0 }}
        exit={{ y: 5, opacity: 0 }}
        key={key}
      >

        {page}
      </motion.div>
    </AnimatePresence>
    <section className='layout'>
      <ul className='text-sm mt-16 space-y-2'>
        <li className='link'>Email: <a href='mailto:bryanhar100@gmail.com'>bryanthar100@gmail.com</a></li>
        <li className='link'>Github: <a href='https://github.com/dreamShepherd'>@DreamShepherd</a></li>
        <li className='link'>Linkedin: <a href='https://www.linkedin.com/in/bryant-har-a260ab186/'>@bryant-har</a></li>
      </ul>
    </section>
  </div >
))

export { layout }
