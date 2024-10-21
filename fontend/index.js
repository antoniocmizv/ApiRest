(async ()  =>{
    await fetch('http://localhost:3000')
        .then(response => response.json(), () => (console.log('Error al parsear la respuesta')))
        .then(datos => {
            console.log(datos);
            const users = datos.users;
            const div = document.getElementById('users');
            users.forEach(user => {
                const p = document.createElement('div');
                p.innerHTML = `Nombre: ${user.name} Edad: ${user.age} Email: ${user.email}`;
                div.appendChild(p);
            });
        }, () => (console.log('Error al obtener los datos')));
})();
