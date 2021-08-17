import { useRouter } from "next/dist/client/router"

export default function Slug() {
    const router = useRouter();

    //catch all-routes
    console.log('router pathname', router.pathname);
    console.log('router query', router.query);

    return (
      <div>
        <h1>Slug</h1>
      </div>
    )
  }