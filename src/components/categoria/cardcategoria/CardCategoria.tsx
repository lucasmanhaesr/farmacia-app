import { Link } from "react-router-dom";
import Categoria from "../../../model/Categoria";

interface categoriaProps{
    categoria: Categoria
}

export default function({categoria}: categoriaProps){
    
    return(
        <>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-[#F8F6F6] text-black text-xl'>{categoria.nome}</header>
                <p className='py-4 px-8 text-lg h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <Link to={`/editarcategoria/${categoria.id}`}
                        className='w-full text-black bg-[#EBE8E9] hover:bg-[#5DFFAD] hover:text-white flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarcategoria/${categoria.id}`} 
                        className='w-full text-black bg-[#EBE8E9] hover:bg-red-700 hover:text-white flex items-center justify-center py-2'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    );
}