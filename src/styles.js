import styled from "styled-components"

export const Container = styled.div`
     background: -webkit-linear-gradient(29deg, #f2f2f2,#ea4386,#99055b); background: linear-gradient(29deg, #f2f2f2,#ea4386,#99055b);                                                               ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`

export const TopoDoSite = styled.div`
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-height: 100%;
        max-height: 100%;
    }


`

export const H1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const ConteinerInput = styled.div`
    display: flex;
    gap: 20px;
`

export const InputLabel = styled.label`
    color: white;
    font-size: 12px;
    font-weight: bold;


    span {
        color: red;
        font-weight: 100;
    }
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid white;
    background-color: white;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    background-color: #ea4386;
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
`


