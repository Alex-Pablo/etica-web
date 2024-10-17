"use client"
import { motion } from "framer-motion";
export default function Reciprocidad() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Reciprocidad</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Quiero que los que ya son sabios adquieran mayor sabiduría.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 1:3 (LBD)</span>
        </p>
      </motion.div>

      <motion.div className="mt-6">El diccionario de la Real Academia Española dice que reciprocidad es la
        correspondencia mutua de una persona con otra.  <br /><br />
        La palabra comunicación significa tanto dar como recibir. La buena comunicación
        consiste tanto en oír, como en hablar. Jesús dijo: El que tiene oídos para oír, oiga.
        Él quiso decir: No se limiten apenas a oír mis palabras, escúchenlas
        comprendiéndolas y entendiéndolas. La falta de reciprocidad suele ser la causa
        del fracaso en nuestras relaciones personales, escuchar es un componente clave
        de la reciprocidad que hace posible la comunicación.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">El que presta atención a mis enseñanzas y las pone en práctica es tan sabio
          como el hombre que edificó su casa sobre una roca bien sólida
          <span className="font-medium"> Jesús</span>
        </p>
        <p className="italic pl-8 mt-2"> Escucha a tu padre y a tu madre. Lo que de ellos aprendas te dará buena
          fama y te hará adquirir mucha honra.
          <span className="font-medium"> El rey Salomon</span>
        </p>
      </motion.div>
    </div>
  );
}
