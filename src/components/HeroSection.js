function HeroSection(props){

  return (
    <header className="header">
      <div className="overlay">
          {props.children}
      </div>      
    </header>
  )
}

export default HeroSection;