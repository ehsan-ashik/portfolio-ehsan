import { navitems } from '@/data/navdata';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Nav() {
  const variants = {
    hidden: { right: '100%' },
    visible: { right: '50%' }
  };

  const variants_selected = {
    hidden: { right: '50%' },
    visible: { right: 0 }
  };
  const pathname = usePathname();
  return (
    <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
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
            className="group relative text-sm"
          >
            {navitem.display}
            {pathname === navitem.path ? (
              <motion.div
                variants={variants_selected}
                initial="hidden"
                animate="visible"
                transition={{ stiffness: 0 }}
                className="group absolute h-[1px] bg-green-500 left-0 bottom-0 right-0"
              ></motion.div>
            ) : null}
            <motion.div
              variants={variants}
              className="group absolute h-[1px] bg-green-500 left-0 bottom-0 right-0"
            ></motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
