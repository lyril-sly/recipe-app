import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import loader from "../../Assect/images/motion-blur-2.svg"

const getREcipe =(...args) => {
    // prepare for url
    const url = new URL(...args);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);

    // fectching and returning data
    return fetch(url).then(response => response.json());
}

export default function Recipe() {
const {id}=useParams();
const {data, isLoading} = useSWR(`https://api.spoonacular.com/recipes/${id}/information`, getREcipe)
console.log(data, isLoading)
    return(
        <>
        {isLoading ? <img src={loader} /> :(
            <Container>
            <h1>{data.title}</h1>
            <p  dangerouslySetInnerHTML={{__html:data.instructions}}></p>
            <img src={data.image}/>
            </Container>
        )}
        </>
    )
}