


export const getGift = async ( category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IXEhHI99Jne61nX7eYGAybc7RCd5OhL5&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gift = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gift;
}