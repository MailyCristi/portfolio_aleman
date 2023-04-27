import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="acerca de mi"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >

      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
          before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile"
              className="rounded-full z-10 w-full max-w-[300px] md:max-w-[500px]"
              src="assets/profile-image.jpeg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="rounded-full z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.jpeg"
          />
        )}
      </div>


      <div className="z-30 basis-2/5 mt-12 md:mt-32">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 "
            >
              Maily Aleman
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Creo un diseño de experiencia de usuario atractivo para marcas y nuevas empresas al equilibrar las necesidades comerciales y las necesidades del usuario
          </p>
        </motion.div>


        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
              hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contacto")}
            href="#contacto"
          >
            Contactame
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
