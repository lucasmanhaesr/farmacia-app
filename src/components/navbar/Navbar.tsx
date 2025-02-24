import { Link } from "react-router-dom";

export default function Navbar(){
    
    return(
        <>
            <nav className="w-full flex items-center justify-between">
                <div className="w-full h-full py-8 px-12 bg-[#F8F6F6] drop-shadow-sm flex justify-between items-center">
                    <Link to="/">
                        <div className="flex items-center">
                            <img src="/pill.svg" alt="Logo da farmacia" className="w-10"/>
                            <h1 className="text-xl pl-2">Farmácia</h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-8">
                    <Link to="/criarcategoria" className="hover:text-[#5DFFAD]">
                            Criar Categoria
                        </Link>
                        <Link to="/listarcategorias" className="hover:text-[#5DFFAD]">
                            Categorias
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}