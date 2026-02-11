import { motion } from "framer-motion";
import type { Category } from "../types/Category";
import TopCategories from "./TopCategories";
import { Link } from "react-router";

interface Props {
  categories?: Category[];

}

export default function Categories({ categories = [] }: Props) {
  const topCategories = categories.slice(0, 3);

  return (
    <motion.div
      className="flex flex-col px-40 pb-20 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="font-bold text-3xl mb-2">Browse Categories</h1>
          <p className="text-gray-600 text-base">
            Quality essentials for every wardrobe.
          </p>
        </div>

        <motion.div
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/Categories"
            className="text-[#0d7ff2] text-sm font-medium cursor-pointer flex items-center gap-1"
          >
            View all categories <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>

      <TopCategories topCategories={topCategories} />
    </motion.div>
  );
}
