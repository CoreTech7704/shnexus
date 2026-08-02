export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: "https://shnexus.vercel.app/sitemap.xml",
    }
}