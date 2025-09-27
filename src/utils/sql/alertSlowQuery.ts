import { Embed } from 'uibee/utils'

type SlowQueryData = {
    content?: string
    embeds: Embed[]
}

type SlowQueryProps = {
    duration: number
    name: string
    cacheTTL: number
    webhookURL: string
    criticalRole: string
}

export default async function alertSlowQuery({duration, name, cacheTTL, webhookURL, criticalRole}: SlowQueryProps) {
    const lowerCaseName = name.toLowerCase()
    const firstUpperCaseName = `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`
    if (duration > cacheTTL / 2 && webhookURL) {
        const data: SlowQueryData = {
            embeds: [
                {
                    title: `🐝 TekKom Bot API ${firstUpperCaseName} Query Timing 🐝`,
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
