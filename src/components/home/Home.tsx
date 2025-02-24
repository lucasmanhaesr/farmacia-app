export default function Home(){
    
    return(
        <>
            <main className="w-full h-full">
                <div className="bg-[#FFFFFF] flex justify-center">
                    <div className='container grid grid-cols-2 text-white'>
                        <div className="flex flex-col gap-4 items-center justify-center py-4">
                            <h2 className='text-5xl font-bold text-black'> Seja Bem Vindo! </h2>
                            <p className='text-xl text-black'>Mais vendidos na farmacia</p>
                            <a href="#" className="border border-[#5DFFAD] text-[#5DFFAD] font-semibold p-2 rounded-lg hover:bg-[#5DFFAD] hover:text-white">Conhecer</a>
                        </div>

                        <div id="imagem" className="flex justify-center">
                            <img src="/01.png" alt="Imagem da Página Home" className="w-2/3"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}