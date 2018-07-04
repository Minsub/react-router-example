import React from 'react';

function Post({match}) {
  return (
    <div>
      포스트 {match.params.id}
    </div>
  )
}

export default Post;