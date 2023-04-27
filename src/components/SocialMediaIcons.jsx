const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/maily-aleman-leon-2a42b9164?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ3Ldrzm%2FQy6OdJ0OR%2FIG%2BA%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Maily21569135?t=r-RZ6e7ywDbUs1xF9ifxMw&s=08"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/cristi.martinez.1612147?mibextid=ZbWKwL"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/malumilia?igshid=ZDdkNTZiNTM="
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
