
import { motion } from "framer-motion";
export default function Respeto() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Respeto</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">
          El rey se regocija en los siervos que saben lo que hacen, pero se enoja con los que causan dificultades.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 14:35(LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-10 pl-4">
        <p>
          Para ser justos con los demás y esperar que ellos hagan lo mismo con nosotros, debemos tener parámetros, límites y reglamentos adecuados y establecidos, tanto para nuestras vidas y las de nuestras familias, como para nuestros negocios.
          Ninguna persona puede actuar en forma apropiada sin saber qué esperar o qué es lo que se espera de ella. El comportamiento se mide por esas expectativas y, en consecuencia, ambas partes pueden medir la equidad y la justicia con que actúan.
          Algunas áreas parecerán grises, pero en general las personas deben saber en qué creemos y qué esperamos.<br />
          La justicia, como tal, no necesariamente es la que se obtiene en los tribunales. La justicia es una práctica constante; la hacemos cuando:<br />
          	Respetamos el derecho de los demás,<br />
          	Obedecemos las leyes <br />
          	Cuando nos sometemos a las autoridades y parámetros establecidos por Dios.<br />
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">El respeto al derecho ajeno es la paz
          <span className="font-medium">
            Benito Juárez
          </span>
        </p>
      </motion.div>
    </div >
  );
}
