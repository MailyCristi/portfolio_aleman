import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-red before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-deep-blue before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-7 fixed top-[40%] right-7">
      <AnchorLink
        href="#acerca de mi"
        className={`${
          selectedPage === "acerca de mi" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("acerca de mi")}
      />

      <AnchorLink
        href="#habilidades"
        className={`${
          selectedPage === "habilidades" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("habilidades")}
      />

      <AnchorLink
        href="#proyectos"
        className={`${
          selectedPage === "proyectos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("proyectos")}
      />

      <AnchorLink
        href="#experiencia laboral"
        className={`${
          selectedPage === "experiencia laboral" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("experiencia laboral")}
      />

      <AnchorLink
        href="#educacion"
        className={`${
          selectedPage === "educacion" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("educacion")}
      />

      <AnchorLink
        href="#contacto"
        className={`${
          selectedPage === "contacto" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contacto")}
      />
    </div>
  );
};

export default DotGroup;
