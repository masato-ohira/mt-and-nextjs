import { get } from 'lodash-es'
import { useRouter } from 'next/router'

// types
// ------------------------------

// functions
// ------------------------------

// hooks
// ------------------------------
export const useRoute = () => {
  const { query, pathname } = useRouter()
  const slug = get(query, 'slug') as string

  const isIndex = (): boolean => {
    switch (true) {
      case pathname == '/':
        return true
      default:
        return false
    }
  }

  return {
    pathname,
    slug,
    isIndex,
  }
}
