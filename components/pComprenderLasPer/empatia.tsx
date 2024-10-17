
import { motion } from "framer-motion";
export default function Empatia() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Empatia</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">El amigo verdadero es siempre leal, y el hermano es para que nos ayude en
          tiempos de necesidad.
          <span className="text-base italic font-bold text-blue-600">Proverbios 17:17; Sabiduria 21.6</span>
        </p>
      </motion.div>


      <motion.div className="mt-10">Según la RAE, empatía es
        <span className="font-medium"> la identificación mental y afectiva de un sujeto con el
          estado de ánimo del otro
        </span>.
        <br />
        <br />La empatía es el valor que nos da la capacidad de entender, ayudar y motivar a las
        personas; es ponerse en su lugar, sentir en la medida de lo posible lo que siente la
        otra persona, es estar consciente que las personas pueden no estar bien y de la
        posibilidad que tenemos de ayudarlas.
        <br />
        <br />La empatía es un valor que permite a las personas relacionarse fácilmente y con
        agrado; las personas empáticas saben lo importante que son las buenas relaciones
        interpersonales, ya que de ese valor depende su bienestar. Las buenas relaciones
        con los demás nos ayudarán a obtener, con éxito, nuestros objetivos.
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">La capacidad de colocarse en el lugar del otro es una de las funciones más
          importantes de la inteligencia. Demuestra el grado de madurez del ser
          humano.
          <span className="font-medium">
            Augusto Cury
          </span>
        </p>
        <p className="italic pl-8 mt-2">Trata de comprender antes de ser comprendido.
          <span className="font-medium">
            Stephen Covey
          </span>
        </p>
        <p className="italic pl-8 mt-2">La empatía requiere tiempo; la eficiencia es para las cosas, no para las
          personas.
          <span className="font-medium">
            Stephen Covey
          </span>
        </p>
      </motion.div>
    </div >
  );
}
