// import Head from 'next/head'

// import { useRouter } from 'next/router'

// import { useRoute } from '@/store/route'
// import { useMetas, getMeta, rootSite, siteURL } from '@/store/metas'

export const MyMetas = () => {
  // const router = useRouter()
  // const { baseName } = useMetas()
  // const { isIndex, lang } = useRoute()

  // const ogURL = isIndex() ? siteURL : `${siteURL}${router.asPath}`
  // const meta = getMeta({
  //   pathname: router.pathname,
  //   query: router.query,
  //   lang,
  // })

  return <></>

  // return (
  //   <>
  //     <Head>
  //       <title>{meta.title}</title>
  //       <meta name='description' content={meta.description} />
  //       <meta name='keywords' content={meta.keywords} />
  //       <meta property='og:title' content={meta.title} />
  //       <meta property='og:url' content={ogURL} />
  //       <meta property='og:description' content={meta.description} />
  //       <meta
  //         property='og:image'
  //         content={`${siteURL}${baseName}/static/icons/ogp.png`}
  //       />
  //       <meta property='og:site_name' content={`${rootSite}`} />
  //       {/* <meta property='og:type' content={isIndex() ? 'website' : 'article'} /> */}
  //       {/* <meta property='og:locale' content='ja_JP' /> */}

  //       <link rel='icon' href={`/${baseName}/static/icons/favicon.png`} />
  //       <link
  //         rel='apple-touch-icon'
  //         href={`/${baseName}/static/icons/apple-touch-icon.png`}
  //       />
  //     </Head>
  //   </>
  // )
}
