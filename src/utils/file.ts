export const readFile = async (path: string) => {
  const content = await Deno.readTextFile(`src/database/${path}`)
  return JSON.parse(content)
}

export const writeFile = async (folder: string, file: string, content: object) => {
  await Deno.mkdir(folder, { recursive: true }); 
  await Deno.writeTextFile(`src/database/${folder}/${file}`, JSON.stringify(content))
}