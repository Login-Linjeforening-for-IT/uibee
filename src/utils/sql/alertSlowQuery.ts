import { Data, SlowQueryProps } from 'uibee/utils'

export default async function alertSlowQuery({
    application,
    duration,
    name,
    cacheTTL,
    webhookURL,
    criticalRole
}: SlowQueryProps): Promise<void> {
    const lowerCaseName = name.toLowerCase()
    const firstUpperCaseName = `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`
    if (duration > cacheTTL / 2 && webhookURL) {
        const data: Data = {
            embeds: [
                {
                    title: `🐝 ${application} ${firstUpperCaseName} Query Timing 🐝`,
                    description: `🐝 Slow ${lowerCaseName} query detected: ${duration.toFixed(2)}s`,
                    color: 0xff0000,
                    timestamp: new Date().toISOString()
                }
            ]
        }

        if (duration > (cacheTTL - 1)) {
            data.content = `🚨 <@&${criticalRole}> 🚨`
        }

        console.warn(`${firstUpperCaseName} query exceeded half of cache TTL: ${duration.toFixed(2)}s`)

        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }
}
