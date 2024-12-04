import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Memes() {
  const [memes, setMemes] = useState({});
  const getMemes = async () => {
    try {
      const res = await axios.get("https://meme-api.com/gimme/wholesomememes");
      //automatically convert into json file
      const data = res.data;
      setMemes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMemes();
  },[]);
  return (
    <div className="w-full h-screen bg-gray-600 flex justify-center items-center">
        <div className="h-96 w-1/2 p-2">
            <img src={memes.url} className="w-full h-full" alt={memes.titel} />
            <p>{memes.titel}</p>
            <p>{memes.author}</p>
        </div>
    </div>
  );
}

export default Memes;
