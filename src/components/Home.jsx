import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Home (){
    const { t } = useTranslation(); 

    const typedElement = useRef(null); // Referencia para el elemento donde se ejecutará Typed.js

    useEffect(() => {
        /* SCROLLREVEAL */
        const sr = ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
        });

        sr.reveal('.home-content, .heading', { origin: 'top' });
        sr.reveal('.home-img, .services-container, .skills-mention, .portfolio-box, .contact form', { origin: 'bottom' });
        sr.reveal('.home-content h1, .about-img', { origin: 'left' });
        sr.reveal('.home-content p, .about-content', { origin: 'right' });

        // Configuración de Typed.js
        const typedOptions = {
            strings: [
                "Frontend Developer,",
                "Freelancer,",
                "TeamWork Dev."
            ],
            typeSpeed: 100,
            backSpeed: 150,
            backDelay: 2000,
            loop: true,
        };
        const typed = new Typed(typedElement.current, typedOptions);

        // Limpieza al desmontar el componente
        return () => {
            typed.destroy(); // Destruye Typed.js
            sr.destroy(); // Limpia ScrollReveal
        };
    }, []);
    return (
        <section className="home min-h-screen pt-[10rem] pb-8 px-[9%] flex justify-center items-center" id="home">
            
            <div className="home-content pr-11">
                {/* <h3 className="text-[3.2rem] font-bold">Hello, It's Me</h3> */}
                <h3 className="text-[3.2rem] font-bold">{t('hello')}</h3>
                <h1 className="text-[2.6rem] font-semibold leading-[1.3]">Sergio Ramos</h1>
                <h3>{t('and')}<span ref={typedElement} className="multiple-text"></span></h3>
                <p className="text-[1.6rem]">{t('descript')}</p>
                {/*  <p>Apasionado por crear experiencias de usuario intuitivas y visualmente atractivas. Con 2 años de experiencia en el desarrollo web, domino HTML, CSS, JavaScript. Me encanta trabajar en equipo y colaborar con diseñadores y desarrolladores backend para construir aplicaciones web eficientes y responsivas. Siempre estoy en busca de nuevos desafíos que me permitan crecer profesionalmente y seguir aprendiendo en este campo en constante evolución.</p> */}
                <div className="social-media">
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="#" target="_blank">
                        <FaFacebookF />
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="#" target="_blank">
                        <FaXTwitter />
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="#" target="_blank">
                        <RiInstagramFill />
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="https://www.linkedin.com/in/sergio-ramos-425980353" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent text-[2rem]"
                        href="https://github.com/sergio-ramos-js" target="_blank">
                        <FaGithub />
                    </a>
                </div>
                <a className="btn" href="#">{t('download')}</a>
            </div>
            {/*  img  */}
            <div className="home-img">
                <img src="/images/img-developer-final.jpg" alt=""
                    className="" />
            </div>
        </section>
    )
}
export default Home;