
"use client"
import { motion } from "framer-motion";
export default function PIntegridad() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Integridad</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          El hombre de integridad camina seguro.
          <span className="text-base italic font-bold text-blue-600">
            Proverbios 10:9
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Cualidad de íntegro (recto, probo, intachable).
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “La integridad personal es como una espada: no debería blandirse hasta el momento de ponerla a prueba.”
          <span className="font-medium">Ken Follett</span>
        </p>
      </motion.div>

      <div className="border-2 border-white border-t-gray-700/10 mt-6 flex flex-row justify-center p-6">
        <div className="shadow-xl rounded-lg">
          <iframe
            className="rounded-lg"
            width="450"
            height="253"
            src="https://www.youtube.com/embed/UPMUmS54P-0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
