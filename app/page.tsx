"use client"
import "./globals.css";
import Image from "next/image";
import TextAnimation from "../components/ui/textAnimation"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-4">
      <div className="flex-1 grid grid-cols-8 gap-4">
        <div className="col-span-6 border-2 border-x-gray-400/20 border-y-white px-6">
          <div className="flex flex-row items-center justify-center">
            {/* <h2 className="text-3xl font-semibold text-gray-700/80">Decálogo de Ética del Ingeniero en Sistemas</h2> */}
            <TextAnimation ></TextAnimation>
            <div>
              <Image
                src="/LogoUMG.png"
                width={80}
                height={80}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="mt-3">
            <h6 className="mb-2 text-xl font-semibold leading-tight text-surface/75">Moral</h6>
            <p className="text-base">La ética es una rama de la filosofía que se ocupa del estudio de la moral, los valores y los principios que guían la conducta humana. Analiza qué es lo correcto o incorrecto, lo bueno o malo, y cómo deben actuar las personas en diversas situaciones. La ética no solo se enfoca en las acciones individuales, sino también en las normas que gobiernan a las sociedades y profesiones.
            </p>
          </div>
          <div className="mt-3">
            <h6 className="mb-2 text-xl font-semibold leading-tight text-surface/75">Etica</h6>
            <p className="text-base">La ética es una rama de la filosofía que se ocupa del estudio de la moral, los valores y los principios que guían la conducta humana. Analiza qué es lo correcto o incorrecto, lo bueno o malo, y cómo deben actuar las personas en diversas situaciones. La ética no solo se enfoca en las acciones individuales, sino también en las normas que gobiernan a las sociedades y profesiones.
            </p>
          </div>

          <div className="border-2 border-white border-t-gray-700/10 mt-6 flex flex-row justify-center p-6">
            <div className="shadow-xl rounded-lg">
              <iframe
                className="rounded-lg"
                width="450"
                height="253"
                src="https://www.youtube.com/embed/EAcPykrzpac?si=C0cvEvDasBIjZ1ca"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-blue w-full flex flex-col col-start-7 col-end-9 py-4 gap-2">
          <h3 className="mb-1 text-xl font-semibold leading-tight">Participantes</h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left text-surface shadow-secondary-1  bg-teal-500/7 shadow-lg shadow-teal-600/10 py-1 px-5 mt-3">
            <h5 className="mb-1 text-xl font-medium leading-tight text-slate-700">
              Ediwn
            </h5>
            <h6
              className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
              1223 4234 -4234
            </h6>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left text-surface shadow-secondary-1  bg-emerald-500/4 shadow-lg shadow-emerald-600/20 py-1 px-5 mt-3">
            <h5 className="mb-1 text-xl font-medium leading-tight text-slate-700">
              Royer
            </h5>
            <h6
              className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
              1223 4234 -4234
            </h6>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left text-surface shadow-secondary-1  bg-indigo-500/5 shadow-lg shadow-indigo-600/20 py-1 px-5 mt-3">
            <h5 className="mb-1 text-xl font-medium leading-tight text-slate-700">
              Gela
            </h5>
            <h6
              className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
              1223 4234 -4234
            </h6>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left text-surface shadow-secondary-1  bg-rose-500/4 shadow-lg shadow-rose-600/10 py-1 px-5 mt-3">
            <h5 className="mb-1 text-xl font-medium leading-tight text-slate-700">
              Jeniger
            </h5>
            <h6
              className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
              1223 4234 -4234
            </h6>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="block w-full flex flex-col rounded-lg text-left text-surface shadow-secondary-1  bg-yellow-500/10 shadow-lg shadow-yellow-600/20 py-1 px-5 mt-3">
            <h5 className="mb-1 text-xl font-medium leading-tight text-slate-700">
              Alex Anibal Pablo Mendez
            </h5>
            <h6
              className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
              1223 4234 -4234
            </h6>
          </motion.div>
        </div>
      </div>
    </div >
  );
}
