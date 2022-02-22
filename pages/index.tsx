import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import HeadComponent, { Meta } from './../components/common/HeadComponent'

const title = "Optns - Open source options protocol"

const metaDescription: Meta = {
  name: "description",
  content: "Optns is an Open Source options trading protocol to sell and but put and call options on-chain. Optns currencty supports ERC20 tokens on Ethereum main chain."
}

/**
 * 
 * @param req 
 * @param res 
 * @returns {JSX.Element}
 */
const Home: NextPage = (req, res): JSX.Element => {
  return (
    <div>
      <HeadComponent title={title} metaList={[metaDescription]} />
      <Layout />
    </div>
  )
}

export default Home
