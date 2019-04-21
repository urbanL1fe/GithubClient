import Popup from 'reactjs-popup';
import ReposList from './Reposlist';

const User = props => (
  <Popup
    overlayStyle={{ overflowY: 'hidden' }}
    contentStyle={{
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '10px',
      backgroundColor: '#d3cce3',
      overflowY: 'scroll',
      height: '90vh',
      width: '80vw',
    }}
    trigger={
      <li className="userListItem">
        <img src={props.url} />
        <section className="userListInfo">
          <h3>
            {props.name} ({props.login})
          </h3>
          <p>Location: {props.location}</p>
          <div className="wrapperRepoFollow">
            <div className="reposGists">
              <p>Public Repositories: {props.repos}</p>
              <p>Public Gists: {props.gists}</p>
            </div>
            <div className="followingFollowers">
              <p>Followers: {props.followers}</p>
              <p>Following: {props.following}</p>
            </div>
          </div>
        </section>
      </li>
    }
    modal
    closeOnDocumentClick
    lockScroll
  >
    <ReposList user={props.login} />
  </Popup>
);

export default User;
