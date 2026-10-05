import styled from "styled-components";

const HomeDetails = styled.div`
    .navigation, .container {
        padding: 1.5rem 18rem;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray);
        font-family: "Poppins", sans-serif;

        .leftMenu {
            h1 {
                font-weight: 300;
                cursor: pointer;
            }
        }

        .rightMenu {
            display: flex;
            gap: 0.5rem;

            button {
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                color: var(--gray-font);
                transition: 0.3s ease-in-out all;

                &:hover {
                    background: var(--gray);
                    color: var(--white);
                }
            }

            .en, .ptbr, .ko, .ja {
                background: var(--gray);
                color: var(--blue-hover);

                &:hover {
                    background: var(--gray);
                    color: var(--blue-hover);
                }
            }
        }
    }

    .container {
        display: flex;
        gap: 2rem;

        .leftContent {
            padding: 2rem 2rem;

            .center {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: center;

                .first-image {
                    width: 550px;
                    border-radius: 15px;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 0.9rem;
                    color: var(--gray-font);
                }
            }

            .short, .full {
                margin: 1rem 0;

                .images {
                    margin-top: 1rem;
                    display: flex;
                    gap: 1rem;

                    img {
                        width: 125px;
                        border-radius: 15px;
                        opacity: 0.8;
                        border: 2px solid var(--gray);

                        &:hover {
                            opacity: 1;
                            transform: translateY(-2px)
                        }
                    }

                    .pink, .blonde, .black, .teal, .blue, .dark-bob, .blonde-2, .teal-2, .ponytail, .black-2 {
                        border: 2px solid var(--blue);
                    }
                }
            }
        }

        .rightContent {
            padding: 5rem 0;
            width: 35rem;

            h1 {
                font-size: 3rem;
            }

            .description {
                width: 100%;
                font-size: 1.2rem;
                color: var(--gray-font);
                margin: 1rem 0;
            }

            .shortPromptButton, .fullPromptButton {
                width: 100%;
                padding: 1.5rem 0;
                font-size: 1.25rem;
                margin-top: 1rem;
                border-radius: 15px;
                border: none;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                
                svg {
                    margin: 0;
                    padding: 0;
                    width: 25px;
                }
            }

            .shortPromptButton {
                background: var(--blue);
                transition: 0.3 ease-in-out all;

                &:hover {
                    background: var(--blue-hover);
                }
            }

            .fullPromptButton {
                background: var(--btn-bg);
                border: 2px solid var(--btn-border);
                color: var(--white);

                &:hover {
                    background: var(--btn-hover);
                }
            }

            .text {
                font-size: 0.9rem;
                color: var(--gray-font);
                margin: 1rem 0;
            }

            .quote {
                padding-left: 1rem;
                border-left: 2px solid var(--blue);
                color: var(--gray-font);
            }

            hr {
                margin: 1rem 0;
                border: 1px solid var(--gray);
            }

            .steps {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;

                b {
                    color: var(--gray-font);
                }
            }

            .slideContainer {
                width: 100%;
                overflow: hidden;

                .slide {
                    display: flex;
                    width: max-content;
                    animation: slide 30s linear infinite;

                    margin-top: 1rem;
                    display: flex;
                    gap: 1rem;

                    img {
                        width: 125px;
                        border-radius: 15px;
                        opacity: 0.8;
                        border: 2px solid var(--gray);

                        &:hover {
                            opacity: 1;
                            transform: translateY(-2px)
                        }
                    }

                    &:hover {
                        animation-play-state: paused;
                    }
                }

                .slideContent {
                    display: flex;
                    flex-shrink: 0;
                    gap: 1rem;
                }

                img {
                    flex-shrink: 0;
                    cursor: pointer;
                }

                @keyframes slide {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }
            }

            .seeMore {
                font-size: 0.8rem;
                color: var(--gray-font);

                a {
                    color: var(--blue);
                    text-decoration: underline;
                    transition: 0.3s ease-in-out all;

                    &:hover {
                        color: var(--blue-hover);
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .navigation, .container {
            padding-left: 8rem;
            padding-right: 8rem;
        }
    }

    @media (max-width: 1200px) {
        .navigation, .container {
            padding-left: 4rem;
            padding-right: 4rem;
        }

        .container {
            .leftContent {
                flex: 1;
                min-width: 0;

                .center {
                    .first-image {
                        width: 100%;
                        max-width: 550px;
                    }
                }
            }

            .rightContent {
                width: 30rem;
                flex-shrink: 1;
            }
        }
    }

    @media (max-width: 1024px) {
        .navigation, .container {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .navigation {
            .leftMenu {
                h1 {
                    font-size: 1.5rem;
                }
            }

            .rightMenu {
                gap: 0.25rem;

                button {
                    padding: 0.5rem 0.75rem;
                }
            }
        }

        .container {
            gap: 2rem;

            .leftContent {
                padding: 2rem 0;

                .center {
                    .first-image {
                        width: 100%;
                        max-width: 500px;
                    }
                }

                .short, .full {
                    .images {
                        flex-wrap: wrap;
                    }
                }
            }

            .rightContent {
                width: 28rem;
                padding: 3rem 0;

                h1 {
                    font-size: 2.5rem;
                }

                .description {
                    width: 100%;
                    font-size: 1.1rem;
                }
            }
        }
    }

    @media (max-width: 768px) {

        .navigation, .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .navigation {
            align-items: flex-start;
            gap: 1rem;

            .leftMenu {
                h1 {
                    font-size: 1.4rem;
                }
            }

            .rightMenu {
                flex-wrap: wrap;
                justify-content: flex-end;
                gap: 0.25rem;

                button {
                    padding: 0.4rem 0.6rem;
                    font-size: 0.75rem;
                }
            }
        }

        .container {
            flex-direction: column;
            gap: 1rem;

            .leftContent {
                width: 100%;
                box-sizing: border-box;
                padding: 1.5rem 0;

                .center {
                    width: 100%;

                    .first-image {
                        width: 100%;
                        max-width: 550px;
                    }
                }

                .short, .full {

                    .images {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 0.75rem;

                        img {
                            width: 100%;
                            box-sizing: border-box;
                        }
                    }
                }
            }

            .rightContent {
                width: 100%;
                box-sizing: border-box;
                padding: 1.5rem 0;

                h1 {
                    font-size: 2.3rem;
                }

                .description {
                    width: 100%;
                    max-width: 30rem;
                    font-size: 1rem;
                }

                .shortPromptButton, .fullPromptButton {
                    padding: 1.25rem 0;
                    font-size: 1rem;
                }

                .steps {
                    flex-wrap: wrap;
                }

                .slideContainer {

                    .slide {
                        img {
                            width: 110px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {

        .navigation, .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .navigation {
            flex-direction: column;
            align-items: stretch;

            .leftMenu {
                h1 {
                    font-size: 1.3rem;
                }

            }

            .rightMenu {
                justify-content: flex-start;

                button {
                    padding: 0.4rem 0.55rem;
                    font-size: 0.7rem;
                }
            }
        }

        .container {
            .leftContent {
                padding: 1rem 0;

                .center {
                    .first-image {
                        border-radius: 12px;
                    }

                    p {
                        font-size: 0.8rem;
                    }
                }

                .short, .full {
                    .images {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 0.5rem;

                        img {
                            border-radius: 10px;
                        }
                    }
                }
            }

            .rightContent {
                padding: 1rem 0;

                h1 {
                    font-size: 2rem;
                }

                .description {
                    font-size: 0.9rem;
                }

                .shortPromptButton, .fullPromptButton {
                    padding: 1rem 0;
                    font-size: 0.9rem;
                    border-radius: 12px;
                }

                .text {
                    font-size: 0.8rem;
                }

                .quote {
                    font-size: 0.8rem;
                }

                .steps {
                    font-size: 0.8rem;
                    gap: 0.75rem;
                }

                .slideContainer {
                    .slide {
                        gap: 0.75rem;

                        img {
                            width: 95px;
                            border-radius: 12px;
                        }
                    }
                }

                .seeMore {
                    font-size: 0.7rem;
                }
            }
        }
    }

    @media (max-width: 380px) {
        .navigation, .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }

        .navigation {
            .rightMenu {
                button {
                    padding: 0.35rem 0.45rem;
                    font-size: 0.65rem;
                }
            }
        }

        .container {
            .leftContent {
                .short, .full {
                    .images {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            }

            .rightContent {
                h1 {
                    font-size: 1.8rem;
                }

                .shortPromptButton, .fullPromptButton {
                    font-size: 0.85rem;
                }
            }
        }
    }
`

export default HomeDetails