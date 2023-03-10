import { CodeItem } from './CodeItem'

type Props = {
  text: string
}

export const CodeBlock = ({ text }: Props) => (
  <>
    {text
      ?.toString()
      .trim()
      .split(' ')
      .map((item: string, id: number) => (
        <CodeItem key={`${item}_${id}`}>{item}</CodeItem>
      ))}
  </>
)
