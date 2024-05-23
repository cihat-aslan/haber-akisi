

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-danger" >HaberAkışı</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Teknolloji</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>İş Hayatı</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Sağlık</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Bilim</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Spor</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Eğlence</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar