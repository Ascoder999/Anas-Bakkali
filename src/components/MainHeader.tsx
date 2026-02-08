const MainHeader = () => {
  return (
    <div className="Nav_parent">
      <nav className="Nav">
        <h1 className="text-3xl font-bold">Anas Bakkali</h1>
        <ul className="Nav_ul">
          <a href="#aboutme"><li>About me</li></a>
          <a href="#services"><li>Services</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default MainHeader