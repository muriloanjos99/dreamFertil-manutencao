import './App.css'

function App() {
  const onClickInstagram = () => {
    window.open('https://www.instagram.com/dreamfertil/')
  };

  const onClickFacebook = () => {
    window.open('https://www.facebook.com/dreamfertil/')
  };

  const onClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/dream-f%C3%A9rtil-fertilizantes-org%C3%A2nicos-a2651224a/?originalSubdomain=br')
  };

  const onClickComercialLocation = () => {
    window.open('https://maps.app.goo.gl/BQj6nmN8jF69HBQ8A')
  }

  const onClickFactoryLocation = () => {
    window.open('https://maps.app.goo.gl/XSPQD5jowmqC4XGH7')
  }

  return (
    <>
      <div className="maintenance-container">
        <video
          className="background-video"
          src="src/assets/file.mp4"
          autoPlay
          loop
          muted
        />
        <span className='title-container'>
          <h1 className="title">Nosso site está em Manutenção</h1>
          <p className="subtitle">
            Estamos trabalhando para aprimorá-lo!
          </p>
        </span>
        <div className="content">
          <div className='left-collumn'>
            <img className="logo" src="/dreamFertilLogo.png" alt="Dream Fértil Logo" />
          </div>
          <div className='right-collumn'>
            <div className='address-card'>
              <h2>Endereços</h2>
              <div className='address-info'>
                <div className='com-address-container'>
                  <h3>Escritório Comercial</h3>
                  <p>Rua Guarani, 391</p>
                  <p>Maringá - PR</p>
                  <input type="image" className="location-icon" src="/location-svgrepo-com.svg" alt="" onClick={onClickComercialLocation} />
                </div>
                <div className='divider divider-2'></div>
                <div className='fac-address-container'>
                  <h3>Fábrica</h3>
                  <p>Estrada Bela Vista - Sítio Santa Rita, S/N</p>
                  <p>Quinta do Sol - PR</p>
                  <input type="image" className="location-icon" src="/location-svgrepo-com.svg" alt="" onClick={onClickFactoryLocation} />
                </div>
              </div>
            </div>
            <div className="contact-container">
              <div className='contact-card'>
                <h2>Contatos</h2>
                <div className="contact-info">
                  <div className="phone-container">
                    <img src="/phone-svgrepo-com.svg" className='phone-icon' alt="ícone representando um telefone" />
                    <p>+55 44 99961-2027</p>
                  </div>
                  <div className="phone-container">
                    <img src="/mail-svgrepo-com.svg" className='mail-icon' alt="ícone representando uma carta, indicando o e-mail" />
                    <p>comercial@dreamfertil.com.br</p>
                  </div>
                </div>
              </div>
              <div className="contact-card ">
                <h2>Redes Sociais</h2>
                <div className="social-media-icons">
                  <input type="image" className="social-media-icon" src="/instagram-svgrepo-com.svg" alt="" onClick={onClickInstagram} />
                  <input type="image" className="social-media-icon" src="/facebook-svgrepo-com.svg" alt="" onClick={onClickFacebook} />
                  <input type="image" className="social-media-icon" src="/linkedin-svgrepo-com.svg" alt="" onClick={onClickLinkedin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
