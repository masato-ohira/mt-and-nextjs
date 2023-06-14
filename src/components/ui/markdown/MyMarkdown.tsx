import MarkdownIt from 'markdown-it'
import Deflist from 'markdown-it-deflist'
import { Box, BoxProps } from '@chakra-ui/react'
import { cloneDeep } from 'lodash-es'

const mdOptions: any = {
  injected: true,
  breaks: true,
  html: true,
  linkify: false,
  typography: true,
}
const md = new MarkdownIt(mdOptions)
md.use(Deflist)

interface MdProps extends BoxProps {
  children?: string
}

export const MyMarkdown = (props: MdProps) => {
  let opts: MdProps = cloneDeep(props)
  delete opts.children
  return (
    <>
      <Box
        {...opts}
        dangerouslySetInnerHTML={{ __html: md.render(props.children || '') }}
      ></Box>
    </>
  )
}
