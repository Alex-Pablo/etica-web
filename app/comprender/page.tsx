
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Personaje from "../../components/pComprenderLasPer/personaje";
import ComprenderSection from "../../components/pComprenderLasPer/comprender";
import Entendimiento from "@/components/pComprenderLasPer/entendimiento";
import Valores from "@/components/pComprenderLasPer/valores";
import Antencion from "@/components/pComprenderLasPer/atencion";
import Empatia from "@/components/pComprenderLasPer/empatia";

export default function Comprender() {
  // Por defecto el estado es 'personaje' para que se muestre este contenido al cargar la página
  const [selectedContent, setSelectedContent] = useState<string>("personaje");

  // Contenido dinámico basado en el ítem seleccionado
  const renderContent = () => {
    switch (selectedContent) {
      case "personaje":
        return <Personaje />;
      case "comprender":
        return <ComprenderSection />;
      case "entendimiento":
        return <Entendimiento />;
      case "valores":
        return <Valores />;
      case "atencion":
        return <Antencion />;
      case "empatia":
        return <Empatia />;
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
              Principio de comprender a las personas
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
            onClick={() => setSelectedContent("comprender")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Comprender a las personas</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("entendimiento")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Entendimiento</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("valores")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Valores</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("atencion")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Atención</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20
                        py-2 px-5 mt-3 cursor-pointer"
            onClick={() => setSelectedContent("empatia")}
          >
            <h5 className="mb-1 text-base font-medium leading-tight text-slate-700">Empatía</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
