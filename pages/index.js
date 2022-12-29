import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import ManualHeader from "../components/ManualHeader"
import LotteryEntrnce from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div>
            <Head>
                <title>lottery</title>
                <meta name="description" content="lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrnce />
        </div>
    )
}
