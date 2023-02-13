import { extendTheme, ThemeConfig, Colors, SemanticToken } from '@chakra-ui/react'

const config: ThemeConfig = {
    cssVarPrefix: 'ck',
    initialColorMode: "dark",
    useSystemColorMode: false
}

const styles = {
    global: {
        'html, body': {
            width: "100%",
            minHeight: "100vh",
            fontWeight: 500,
            textColor: "gray.400"
        }
    }
}

const colors: Colors = {
    blue: {
        500: "#3B82F6"
    }
}

const semanticTokens = {
    colors: {
        "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
        "chakra-body-bg": { _light: "white", _dark: "#1E293B" },
        "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
        "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
        "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
    }
}

const fonts = {
    body: "Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
}
export default extendTheme({
    fonts,
    config,
    styles,
    colors,
    semanticTokens
})
