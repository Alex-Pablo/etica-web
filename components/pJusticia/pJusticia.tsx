import { motion } from "framer-motion";
export default function PJusticia() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Justicia</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Jueces y oficiales pondrás en todas tus ciudades que Jehová tu Dios te dará en tus tribus, los cuales juzgarán al pueblo con justo juicio.
          <span className="text-base italic font-bold text-blue-600"> Deuteronomio 16:18</span>
        </p>
      </motion.div>


      <motion.div className="mt-10">
        <p>
          De acuerdo con el Diccionario de La Real Academia Española, se entiende que justicia es todo aquello que está de acuerdo con el derecho, la razón y la equidad. También se dice que es la virtud que inclina a dar, a cada uno, lo que le corresponde o pertenece.<br />
          El juicio debería ser justo. Se le exigía al juzgador 3 requisitos:<br /><br />
          1.	No torcer el derecho.<br />
          2.	No hacer acepción de personas.<br />
          3.	No aceptar soborno. No acepten dinero de nadie que les pida hacer algo injusto.<br /><br />
          Si queremos una sociedad donde reinen la paz y la justicia, en todas nuestras relaciones debemos considerar La Ley del Retorno y practicar los principios de:<br />
          	Imparcialidad<br />
          	Equidad<br />
          	Verdad y<br />
          	Respeto.<br />
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Ganamos justicia más rápidamente si hacemos justicia a la parte contraria.
          <span className="font-medium">
            Mahatma Gandhi
          </span>
        </p>
      </motion.div>
    </div >
  );
}
