import styled from 'styled-components'



export const Container = styled.textarea`
    width: 100%;
    height: 150px;



    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;


    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

`