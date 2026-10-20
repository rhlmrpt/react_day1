function ProfileCard() {
  const name = 'Rous Mery Rosario'
  const birthYear = 2009
  const hobby = 'volleyball'
  const photo = 'https://placehold.co/120'

  const cardStyle = {
    border: '2px solid green',
    padding: '16px',
    borderRadius: '12px',
    margin: '10px'
  }

  function greeting() {
    return 'Welcome to my page!'
  }

  return (
    <div className="card" style={cardStyle}>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>Age: {2026 - birthYear}</p>
      <p>Hobby: {hobby.toUpperCase()}</p>
      <p>{greeting()}</p>
    </div>
  )
}

export default ProfileCard
