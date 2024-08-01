import { headers } from 'next/headers'
import Script from 'next/script'
import { EU_COUNTRY_CODES } from '@/lib/constants'

function Analytics() {
    const countryCode = headers().get('x-vercel-ip-country') || 'US'

    if (EU_COUNTRY_CODES.includes(countryCode)) {
        return null
    }

    return (
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-022KQ1MC10" />
    )
}

export default Analytics