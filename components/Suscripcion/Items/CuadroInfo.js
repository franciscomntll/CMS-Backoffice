export const CuadroInfoPequeño = ({ imgSVG, imgPNG, title, subtitle }) => {
    return (
        <>
            <div className="bg-white h-full w-full rounded-md shadow-md grid grid-columns-3  justify-items-center gap-5 py-5 ">
                {(() => {
                    if (imgSVG) {
                        return (
                            <div>
                                {imgSVG}
                            </div>
                        )
                    } else {
                        return (
                            <img src={imgPNG} className="h-36 *w-10"/>
                        )
                    }
                })()}
                
                <h3 className="w-[90%] text-center text-tituloPrincipal">{title}</h3>

                <h4 className="w-[80%] text-center text-tituloSecundario">{subtitle}</h4>

            </div>

        </>
    )
}

