
"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import PEmpoderamiento from "@/components/pEmpoderamiento/pEmpoderamiento";
import Conviccion from "@/components/pEmpoderamiento/conviccion";
import Autoridad from "@/components/pEmpoderamiento/autoridad";
import Delegacion from "@/components/pEmpoderamiento/delegacion";
import Cumplimiento from "@/components/pEmpoderamiento/cumplimiento";
export default function Empoderamiento() {
  const [selectedContent, setSelectedContent] = useState<string>("empoderamiento");

  const renderContent = () => {
    switch (selectedContent) {
      case "empoderamiento":
        return <PEmpoderamiento />;
      case "conviccion":
        return <Conviccion />;
      case "autoridad":
        return <Autoridad />;
      case "delegacion":
        return <Delegacion />;
      case "cumplimiento":
        return <Cumplimiento />;
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
              Principio del Empoderamiento
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
            onClick={() => setSelectedContent("empoderamiento")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Empoderamiento</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("conviccion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Conviccion</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("autoridad")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Autoridad</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("delegacion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Delegacion</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("cumplimiento")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Cumplimiento</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
