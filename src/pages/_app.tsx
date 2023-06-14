import type { AppProps } from 'next/app'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { MyLayout } from '@/layouts/MyLayout'

import '@/styles/libs/github.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,viewport-fit=cover'
        />
        <meta
          name='format-detection'
          data-hid='format-detection'
          content='telephone=no,address=no,email=no'
        />
      </Head>
      <MyLayout>
        <Component key={router.asPath} {...pageProps} />
      </MyLayout>
    </>
  )
}

export default MyApp
