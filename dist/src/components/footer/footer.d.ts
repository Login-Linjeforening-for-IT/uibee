type FooterProps = {
    cdnURL: string;
    contactMail: string;
    gitlabURL: string;
    version: string;
    textNO: any;
    textEN: any;
    links: {
        discordURL: string;
        instagramURL: string;
        facebookURL: string;
        linkedinURL: string;
        gitlabURL: string;
        wikiURL: string;
    };
};
export default function Footer({ cdnURL, contactMail, gitlabURL, version, textNO, textEN, links }: FooterProps): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
