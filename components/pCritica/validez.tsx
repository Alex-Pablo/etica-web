
"use client"
import { motion } from "framer-motion";
export default function Validez() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Validez</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          Examinadlo todo; retened lo bueno.
          <span className="text-base italic font-bold text-blue-600">
            1 Tesalonicenses 5:21
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Cualidad de válido, conforme a las leyes o a la lógica.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “Lamentablemente, nuestra crítica consiste en reprochar a los demás el no tener las cualidades que nosotros creemos tener.”
          <span className="font-medium"> Jules Renard</span>
        </p>
      </motion.div>

    </div>
  );
}
