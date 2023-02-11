// ImageShow is responsible for showing one individual image.
function ImageShow({particularImage}){
    return<div>
        
        <img src={particularImage.urls.small}></img>
    </div>
}

export default ImageShow;