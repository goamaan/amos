import { ListDetailView } from "~/app/layout"
import { StackList } from "~/components/Stack/StackList"
import { getServerAuthSession } from "~/server/auth"
import { api } from "~/trpc/server"

export default async function Stack({ params }: { params: { slug: string } }) {
  const session = await getServerAuthSession()
  const stacks = await api.stack.getAll()

  return (
    <ListDetailView
      list={<StackList stacks={stacks} params={params} user={session?.user} />}
      hasDetail={false}
      detail={null}
    />
  )
}
