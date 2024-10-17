"use client"
import { motion } from "framer-motion";
export default function Influencia() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Influencia</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Mejor es dominarse a sí mismo que mandar un ejército.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 16:32</span>
        </p>
      </motion.div>

      <motion.div className="mt-6">
        Según la RAE, influencia es la capacidad o poder que tiene una persona para
        determinar o alterar la forma de pensar o de actuar de otra u otras.<br />

        Como ya hemos dicho, las palabras tienen poder. Por medio de ellas podemos
        ejercer influencia en los demás, pero no hay que olvidar que nuestras actitudes y
        acciones pueden ser más poderosas que nuestras palabras. Por ello debemos
        aprender a dominarnos a nosotros mismos.<br /><br />

        La influencia de la sociedad puede contribuir al desarrollo de la inteligencia, la
        afectividad, la asertividad, el comportamiento y, en sentido general, a la formación
        de la personalidad. La influencia positiva va encaminada a generar una relación
        ganar -ganar. Eso marca toda la diferencia y termina cimentando relaciones a largo
        plazo, donde los elementos clave son el respeto y la confianza.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Cualquier persona que haya ejercido una profunda influencia en otras
          personas, en instituciones o en la sociedad, cualquier padre que haya tenido
          una influencia intergeneracional, quienquiera que verdaderamente haya
          hecho un cambio para bien o para mal, todos han tenido en común tres
          atributos: visión, disciplina y pasión. Yo diría que estos tres atributos han
          gobernado el mundo desde el principio representan el liderazgo eficaz. <span className="font-medium">Stephen Convey</span>
        </p>
        <p className="italic pl-8 mt-2"> La influencia persuasiva es mucho mejor que las palabras moralizadoras.  <span className="font-medium">Louisa May Alcott</span>
        </p>
      </motion.div>
    </div>
  );
}
