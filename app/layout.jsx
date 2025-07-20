import { Source_Sans_3} from 'next/font/google'
import Header from '../components/Header'
import './index.css'


const sourceSerif = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-source-serif',
  display: 'swap',
});


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