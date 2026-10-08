
const Input = ({ label, id, type,onChange,value }) => {

  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}: </label>}
      <input name={id} type={type} id={id} onChange={onChange} value={value} />
    </div>
  )
}

export default Input