"use client"
import { motion } from "framer-motion";
export default function Humildad() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Humildad</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          Dios resiste a los soberbios y da gracia a los humildes.
          <span className="text-base italic font-bold text-blue-600">
            Santiago 4:6
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Virtud que consiste en el conocimiento de las propias limitaciones y debilidades y en obrar de acuerdo con este conocimiento.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamiento para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “La humildad consiste en callar nuestras virtudes y permitir que los demás.”
          <span className="font-medium">Rita García Castro</span>
        </p>
      </motion.div>
    </div>
  );
}
