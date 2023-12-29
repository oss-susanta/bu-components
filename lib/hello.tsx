import { useRequest } from "ahooks";
import axios from "redaxios";

export async function fetchName(id: string) {
  return (await axios.get(`http://example.com/name/${id}`))?.data;
}

export default function Hello({ name }: { name: string }) {
  const { loading, error, data } = useRequest(() => fetchName(name), {
    refreshDeps: [name],
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return <p className="text-center">Hello {data.name}!!!</p>;
}
