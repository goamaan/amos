import { unstable_noStore as noStore } from "next/cache"

import { ListDetailView } from "~/app/layout"

export default async function Home() {
  noStore()

  return <ListDetailView list={null} hasDetail detail={<div></div>} />
}
