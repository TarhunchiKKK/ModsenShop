import { styled } from "styled-components";

export const Section = styled.section`
    padding: 128px 0px 250px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 123px;
`;

export const ProductContainerWrapper = styled.div``;

export const ProductContainerTittle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    text-transform: capitalize;
    margin-bottom: 47px;
`;
