import Link from "next/link";
export default function Home(){
  return(
    <div>
      <h1>Welcome to my website!</h1>
      <p>My Test Started App !</p>
      <hr />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/api/movies">Movies</Link>
    </div>
  )
}
