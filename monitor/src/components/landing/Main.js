import React from "react";
import { gsap } from "gsap";

const { useLayoutEffect, useRef } = React;

document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 120
    const y = (window.innerHeight - e.pageY * speed) / 120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

function Main() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.home__title', { opacity: 0, duration: 1, delay: 0.8, y: 30 })
      gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.0, y: 30 })
      gsap.from('.home__button', { opacity: 0, duration: 1, delay: 1.3, y: 30 })
      gsap.from('.home__img', { opacity: 0, duration: 2, delay: 0.5, y: 30 })

    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <main className="l-main" ref={app}>

      <section className="home" id="home">
        <div className="home__container bd-grid">
          <div className="home__img">
            <img src="https://cdn.discordapp.com/attachments/829111617752793119/1066657903257337897/banner1.jpg" alt="" data-speed="-2" className="move"></img>
          </div>

          <div className="home__data">
            <h1 className="home__title"> SipWise </h1>
            <p className="home__description"> Monitor your water intake and stay hydrated <br /> quick and easy.</p>
            <a href="/register" className="home__button">Get Started</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;