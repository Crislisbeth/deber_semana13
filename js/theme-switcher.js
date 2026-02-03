// ===================================
// THEME SWITCHER - Sistema de cambio de tema
// ===================================

// Seleccionar el botón de cambio de tema
const themeToggle = document.getElementById('theme-toggle');

// Obtener el tema guardado en localStorage (si existe)
const currentTheme = localStorage.getItem('theme') || 'light';

// Aplicar el tema guardado al cargar la página
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleButton(currentTheme);

// Event listener para el botón
themeToggle.addEventListener('click', () => {
    // Obtener el tema actual
    const theme = document.documentElement.getAttribute('data-theme');

    // Cambiar al tema opuesto
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Aplicar el nuevo tema
    document.documentElement.setAttribute('data-theme', newTheme);

    // Guardar en localStorage para persistencia
    localStorage.setItem('theme', newTheme);

    // Actualizar el icono del botón
    updateToggleButton(newTheme);
});

// Función para actualizar el icono del botón
function updateToggleButton(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Cambiar a tema claro');
    } else {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
    }
}