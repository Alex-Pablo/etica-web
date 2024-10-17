import { motion } from "framer-motion";
export default function Equidad() {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl border-b-4 border-indigo-500 pb-2 pr-4 inline-block">Equidad e Imparcialidad</h3>
      <motion.div className="block  mt-6
                        w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-blue-300/10 shadow-lg shadow-blue-600/10
                        py-2 px-5">
        <span className="text-sm font-semibold text-gray-400">TEXTO BIBLICO</span>
        <p className="text-base italic font-semibold">
          El labriego puede comer del huerto que cultiva; debe recompensarse a todo el que protege los intereses ajenos.
          <span className="text-base italic font-bold text-blue-600"> Proverbios 27:18</span>
        </p>
      </motion.div>


      <motion.div className="mt-10">
        <p>
          Ser justo o equitativo tiene muchas recompensas, independientemente de nuestra posición en la vida. Una persona así será promovida y muy apreciada. Dará a su empleador un justo trabajo durante todo el día y a su tiempo. El jefe la recompensará y la promoverá por proteger sus intereses.
          Los que son productivos recibirán mayor recompensa, pues éstos han venido a ser mucho más valiosos. <br /> <br />
          Sigamos estos 2 consejos para ser equitativos: <br />
          1.	No hagamos acepción de las personas. <br />
          2.	No nos dejemos llevar por la mayoría, cuando sabemos que los menos tienen la razón. <br />
        </p>
      </motion.div>

      <motion.div className="mt-6 w-full flex flex-col rounded-lg text-left 
                        text-surface shadow-secondary-1  bg-white-300/10 shadow-lg shadow-white-600/10
                        py-2 px-5">
        <h6 className="text-blue-700 font-semibold text-lg">
          Pensamientos para reflexionar
        </h6>
        <p className="italic pl-8 mt-2">
          Si la justicia existe, tiene que ser para todos; nadie puede quedar excluido, de lo contrario ya no sería justicia
          <span className="font-medium">
            Paul Auster
          </span>
        </p>
      </motion.div>
    </div >
  );
}
