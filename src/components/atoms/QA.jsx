import React from 'react'
import Subtitle from '../molecules/Subtitle'

const QA = () => {
  return (
    <div className="QA">
      <Subtitle 
        name="Preguntas Frecuentes"
      />
      <div className="QA__Table">
        <div className="QA__Question">
          <h3 className="Title-3-bold">¿Es seguro comprar en Computer Store?</h3>
        </div>
        <div className="QA__Answer">
          <p className="Paragraph">Hacer tus compras en Computer Store es 100% seguro, contamos con una certificación SSL encriptación de 256 bits, lo que nos califica como un sitio web seguro, y además utilizamos la plataforma antifraude Cybersource en cada una de nuestras transacciones.</p>
        </div>
        <div className="QA__Question">
          <h3 className="Title-3-bold">¿Qué es una garantía?</h3>
        </div>
        <div className="QA__Answer">
          <p className="Paragraph">Las garantías son muy importantes para los consumidores. Permiten tener la certeza de que, en caso de defectos que afecten el correcto funcionamiento de las computadoras, componentes o periféricos, etc, los responsables se harán cargo de su reparación para que el producto vuelva a reunir las condiciones óptimas de uso.</p>
          <p className="Paragraph">Son responsables del otorgamiento y cumplimiento de la garantía legal, los productores, importadores, distribuidores y vendedores finales.</p>
          <p className="Paragraph">En caso de desperfecto no corresponde exigir el cambio del producto por uno nuevo, la obligación de proveedor es reparar el producto y dajarla en perfecto estado de funcionamiento.</p>
        </div>
        <div className="QA__Question">
          <h3 className="Title-3-bold">¿Cómo funciona nuestro protal?</h3>
        </div>
        <div className="QA__Answer">
          <p className="Paragraph">En nuestro portal te ofrecemos productos de las marcas más prestigiosas en cómputo del mercado. Lo único que tienes que hacer es elegir el producto de tu interés, agregarlo a tu carrito de compras y confirmar tu adquisición. Una vez que lo hayas hecho deberás ingresar tus datos y la dirección a donde deseas que te lleguen tus compras para finalmente elegir la forma de pago. Finalmente se te enviará a tu correo electrónico un mensaje que contendrá el resumen total de tu pedido. </p>
        </div>
        <div className="QA__Question">
          <h3 className="Title-3-bold">¿Cómo sé que mi pedido fue recibido si no me llega el correo de confirmación?</h3>
        </div>
        <div className="QA__Answer">
          <p className="Paragraph">Si no recibes nuestra confimación vía correo electrónico en tu bandeja de entrada, por favor revisa tu bandeja de correos no deseados por que ésta podría haber sido derivada ahí o de lo contrario deberás esperar la llamada de un representante el cual confirmará tu pedido de manera personalizada en el transcurso de las primeras 24 horas de realizado tu pedido.</p>
        </div>
      </div>
    </div>
  )
}

export default QA