
export const prerender = false

export async function GET({ params }) {
  const id = params.id;
  console.log('product ID', 1);
  const product = { id: 1 };

  if (!product) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}