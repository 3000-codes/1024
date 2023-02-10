import type { ComponentElement, Component, ComponentProps, FC, ReactNode, PropsWithChildren } from "react"
type DialogProps = PropsWithChildren<{
  head: HTMLElement | Component | undefined,
  content: string,
  // children: ReactNode
}>
// export default function Dialog(props):FC<DialogProps> {
//   return (
//     <div>
//       {
//         props.head ? <header>{ }</header> : props.head
//       }
//       <main>
//         {props.children}
//       </main>
//     </div>
//   )
// }

const Dialog: FC<DialogProps> = props => {
  return (
    <div>
      {
        props.head ? <header>{ }</header> : props.head
      }
      <main>
        {props.children}
      </main>
    </div>
  )
}

Dialog.defaultProps = {
  content: '默认内容'
}
export default Dialog
