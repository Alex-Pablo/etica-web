
"use client"
import { motion } from "framer-motion";
export default function Mision() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Mision</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Lo que hagan, háganlo bien, con alegría, como si en vez de estar trabajando para amos terrenales, estuvieran trabajando para el Señor.
          <span className="text-base italic font-bold text-blue-600"> Colosenses 3:23(LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">La Real Academia Española define el término misión como el poder o facultad que se da a una o varias personas de ir a desempeñar algún cometido; se relaciona con la acción de enviar a alguien para determinado fin.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Nadie puede llegar a la cima armado solo de talento. Dios da el talento; el trabajo transforma el talento en genio
          <span className="font-medium"> Anna Pavlona</span>
        </p>
      </motion.div>
    </div>
  );
}
