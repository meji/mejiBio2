import Link from 'next/link'
import Head from "next/head";
import {useState} from "react";
import {Post} from '../models/post'
import {GetStaticProps} from "next";
import {getPosts} from "../lib/posts";

const Home:React.FC<{posts:Post[]}> = ({posts})=>{
    const [theme, setTheme] = useState('light-theme')
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={theme}>
                <p><button onClick={()=>setTheme(theme === 'light-theme'? 'dark-theme':'light-theme')}>Tema</button></p>
                <p><Link href="/about/"><a>About</a></Link></p>
                <p><Link href="/posts/"><a>Posts</a></Link></p>

                <div className={"posts"}>
                    {posts.map(post =><Link href={`/posts/${post.id}`} key={post.id}><a>{post.title}</a></Link>)}
                </div>
            </main>
        </>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const posts = getPosts()
    return {
        props: {
            posts
        }
    }
}


export default Home