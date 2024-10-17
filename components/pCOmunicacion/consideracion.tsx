"use client"
import { motion } from "framer-motion";
export default function Consideracion() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Consideración</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Trata a los demás como deseas que te traten a ti
          <span className="text-base italic font-bold text-blue-600"> Lucas 6:31</span>
        </p>
        <p className="text-base italic font-semibold">Ponte de acuerdo con tu adversario pronto
          <span className="text-base italic font-bold text-blue-600"> Mateo 5:25</span>
        </p>
      </motion.div>


      <motion.div className="mt-6">El diccionario de la Real Academia Española dice que consideración es asunto o
        materia sobre la que se ha de pensar y meditar con atención y madurez, dándole la
        debida importancia. <br /> <br />
        La consideración está íntimamente relacionada con la reconciliación; de hecho, ésta
        significa estar de acuerdo, consentir, estar en armonía, concurrir, concordar,
        ponerse de acuerdo. Pero ¿Cómo podríamos ponernos de acuerdo con un
        adversario, sin antes considerar sus puntos de vista? <br />
        Adversario no necesariamente significa enemigo; es alguien que adversa, que dice
        algo diferente, que plantea algo que no es igual a lo que nosotros decimos o
        planteamos. Esa persona difiere de nuestro punto de vista o criterio. No nos adversa
        a nosotros, en lo personal, sino a nuestra idea. Adverso significa una versión
        contraria. <br />
        ¿Qué hacer, por ejemplo, si alguien nos confronta con una idea que no podemos
        apoyar? Sin faltar a la verdad, podríamos decir: Eso es interesante., o Nunca lo
        había considerado así. De esta manera no manifestamos nuestro acuerdo, pero
        tampoco una oposición directa. La idea es que podemos mostrar nuestro
        desacuerdo de un modo agradable, sin perder la posibilidad de presentar nuestras
        opiniones.
        <br /><br />
        John Schrock, con la guianza de Dios, escribió 45 principios, algunos de los cuales
        se estudiarán en este curso. Uno de ellos es el principio de la comunicación. El
        primer aspecto que veremos de ella es el de la consideración, tan importante en ese
        proceso.
      </motion.div>
      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">La discusión amistosa es tan estimulante como las chispas que saltan
          cuando se golpea hierro contra hierro. <span className="font-medium">EL rey Salomón</span>
        </p>
        <p className="italic pl-8 mt-2">Las sugerencias amistosas son tan agradables como el perfume
          <span className="font-medium">El rey Salomón</span>
        </p>
      </motion.div>
    </div>
  );
}
