"use client"
import { motion } from "framer-motion";
export default function Obediencia() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Obediencia</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          Y será que, si oyeres atentamente la voz de Jehová tu Dios, para guardar y poner por obra todos sus mandamientos... todas estas bendiciones vendrán sobre ti.
          <span className="text-base italic font-bold text-blue-600">
            Deuteronomio 28:1-2
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Acción de obedecer (cumplir la voluntad de quien manda).
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “Obedeced más a los que enseñan que a los que mandan.”
          <span className="font-medium">San Agustín</span>
        </p>
      </motion.div>
    </div>
  );
}
