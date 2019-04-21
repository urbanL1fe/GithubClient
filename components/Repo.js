const Repo = props => (
  <li>
    <section className="repoItem">
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <p>License: {props.license}</p>
      <div className="starsWatchersForks">
        <p>Stars: {props.stars}</p>
        <p>Watchers: {props.watchers}</p>
        <p>Forks: {props.forks}</p>
      </div>
    </section>
  </li>
);

export default Repo;
