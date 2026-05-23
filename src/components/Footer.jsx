function Footer() {
  return (
    <footer>
      <span className="foot-logo">
        Ashutosh<span>.</span>
      </span>
      <span className="foot-copy">© {new Date().getFullYear()} Ashutosh Shashank Patil</span>
      <span className="foot-stack">
        Built with <b>MERN</b> · Designed with <b>♥</b>
      </span>
    </footer>
  );
}

export default Footer;
