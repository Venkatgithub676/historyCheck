import './index.css'

const ListItem = props => {
  const {items, onDeleteBtn2} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = items
  const onDeleteBtn1 = () => {
    onDeleteBtn2(id)
  }
  return (
    <li className="li-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-title-domain-delete-con">
        <img className="logo-url" src={logoUrl} alt="domain logo" />
        <div className="title-domain-con">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          onClick={onDeleteBtn1}
          type="button"
          className="del-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
