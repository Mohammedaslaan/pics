import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App(){
    const [result,setResult] = useState([]);
    
    const handleSubmit = async(term)=>{
        console.log('Do a search with',term);
        const arrayImages = await searchImages(term);
        setResult(arrayImages)
        // console.log(arrayImages);
        // arrayOfImages = arrayImages;
        //console.log(ImageList(arrayImages));
        
    }

    return(
        <div>
            <SearchBar onSubmit ={handleSubmit}/>
            <ImageList arrayOfImages={result}/>

        </div>
    )
}

export default App;