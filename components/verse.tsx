import { motion } from "framer-motion";


const Verse = () => {
  return (
    <div className="flex flex-col gap-2 items-center text-center text-blue-200 bg-transparent te">
      <motion.span
        key="arabic"
        className="inline-block text-2xl font-light text-right ms:text-9xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            delay: 2,
            duration: 0.7,
          },
        }}
      >
        اَ لۡحَمۡدُ لِلّٰهِ الَّذِىۡۤ اَنۡزَلَ عَلٰى عَبۡدِهِ الۡكِتٰبَ وَلَمۡ يَجۡعَلْ لَّهٗ عِوَجًا  ؕ‏
      </motion.span>
      <motion.span
        key="translated"
        className="inline-block text-xs"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            delay: 2,
            duration: 1,
          },
        }}
      >
       صدقه جاريه علي روح :- محمد عبد السلام محمد مبروك
      </motion.span>

    </div>
  );
}

export default Verse;
