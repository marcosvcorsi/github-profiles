import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container, Title } from "./styles";

const Header = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Title>Github Profiles</Title>
            <Switch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    );
};

export default Header;