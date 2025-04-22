const hamburger = document.querySelector(".hamburger");
if (window.innerWidth > 768) {
    hamburger.style.display = "none";
} else {
    hamburger.style.display = "flex";
}
window.addEventListener("resize", () => {
    const hamburger = document.querySelector(".hamburger");
    if (window.innerWidth > 768) {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "flex";
    }
});

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
    const footerLogo = document.querySelector(".footer-logo");
    if(footerLogo){
        const newSrc = newTheme === "dark" ? footerLogo.dataset.dark : footerLogo.dataset.light;
        footerLogo.src = newSrc;
    }
}


const searchBlogs = () => {
    allBlogs = document.querySelectorAll(".blog-card");
    const searchInput = document.querySelector("#search-input").value.toLowerCase();
    let noResults = true;
    allBlogs.forEach(blog => {
        const blogTitle = blog.querySelector(".blog-title").innerText.toLowerCase();
        const blogDescription = blog.querySelector(".blog-description").innerText.toLowerCase();
        if (blogTitle.includes(searchInput) || blogDescription.includes(searchInput)) {
            blog.style.display = "block";
            noResults = false;

        } else {
            blog.style.display = "none";
        }
    });

    if (noResults) {
        const noResultsDiv = document.querySelector("#no-results");
        noResultsDiv.style.display = "block";
    }
    else {
        const noResultsDiv = document.querySelector("#no-results");
        noResultsDiv.style.display = "none";
    }
}
const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
let toggleHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navlinks-mobile");
    hamburger.style.display = hamburger.style.display === "flex" ? "none" : "flex";
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}
document.querySelector("#search-input")?.addEventListener("keyup", debounce(searchBlogs, 200));



