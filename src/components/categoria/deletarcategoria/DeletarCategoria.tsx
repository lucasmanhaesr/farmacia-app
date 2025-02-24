import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { buscar, deletar } from "../../../services/service";
import { RotatingLines } from "react-loader-spinner";

export default function DeletarCategoria(){

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const {id} = useParams<{id: string}>();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            ToastAlerta(error, "erro");
        }
    }

    async function deletarCategoria(){
        setIsLoading(true);
        try{
            await deletar(`/categorias/${id}`, setCategoria)
        }
        catch(error:any){
            ToastAlerta(error, "erro")
        }
        setIsLoading(false)
        navigate("/listarcategorias")
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar(){
        navigate("/listarcategorias")
    }
    
    return(
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}