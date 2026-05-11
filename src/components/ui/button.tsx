interface buttonProps {
  text?: string,
  padding?: string,
}

export default function Button({ text }: buttonProps) {
  return (
    <button className="">
      {text}
    </button>
  )
}