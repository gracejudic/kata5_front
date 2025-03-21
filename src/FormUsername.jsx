import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyForm() {
  const [username, setName] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8000/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then(response => {
      if (response.ok) {
        alert("Username ajouté");
        setName("");
        navigate("/Menu");
      } else {
        alert("Erreur lors de l'ajout de l'username");
      }
    })
    .catch(error => {
      alert("Erreur: " + error.message);
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default MyForm;