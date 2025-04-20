const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);

    // change logo theme

    const logo = document.querySelector(".logo");
    if(logo){
        const newSrc = newTheme === "dark" ? logo.dataset.dark : logo.dataset.light;
        logo.src = newSrc;
    }
}
