import React from 'react';
type LoginPageProps = {
    title?: string;
    description?: string;
    redirectURI: string;
    version: string;
};
export default function LoginPage({ title, description, redirectURI, version }: LoginPageProps): React.JSX.Element;
export {};
