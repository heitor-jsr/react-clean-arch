import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/components/contexts/form/form-context'
// o tipo da props tem que ser igual ao tipo do elemento html que vc cria com o
// react. para isso, basta passar o mouse em cima do elemento que ele te informa
// as informações do tipo da props
import PropTypes from 'prop-types';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} onChange={handleChange}/>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
    )
}

// para memorizar um valor/estado, vc deve usar o useMemo. para memorizar uma função,
// usa-se o useCallback. agora, para memorizar um componente, usa-se o memo. assim,
// o componente abrangido pelo memo somente será renderizado novamente quando houver
//  alguma alteração em seu estado ou em uma prop.

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
}
export default Input