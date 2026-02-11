import { motion } from "framer-motion";
import type { Category } from "../types/Category";
import TopCategories from "./TopCategories";
import { Link } from "react-router";

interface Props {
  categories?: Category[]; 
  onViewAll?: () => void;
}

export default function Categories({ categories=[], onViewAll }: Props) {

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

        <motion.button
          onClick={onViewAll}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-[#0d7ff2] text-sm font-medium cursor-pointer flex items-center gap-1"
        >
          <Link to={"/Categories"}>View all categories</Link>
          <span className="text-lg">→</span>
        </motion.button>
      </div>


      <TopCategories topCategories={topCategories}/>
    </motion.div>
  );
}


