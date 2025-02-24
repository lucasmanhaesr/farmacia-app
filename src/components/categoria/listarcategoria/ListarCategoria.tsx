import { RotatingLines } from "react-loader-spinner";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { buscar } from "../../../services/service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListarCategoria(){

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategorias(){
        try{
            await buscar("/categorias", setCategoria)
        }
        catch(error:any){
            ToastAlerta(error, "erro")
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categoria.length]);

    return(
        <>
            <div className="w-full flex justify-center">
                {categoria.length === 0 && (<RotatingLines strokeColor="black" strokeWidth="1.5" animationDuration="0.75" width="100" visible={true} /> )}
            </div>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}