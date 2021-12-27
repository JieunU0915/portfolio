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
                <link rel="icon" href="/icon_uje.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
                <div className="introText1">Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projectsif you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects Give me CONTACT if you have any projects</div>
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
                <div className="essCharact">
                    <div className="circle">
                        <div className="eyes"></div>
                        <div className="eyes"></div>
                        <div className="nose"></div>
                    </div>
                </div>

                <div className="essProj">Useable Tools
                    <div className="essTool">
                        <div className="tool1">Ps</div>
                        <div className="tool2">Ai</div>
                        <div className="tool3">Id</div>
                        <div className="tool4">Pr</div>
                        <div className="tool5">Ae</div>
                        <div className="tool6">Xd</div>
                        <div className="tool7">Protopie</div>
                        <div className="tool1"></div>
                        <div className="tool1"></div>
                        <div className="tool8">Cinema4D</div>
                    </div>
                    <div className="essPro">Jobs
                        <div className="ess2021">
                            <p>Samsung Art & Design Institute
                            Communication Design 2020 입학</p>
                            <p>2020 경기도 교육청 꿈의학교 YBS 영상 강사</p>
                            <p>2021 경기도 교육청 꿈의학교 YBS 영상 강사</p>
                            <p>Dr. Deep 마케팅부 영상담당</p>
                            <p>2021 100 BESTE PLAKATE 특별전 전시</p>
                            <p>SADI 타이포그래피 동아리 '9RID' 부원</p>
                            <p>대학생 타이포그래피 연합 '한울' 부원</p>
                            <p>2021 한울전 '한울 21.0' 전시</p>
                        </div>
                    </div>

                    <div className="copyright"><p>Copyright @UJE 2021, Samsung Art & Design Institute, All Rights Reserved. </p></div>
                </div>
            </div>




        </>
    )
}
