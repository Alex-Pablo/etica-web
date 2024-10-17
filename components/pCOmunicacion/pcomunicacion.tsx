
"use client"
import { motion } from "framer-motion";
export default function PComunicacion() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Principio de la comunicación</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">El que tiene oídos para oír, que escuche
          <span className="text-base italic font-bold text-blue-600"> Lucas 8:8</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">
        <span className="font-medium">Si valoras COMUNICARTE, enfocarás tu atención en comprender a la otra
          persona.
        </span>
        <br />
        <br />
        Tal y como la define la Real Academia Española de la lengua, la comunicación es
        <br />
        un proceso mediante el cual se puede transmitir información entre un emisor y un
        receptor permite el intercambio de sentimientos, opiniones o cualquier otro tipo de
        información, mediante el habla, la escritura u otro tipo de señales; por eso se dice
        que es el acto inherente al hombre, que le ayuda a conocer más de si mismo, de los
        demás y del medio que lo rodea, por el envío y la recepción del mensaje.
        La palabra COMUNICACIÓN proviene del latín communis y significa convertir algo
        en común, compartir.
        En general, la comunicación supone enviar algo de un sitio a otro. Se transmite
        información por medio del lenguaje, a través de diferentes canales y modalidades
        de transmisión. El emisor y el receptor deben tener un código, común a ambos, para
        que la información y el significado del mensaje sean interpretados sin errores.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">La buena comunicación nace de una escucha activa.
        </p>
        <p className="italic pl-8 mt-2">Es falso pensar que uno puede comunicarse solo porque puede
          hablar
        </p>
      </motion.div>
    </div>
  );
}
