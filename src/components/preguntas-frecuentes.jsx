import React, { useState } from 'react';

export const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "¿Cuál es la política de devolución?",
      answer: "Nuestra política de devolución permite devoluciones dentro de los 30 días posteriores a la compra.",
      open: false
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Sí, ofrecemos soporte técnico 24/7 a través de chat y correo electrónico.",
      open: false
    },
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer: "Puede rastrear su pedido utilizando el número de seguimiento proporcionado en el correo de confirmación de envío.",
      open: false
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div id='faqs'>
      <div  className="panel-group container" id="faqAccordion">
        <div className='section-title'>
          <h2>Preguntas Frecuentes</h2>
        </div>
        {faqs.map((faq, index) => (
          <div className="panel panel-default" key={index}>
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#faqAccordion"
                  href={`#collapse${index}`}
                  className={faq.open ? '' : 'collapsed'}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </a>
              </h4>
            </div>
            <div
              id={`collapse${index}`}
              className={`panel-collapse collapse ${faq.open ? 'in' : ''}`}
            >
              <div className="panel-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
