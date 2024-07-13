export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="/img/logo.png" alt="logo atareados" className='navbar-logo'/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#services' className='page-scroll'>
                Funcionalidades
              </a>
            </li>
            <li>
              <a href='#aboutV2' className='page-scroll'>
                Acerca de nosotras
              </a>
            </li>
            <li>
              <a href='#faqs' className='page-scroll'>
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}