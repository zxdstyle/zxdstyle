import React from 'react'
import App from "./pages/app"
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme/dark"

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode="dark" />
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)
