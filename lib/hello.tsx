import { useRequest } from "ahooks";
import axios from "redaxios";
import { z } from "zod";

const NameResponse = z.object({
  name: z.string(),
});
type NameResponse = z.infer<typeof NameResponse>;

export async function fetchName(id: string) {
  const response = await axios.get(`http://example.com/name/${id}`);
  return NameResponse.parse(response?.data);
}

export default function Hello({ name }: { name: string }) {
  const { loading, error, data } = useRequest(() => fetchName(name), {
    refreshDeps: [name],
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return <p className="text-center">Hello {data?.name}!!!</p>;
}
