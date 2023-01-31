import styled from "styled-components";

export const PhoneContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131a22;
    img {
        position: absolute;
        transform: translateX(-50%);
        top: 0;
        left: 50%;
        width: auto;
        height: 100vh;
    }
`;

export const Overlay = styled.div`
    position: relative;
    background-color: #15202b;
    height: 81.5vh;
    aspect-ratio: 9.1/16;
    transform: translateY(-1.2vh) translateX(-0.2vh);
`;

export const PhoneForm = styled.form`
    width: 100%;
    height: 100%;
    position: relative;

    input,
    textarea {
        border: none;
        outline: none;
    }
    .sender {
        width: 100%;
        padding: 1rem;
        font-size: 2rem;
        text-align: center;
        background-color: black;
        color: white;
    }

    .container {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .submit {
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        margin-top: 1rem;
        background-color: cornflowerblue;

        &:disabled {
            background-color: gray;
        }
    }
    textarea {
        width: 100%;
        height: 30%;
        padding: 1rem;
        font-size: 2rem;
    }

    .form-control {
        width: 100%;
        height: 2rem;
        color: black;
        background-color: lightgray;
    }

    .tel {
        margin-top: 1rem;
        width: 60%;
        height: 3rem;
        padding: 1rem;
        font-size: 1.5rem;
    }

    p {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: white;
    }
`;

export const Flex = styled.div`
    display: flex;
    margin-bottom: 1rem;
    column-gap: 1rem;
    button {
        font-size: 2rem;
        height: 3rem;
        flex-basis: 50%;
    }
`;

export const SMSCard = styled.div`
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
`;

export const SMSContainer = styled.div`
    height: 70vh;
    overflow-y: scroll;
`;
