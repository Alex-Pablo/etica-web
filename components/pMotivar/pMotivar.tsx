
"use client"
import { motion } from "framer-motion";
export default function PMotivar() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Motivar a la persona</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">El trabajo tenaz da prosperidad; la especulación apresurada empobrece.
          <span className="text-base italic font-bold text-blue-600"> Sabiduria 7:18</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">Motivación significa tener motivos para la acción. La motivación se basa en aquellos estímulos externos o
        internos que impulsan a las personas a desarrollar una acción y mantener firme su conducta hasta lograr que todos sus objetivos se cumplan.
        <br />
        <br />
        Él decía que, para alcanzar el éxito, los factores más importantes son:
        <br />
        	tener conocimiento definido de lo que se desea lograr.
        <br />
        	perseverancia para lograr el propósito, sin importar cuántas veces se haya fallado.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">La clave del éxito es el trabajo duro y la constancia; de lo contrario no se logra el objetivo propuesto
        </p>
      </motion.div>
    </div>
  );
}
