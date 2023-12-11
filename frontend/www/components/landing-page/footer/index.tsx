import "./footer.css"

const Footer = () => {
  return (
    <section className="footer-container h-auto w-full border-t">
      <footer id="footer" className="footer mx-auto flex h-auto max-w-[1200px] flex-row items-start justify-center space-x-3 p-3">
        <ul className="brand">
          <h1 className="brand-name">DX</h1>
        </ul>
        <ul className="product">
          <h1 className="text-md">Product</h1>
        </ul>

      </footer>
    </section>
  )
}

export default Footer;