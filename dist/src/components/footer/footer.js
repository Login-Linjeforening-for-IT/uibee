import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SocialLinks from './socialLinks';
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
export default async function Footer({ cdnURL, contactMail, gitlabURL, version, textNO, textEN, links }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const lang = ((await cookies()).get('lang')?.value || 'no');
    const text = lang === 'no' ? textNO : textEN;
    return (_jsxs("div", { className: `mt-40 mx-auto pt-16 px-4 pb-4 md:max-w-[calc(var(--w-page)+4rem)] md:pt-20 md:px-12 md:pb-4 md:grid 
            md:grid-cols-[18rem_1fr] md:gap-x-12`, children: [_jsxs("div", { className: 'grid gap-16 max-w-60 w-full mx-auto md:row-span-2 md:max-w-72 md:gap-20', children: [_jsx("div", { children: _jsx("div", { className: 'block w-full', children: _jsx(Image, { src: `${cdnURL}/img/logo/logo-tekst-white.svg`, className: 'block w-full', alt: 'Login - Linjeforeningen for IT', width: 800, height: 200 }) }) }), _jsxs("div", { children: [_jsx(Link, { href: 'https://www.mnemonic.io/', target: '_blank', children: _jsx("div", { className: 'block w-full', children: _jsx(Image, { src: `${cdnURL}/img/company/mnemonic-logo_light-nopayoff-2021.svg`, className: 'block w-full', alt: 'mnemonic', width: 800, height: 200 }) }) }), _jsx("p", { className: 'text-center text-[#b3b3b3] pt-8', children: text.footer.sponsor })] })] }), _jsxs("div", { className: `grid w-full max-w-60 mt-16 gap-8 sm:grid-cols-2 sm:max-w-[22rem] sm:justify-items-end sm:justify-self-end
                md:col-start-2 md:row-start-1 md:max-w-[34rem] md:justify-self-end md:mt-0 md:gap-0`, children: [_jsxs("div", { className: 'sm:justify-self-center md:justify-self-end', children: [_jsx("h4", { className: 'text-[#b3b3b3] font-medium text-sm tracking-widest pb-2', children: text.footer.contactInfo.address.header }), _jsxs("p", { className: 'text-[#f2f2f2]', children: [text.footer.contactInfo.address.info1, _jsx("br", {}), text.footer.contactInfo.address.info2, _jsx("br", {}), text.footer.contactInfo.address.info3] })] }), _jsxs("div", { className: 'sm:justify-self-center md:justify-self-end', children: [_jsx("h4", { className: 'text-[#b3b3b3] font-medium text-sm tracking-widest pb-2', children: text.footer.contactInfo.email }), _jsx("p", { className: 'text-[#f2f2f2]', children: _jsx("a", { className: 'text-[#f2f2f2] link--underscore-hover', href: `mailto:${contactMail}`, children: contactMail }) })] })] }), _jsx("div", { className: 'md:col-start-2 md:row-start-2 md:justify-self-end', children: _jsx(SocialLinks, { links: links }) }), _jsxs("div", { className: 'grid grid-cols-[auto_min-content] gap-8 mt-24 items-end md:col-span-2 md:row-start-3', children: [_jsx("p", { className: 'text-[#b3b3b3] text-xs', dangerouslySetInnerHTML: {
                            __html: ` ${text.footer.copy1} ${currentYear} ${text.footer.copy2}`,
                        } }), _jsxs(Link, { className: `bg-[rgba(200,200,200,0.1)] px-[0.6rem] py-[0.4rem] rounded-[var(--border-radius)] text-white 
                        tracking-wide font-semibold`, target: '_blank', href: `${gitlabURL}/tekkom/web/beehive/frontend/-/tags/${version}`, children: ["v", version] })] })] }));
}
