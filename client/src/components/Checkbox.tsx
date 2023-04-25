import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
    all: unset;
    background-color: ${(props) => props.theme.colors.olive3};
    border: ${(props) => `1px solid ${props.theme.colors.blackA7}`};
    border-radius: 4px;
    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props) => props.theme.colors.olive4};
    }
    &:focus {
        border: ${(props) => `1px solid ${props.theme.colors.blackA9}`};
    }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${(props) => props.theme.grass11};
`;

export const Checkbox: React.FC<CheckboxProps> = (props) => (
    <StyledCheckbox {...props}>
        <StyledIndicator>
            <CheckIcon />
        </StyledIndicator>
    </StyledCheckbox>
);
