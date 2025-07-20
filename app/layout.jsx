import localFont from 'next/font/local'
import Header from '../components/Header'
import './index.css'


const sourceSerif = localFont({
    src: "../public/fonts/SourceSerif.woff2",
    variable: "--font-source-serif",
    subset: ["latin"],
    display: 'swap'
})


export default function Layout({children}){
    return(
        <html>
            <body className={sourceSerif.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}