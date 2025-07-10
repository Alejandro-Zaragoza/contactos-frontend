const API_URL = 'https://contactos-backend-v7hn.onrender.com';

window.onload = () => {
  fetch(`${API_URL}/api/contactos`)
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById('contactos-body');
      tbody.innerHTML = ''; // limpio antes de agregar filas
      data.forEach(c => {
        tbody.innerHTML += `
          <tr>
            <td>${c.id}</td>
            <td>${c.nombre}</td>
            <td>${c.domicilio}</td>
            <td>${c.correo}</td>
            <td>${c.telefono}</td>
          </tr>`;
      });
    });
};
