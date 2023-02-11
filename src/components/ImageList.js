import ImageShow from "./ImageShow";
function ImageList({arrayOfImages}){
    const renderedImages = arrayOfImages.map( (image) =>{
        return <ImageShow key={image.id} particularImage={image}/>;
    }
    );
    return(
        <div>
            {renderedImages}
        </div>
        
    );
}
export default ImageList;