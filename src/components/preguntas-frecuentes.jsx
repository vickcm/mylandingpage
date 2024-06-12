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
    <div className="faq-container" id="preguntasFrecuentes">
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${faq.open ? 'open' : ''}`}
          key={index}
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-question">
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};