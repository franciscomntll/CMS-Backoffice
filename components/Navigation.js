import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, MenuButton, MenuItem, Menu, MenuList, Text, IconButton, Input } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { authentication } from "../utils/Authentication";
import { BombillaIcon, AddUserIcon, AyudaIcon, ArrowDownIcon, SearchIcon } from "../components/Icons/index";
import algoliasearch from "algoliasearch";
import { InstantSearch, connectSearchBox, Hits } from "react-instantsearch-dom";
import { createURL } from "../utils/UrlImage"

export const Navigation = ({ set, state }) => {
  const router = useRouter()
  const Options = [
    { title: "Inicio", route: "/" },
    { title: "Ayuda", route: "/" },
    {
      title: "Cerrar Sesión", function: async () => {
        authentication.SignOut()
        localStorage.removeItem("tokenAdminBodas")
        await router.push("/login")
      }
    },

  ]

  return (
    <Flex bg={"white"} shadow={"sm"} w={"100%"} padding={"0.5rem"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"} px={"1.5rem"} >

        <div className="flex gap-4 w-full ">
          <IconButton onClick={() => set(!state)}>
            <HamburgerIcon w={"1.5rem"} h={"1.5rem"} color={"gray.500"} />
          </IconButton>
          {/* <div className="relative w-full">
            <div className="absolute bottom-2.5 left-2 ">
              <SearchIcon />
            </div>
            <input className=" " />
          </div> */}
          <SearchNavigation />

          {/*  <GlobalFilter /> */}
        </div>

        <div className="flex justify-center items-center gap-2 ">
          <div className="">
            <AyudaIcon className="" />
          </div>
          <div className="">
            <AddUserIcon />
          </div>
          <div className="">
            <BombillaIcon />
          </div>
          <Menu>
            <MenuButton>
              <Flex alignItems={"center"} gap={"0.5rem"}>
                <Avatar size={"sm"} />
                {/* <Text fontSize={"sm"} letterSpacing={"tight"} color={"gray.500"}>
                {user?.email}
              </Text> */}
                {/*  <ArrowDownIcon className="text-gray-500" /> */}
              </Flex>
            </MenuButton>
            <MenuList p={"0"} fontSize={"sm"} ml={"8"}>
              {Options.map((item, idx) => (
                item.route ? (
                  <Link key={idx} href={item.route}>
                    <MenuItem color={"gray.500"}>{item.title}</MenuItem>
                  </Link>
                ) : (
                  <MenuItem key={idx} onClick={item?.function} color={"gray.500"}>{item.title}</MenuItem>
                )
              ))}
            </MenuList>
          </Menu>
        </div>
      </Flex>
    </Flex>
  );
};

export const SearchNavigation = () => {


  const conditionalQuery = {
    search(requests) {
      if (
        requests.every(({ params }) => !params.query) ||
        requests.every(({ params }) => !params.query.trim())
      ) {
        // Here we have to do something else
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0,
          })),
        });
      }
      const searchClient = algoliasearch(
        "4YG7QHCVEA",
        "920a6487923dbae05fb89b1be0955e74"
      );
      return searchClient.search(requests);
    },
  };

  return (
    <div className="flex items-center w-full justify-between ">
      <InstantSearch
        indexName="bodasdehoy"
        searchClient={conditionalQuery}
      >
        <ConnectedSearchBox
          searchAsYouType={false}

        />
        {/* <SearchBox searchAsYouType={false} /> */}
        <div className="absolute z-50 top-80px inset-x-0  right-0 w-[45%] mx-auto  bg-white shadow max-h-60 overflow-auto  rounded-b-3xl">
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  );
};

const MySearchBox = ({
  currentRefinement,
  refine,
}) => {


  return (
    <>
      <div className="flex gap-4 w-1/2">
        <div className="absolute  top-6pxx left-23px ">
          <SearchIcon />
        </div>
        <input
          autoFocus
          className="w-full h-full focus:outline-none  border  focus:border-1  py-1.5 rounded-lg text-sm  border  focus:border-2  py-1. rounded-lg w-full focus:outline-none  text-gray-700 transition pl-10"
          placeholder="Buscar "
          type="input"
          value={currentRefinement}
          onChange={(e) => refine(e.currentTarget.value)}
        />
      </div>
    </>
  );
};

export const Hit = ({ hit }) => {
  
  console.log("hit", hit)
  return (
   /*  <Link passHref href={`/${hit.type}`}> */
      <div className="gap-3 flex py-3 px-5  transition-all cursor-pointer items-center"  onClick={() => setAction({ type: "VIEWW", payload: { _id: hit.objectID } })}>
        <img
          alt={hit?.title}
          src={
            hit?.image ? createURL(hit?.image ?? "") : "/placeholder/image.png"
          }
          className={"w-14 h-14 rounded-lg object-cover object-center"}
        />
        <div className="col-span-3">
          <h3 className="text-xs md:text-sm font-semibold text-gray-500">
            {hit?.title}
          </h3>
          <span
            className={` text-xs   rounded  text-gray-500`}
          >
            {hit?.type}
          </span>
        </div>

      </div>
  /*   </Link> */
  );
};

export const ConnectedSearchBox = connectSearchBox(MySearchBox);