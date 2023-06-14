import { MyMetas } from './MyMetas'
import { Box, BoxProps } from '@chakra-ui/react'

export const MyLayoutPage = (props: BoxProps) => {
  return (
    <Box {...props}>
      <MyMetas />
      {props.children}
    </Box>
  )
}
