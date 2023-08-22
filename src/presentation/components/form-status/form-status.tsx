import React, { useContext } from 'react'
import Spinner from '@/presentation/components/spinner/Spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/components/contexts/form/form-context'

type Props = React.HTMLAttributes<HTMLElement>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormStatus: React.FC<Props> = (_props: Props) => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} /> }
      {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
    </div>
    )
}

// para memorizar um valor/estado, vc deve usar o useMemo. para memorizar uma função,
// usa-se o useCallback. agora, para memorizar um componente, usa-se o memo. assim,
// o componente abrangido pelo memo somente será renderizado novamente quando houver
//  alguma alteração em seu estado ou em uma prop.
export default FormStatus