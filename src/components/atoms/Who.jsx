import React from 'react'
import Subtitle from '../molecules/Subtitle'

const Who = () => {
  return (
    <div className="Who">
      <Subtitle 
        name="¿Quiénes Somos?"
      />
      <div className="Who__Content">
        <div className="Who__Section">
          <h2 className="Title-2-bold">Computer Store</h2>
          <p className="Paragraph">Somos una empresa peruana, dedicada a la comercialización de productos de tecnología de alta gama, de las mejores marcas, de prestigio mundial, como computadoras, laptops, tablets, partes, piezas, accesorios y suministros para clientes finales y distribuidores marcando tendencia tecnológica.</p>
          <p className="Paragraph">Desde sus inicios la orientación de la empresa ha sido netamente técnica, es así qie se le ha dado la debida importancia a su servicio post-venta con personal capacitado.</p>
          <p className="Paragraph">El mayor valor agregado que transmite a sus clientes es la seguridad en su compra, el cliente de Computer Store compra calidad, seguridad y tranquilidad y sabe que puede darle en uso extremo a sus equipos, los cuales cuentan con una sólida garantía.</p>
        </div>
        <div className="Who__Section">
          <h2 className="Title-2-bold">Visión</h2>
          <p className="Paragraph">Ser la primera preferencia en la compra de tecnología de computo de alta gama extreme en el Perú por los usuarios más exigentes como gamers, diseñadores, editores, profesionales de ingeniería y arquitectura, etc.</p>
        </div>
        <div className="Who__Section">
          <h2 className="Title-2-bold">Misión</h2>
          <p className="Paragraph">Ser líderes en el mercado de artículos de computo en el Perú, otorgando mayor grado de satisfacción a nuestros clientes a través de una asesoría especializada y cercana, ofreciendo la más amplia variedad de productos y los precios más competitivos.</p>
        </div>
        <div className="Who__Section">
          <h2 className="Title-2-bold">Cobertura nacional</h2>
          <p className="Paragraph">En sus casi 12 años de operación, Computer Store vendió miles de equipos asociándose con pequeños y medianos integradores. Es muy posible que algún familiar o amigo ya tenga un computador ensamblado por Computer Store en su casa.</p>
        </div>
        <div className="Who__Section">
          <h2 className="Title-2-bold">Reconocimiento de los fabricantes</h2>
          <p className="Paragraph">Computer Store ha sido reconocido y premiado por las más importantes marcas como Toshiba, Asus, Lenovo, Microsoft, Samsung, HP, Corsair, Thermaltake, Cooler Master, EVGA, Norton, nVidia, Kingston, Intel, Lacie, Logitech. entre otras.</p>
          <p className="Paragraph">Este éxito se debe en gran medida a la lealtad de nuestros clientes, quienes por medio de su confianza han hecho posible el cumplimiento de las metas de crecimiento en forma sostenida.</p>
        </div>
        <div className="Who__Section">
          <h2 className="Title-2-bold">Compromiso al servicio del cliente</h2>
          <p className="Paragraph">Computer Store tiene el firme propósito y compromiso de entregar productos y servicios de alta calidad. Es muy importante para el equipo humano que conforma la empresa mejorar cada día según las necesidades de sus clientes.</p>
          <p className="Paragraph">Si usted tiene alguna sugerencia, escribanos al correo computer@store.com, donde los gerentes de las distintas áreas analizarán sus comentarios, y gracias a ello poder brindarles cada vez mejores servicios.</p>
        </div>
      </div>
    </div>
  )
}

export default Who