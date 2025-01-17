"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Personaje from "@/components/pCOmunicacion/personaje";
import PComunicacion from "@/components/pCOmunicacion/pcomunicacion";
import Consideracion from "@/components/pCOmunicacion/consideracion";
import Influencia from "@/components/pCOmunicacion/influencia";
import Reciprocidad from "@/components/pCOmunicacion/reciprocidad";
import Relacion from "@/components/pCOmunicacion/relacion";
export default function Comunicacion() {
  const [selectedContent, setSelectedContent] = useState<string>("personaje");

  const renderContent = () => {
    switch (selectedContent) {
      case "personaje":
        return <Personaje />;
      case "comunicacion":
        return <PComunicacion />;
      case "consideracion":
        return <Consideracion />;
      case "influencia":
        return <Influencia />;
      case "reciprocidad":
        return <Reciprocidad />;
      case "relacion":
        return <Relacion />;
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
              Principio de la comunicación
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
            className="block 
                        w-full flex flex-col rounded-lg text-left 
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
            onClick={() => setSelectedContent("comunicacion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Comunicacion</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("consideracion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Consideracion</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("influencia")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Influencia</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("reciprocidad")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Reciprocidad</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("relacion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Relacion</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
