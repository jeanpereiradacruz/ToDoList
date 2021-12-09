import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #8000ff;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-left: 0;
    }

    label {
        color: #fff;
        font-size: 15px;
        font-weight: 500;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button {
        border: none;
        border-radius: 5px;
        margin-left: auto;
        background-color: white;
    }
    `
))