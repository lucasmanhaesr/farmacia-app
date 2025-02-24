export default function Footer(){

    let data = new Date().getFullYear()
    
    return(
        <>
            <footer className="w-full flex items-center justify-between">
                <div className="w-full py-8 flex items-center justify-center bg-[#F8F6F6] gap-2">
                    <img src="/pill.svg" alt="Logo da farmacia" className="w-12"/>
                    <h2>Farmacia - {data}</h2>
                </div>
            </footer>
        </>
    );
}