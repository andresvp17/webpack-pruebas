import "./styles.css";

const getPost = async () =>{
    try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getPost()