export default function Navbar(){
    
    return(
        <>
            <nav className="w-screen h-32 flex items-center justify-between">
                <div className="w-full h-full px-12 bg-[#F8F6F6] drop-shadow-sm flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/pill.svg" alt="Logo da farmacia" className="w-10"/>
                        <h1 className="text-xl pl-2">Farmácia</h1>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-[#5DFFAD]">Produtos</a>
                        <a href="#" className="hover:text-[#5DFFAD]">Categorias</a>
                    </div>
                </div>
            </nav>
        </>
    );
}