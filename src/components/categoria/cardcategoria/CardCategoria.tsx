import { Link } from "react-router-dom";
import Categoria from "../../../model/Categoria";

interface categoriaProps{
    categoria: Categoria
}

export default function({categoria}: categoriaProps){
    
    return(
        <>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#55D5DF] text-white text-xl'>{categoria.nome}</header>
            <p className='py-4 px-8 text-lg h-full'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
        </>
    );
}