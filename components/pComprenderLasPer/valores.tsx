
import { motion } from "framer-motion";
export default function Valores() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Valores</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Necio es el hombre que dice para sí: No hay Dios.
          <span className="text-base italic font-bold text-blue-600"> Salmo 14:1</span>
        </p>
      </motion.div>


      <motion.div className="mt-10">
        <p>
          Una persona de valor, según la RAE, es aquella que posee o a quien se le atribuye
          cualidades positivas para desarrollar una determinada actividad.
        </p>
        <br />
        <p>
          En los negocios, lo mismo que en cualquier otro ámbito de la vida, es muy
          importante que seamos capaces de comprender a la gente. Podemos evitarnos
          muchas situaciones incómodas si entendemos los motivos e intenciones de las
          personas. El enunciado citado al principio de este tema identifica a cierto tipo de
          individuo, del cual debemos estar muy atentos: el necio. Todos, aunque creamos en
          Dios, en una u otra oportunidad hemos actuado neciamente. Si entendemos que la
          conducta de una persona se basa en lo que cree, no deberían sorprendernos las
          acciones de los necios.
          <br />
          <br />
          El primer paso para comprender a la gente es averiguar en qué creen y cuáles son
          sus valores, pues sus acciones y expresiones son el resultado de ello.
          Probablemente todos hemos oído la expresión: ¿Acaso no tiene conciencia?; pero
          ¿qué queremos decir con eso? Nuestra conciencia se ha formado por un conjunto
          de reglas y valores aprendidos. Cuando obviamos los principios y las leyes de Dios,
          actuamos bajo nuestro propio código de conducta.
          <br />
          <br />
          Para comprender a la gente, debemos entender cómo se formó su conciencia y su
          escala de valores, principalmente en el hogar, la escuela y la iglesia.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">El comportamiento es un espejo en el que cada uno muestra su imagen. <span className="font-medium">
          Johann Wolfang von Goethe
        </span>
        </p>
      </motion.div>
    </div >
  );
}
