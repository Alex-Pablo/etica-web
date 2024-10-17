
"use client"
import { motion } from "framer-motion";
export default function Proposito() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Proposito</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">El espíritu a la verdad este es dispuesto, pero la carne es débil
          <span className="text-base italic font-bold text-blue-600"> Marcos 14:38 (VRV)</span>
        </p>
        <p className="text-base italic font-semibold">Aunque el espíritu está dispuesto, la carne es débil
          <span className="text-base italic font-bold text-blue-600"> Marcos 14:38 (LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">¿Alguna vez te has preguntado por qué algunos de nosotros estamos más motivados que los demás?
        <br />
        ¿Por qué algunas personas se levantan temprano en la mañana -como un disparo- y parecen tener más interminable energía durante todo el día, mientras otras tan solo se arrastran?

        <br />
        Los individuos, con tan alta energía, no parecieran necesitar motivación. Algunos dicen que nacieron de esa manera.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Las ideas no son nada sin acción
        </p>
      </motion.div>
    </div>
  );
}
