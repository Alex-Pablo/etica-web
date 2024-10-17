
"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import PConfiar from "@/components/pConfiar/pConfiar";
import Confianza from "@/components/pConfiar/confianza";
import Direccion from "@/components/pConfiar/direccion";
import Sabiduria from "@/components/pConfiar/sabiduria";
import Obediencia from "@/components/pConfiar/obediencia";
export default function Confiar() {
  const [selectedContent, setSelectedContent] = useState<string>("confiar");

  const renderContent = () => {
    switch (selectedContent) {
      case "confiar":
        return <PConfiar />;
      case "confianza":
        return <Confianza />;
      case "direccion":
        return <Direccion />;
      case "sabiduria":
        return <Sabiduria />;
      case "obediencia":
        return <Obediencia />;
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
              Principio confiar en Dios
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
            onClick={() => setSelectedContent("Confiar")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Confiar</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("confianza")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Confianza</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("direccion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Direccion</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("sabiduria")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Sabiduria</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("obediencia")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Obediencia</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
