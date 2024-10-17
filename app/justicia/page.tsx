"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Personaje from "@/components/pJusticia/personaje";
import PJusticia from "@/components/pJusticia/pJusticia";
import Equidad from "@/components/pJusticia/equidad";
import Verdad from "@/components/pJusticia/verdad";
import LeyRetorno from "@/components/pJusticia/leyEtorno";
import Respeto from "@/components/pJusticia/respeto";
export default function Justicia() {
  const [selectedContent, setSelectedContent] = useState<string>("personaje");

  // Contenido dinámico basado en el ítem seleccionado
  const renderContent = () => {
    switch (selectedContent) {
      case "personaje":
        return <Personaje />;
      case "justicia":
        return <PJusticia />;
      case "equidad":
        return <Equidad />;
      case "verdad":
        return <Verdad />;
      case "leyRetorno":
        return <LeyRetorno />;
      case "respeto":
        return <Respeto />;
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
              Principio de Justicia
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
            onClick={() => setSelectedContent("personaje")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Personaje</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("justicia")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Justicia</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("equidad")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Equidad</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("verdad")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Verdad</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("leyRetorno")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Ley del retorno</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("respeto")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Respeto</h5>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
