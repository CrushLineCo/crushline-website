// src/pages/DebugBackend.tsx
import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { generateClient, type GraphQLResult } from "aws-amplify/api";

Amplify.configure(outputs);
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

  useEffect(() => {
    (async () => {
      try {
        // Narrow the union by asserting the non-subscription result type
        const createRes = (await client.graphql<CreateTodoResult>({
          query: CREATE,
          variables: { content: "hello from frontend" },
        })) as GraphQLResult<CreateTodoResult>;

        if (createRes.errors) throw createRes.errors;

        const listRes = (await client.graphql<ListTodosResult>({
          query: LIST,
        })) as GraphQLResult<ListTodosResult>;

        if (listRes.errors) throw listRes.errors;

        // Alternative safe narrowing:
        // if ('data' in listRes) setData(listRes.data as ListTodosResult);

        setData(listRes.data ?? null);
      } catch (e: any) {
        setErr(e);
      }
    })();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Backend Debug</h2>
      <pre>{JSON.stringify({ apiUrl: outputs.data.url, authMode: outputs.data.default_authorization_type }, null, 2)}</pre>
      {data && (<><h3>Result</h3><pre>{JSON.stringify(data, null, 2)}</pre></>)}
      {err && (<><h3 style={{color:"crimson"}}>Error</h3><pre>{JSON.stringify(err, null, 2)}</pre></>)}
    </div>
  );
}
