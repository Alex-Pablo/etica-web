"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import PCritica from "@/components/pCritica/pCritica";
import Juicios from "@/components/pCritica/juicios";
import Superacion from "@/components/pCritica/superacion";
import Beneficions from "@/components/pCritica/beneficios";
import Validez from "@/components/pCritica/validez";
export default function Comunicacion() {
  const [selectedContent, setSelectedContent] = useState<string>("critica");

  const renderContent = () => {
    switch (selectedContent) {
      case "critica":
        return <PCritica />;
      case "juicios":
        return <Juicios />;
      case "superacion":
        return <Superacion />;
      case "beneficios":
        return <Beneficions />;
      case "validez":
        return <Validez />;
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
              Principio de critica
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
            onClick={() => setSelectedContent("critica")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Críticas</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("juicios")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Juicios</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("superacion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Superación</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("beneficios")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Beneficions</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("validez")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Validez</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
