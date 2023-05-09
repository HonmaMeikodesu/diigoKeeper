import fetch from "node-fetch";

export async function fetchAnnotations(requestParams: {
  cookie: string;
}): Promise<any[]> {
  const { cookie } = requestParams || {};
  const result: any[] = [];
  let items: any[] = [];
  let pageNum = 0;
  while (
    (items = (
      await (
        await fetch(
          `https://www.diigo.com/interact_api/load_user_items?sort=updated&page_num=${pageNum}&count=64`,
          {
            headers: {
              Cookie: cookie,
            },
            timeout: 20000,
          }
        )
      ).json()
    )?.items as any[]).length
  ) {
    result.push(...items);
    pageNum++;
  }
  return result;
}
