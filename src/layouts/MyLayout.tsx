import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { MyHeader } from '@/components/layouts/header/MyHeader'
import { MyFooter } from '@/components/layouts/footer/MyFooter'
import { MyHeaderTitle } from '@/components/layouts/header/MyHeaderTitle'
import { MyContainer } from '@/components/ui/container/MyContainer'
import { useWindowEffect } from '@/store/window'
import { MyPagetop } from '@/components/ui/pagetop/MyPagetop'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ChakraProvider>{children}</ChakraProvider>
    </RecoilRoot>
  )
}

const LayoutChild = ({ children }: { children: ReactNode }) => {
  // const { isIndex } = useRoute()
  useWindowEffect()
  return (
    <Box>
      <MyHeader />
      <MyHeaderTitle />

      {/* {isIndex() ? (
        <>{children}</>
      ) : (
        <MyContainer py={8}>{children}</MyContainer>
      )} */}

      <MyContainer py={8}>{children}</MyContainer>

      <MyFooter />
      <MyPagetop />
    </Box>
  )
}

export const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <LayoutChild>{children}</LayoutChild>
    </Providers>
  )
}
