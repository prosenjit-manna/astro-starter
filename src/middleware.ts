import type { AstroSharedContext } from "astro";

export const onRequest = async (context, next) => {
  console.log('middleware running');
  console.log('Request URL', context.request.url);
  const response = await next();
  return response;
}