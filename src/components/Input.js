

function Input({handleChange, value, title, name, month, type}) {
  return (
    <label className="sidebar-label-container">
    <input onChange = {handleChange} type="radio" value = {value} name = {name}/>
    <span className="checkmark" ></span> {title}
    </label>
  )
}
export default Input