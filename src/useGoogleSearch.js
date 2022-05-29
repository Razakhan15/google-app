import { useEffect, useState } from "react";
import API_KEY from './keys'

const CONTEXT_KEY = "a974e20f4f5e2ef82";  // <= //https://programmablesearchengine.google.com/cse/setup/basic?cx=a974e20f4f5e2ef82

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        ).then(response => response.json())
        .then(result => {
            setData(result)
        })
    }
    fetchData();
  }, [term]);
  return {data}
}

export default useGoogleSearch;
