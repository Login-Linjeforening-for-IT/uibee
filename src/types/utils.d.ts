declare module 'uibee/utils' {
    export interface SlowQueryProps {
        application: string
        duration: number
        name: string
        cacheTTL: number
        webhookURL: string
        criticalRole: string
    }
    export interface Embed {
        title: string
        description: string
        color: number
        timestamp: string
    }

    export default function alertSlowQuery(props: SlowQueryProps): Promise<void>
}
