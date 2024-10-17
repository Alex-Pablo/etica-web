import { motion } from "framer-motion";
export default function LeyRetorno() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Ley de retorno</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">
          Como los malvados son injustos, su violencia se vuelve contra ellos y los destruye.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 21:17 (LBD)</span>
        </p>
      </motion.div>


      <motion.div className="mt-10 pl-4">
        <p>
          ¿Qué es la justicia?<br />
          El diccionario Webster la define como: lo que es imparcial, honesto, equitativo, según la norma. <br />
          Hemos oído la frase: justo y bueno; pues bien, no necesariamente todo lo que es bueno es justo; tampoco lo que es según la norma. Las leyes o normas emitidas por los hombres mal intencionados o ignorantes pueden ser injustas y se volverán contra ellos para destruir toda una sociedad. Un caso real: el Comunismo. Este fue un sistema proveniente de un grupo de conceptos basados en ciertas convicciones personales.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          Dios no puede castigarnos siendo justo, y si no es justo no es Dios, y dejando de ser Dios no hay para qué temerle ni obedecerle
          <span className="font-medium">
            John Milton
          </span>
        </p>
        <p className="italic pl-8 mt-2">No crean ustedes que pueden engañar a Dios. Cada uno cosechará lo que haya sembrado.
          <span className="font-medium">
            San Pablo
          </span>
        </p>
      </motion.div>
    </div >
  );
}
