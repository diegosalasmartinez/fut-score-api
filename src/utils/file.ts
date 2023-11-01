export const readFile = async (path: string) => {
  const content = await Deno.readTextFile(`src/database/${path}`)
  return JSON.parse(content)
}
