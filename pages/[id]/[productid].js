import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Test() {
    const router = useRouter();
    console.log('router pathname', router.pathname);
    console.log('router query', router.query);

    return (
      <div>
        <h1>Test</h1>
        <Link href="/jakistekst/lala">LaLA=</Link>
      </div>
    )
  }