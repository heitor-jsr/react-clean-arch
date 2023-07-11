import React, { memo } from 'react'
import Logo from '../logo/Logo'
import Styles from './login-header-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginHeader: React.FC<Props> = (_props: Props) => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
    )
}

// para memorizar um valor/estado, vc deve usar o useMemo. para memorizar uma função,
// usa-se o useCallback. agora, para memorizar um componente, usa-se o memo. assim,
// o componente abrangido pelo memo somente será renderizado novamente quando houver
//  alguma alteração em seu estado ou em uma prop.
export default memo(LoginHeader)