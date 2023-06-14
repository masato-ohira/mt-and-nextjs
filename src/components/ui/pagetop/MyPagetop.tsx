import { useWindow } from '@/store/window'
import { Box, IconButton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { MdKeyboardControlKey } from 'react-icons/md'

export const MyPagetop = () => {
  const { scrolled } = useWindow()

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  const IconTag = () => {
    return (
      <Box
        css={css`
          transform: translateY(2px);
        `}
      >
        <MdKeyboardControlKey fontSize={'24px'} />
      </Box>
    )
  }

  return (
    <Box
      position={'fixed'}
      right={3}
      bottom={3}
      zIndex={9999}
      css={css`
        transition-property: opacity transform;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        opacity: ${scrolled ? 1 : 0};
        transform: translateY(${scrolled ? 0 : '80px'});
      `}
    >
      <IconButton
        aria-label='pagetop'
        colorScheme={'blackAlpha'}
        rounded={'full'}
        size={'lg'}
        icon={<IconTag />}
        onClick={scrollTop}
      />
    </Box>
  )
}
