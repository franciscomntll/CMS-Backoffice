import {
    Square,
    Image,
    Flex,
} from "@chakra-ui/react";
import { Markup } from "interweave";
import QuestionInputsForBusiness from "../formularios/Inputs/QuestionInputsForBusiness";
import { useState } from "react";

export const CuadroInfoSimple = ({ info, icon, title }) => {
    return (
        <>
            <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
                <div className="flex justify-between items-center px-4">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>
                <div className="px-8 py-3 mt-4 text-tituloSecundario bg-gray-100 rounded-lg text-sm">
                    {
                        info ? (<Markup className="text-sm text-justify transition-all bg-none" content={info} />) : ""
                    }
                </div>
            </div>
        </>
    )
}

export const CuadroMultiInfo = ({ title, icon, label1, label2, label3, title1, title2, title3 }) => {
    return (<>
        <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
            <div className="flex justify-between px-4">
                <label className="text-2xl text-slate-600">{title}</label>
            </div>

            <div className=" flex flex-col px-8 pt-4">
                <div className="grid grid-cols-2 space-x-6 pb-3">
                    <div className="flex flex-col">
                        <label className="text-slate-600 text-lg">{title1}</label>
                        <label className="text-tituloSecundario pl-2 py-2 bg-gray-100 rounded-lg text-sm">{label1 ? label1 : ""}</label>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-slate-600 text-lg">{title2}</label>
                        <label className="text-tituloSecundario pl-2 py-2 bg-gray-100 rounded-lg text-sm">{label2 ? label2 : ""}</label>
                    </div>
                </div>

                <label className="text-slate-600 text-lg">{title3}</label>
                <label className="text-tituloSecundario pl-2 py-2 bg-gray-100 rounded-lg text-sm">{label3 ? label3 : ""}</label>
            </div>
        </div>

    </>)
}

export const CuadroContacto = ({ title, icon, info, contactIcon, contactLabel, emailIcon, emailLabel, movilIcon, movilLabel, webIcon, webLabel }) => {
    return (<>
        <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
            <div className="flex justify-between px-4 ">
                <label className="text-2xl text-slate-600">{title}</label>
            </div>
            <div className=" flex flex-col px-8 pt-4 truncate ">
                <div className="pb-2 ">
                    <label className="text-slate-600 ">{info}</label>
                </div>
                <div className=" flex py-2 pl-3 bg-gray-100 rounded-lg">
                    <label className="pr-3">{contactIcon}</label>
                    <label className="text-tituloSecundario text-sm">{contactLabel ? contactLabel : ""}</label>
                </div>
                <div className="grid grid-cols-2 py-2 space-x-6">
                    <div className=" flex py-2 pl-3 bg-gray-100 rounded-lg">
                        <label className="pr-3">{emailIcon}</label>
                        <label className="text-tituloSecundario text-sm" >{emailLabel ? emailLabel : ""}</label>
                    </div>
                    <div className=" flex py-2 pl-3 bg-gray-100 rounded-lg">
                        <label className="pr-3">{movilIcon}</label>
                        <label className="text-tituloSecundario text-sm">{movilLabel ? movilLabel : ""}</label>
                    </div>
                </div>
                <div className="flex py-2 pl-3 bg-gray-100 rounded-lg">
                    <label className="pr-3">{webIcon}</label>
                    <label className="text-tituloSecundario text-sm">{webLabel ? webLabel : ""}</label>
                </div>
            </div>
        </div>
    </>)
}

export const CuadroSocial = ({ title, icon, info, facebookIcon, facebookLabel, instagramIcon, instagramLabel, linkedinIcon, linkedinLabel, twitterIcon, twitterLabel, whatsappIcon, whatsappLabel, youtubeIcon, youtubeLabel }) => {
    return (
        <>
            <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
                <div className="flex justify-between px-4 ">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>


                <div className=" flex flex-col px-8 pt-4 ">
                    <div className=" pb-2">
                        <label className="text-slate-600 ">{info}</label>
                    </div>

                    <div className="grid grid-cols-2 py-2 gap-2   truncate ">
                        <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-6">{facebookIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm">{facebookLabel ? facebookLabel : ""}</label>
                        </div>
                        <div className=" flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-3">{instagramIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm" >{instagramLabel ? instagramLabel : ""}</label>
                        </div>
                        <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-3">{linkedinIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm">{linkedinLabel ? linkedinLabel : ""}</label>
                        </div>
                        <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-3">{twitterIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm">{twitterLabel ? twitterLabel : ""}</label>
                        </div>
                        <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-3">{whatsappIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm">{whatsappLabel ? whatsappLabel : ""}</label>
                        </div>
                        <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                            <label className="pr-3">{youtubeIcon}</label>
                            <label className="text-tituloSecundario truncate text-sm">{youtubeLabel ? youtubeLabel : ""}</label>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export const CuadroImg = ({ imagee, title, icon }) => {
    return (
        <>
            <div className={`${imagee?.length > 0 ? "block" : "hidden"} bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg `}>
                <div className="flex justify-between px-4  mb-4">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>
                <div className="grid grid-cols-3 px-8 py-5 justify-items-center border-2 border-dashed gap-5 ">
                    {imagee?.map((item, idx) => {
                        if (item?.image) {
                            return (
                                <Square
                                    key={idx}
                                    shadow={"md"}
                                    h={"8rem"}
                                    w={"8rem"}
                                    rounded={"lg"}
                                    border={"3px solid"}
                                    borderColor={"gray.300"}
                                    pos={"relative"}
                                    background={"gray.50"}
                                    gap={"2rem"}
                                >
                                    <Image
                                        src={item.image}
                                        objectFit={"contain"}
                                        pos={"absolute"}
                                        h={"100%"}
                                        w={"100%"}

                                    />

                                </Square>
                            )
                        }
                        if (item?.i800) {
                            return (
                                <Square
                                    key={idx}
                                    shadow={"md"}
                                    h={"8rem"}
                                    w={"8rem"}
                                    rounded={"lg"}
                                    border={"1px solid"}
                                    borderColor={"gray.300"}
                                    pos={"relative"}
                                    background={"gray.50"}

                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.i640}`}
                                        objectFit={"contain"}
                                        pos={"absolute"}
                                        h={"100%"}
                                        w={"100%"}
                                    />

                                </Square>
                            )
                        }
                    })}
                </div>

            </div>
        </>
    )
}

export const CuadroTituloSlug = ({ title, info, labelSlug, labelTitle, seo, autor, encabezado }) => {
    return (
        <>
            <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
                <div className="flex justify-between px-4  mb-4">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>

                <div className="flex flex-col px-8 pt-4">

                    <label className={`text-slate-600 pb-2 ${info ? "block" : "hidden"} `}>{info}</label>

                    <div className="grid grid-cols-2 py-2 gap-2">
                        <div>
                            <label className="text-slate-600 text-lg">Titulo</label>
                            <div className="flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center">
                                <label className="text-tituloSecundario truncate text-sm">{labelTitle ? labelTitle : ""}</label>
                            </div>
                        </div>
                        <div className={`${labelSlug ? "block" : "hidden"}`}>
                            <label className="text-slate-600 text-lg">Slug</label>
                            <div className={`flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center `}>
                                <label className="text-tituloSecundario truncate text-sm" >{labelSlug ? labelSlug : ""}</label>
                            </div>
                        </div>
                        <div className={`${autor ? "block" : "hidden"} pt-2`}>
                            <label className="text-slate-600 text-lg">Autor del post</label>
                            <div className={`flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center  `}>
                                <label className="text-tituloSecundario truncate text-sm" >{autor ? autor : ""}</label>
                            </div>
                        </div>
                        <div className={`${encabezado ? "block" : "hidden"} pt-2`}>
                            <label className="text-slate-600 text-lg">Encabezado de la categoria</label>
                            <div className={`flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center  `}>
                                <label className="text-tituloSecundario truncate text-sm" >{encabezado ? encabezado : ""}</label>
                            </div>
                        </div>
                    </div>
                    <div className={`${seo ? "block" : "hidden"} pt-2`}>
                        <label className="text-slate-600 text-lg">SEO descripcion</label>
                        <div className={`flex py-2 pl-3 bg-gray-100 rounded-lg truncate items-center w-full `}>
                            <label className="text-tituloSecundario truncate text-sm" >{seo ? seo : ""}</label>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export const CuadroImagenSmall = ({ title, imgBanner, imgMiniatura, imgIcon, imgLogo }) => {
    return (
        <>
            <div className=" bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
                <div className="flex justify-between px-4  mb-4">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>



                <div className="grid grid-cols-3 py-2 gap-6">
                    {(() => {
                        if (imgBanner?.i320) {
                            return (
                                <div className={`${imgBanner?.i320 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgBanner?.i320}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgBanner?.i640) {
                            return (
                                <div className={`${imgBanner?.i640 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgBanner?.i640}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgBanner?.i800) {
                            return (
                                <div className={`${imgBanner?.i800 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgBanner?.i800}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgBanner?.i1024) {
                            return (
                                <div className={`${imgBanner?.i1024 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgBanner?.i1024}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else {

                        }
                    })()}

                    {(() => {
                        if (imgIcon?.i320) {
                            return (
                                <div className={`${imgIcon?.i320 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgIcon?.i320}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgIcon?.i640) {
                            return (
                                <div className={`${imgIcon?.i640 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgIcon?.i640}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgIcon?.i800) {
                            return (
                                <div className={`${imgIcon?.i800 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgIcon?.i800}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgIcon?.i1024) {
                            return (
                                <div className={`${imgIcon?.i1024 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgIcon?.i1024}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else {

                        }
                    })()}

                    {(() => {
                        if (imgMiniatura?.i320) {
                            return (
                                <div className={`${imgMiniatura?.i320 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgMiniatura?.i320}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgMiniatura?.i640) {
                            return (
                                <div className={`${imgMiniatura?.i640 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgMiniatura?.i640}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgMiniatura?.i800) {
                            return (
                                <div className={`${imgMiniatura?.i800 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgMiniatura?.i800}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgMiniatura?.i1024) {
                            return (
                                <div className={`${imgMiniatura?.i1024 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgMiniatura?.i1024}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else {
                        }
                    })()}
                     {(() => {
                        if (imgLogo?.i320) {
                            return (
                                <div className={`${imgLogo?.i320 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgLogo?.i320}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgLogo?.i640) {
                            return (
                                <div className={`${imgLogo?.i640 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgLogo?.i640}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgLogo?.i800) {
                            return (
                                <div className={`${imgLogo?.i800 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgLogo?.i800}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else if (imgLogo?.i1024) {
                            return (
                                <div className={`${imgLogo?.i1024 ? "block" : "hidden"}`}>
                                    <label className="text-slate-600 text-lg">Imagen Banner</label>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w={"100%"}
                                        border={"2px dotted"}
                                        borderColor={"gray.300"}
                                        h={"10rem"}
                                        rounded={"xl"}
                                        color={"gray.400"}
                                        pos={"relative"}
                                        mt={"0.5rem"}

                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imgLogo?.i1024}`}
                                            objectFit={"contain"}
                                            pos={"absolute"}
                                            h={"100%"}
                                            w={"100%"}
                                        />
                                    </Flex>
                                </div>
                            )
                        } else {
                        }
                    })()}
                </div>


            </div>
        </>
    )
}

export const CuadroItems = ({ title, info, tacs }) => {
    return (
        <>
            <div className="bg-white h-full w-3/4 px-6 py-8 flex-col justify-center items-center rounded-lg ">
                <div className="flex justify-between px-4  mb-4">
                    <label className="text-2xl text-slate-600">{title}</label>
                </div>

                <div className="flex flex-col px-8 pt-4">
                    <label className="text-slate-600 pb-2 ">{info}</label>





                    <div className="grid grid-cols-4  justify-items-center py-2 gap-2">
                        {tacs?.map((item, idx) => {
                            console.log("123", item)

                            return (

                                <div key={idx} className=" w-max text-sm    p-2 bg-gray-100 rounded-lg ">
                                    <label className="text-tituloSecundario" >{item.title}</label>
                                </div>

                            )

                        })}
                    </div>
                </div>

            </div>
        </>
    )
}
