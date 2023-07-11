import React, { memo } from 'react'
import Styles from './login-footer-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginFooter: React.FC<Props> = (_props: Props) => {
  return (
    <footer className={Styles.footer} />
    )
}

// para memorizar um valor/estado, vc deve usar o useMemo. para memorizar uma função,
// usa-se o useCallback. agora, para memorizar um componente, usa-se o memo. assim,
// o componente abrangido pelo memo somente será renderizado novamente quando houver
//  alguma alteração em seu estado ou em uma prop.
export default memo(LoginFooter)