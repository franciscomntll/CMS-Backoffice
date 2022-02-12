import { Box, Flex, Input, List, ListItem, Text } from "@chakra-ui/react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useField } from "formik";
import { useCallback, useState, useRef, FC, useEffect } from "react";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};



const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const GoogleMapsField = ({ label, ...props }) => {
  const [libraries] = useState(["places"]);
  const [center, setCenter] = useState({
    lat: 40.416729,
    lng: -3.703339,
  })
  const [field, meta, { setValue }] = useField({ ...props });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_CONSOLE_GOOGLE ?? "",
    //@ts-ignore
    libraries,
  });
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    field?.value?.lat && setCenter(field.value)
  }, [])
  
  const onMapClick = useCallback((event) => {
    setValue({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef?.current?.panTo({ lat, lng });
    mapRef?.current?.setZoom(16);
    setValue({ lat, lng });
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="w-full">
          <Flex gap={"0.3rem"} alignItems={"center"} fontWeight={"900"}
        fontSize={"sm"}>
          {label}
          {meta.touched && meta.error && (
            <Text color={"red"} fontSize={"xs"} fontWeight={"500"}>
              {meta.error}
            </Text>
          )}
        </Flex>

          <div className="relative w-full">
            <Search panTo={panTo} center={center} />
            <Box paddingTop={"0.5rem"} >
              <Text fontSize={"xs"} fontWeight={"bold"} color={"gray.500"} paddingBottom={"0.25rem"} textAlign={"center"} >
                Selecciona la ubicación con el click derecho
              </Text>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                onRightClick={onMapClick}
                onLoad={onMapLoad}
              >
                <Marker position={field.value} />
              </GoogleMap>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleMapsField;

const Search = ({ panTo, center }) => {
  const [selected, setSelected] = useState();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      //@ts-ignore
      location: {
        lat: () => center.lat,
        lng: () => center.lng,
      },
      radius: 200 * 1000,
    },
  });

  const process = async () => {
    //@ts-ignore
    setValue(selected, false);
    clearSuggestions();
    try {
      if (selected) {
        //@ts-ignore
        const results = await getGeocode({ address: selected });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    process();
  }, [selected]);

  return (
    <Box pos={"relative"} >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        w={"100%"}
        variant={"outline"}
        size={"sm"}
      />
      {status === "OK" && (
        <List
          position={"absolute"}
          zIndex={20}
          bg={"white"}
          w={"full"}
        >
          {data.map((item) => (
            <ListItem
              key={item.id}
              paddingBlock={"0.5rem"}
              fontSize={"sm"}
              
              cursor={"pointer"}
              paddingInline={"1rem"}
              _hover={{ bg: "gray.100" }}
              onClick={() => setSelected(item.description)}
            >
              {item.description}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
