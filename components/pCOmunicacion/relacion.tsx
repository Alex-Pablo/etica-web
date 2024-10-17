
"use client"
import { motion } from "framer-motion";
export default function Relacion() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Relacion</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">La respuesta suave aparta el enojo
          <span className="text-base italic font-bold text-blue-600"> Proverbios 15:1</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">
        El diccionario de la Real Academia Española dice que relación es la conexión,
        correspondencia, trato, comunicación de alguien con otra persona.
        Cuando nos enfrentamos con alguien, en una discusión, nuestra tendencia natural
        es ponernos a la defensiva y argumentar. Esto es porque siempre queremos tener
        la razón. Estar equivocado se considera humillante; hiere nuestro orgullo; por lo
        tanto, defendemos nuestra opinión aun sabiendo que estamos equivocados o que
        hemos exagerado la verdad. Nadie está siempre en lo correcto en todas las
        situaciones; en cambio, todos estamos -con frecuencia- parcialmente en lo correcto.
        Esto nos genera <br />
        los siguientes problemas:<br /><br />
        ✓ Como sabemos que estamos -por lo menos parcialmente- en lo correcto,
        abrimos nuestra boca y libremente damos nuestras opiniones.<br />
        ✓ Cuando hemos expresado nuestra opinión, nos comprometemos a
        defenderla. ¡No es fácil admitir que estamos equivocados!<br />
        Una cualidad importante, que ayuda a preservar buenas relaciones, es la del
        dominio propio, especialmente cuando se trata de controlar la lengua. La
        contestación apresurada puede arruinarlo todo. Las discusiones -por lo general- se
        efectúan en voz alta y con palabras ásperas, que pueden destruir cualquier relación.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Discutir con un tonto solo comprueba que hay dos discutiendo <span className="font-medium">Doris M. Smith</span>
        </p>
        <p className="italic pl-8 mt-2">A partir de hoy trata a todos como si fuera su último día. Dales atención,
          amabilidad y entendimiento; tu vida nunca será la misma. <span className="font-medium">Og Mandino</span>
        </p>
      </motion.div>
    </div>
  );
}
