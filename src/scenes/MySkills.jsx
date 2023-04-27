import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="habilidades" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">MIS HABILIDADES</span>
          </p>
          <LineGradient width="w-3/3" />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="habilidades"
                className="z-10"
                src="assets/hab.jpeg"
              />
            </div>
          ) : (
            <img alt="habilidades" className="z-10" src="assets/hab.jpeg" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">
                Tecnicas
              </p>
            </div>
          <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="list-disc mt-5">
            <li>Conocimiento de informatica basica</li>
            <li>Manejo de software de base de datos</li>
            <li>Uso de programas para hacer presentaciones graficas</li>
            <li>Manejo de contabilidad</li>
            <li>Conocimiento de transcripcion y taquigrafia</li>
            <li>Manejo de herramientas digitales para analisis y community management</li>
            <li>Tecnicas basicas de diseño grafico</li>
            <li>Dominio de idiomas (Ingles,frances)</li>
          </ul>
        </motion.div>
        
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">
                No Tecnicas
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="list-disc mt-5">
            <li>Excelente comunicacion</li>
            <li>Paciente</li>
            <li>Capacidad para realizar trabajos en equipo</li>
            <li>Resolucion de problemas</li>
            <li>Adaptacion al cambio</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
