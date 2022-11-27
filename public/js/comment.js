const createNewComment = async (event) => {
    event.preventDefault();
    const post_id = document.getElementById('comment_now').getAttribute('data-id');
    const body = document.querySelector('#comment-body').value.trim();
    if (post_id && body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to comment');
      }
    }
  };
  
  
  document.getElementById('comment_form').addEventListener('submit', createNewComment);