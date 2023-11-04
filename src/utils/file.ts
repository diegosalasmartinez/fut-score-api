export const readFile = async (path: string) => {
  const content = await Deno.readTextFile(`src/database/${path}`)
  return JSON.parse(content)
}

export const writeFile = async (path: string, content: object) => {
  await Deno.writeTextFile(`src/database/${path}`, JSON.stringify(content))
}