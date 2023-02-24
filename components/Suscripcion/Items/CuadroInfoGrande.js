export const CuadroInfoGrande = ({ imgSVG, imgPNG, title, arryInfo }) => {
    return (
        <>
            <div className="bg-white h-full w-[90%] rounded-md shadow-md grid grid-cols-2  justify-items-center gap-5 py-5 items-center  ">

                {(() => {
                    if (imgSVG) {
                        return (
                            <div>
                                {imgSVG}
                            </div>
                        )
                    } else {
                        return (
                            <img src={imgPNG} className="h-36 *w-10" />
                        )
                    }
                })()}

                <div className="pr-10"  >
                    <h3 className="w-full text-center text-2xl text-tituloPrincipal pb-2">{title}</h3>
                    {arryInfo.map((item, idx) => (
                        <div key={idx} className="flex gap-2 py-2">
                            {item.icon}
                            <h4 className="text-sm">{item.title}</h4>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}