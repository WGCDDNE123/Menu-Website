const Title = ({ text }) => {
  return (
    <div className="title">
      <h4>{text || 'Default Title'}</h4>
      <div className="title-underline"></div>
    </div>
  )
}
export default Title
