import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx'

export const alt = 'SprowadzoneAuto.pl — poradnik importu aut z Niemiec'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
}

// Font z polskimi znakami (domyślny font ImageResponse ma tylko podstawową łacinę).
const fontPath = path.join(process.cwd(), 'lib/fonts/NotoSans-ExtraBold.ttf')

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    const title = post?.title ?? 'Poradnik importera aut z Niemiec'
    const font = await readFile(fontPath)

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 80px',
                    fontFamily: 'Noto Sans',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '-120px',
                        right: '-120px',
                        width: '520px',
                        height: '520px',
                        background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                        display: 'flex',
                    }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '64px',
                            height: '64px',
                            background: '#f59e0b',
                            borderRadius: '16px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', transform: 'skewX(-15deg)' }}>
                            <div style={{ width: '6px', height: '30px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px', display: 'flex' }} />
                            <div style={{ width: '11px', height: '44px', background: 'white', borderRadius: '6px', display: 'flex' }} />
                            <div style={{ width: '6px', height: '30px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px', display: 'flex' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', fontSize: '30px', color: 'white', letterSpacing: '-1px' }}>
                        SprowadzoneAuto.pl
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        fontSize: title.length > 70 ? '50px' : '60px',
                        lineHeight: 1.1,
                        color: 'white',
                        letterSpacing: '-1.5px',
                    }}
                >
                    {title}
                </div>

                <div style={{ display: 'flex', fontSize: '24px', color: '#f59e0b', letterSpacing: '3px', textTransform: 'uppercase' }}>
                    Poradnik importera aut z Niemiec
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [{ name: 'Noto Sans', data: font, style: 'normal', weight: 800 }],
        }
    )
}
