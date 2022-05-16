import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Index() {
  const { data, error } = useSWR('/api', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>Hello lists</h1>
      <h2>{data.message}</h2>
    </div>
  );
}

export default Index;
