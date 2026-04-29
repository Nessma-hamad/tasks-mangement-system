// this is a difination of a type for the props that the Header component will receive. It specifies that the Header component expects a single prop called text, which is of type string.
type HeaderProps = {
  text : string;
}
 function Header(props : HeaderProps) {
  return(
    <p>{props.text}</p>
  )
 }

// this use to help us to export this component to other file and use it there
 export default Header;