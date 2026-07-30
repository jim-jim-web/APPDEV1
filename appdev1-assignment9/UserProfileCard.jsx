import { useState } from 'react';

function userProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    messageCount = 0;
  }

  return (
    <div class="profile-card">
      <img src={user.avatarUrl}>

      <h2>{user.name}</h2>

      <label for="bio">Bio</label>
      <p id="bio">{user.bio}</p>

      <h3>Skills</h3>
      <ul>
        {user.skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>

      <div style="color: blue; font-weight: bold;">
        Messages sent: {messageCount}
      </div>

      {if (user.isOnline) {
        <span>🟢 Online</span>
      } else {
        <span>⚪ Offline</span>
      }}

      <button onClick={handleSendMessage()}>Send Message</button>
      <button onClick={handleReset()}>Reset</button>
    </div>
    <p className="footer">Card last updated: {user.lastUpdated}</p>
  );
}

export default userProfileCard;