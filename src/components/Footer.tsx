import { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="bg-[var(--neutral-2-smjd)] p-5 text-center text-white flex flex-col">
                <div className='flex flex-col md:flex-row md:mx-10 mx-4 items-center justify-around'>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>SummitExplorer JD</h4>
                        <p>Explora el mundo con nosotros.</p>
                    </div>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>Contáctanos</h4>
                        <a href="mailto:julito.1998@hotmail.es" className='flex items-center'>
                            <svg className="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <p className='p-1'>julito.1998@hotmail.es</p>
                        </a>
                        <a href="#" target='_blank' className='flex items-center'>
                            <svg className="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            <p className='p-1'>Instagram</p>    
                        </a>
                        <a href="https://github.com/SummitExplorerJD" target='_blank' className='flex items-center'>
                            <svg className="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            <p className='p-1'>Github</p>
                        </a>
                    </div>
                    <div className='text-center md:text-left flex flex-col'>
                        <h4>Explora</h4>
                        <a href="#">Inicio</a>
                        <a href="#SobreMi">Acerca de</a>
                        <a href="#Proyectos">Proyectos</a>
                        <a href="#Contacto">Contacto</a>
                    </div>
                </div>
                <div className='md:mx-10 mx-4 my-2'>
                    <hr className='border-2'/>
                </div>
                <p>&copy; 2025 SummitExplorer JD. Todos los derechos reservados.</p>
                <p>
                    <a href="#privacy-policy" className="text-[var(--primary-smjd)] hover:underline">Política de Privacidad</a> | <a href="#terms-of-service" className="text-[var(--primary-smjd)] hover:underline"> Términos de Servicio</a>
                </p>
            </footer>
        );
    }
}

export default Footer;