import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro container-fluid'>
        <div className="particles-bg-canvas-self" >
          <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        </div>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <p>{props.data ? props.data.paragraph3 : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-store btn-lg page-scroll'
                >
                  <img src="/img/google-play.png" alt="logo atareados" width="35"/>
                  Google Play
                </a>{' '}
                <a
                  href='#features'
                  className='btn btn-store btn-lg page-scroll'
                >
                  <img src="/img/app-store.png" alt="logo atareados" width="35"/>
                  App Store
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
