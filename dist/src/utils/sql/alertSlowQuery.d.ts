import { SlowQueryProps } from 'uibee/utils';
export default function alertSlowQuery({ application, duration, name, cacheTTL, webhookURL, criticalRole }: SlowQueryProps): Promise<void>;
