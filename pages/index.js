import Head from "next/head"
import { Face } from "../components/Face"

// A Smart Component from Framer
// import Face from "https://framer.com/m/face-vkm8.js@Z6HOOZivknS2CsTeuq85"

export default function Home() {
    return (
        <>
            <Head>
                <title>JieunU Portfolio</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div className="hambugerBar"></div>
            <div className="main">
                <div className="mainTitle">I AM</div> 
                <div className="mainMotion">MOTION
                    <div className="underline1"></div></div>
                <div className="mainEditorial">EDITORIAL
                    <div className="underline2"></div></div>
                <div className="mainTitle">DESIGNER</div>

                <div className="scroll">
                    <div className="SCrec">
                        <div className="SCrecText">SCROLL</div>
                    <div className="SCrec1 "></div>
                    <div className="SCrec2"></div>
                    <div className="SCrec3"></div>
                    </div>
                </div>
            </div>

            <div className="intro">
                <div className="introBox"></div>
                <div className="introText1">Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects</div>
                <div className="introName">
                    <div className="introNameFill">UJE</div>
                    <div className="introNameStroke">Ujieun</div>
                </div>
                <div className="about">about</div>
                <div className="introNum">010 5152 9638 <span>TEL</span>
                    <div className="introNumUnder"></div>
                </div>
                <div className="introMail"><span>M</span> youjieun@sadi.net
                    <div className="introMailUnder"></div>
                </div>
            </div>

            <div className="essBox">
                <div className="essCharact"></div>
                <div className="essProj">projects</div>
                <div className="essGrid">
                    <div className="essTool">
                        <div className="tool1"></div>
                        <div className="tool2"></div>
                        <div className="tool3"></div>
                        <div className="tool4"></div>
                        <div className="tool5"></div>
                        <div className="tool6"></div>
                        <div className="tool7"></div>
                        <div className="tool8"></div>
                    </div>
                    <div className="ess2020"></div>
                    <div className="ess2021"></div>
                </div>
            </div>




        </>
    )
}
