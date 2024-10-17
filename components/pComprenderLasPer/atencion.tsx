
import { motion } from "framer-motion";
export default function Antencion() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Atencion</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold"> Todo hombre debe oir mucho, hablar poco y enojarse menos.
          <span className="text-base italic font-bold text-blue-600"> Santiago 1:19</span>
        </p>
      </motion.div>


      <motion.div className="mt-10">De acuerdo con la RAE, el término atención significa: <span className="font-medium"> Cortesía, urbanidad,
        demostración de respeto u obsequio</span>.
        <br />
        <br />
        En el principio anterior estudiamos como se forman nuestros valores y nuestra
        conciencia. Alguien dijo: más de 95% de 10 que somos creemos se debe a los
        efectos que otros han tenido en nuestra vida. Esto nos debiera motivar para verificar
        la selección de nuestros amigos y socios. ¿Son buenas personas, gente confiable,
        de carácter integro? Constantemente debemos preguntarnos: ¿Por qué soy como
        soy? ¿Soy lo que quiero ser? Si no hemos logrado nuestro propósito, cabe
        preguntarnos por qué.
        <br />
        <br />
        Para comprender apropiadamente a las personas, debemos practicar estas dos
        reglas:
        <br />
        ✓ No interrumpir a quien habla y
        <br />
        ✓ Aprender a oír para poder escuchar.
        <br />
        <br />
        Los autores Kyrby y Grimley, se refieren a estos tres aspectos importantes,
        relacionados con la atención:
        <br />
        1. Atención Selectiva
        <br />
        2. Capacidad de Atención
        <br />
        3. Atención Sostenida
        <br />
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Así como hay un arte del buen decir, existe el arte del buen escuchar.
          <span className="font-medium">
            Epicteto de Frigia
          </span>
        </p>
      </motion.div>
    </div >
  );
}
