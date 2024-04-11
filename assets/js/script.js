// Traer Api
const getPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //atrapando error
    if (response.status === 200) {
      //transformarla en formato jsons
      let data = await response.json();
      console.log(data);
      renderPosts(data);
    } else {
      console.log("Error: ", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

//Renderizar post
const renderPosts = (data) => {
  try {
    //se declara variable para usar acumulador
    let posts = "";
    data.forEach((post) => {
      //acumulador
      posts += `
    <ul>
    <li>
     <p>${post.body}</p>
   </li>
    </ul>
    `;
    });
    document.getElementById("post-data").innerHTML = posts;
  } catch (error) {
    console.log(error);
  }
};
