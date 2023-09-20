import Link from 'next/link'

export default function Page() {
  return (
    <>
    <h1>Next Tutorials</h1>
    <div>
      <h3>Links</h3>
      <ul>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
        <li>
          <Link href="/auth/signin">Signin</Link>
        </li>
      </ul>
    </div>
    </>
  )
}


