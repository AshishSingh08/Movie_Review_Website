import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
    justify-content: space-around;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: 20px;
`;

export const CenteredHeader = styled.div`
    text-align: center;
    margin: 0 auto;
`;

export const Heading = styled.h1`
    font-size: 60px;
`;
export const Description = styled.p`
    font-size: 24px;
`;
