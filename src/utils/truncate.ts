export default function truncate(str: string, length: number) {
  return str.length > length
    ? str.substring(0, str.lastIndexOf(" ", length)) + "..."
    : str
}
