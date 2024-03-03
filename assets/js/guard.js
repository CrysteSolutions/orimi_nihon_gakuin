<script>
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.getElementById("light--to-dark-button")?.classList.add("dark--mode");
} 
if (localStorage.getItem("theme-color") === "light") {
  document.getElementById("light--to-dark-button")?.classList.remove("dark--mode");
} 
</script>