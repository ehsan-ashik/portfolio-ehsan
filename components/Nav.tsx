import { navitems } from '@/data/navdata';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Nav() {
  const variants = {
    hidden: { right: '100%' },
    visible: { right: '0' }
  };

  const variants_selected = {
    hidden: { right: 0 },
    visible: { right: 0 }
  };
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center md:flex-row gap-2 md:gap-6 lg:gap-8 opacity-80 font-light">
      {navitems.map((navitem) => (
        <Link href={navitem.path} key={navitem.name}>
          <motion.div
            initial="hidden"
            whileHover="visible"
            transition={{
              stiffness: 0,
              type: 'spring',
              bounce: 120,
              delay: 0.2
            }}
            className="inline-flex group relative"
          >
            {navitem.display}
            {pathname === navitem.path ? (
              <motion.div
                variants={variants_selected}
                initial="hidden"
                animate="visible"
                transition={{ stiffness: 0 }}
                className="group absolute h-[.1rem] bg-primary left-0 bottom-0"
              ></motion.div>
            ) : null}
            <motion.div
              variants={variants}
              className="group absolute h-[.1rem] bg-primary left-0 bottom-0"
            ></motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
