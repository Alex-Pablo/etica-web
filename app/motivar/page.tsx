
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PMotivar from "@/components/pMotivar/pMotivar";
import Proposito from "@/components/pMotivar/propisito";
import Motivacion from "@/components/pMotivar/motivacion";
import Vision from "@/components/pMotivar/vision";
import Mision from "@/components/pMotivar/mision";
export default function Motivar() {
  const [selectedContent, setSelectedContent] = useState<string>("motivar");

  // Contenido dinámico basado en el ítem seleccionado
  const renderContent = () => {
    switch (selectedContent) {
      case "motivar":
        return <PMotivar />;
      case "proposito":
        return <Proposito />;
      case "motivacion":
        return <Motivacion />;
      case "vision":
        return <Vision />;
      case "mision":
        return <Mision />;
      default:
        return <p>Selecciona un ítem para ver más detalles.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col py-4">
      <div className="flex-1 grid grid-cols-12 gap-4">
        <div className="col-span-10 border-2 border-x-gray-400/20 border-y-white px-6">
          <div className="flex flex-row items-center justify-start mb-4">
            <h2 className="text-xl font-semibold text-gray-700/80">
              Principio de Motivar a las personas
            </h2>
          </div>

          <div className="h-[calc(100vh-150px)] overflow-y-auto">
            {renderContent()}
          </div>

        </div>

        <div className="bg-blue w-full flex flex-col col-start-11 col-end-13 py-4 gap-2">
          <h3 className="mb-1 text-xl font-semibold leading-tight">Contenido</h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("motivar")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Motivar a las personas</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("proposito")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Proposito</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("motivacion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Motivacion</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("vision")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Vision</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("mision")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Mision</h5>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
