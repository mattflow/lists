import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function Index() {
  const { data, error } = useSWR("/api", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello lists</h1>
      <h2>{data.message}</h2>
    </div>
  );
}

export default Index;
