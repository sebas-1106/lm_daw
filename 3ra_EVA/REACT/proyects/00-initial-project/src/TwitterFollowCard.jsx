import {} from './TwitterFollowCard.css';

export function AppTwitter({name, userName}) {

  const avatarSource = "https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif"
  const altName = `Avatar de ${name}` 
  return (
    <>
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img className="tw-follow-card-image" src={avatarSource} alt={altName}/>

        <section className="tw-follow-card-userInfo">
          <strong className="tw-follow-card-userInfo-name">{name}</strong>
          <em className="tw-follow-card-userInfo-userName">@{userName}</em>

        </section>
      </header>
      <aside>
        <button className="tw-follow-card-followButton">Seguir</button>
      </aside>
    </article>
    </>
  )
}