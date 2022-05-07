import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/m-plus-1";
import { extendTheme } from "@chakra-ui/react";
const fonts = {
  fonts: {
    heading: "Raleway, sans-serif",
    body: "M PLUS Rounded 1c, sans-serif",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const components={
  Link:{
    baseStyle:{
    }
  }
}
const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        "orange.100",//light theme
        "#1A202C"//dark theme
      )(props),
      color: mode(
        "gray.700",//light
        "whiteAlpha.900"//dark theme
      )(props)
    },
  }),
};
const theme = extendTheme({ fonts, config, styles });

export default theme;
