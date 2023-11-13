import React from 'react';

function Article(props){
    return <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  }

  export default Article;