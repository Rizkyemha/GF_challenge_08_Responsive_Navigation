// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const Navbar = () => {
	return `
    <nav class="header-navigation close" id="header-navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  `;
};

const Header = () => {
	return `
    <header>
      <img class="header-title" src="/img/abstractly.svg" alt="logo image"/>
      <img class="header-toogle" src="/img/humberger_icon.svg" id="header-toogle"/>
      <div class="header-cta">
        <button class="secondary">Learn more</button>
        <button class="primary">See pricing</button>
      </div>
    </header>
    ${Navbar()}
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root-container");
	root.classList.add("container");
	root.innerHTML = Header();

	const nav = document.getElementById("header-navigation");
	const toogle = document.getElementById("header-toogle");
	toogle.addEventListener("click", (e) => {
		e.preventDefault();

		if (nav.classList.value.includes("close")) {
			nav.classList.remove("close");
			nav.classList.add("open");
		} else {
			nav.classList.remove("open");
			nav.classList.add("close");
		}
	});
});
