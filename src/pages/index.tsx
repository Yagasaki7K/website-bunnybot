import HomeDetails from "@/components/HomeDetails";
import NextSeo from "@/components/NextSeo";
import language from "@/i18n/language";
import Head from "next/head";
import { useState } from "react";
import { toast } from "sonner";

type Language = keyof typeof language;

export default function Home() {
    const [i18n, setI18n] = useState<Language>("en");
    const [image, setImage] = useState("tanjiro");

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            toast.success(language[i18n].success);
        } catch {
            toast.error(language[i18n].error);
        }
    }

    const svgCopyWhite = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9M11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H11C9.89543 9 9 9.89543 9 11V19C9 20.1046 9.89543 21 11 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke=""></path> </g></svg>

    const svgCopyDark = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9M11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H11C9.89543 9 9 9.89543 9 11V19C9 20.1046 9.89543 21 11 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke=""></path> </g></svg>

    return (
        <HomeDetails>
            <Head>
                <title>Bunnybot Studio | Your character, as a little bot.</title>
                <link rel="icon" type="image/png" href="/hinata.png" />
            </Head>

            <NextSeo
                title="Bunnybot Studio | Your character, as a little bot."
                description="We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style."
                canonical="https://bunnybotstudio.vercel.app/"
                openGraph={{
                    url: "https://bunnybotstudio.vercel.app/",
                    title: "Bunnybot Studio | Your character, as a little bot.",
                    description:
                        "We recommend ChatGPT for image generation. It worked well even on the free plan. Other tools, especially Grok, may not fully capture the intended style.",
                    siteName: "Bunnybot Studio | Your character, as a little bot.",
                    images: [
                        {
                            url: "/thumbnail.png",
                            width: 1280,
                            height: 720,
                            alt: "Bunnybot Studio | Your character, as a little bot.",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@",
                    site: "@yagasaki7k",
                    cardType: "summary_large_image",
                }}
            />
            <div className="navigation">
                <div className="leftMenu">
                    <h1>Bunnybot Studio</h1>
                </div>

                <div className="rightMenu">
                    <button onClick={() => setI18n("en")} className={i18n === "en" ? "en" : undefined}>
                        English
                    </button>

                    <button onClick={() => setI18n("ptbr")} className={i18n === "ptbr" ? "ptbr" : undefined}>
                        Português
                    </button>

                    <button onClick={() => setI18n("ko")} className={i18n === "ko" ? "ko" : undefined}>
                        한국어
                    </button>

                    <button onClick={() => setI18n("ja")} className={i18n === "ja" ? "ja" : undefined}>
                        日本語
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="leftContent">
                    <div className="center">
                        <img src={image + ".jpg"} alt={image} className="first-image" />
                        <p>{language[i18n].firstResult}</p>
                    </div>

                    <div className="short">
                        <p>{language[i18n].firstResult}</p>

                        <div className="images">
                            <img src="tanjiro.jpg" alt={image} onClick={() => setImage("tanjiro")} className={image === "tanjiro" ? "tanjiro" : undefined} />
                            <img src="inosuke.jpg" alt={image} onClick={() => setImage("inosuke")} className={image === "inosuke" ? "inosuke" : undefined} />
                            <img src="rengoku.jpg" alt={image} onClick={() => setImage("rengoku")} className={image === "rengoku" ? "rengoku" : undefined} />
                            <img src="tomioka.jpg" alt={image} onClick={() => setImage("tomioka")} className={image === "tomioka" ? "tomioka" : undefined} />
                            <img src="rocklee.jpg" alt={image} onClick={() => setImage("rocklee")} className={image === "rocklee" ? "rocklee" : undefined} />
                            <img src="kakashi.jpg" alt={image} onClick={() => setImage("kakashi")} className={image === "kakashi" ? "kakashi" : undefined} />
                        </div>
                    </div>

                    <div className="full">
                        <p>{language[i18n].secondResult}</p>

                        <div className="images">
                            <img src="sakura.jpg" alt={image} onClick={() => setImage("sakura")} className={image === "sakura" ? "sakura" : undefined} />
                            <img src="sasuke.jpg" alt={image} onClick={() => setImage("sasuke")} className={image === "sasuke" ? "sasuke" : undefined} />
                            <img src="shikamaru.jpg" alt={image} onClick={() => setImage("shikamaru")} className={image === "shikamaru" ? "shikamaru" : undefined} />
                            <img src="gaara.jpg" alt={image} onClick={() => setImage("gaara")} className={image === "gaara" ? "gaara" : undefined} />
                            <img src="itachi.jpg" alt={image} onClick={() => setImage("itachi")} className={image === "itachi" ? "itachi" : undefined} />
                            <img src="shikamaru.jpg" alt={image} onClick={() => setImage("shikamaru")} className={image === "shikamaru" ? "shikamaru" : undefined} />
                        </div>
                    </div>
                </div>

                <div className="rightContent">
                    <h1>{language[i18n].header}</h1>

                    <p className="description">{language[i18n].description}</p>

                    <button className="fullPromptButton" onClick={() => copyToClipboard(language[i18n].fullPrompt)}>{svgCopyWhite} {language[i18n].fullPromptButton}</button>

                    <p className="text">{language[i18n].firstParagraph}</p>
                    <p className="text">{language[i18n].secondParagraph}</p>
                    <p className="quote">{language[i18n].quote}</p>

                    <hr />

                    <div className="steps">
                        <b>01</b>
                        <p>{language[i18n].firstStep}</p>
                    </div>
                    <div className="steps">
                        <b>02</b>
                        <p>{language[i18n].secondStep}</p>
                    </div>

                    <hr />

                    <h4>{language[i18n].lastUpdates}</h4>
                    <p className="seeMore">{language[i18n].seeMore} <a href="https://github.com/Yagasaki7K/website-bunnybot/tree/main/public" target="_blank">{language[i18n].clickHere}.</a></p>

                    <div className="slideContainer">
                        <div className="slide">
                            <div className="slideContent">
                                <img src="gaara.jpg" alt={image} onClick={() => setImage("gaara")} />
                                <img src="itachi.jpg" alt={image} onClick={() => setImage("itachi")} />
                                <img src="tanjiro.jpg" alt={image} onClick={() => setImage("tanjiro")} />
                                <img src="inosuke.jpg" alt={image} onClick={() => setImage("inosuke")} />
                                <img src="shino.jpg" alt={image} onClick={() => setImage("shino")} />
                                <img src="neji.jpg" alt={image} onClick={() => setImage("neji")} />
                                <img src="ino.jpg" alt={image} onClick={() => setImage("ino")} />
                                <img src="choji.jpg" alt={image} onClick={() => setImage("choji")} />
                                <img src="sasori.jpg" alt={image} onClick={() => setImage("sasori")} />
                                <img src="tsunade.jpg" alt={image} onClick={() => setImage("tsunade")} />
                                <img src="temari.jpg" alt={image} onClick={() => setImage("temari")} />
                                <img src="madara.jpg" alt={image} onClick={() => setImage("madara")} />
                                <img src="rengoku.jpg" alt={image} onClick={() => setImage("rengoku")} />
                                <img src="tomioka.jpg" alt={image} onClick={() => setImage("tomioka")} />
                                <img src="rocklee.jpg" alt={image} onClick={() => setImage("rocklee")} />
                                <img src="kakashi.jpg" alt={image} onClick={() => setImage("kakashi")} />
                                <img src="sakura.jpg" alt={image} onClick={() => setImage("sakura")} />
                                <img src="sasuke.jpg" alt={image} onClick={() => setImage("sasuke")} />
                                <img src="shikamaru.jpg" alt={image} onClick={() => setImage("shikamaru")} />
                            </div>
                            <div className="slideContent">
                                <img src="gaara.jpg" alt={image} onClick={() => setImage("gaara")} />
                                <img src="itachi.jpg" alt={image} onClick={() => setImage("itachi")} />
                                <img src="tanjiro.jpg" alt={image} onClick={() => setImage("tanjiro")} />
                                <img src="inosuke.jpg" alt={image} onClick={() => setImage("inosuke")} />
                                <img src="shino.jpg" alt={image} onClick={() => setImage("shino")} />
                                <img src="neji.jpg" alt={image} onClick={() => setImage("neji")} />
                                <img src="ino.jpg" alt={image} onClick={() => setImage("ino")} />
                                <img src="choji.jpg" alt={image} onClick={() => setImage("choji")} />
                                <img src="sasori.jpg" alt={image} onClick={() => setImage("sasori")} />
                                <img src="tsunade.jpg" alt={image} onClick={() => setImage("tsunade")} />
                                <img src="temari.jpg" alt={image} onClick={() => setImage("temari")} />
                                <img src="madara.jpg" alt={image} onClick={() => setImage("madara")} />
                                <img src="rengoku.jpg" alt={image} onClick={() => setImage("rengoku")} />
                                <img src="tomioka.jpg" alt={image} onClick={() => setImage("tomioka")} />
                                <img src="rocklee.jpg" alt={image} onClick={() => setImage("rocklee")} />
                                <img src="kakashi.jpg" alt={image} onClick={() => setImage("kakashi")} />
                                <img src="sakura.jpg" alt={image} onClick={() => setImage("sakura")} />
                                <img src="sasuke.jpg" alt={image} onClick={() => setImage("sasuke")} />
                                <img src="shikamaru.jpg" alt={image} onClick={() => setImage("shikamaru")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeDetails>
    );
}