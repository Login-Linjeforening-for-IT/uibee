type SlowQueryProps = {
    duration: number;
    name: string;
    cacheTTL: number;
    webhookURL: string;
    criticalRole: string;
};
export default function alertSlowQuery({ duration, name, cacheTTL, webhookURL, criticalRole }: SlowQueryProps): Promise<void>;
export {};
