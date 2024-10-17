
"use client"
import { motion } from "framer-motion";
export default function Motivacion() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Motivacion</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">El castigo que duele echa el mal del corazón.
          <span className="text-base italic font-bold text-blue-600"> Proverbios(LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">

        El diccionario dice que motivación es la razón o motivo para que uno actúe de una manera determinada; esto significa que hay un motivo o razón para hacer algo.
        Existen tres tipos de motivación que varían mucho, uno del otro, dependiendo de diferentes factores en los que se enfocan: <br /><br />
        1.	Motivación por Incentivos.<br />
        2.	Motivación por el Cumplimiento.<br />
        3.	Motivación por el miedo.<br />
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          Reverencia a Dios y obtendrás sabiduría
          <span className="font-medium"> El rey Salomón</span>
        </p>
      </motion.div>
    </div>
  );
}
