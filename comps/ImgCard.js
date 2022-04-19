import styled from 'styled-components';

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl};
`;

export default function ImgCard({
    img="/dog.jpg",
    bg="red"
}){

    return <RedCont cl={bg} text_cl="#FFF">
            <img src={img}></img>
            <h1> its a cat </h1>
    </RedCont>
}