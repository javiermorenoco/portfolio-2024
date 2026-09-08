import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // eslint-disable-next-line jsx-a11y/alt-text -- el `alt` lo aporta quien usa <Image /> en el MDX
    Image: (props: ImageProps) => <Image {...props} />,
  }
}
