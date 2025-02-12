import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Resono',
        short_name: 'Resono',
        description: 'Community Driven Media',
        start_url: '/',
        id: "/",
        display: 'standalone',
        background_color: '#101010',
        theme_color: '#101010',
        orientation: 'portrait',
        lang: "en",
        icons: [
            {
                src: '/favicon.ico',
                sizes: '100x100',
                type: 'image/x-icon',
            },
            {
                src: '/icons/icon64.png',
                sizes: '64x64',
                type: 'image/png',
            },
            {
                src: '/icons/icon128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                src: '/icons/icon256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: '/icons/icon512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}