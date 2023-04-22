import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../providers/DataProvider";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export const Footer: React.FC = () => {
    const { loading, data, error } = useContext(DataContext);

    const todoItems = loading ? "Loading" : data?.filter(({ done }) => !done).length;
    const doneItems = loading ? "Loading" : data?.filter(({ done }) => done).length;

    return (
        <StyledFooter>
            {error ? (
                <span>Error</span>
            ) : (
                <>
                    <span>Todo: {todoItems}</span>
                    <span>Done: {doneItems}</span>
                </>
            )}
        </StyledFooter>
    );
};
