import React from 'react'
import Styles from './input-styles.scss'

// o tipo da props tem que ser igual ao tipo do elemento html que vc cria com o
// react. para isso, basta passar o mouse em cima do elemento que ele te informa
// as informações do tipo da props

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span className={Styles.status}>🔴</span>
    </div>
    )
}

// para memorizar um valor/estado, vc deve usar o useMemo. para memorizar uma função,
// usa-se o useCallback. agora, para memorizar um componente, usa-se o memo. assim,
// o componente abrangido pelo memo somente será renderizado novamente quando houver
//  alguma alteração em seu estado ou em uma prop.
export default Input