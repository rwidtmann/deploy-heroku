const newFormHandler = async (event) => {
    event.preventDefault();
  
    
  
    const comment_content = document.querySelector('#review-desc').value.trim();
    console.log(comment_content)
    if (comment_content) {
      const response = await fetch(`/api/comment`, {
        
        method: 'POST',
        body: JSON.stringify({comment_content }),
        headers: {
          'Content-Type': 'application/json',
        },

      });
  
      if (response.ok) {
        document.location.replace('/');
        console.log("created sccusesl")
      } else {
        alert('Failed to post review');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/comment/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to delete post');
  //     }
  //   }
  // };
  
  document
    .querySelector('.new-review-form')
    .addEventListener('post', newFormHandler);
  
  // document
  //   .querySelector('.review-list')
  //   .addEventListener('click', delButtonHandler);
  