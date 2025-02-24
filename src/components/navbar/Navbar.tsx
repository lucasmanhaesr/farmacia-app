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

                            <Link to="/criarcategoria" className="hover:underline">
                                <div className="flex items-center gap-1">
                                <img src="/plus.square.svg" alt="" className="w-4"/>
                                Criar Categoria
                                </div>
                            </Link>
                            <Link to="/listarcategorias" className="hover:underline">
                                <div className="flex items-center gap-1">
                                    <img src="/square.stack.svg" alt="" className="w-4"/>
                                    Categorias
                                </div>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}