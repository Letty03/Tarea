   const form = document.getElementById('registroForm');
        const infoBox = document.getElementById('infoBox');
        const closeBtn = document.getElementById('closeBtn');

        // Capturar el evento submit del formulario
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const apellidos = document.getElementById('apellidos').value.trim();
            const edad = document.getElementById('edad').value.trim();

            // Limpiar errores previos
            limpiarErrores();

            // Validar los campos
            let valido = true;

            // Validar que nombre no esté vacío
            if (nombre === '') {
                mostrarError('nombre');
                valido = false;
            }

            // Validar que apellidos no esté vacío
            if (apellidos === '') {
                mostrarError('apellidos');
                valido = false;
            }

            // Validar que edad sea un número positivo mayor a 0
            const edadNum = parseFloat(edad);
            if (edad === '' || isNaN(edadNum) || edadNum <= 0) {
                mostrarError('edad');
                valido = false;
            }

            // Si todo es válido, mostrar la información
            if (valido) {
                document.getElementById('displayNombre').textContent = nombre;
                document.getElementById('displayApellidos').textContent = apellidos;
                document.getElementById('displayEdad').textContent = edadNum;
                infoBox.classList.add('show');
            }
        });

        // Función para mostrar error en un campo
        function mostrarError(campo) {
            const input = document.getElementById(campo);
            const errorMsg = document.getElementById('error' + campo.charAt(0).toUpperCase() + campo.slice(1));
            input.classList.add('error');
            errorMsg.classList.add('show');
        }

        // Función para limpiar todos los errores
        function limpiarErrores() {
            const inputs = document.querySelectorAll('input');
            const errorMessages = document.querySelectorAll('.error-message');
            
            inputs.forEach(input => input.classList.remove('error'));
            errorMessages.forEach(msg => msg.classList.remove('show'));
        }

        // Evento del botón cerrar
        closeBtn.addEventListener('click', function() {
            // Ocultar la caja de información
            infoBox.classList.remove('show');
            
            // Borrar el contenido del formulario
            form.reset();
            
            // Limpiar errores
            limpiarErrores();
            
            // Poner el enfoque en el primer textbox
            document.getElementById('nombre').focus();
        });

        // Poner enfoque inicial en el primer campo
        document.getElementById('nombre').focus();