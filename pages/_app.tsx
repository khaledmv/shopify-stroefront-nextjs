import "@assets/main.css"
import { AppProps  } from "next/app"
// import { Layout } from "../components/common/index" 
import { FC } from "react"


const Noop: FC = ({chlidren}) => <> {chlidren} </>

function Myapp({Component, pageProps}: AppProps & {Components: {Layout: FC}}){

  const Layout = Component.Layout ?? Noop
  return (
    <Layout>
      
        < Component {...pageProps } />
       
      </Layout>
  )
}

export default Myapp