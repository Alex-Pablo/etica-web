
"use client"
import { motion } from "framer-motion";
export default function Comprender() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Comprender a las personas</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Ponte de acuerdo con tu adversario pronto, mientras estás con él en el camino, no
          sea que te entregue al juez y éste al guardia y seas echado a la cárcel.
          <span className="text-base italic font-bold text-blue-600"> Mateo 5:25</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">
        El principio de comprender a las personas se basa en la enseñanza bíblica de Mateo
        5:25, que sugiere buscar acuerdos antes de que los conflictos escalen. Muchas
        veces, no entendemos el comportamiento o las intenciones de los demás, lo que
        puede llevar a malentendidos y conflictos. Sin embargo, si nos esforzamos en
        conocer a las personas, podemos evitar disputas y mejorar nuestras relaciones.
        El conflicto es una parte inevitable de las relaciones sociales, y aunque
        históricamente se consideraba algo negativo, ahora se reconoce que puede ser
        constructivo si se maneja adecuadamente. El conflicto debe enfrentarse con
        acuerdos, los cuales son convenios entre personas para resolver diferencias,
        cediendo cada parte algo en beneficio de la armonía. Estos acuerdos permiten
        mejorar las relaciones, fomentan el autoconocimiento y aumentan la probabilidad
        de resolver conflictos futuros de manera positiva.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">-La vida es el acuerdo al que llegamos, entre lo que el ego desea hacer, lo
          que la experiencia nos dice que hagamos y lo que los impulsos nos permiten
          hacer.<span className="font-medium"> Bruce Crampton, golfista profesional estadounidense. </span>
        </p>
        <p className="italic pl-8 mt-2">No hagamos acuerdos por temor y nunca temamos hacer acuerdos.
          <span className="font-medium"> John F. Kennedy. Ex presidente de los Estados Unidos de Norte América. </span>
        </p>
      </motion.div>
    </div>
  );
}
