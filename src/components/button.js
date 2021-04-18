export const Button = (props) => {
  return <button onClick={props.onPress} {...props}>{props.children}</button>
}