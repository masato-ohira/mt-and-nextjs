import { Container, ContainerProps } from '@chakra-ui/react'

export const MyContainer = (props: ContainerProps) => {
  return (
    <Container maxW={'container.xl'} {...props}>
      {props.children}
    </Container>
  )
}
