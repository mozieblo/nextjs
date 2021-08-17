import { useRouter } from "next/dist/client/router"

export default function Test() {
    const router = useRouter();
    console.log('router pathname', router.pathname);
    console.log('router query', router.query);

    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }