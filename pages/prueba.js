import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import axios from 'axios'

const prueba = () => {
    const fetch = async() => {
        try {
        const url = "https://dev.bodasdehoy.com/event"
        const res = await axios.post(url)
        console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch()
    }, []);
    
  return (
      <Button onClick={() => fetch()}>Probar</Button>
  )
};

export default prueba;
