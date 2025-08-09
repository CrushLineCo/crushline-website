// src/pages/DebugBackend.tsx
import { useEffect, useState } from "react";
import { generateClient, type GraphQLResult } from "aws-amplify/api";
import { loadAmplifyOutputs } from "../amplifyConfig"; // for displaying which backend

const client = generateClient();

type Todo = { id: string; content?: string | null };
type ListTodosResult = { listTodos: { items: Todo[] } };
type CreateTodoResult = { createTodo: Todo };

const CREATE = /* GraphQL */ `
  mutation Create($content: String) {
    createTodo(input: { content: $content }) { id content }
  }
`;
const LIST = /* GraphQL */ `
  query List {
    listTodos { items { id content createdAt } }
  }
`;

export default function DebugBackend() {
  const [data, setData] = useState<ListTodosResult | null>(null);
  const [err, setErr] = useState<any>(null);
  const [apiUrl, setApiUrl] = useState<string>("");

  useEffect(() => {
    (async () => {
      // show which backend we're hitting
      try {
        const outputs = await loadAmplifyOutputs();
        setApiUrl(outputs.data?.url || "");
      } catch {}

      try {
        const createRes = (await client.graphql<CreateTodoResult>({
          query: CREATE,
          variables: { content: "hello from frontend" },
        })) as GraphQLResult<CreateTodoResult>;
        if (createRes.errors) throw createRes.errors;

        const listRes = (await client.graphql<ListTodosResult>({
          query: LIST,
        })) as GraphQLResult<ListTodosResult>;
        if (listRes.errors) throw listRes.errors;

        setData(listRes.data ?? null);
      } catch (e) {
        setErr(e);
      }
    })();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Backend Debug</h2>
      {apiUrl && <pre>{JSON.stringify({ apiUrl }, null, 2)}</pre>}
      {data && (<><h3>Result</h3><pre>{JSON.stringify(data, null, 2)}</pre></>)}
      {err && (<><h3 style={{color:"crimson"}}>Error</h3><pre>{JSON.stringify(err, null, 2)}</pre></>)}
    </div>
  );
}
