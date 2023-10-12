import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background: ${(props) => 
        props.colors !== "toto" ? props.theme.color.primary : "white"
    };
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 16px;
`;

const Title = styled.h2`
    color: #333333;
    margin-bottom: 8px;
`;

const Text = styled.p`
    color: #666666;
`;

const Card = (props) => {
    return (
        <StyledCard>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledCard>
    );
}

export default Card;
