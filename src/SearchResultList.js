import React from 'react';

export default ({ items }) => (
  <div className="results">
    <ul>
      {items.map(item => (
        <li key={item.data.url}>
          <a target="_blank" href={item.data.url}>
            <h3>{item.data.title}</h3>
            <p>{item.data.ups}</p>
          </a>
        </li>
      ))}
    </ul>
  </div>
)
