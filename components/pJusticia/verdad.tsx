import { motion } from "framer-motion";
export default function Verdad() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Verdad</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        Siempre podremos demostrar que tenemos razón, pero
        ¿convenceremos al Señor?
        <p className="text-base italic font-semibold">
          <span className="text-base italic font-bold text-blue-600"> Proverbios 16:2</span>
        </p>
      </motion.div>


      <motion.div className="mt-10 pl-4">
        <p>
          Hay tres cosas que nos harán sentir bien, sin importar cuál sea el resultado de la situación: <br />
          1.	Cuando hemos dado lo máximo de nosotros. <br />
          2.	Cuando sabemos que hicimos lo correcto. <br />
          3.	Cuando hemos actuado justamente. <br />
          Esto normalmente nos ha hecho vencedores, pero aún si no ganamos, nuestra actitud ante Dios, ante los demás o ante nosotros mismos, es una buena actitud. Nuestro enfoque principalmente está en ser justos. <br /> <br />
          Al trabajador se le pide: <br /> <br />
          1.	Que siga las instrucciones del patrono, con respeto y sencillez de corazón. <br />
          2.	Que trabaje bien, aunque nadie lo esté viendo. <br />
          3.	Que haga su trabajo de buena voluntad. <br /> <br />
          Dios promete que el bien que haga el trabajador recibirá recompensa del Señor. <br /> <br />
          Al patrono se le pide: <br />
          1.	Que trate con respeto al trabajador. <br />
          2.	Que no lo amenace, <br />
          3.	Que le dé su salario a tiempo. <br /> <br />
          Dios también promete que el bien que haga el patrono recibirá recompensa del Señor, porque El no hace acepción de personas.
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">Lo peor no es cometer un error, sino tratar de justificarlo.
          <span className="font-medium">
            Ramón y Cajal
          </span>
        </p>
      </motion.div>
    </div >
  );
}
