"use client"
import { motion } from "framer-motion";
export default function PEmpoderamiento() {
  return (
    <div className="mt-8 pl-4">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Empoderamiento</h3>

      <motion.div className="block mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BÍBLICO</span>
        <p className="text-base italic font-semibold">
          He aquí, os doy potestad de hollar serpientes y escorpiones, y sobre todo poder del enemigo; y nada os dañará.
          <span className="text-base italic font-bold text-blue-600">
            Lucas 10:19
          </span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        <p className="font-medium">Definición</p>
        <p>
          Proceso por el cual una persona o grupo adquiere poder e independencia para mejorar su situación.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1 bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          “Casi todos podemos soportar la adversidad, pero si queréis probar el carácter de un hombre, dadle poder.”
          <span className="font-medium">Abraham Lincoln</span>
        </p>
        <p className="italic pl-8 mt-2">
          “El mando debe ser un anexo de la ejemplaridad.”
          <span className="font-medium">José Ortega y Gasset</span>
        </p>
      </motion.div>

      <div className="border-2 border-white border-t-gray-700/10 mt-6 flex flex-row justify-center p-6">
        <div className="shadow-xl rounded-lg">
          <iframe
            className="rounded-lg"
            width="450"
            height="253"
            src="https://www.youtube.com/embed/rk73zDYFzsA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
