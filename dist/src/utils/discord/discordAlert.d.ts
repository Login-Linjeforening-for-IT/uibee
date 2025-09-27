import { DiscordAlertProps } from 'uibee/utils';
export default function discordAlert({ application, description, type, ping, criticalRole, webhookURL }: DiscordAlertProps): Promise<number>;
