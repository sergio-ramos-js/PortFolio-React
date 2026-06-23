import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript, SiLaravel, SiMysql } from "react-icons/si";

const OTHER_SKILLS = [
    { name: "Python" },
    { name: "Tailwind CSS" },
    { name: "GitHub" },
    { name: "Express" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
];

function Skills() {
    const { t } = useTranslation();
    const [isAnyExpanded, setIsAnyExpanded] = useState(false);
    const [isExpandedLaravel, setIsExpandedLaravel] = useState(false);
    const [isExpandedTs, setIsExpandedTs] = useState(false);
    const [isExpandedReact, setIsExpandedReact] = useState(false);
    const [isExpandedMysql, setIsExpandedMysql] = useState(false);

    // Función auxiliar para verificar si alguna tarjeta está expandida
    const checkAnyExpanded = (expandedStates) => {
        setIsAnyExpanded(Object.values(expandedStates).some((state) => state));
    };

    const toggleExpandLaravel = (e) => {
        e.preventDefault();
        const newState = !isExpandedLaravel;
        setIsExpandedLaravel(newState);
        checkAnyExpanded({
            isExpandedLaravel: newState,
            isExpandedTs,
            isExpandedReact,
            isExpandedMysql,
        });
    };

    const toggleExpandTs = (e) => {
        e.preventDefault();
        const newState = !isExpandedTs;
        setIsExpandedTs(newState);
        checkAnyExpanded({
            isExpandedLaravel,
            isExpandedTs: newState,
            isExpandedReact,
            isExpandedMysql,
        });
    };

    const toggleExpandReact = (e) => {
        e.preventDefault();
        const newState = !isExpandedReact;
        setIsExpandedReact(newState);
        checkAnyExpanded({
            isExpandedLaravel,
            isExpandedTs,
            isExpandedReact: newState,
            isExpandedMysql,
        });
    };

    const toggleExpandMysql = (e) => {
        e.preventDefault();
        const newState = !isExpandedMysql;
        setIsExpandedMysql(newState);
        checkAnyExpanded({
            isExpandedLaravel,
            isExpandedTs,
            isExpandedReact,
            isExpandedMysql: newState,
        });
    };

    return (
        <section className="services" id="services">
            <h2 className="heading">{t("my")}<span> {t("skills")}</span></h2>
            <div className={`services-container ${isAnyExpanded ? "items-center" : "items-stretch"}`}>
                {/* Laravel */}
                <div className="services-box flex flex-col items-center">
                    <SiLaravel size={"70"} fill="#00abf0" />
                    <h3>Laravel</h3>
                    <p className='parrafo'>{t("laravel")}</p>
                    <div className="transition-all duration-700 ease-in-out overflow-hidden"
                         style={{ maxHeight: isExpandedLaravel ? "500px" : "0" }}>
                        {isExpandedLaravel && (
                            <p className="expanded-text pb-8">{t("laravelext")}</p>
                        )}
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandLaravel} href="#" className="btn">
                        {isExpandedLaravel ? t("showless") : t("showmore")}
                    </a>
                </div>
                {/* <!-- React --> */}
                <div className="services-box flex flex-col items-center">
                    <RiReactjsFill size={'70'} fill='#00abf0'/>
                    <h3>React</h3>
                    <p className='parrafo'>
                        {t('react')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedReact ? '500px' : '0', }}>
                        {isExpandedReact && (
                            <p className='expanded-text pb-8'>
                                {t('reactext')}
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandReact} href="#" id="botonTailwind" 
                        className="btn">
                        {isExpandedReact?t('showless'):t('showmore')}
                    </a>
                </div>
                {/* <!-- TypeScript --> */}
                <div className="services-box flex flex-col items-center">
                    <SiTypescript size={'70'} fill='#00abf0'/>
                    <h3>TypeScript</h3>
                    <p className='parrafo'>
                        {t('typescript')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedTs ? '500px' : '0', }}>
                        {isExpandedTs &&(
                            <p className='expanded-text pb-8'>
                                {t('typescriptext')}
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandTs} href="#" id="botonTailwind" 
                        className="btn">
                        {isExpandedTs?t('showless'):t('showmore')}
                    </a>
                </div>
                {/* MySQL */}
                <div className="services-box flex flex-col items-center">
                    <SiMysql size={'70'} fill='#00abf0' />
                    <h3>MySQL</h3>
                    <p className='parrafo'>
                        {t('mysql')}
                    </p>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden`}
                        style={{ maxHeight: isExpandedMysql ? '500px' : '0', }}>
                        {isExpandedMysql && (
                            <p className='expanded-text pb-8'>
                                {t('mysqlext')}      
                            </p>
                            )
                        }
                    </div>
                    <div className="flex flex-grow"></div>
                    <a onClick={toggleExpandMysql} href="#" className="btn">
                        {isExpandedMysql?t('showless'):t('showmore')}
                    </a>
                </div>
            </div>
            <div className="skills-mention">
                <p>{t("otherSkillsIntro")}</p>
                <div className="skills-tags">
                    {OTHER_SKILLS.map(({ name }) => (
                        <span key={name} className="skills-tag">
                            {name}
                        </span>
                    ))}
                    <span className="skills-tag">{t("englishC1")}</span>
                </div>
            </div>
        </section>
    )
}

export default Skills;