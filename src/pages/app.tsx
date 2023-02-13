import React from "react";
import { Box, Text, Container, Input, Button } from "@chakra-ui/react"

type AppProps = {
    children?: React.ReactNode
}

const App: React.FC<AppProps> = ({ children }) => {
    return <Container maxW="container.xl" centerContent>
        <Text as="h1" fontSize={48} fontWeight={800} textColor="white">About</Text>

        <Box py={16}>
            <Box fontSize="lg" lineHeight={6} my={1}>
                <Text as="h3" textColor="white">Felix Gerschau</Text>
                <Text as="p" textColor="blue.500">Software Developer</Text>
            </Box>

            <Box fontSize="lg">
                <Text mb={2}>I've been working as a software developer since 2017, mostly at small to medium sized companies.</Text>
                <Text mb={2}>As many others, I acquired most of my programming knowledge online, through blogs and free resources like this one.</Text>
                <Text mb={2}>I hope that with the articles on here, I can give part of the value I received back to the community.</Text>
                <Text mb={2}>If you like my content, consider subscribing to my email list below. You can also&nbsp;
                    <Text textColor="blue.500" _hover={{ textDecoration: "underline", textColor: "blue.400" }} as="a" rel="noopener noreferrer" target="_blank" href="mailto:me@felixgerschau.com">
                        send me an email</Text> to say hi.
                </Text>
            </Box>

            <Box display="flex" gap={4} mt={2}>
                <Text as="a" _hover={{ textColor: "gray.300" }}  rel="noopener noreferrer" target="_blank" href="https://twitter.com/4xfelix">
                    <Text as="svg" w={6} h={6} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </Text>
                </Text>
                <Text as="a" _hover={{ textColor: "gray.300" }} rel="noopener noreferrer" target="_blank" href="https://github.com/fgerschau" className="text-gray-400 hover:text-gray-300">
                    <Text as="svg" w={6} h={6} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </Text>
                </Text>
                <Text as="a" _hover={{ textColor: "gray.300" }} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/felixgerschau/" className="text-gray-400 hover:text-gray-300">
                    <Text as="svg" w={6} h={6} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                    </Text>
                </Text>
            </Box>
        </Box>

        <Box display="flex" zIndex={10} flexDirection="row" flexWrap="nowrap" h={16} w="full" mb={32}>
            <Box flexGrow={1} borderRight="2px solid #4A5568" h={14}></Box>
            <Box flexGrow={1}></Box>
        </Box>

        <Box mx="auto" py={12} px={4} w="full" display="flex" alignItems="center">
            <Box flex="1 1 0%">
                <Text as="h2" fontSize="4xl" fontWeight={800} textColor="white">Get notified about new tutorials</Text>
                <Text as="p" fontSize="lg" mt={3}>Join over 1,000 developers who receive React and JavaScript tutorials via email.</Text>
            </Box>
            <Box mt={8}>
                <Box display="flex" gap={2} className="sm:flex">
                    <Input maxW={180} placeholder="Enter your email"></Input>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <Button colorScheme="messenger">Notify me</Button>
                    </div>
                </Box>
                <Text as="p" mt={3} fontSize="sm">No spam. Unsubscribe at any time.</Text>
            </Box>
        </Box>

        <Box as="footer" w="full">
            <Box mt={8} borderTop="1px solid #2D3748" pt={8} display="flex" w="full" justifyContent="space-between" alignItems="center">
                <Box mt={3}>© 2022 Felix Gerschau. All rights reserved.</Box>

                <Box display="flex" gap={3}>
                    <Text _hover={{ textColor: "gray.300" }} as="a" rel="noopener noreferrer" target="_blank" href="https://twitter.com/4xfelix">
                        <Text as="svg" h={6} w={6} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </Text>
                    </Text>
                    <Text _hover={{ textColor: "gray.300" }} as="a" rel="noopener noreferrer" target="_blank" href="https://github.com/fgerschau">
                        <Text as="svg" h={6} w={6} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </Text>
                    </Text>
                    <Text _hover={{ textColor: "gray.300" }} as="a" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/felixgerschau/">
                        <Text as="svg" h={6} w={6} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                        </Text>
                    </Text>
                </Box>
            </Box>
        </Box>
    </Container>
}

export default App
