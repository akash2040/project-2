const editHandler = async (event) => {
    event.preventDefault();
console.log("in file");

    const title = document.querySelector('input[id="edit-title"]').value.trim();
    const body = document.querySelector('textarea[id="edit-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];    

    console.log(title);
    console.log(body);
    console.log(post_id);
    if (post_id) {
      console.log(post_id);
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
            'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post');
      }
    }
  };

  document.querySelector('#edit_post').addEventListener('submit', editHandler);