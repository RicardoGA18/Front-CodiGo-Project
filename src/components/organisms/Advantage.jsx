import React from 'react'

const Advantage = () => {
  return (
    <div className="Advantage l-container">
      <div className="l-contain">
        <div className="StaticTitle">
          <h2 className="StaticTitle__Name Title-2-bold">NUESTRAS VENTAJAS</h2>
          <div className="StaticTitle__Bar"></div>
        </div>
        <div className="Advantage__Box">
          <div className="Advantage__Item">
            <div className="Advantage__ItemIcon">
              <i className="fas fa-certificate fa-6x" style={{ color: 'white' }}></i>
            </div>
            <div className="Advantage__ItemText">
              <p className="Paragraph-bold">GARANTÍA</p>
              <p className="Paragraph">Todos nuestros productos cuentan con garantía de marca nuevos y originales, respaldadas por las mejores marcas del mercado tecnológico</p>
            </div>
          </div>
          <div className="Advantage__Item">
            <div className="Advantage__ItemIcon">
              <i className="fas fa-dollar-sign fa-6x" style={{ color: 'white' }}></i>
            </div>
            <div className="Advantage__ItemText">
              <p className="Paragraph-bold">PRECIOS INSUPERABLES</p>
              <p className="Paragraph">En Computer Store siempre encontrarás los mejores precios, ofertas, promociones y regalos. Todos los peruanos merecemos el mejor producto al menor precio</p>
            </div>
          </div>
          <div className="Advantage__Item">
            <div className="Advantage__ItemIcon">
              <i className="fas fa-lock fa-6x" style={{ color: 'white' }}></i>
            </div>
            <div className="Advantage__ItemText">
              <p className="Paragraph-bold">MEJOR ATENCIÓN</p>
              <p className="Paragraph">Contamos con los mejores colaboradores capacitados motivados para ofrecerle la mejor atención que Ud. se merece. “Cuida de tus empleados, que ellos cuidarán de tus clientes”.</p>
            </div>
          </div>
          <div className="Advantage__Item">
            <div className="Advantage__ItemIcon">
              <i className="fas fa-headset fa-6x" style={{ color: 'white' }}></i>
            </div>
            <div className="Advantage__ItemText">
              <p className="Paragraph-bold">TE AYUDAMOS A COMPRAR</p>
              <p className="Paragraph">No Tienes Idea de Cómo Adquirir el Producto que Deseas, te Facilitamos Asesoría Inmediata.</p>
            </div>
          </div>
          <div className="Advantage__Item">
            <div className="Advantage__ItemIcon">
              <i className="fas fa-store-alt fa-6x" style={{ color: 'white' }}></i>
            </div>
            <div className="Advantage__ItemText">
              <p className="Paragraph-bold">NUESTRAS TIENDAS</p>
              <p className="Paragraph">Cada vez estamos más cerca de ti. Conoce nuestras tiendas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage