import Head from 'next/head'
import { FC } from 'react'

export type Meta = {
    name: string,
    content: string
}

type Props = {
    title: string,
    metaList: Array<Meta>
}

/**
 * Head component for SEO of individual page.
 * Custom page Title and Page Meta information.
 * Favicon is fixed to Optn logo
 * 
 * @param {Props} props
 * @returns {FC<Props>}
 */
const HeadComponent: FC<Props> = (props: Props) => {

    return (
        <Head>
            <title>{ props.title }</title>
            {
                props.metaList.map(meta => {
                    <meta name={meta.name} content={meta.content} />
                })
            }
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadComponent