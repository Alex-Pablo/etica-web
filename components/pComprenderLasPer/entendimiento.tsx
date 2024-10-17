
import { motion } from "framer-motion";
export default function Entendimiento() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Entendimiento</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">Puesto que el Señor otorga sabiduría, cada una de Sus palabras es un tesoro de
          conocimientos y comprensión.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 2:6 </span>
        </p>
      </motion.div>


      <motion.div className="mt-10">
        <p>Entendimiento, según el diccionario de la RAE, es la <span className="italic font-medium">facultad humana de
          comprender, comparar, juzgar las cosas o inducir y deducir otras, de las que ya se
          conocen</span>.
        </p>
        <br />
        <p>¿Por qué quisiéramos entender a las personas? Consideremos tres de las más
          importantes:
          <br />
          1. Se evita muchos conflictos
          <br />
          2. Podríamos liderar y motivar a los demás,
          <br />
          3. Obtendríamos un corazón perdonador.
          <br />
          <br />
          El rey Salomón habló mucho sobre ciertos tipos de personas: los necios, los
          burlones, los rebeldes, los perezosos y otros. Debido a que los entendía y sabía
          cómo tratarlos, gozó de gran fama y éxito; por eso lo llamaban <span className="font-medium">sabio</span>. Si no
          entendemos a los demás tendremos muchos conflictos innecesarios y, en
          consecuencia desarrollaremos una mala actitud que nos perjudicará más a nosotros
          que a ellos. Como lideres, necesitamos entender a nuestros colaboradores con el
          fin de motivarlos y lograr buenos resultados.
          Cada uno de nosotros tiene, por lo menos, cuatro necesidades básicas:
          <br />
          1. Ser amado y apreciado
          <br />
          2. Experimentar un sentido de realización o de valor personal,
          <br />
          3. Tener un sentido de pertenencia
          <br />
          4. Sentirse seguro financieramente.
          <br />
          Siempre que tengamos que relacionarnos con personas, debemos tener en cuenta
          estas necesidades, sin importar la situación. La buena administración consiste en
          motivar a la gente para servir a otros. Necesitamos conocer sus fortalezas y
          debilidades para valorarlas adecuadamente.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Muchas personas cerrarán sus oídos ante el consejo, pero la mayoría abrirá
          sus ojos al ejemplo.
        </p>
      </motion.div>
    </div>

  );
}
