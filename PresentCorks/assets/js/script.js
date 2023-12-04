/* Kevin JS-ANIMATION-1*/
const imagesKevin = document.querySelectorAll('#image-sequence img');
let currentIndex = 0;
let isAnimating = false;

function showNextImage() {
  if (!isAnimating) {
    isAnimating = true;
    setTimeout(() => {
      imagesKevin[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imagesKevin.length;
      imagesKevin[currentIndex].classList.add('active');
      isAnimating = false;
    }, 100); // Adjust the delay (in milliseconds) as needed
  }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -300 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle scroll events
function handleScroll() {
  if (isInViewport(document.getElementById('image-sequence'))) {
    showNextImage();
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initially check for images in the viewport
handleScroll();

/*ANIMATION-2*/
const images = document.querySelectorAll('.photos img');
            
            function changePosition() {
                // Menyimpan referensi gambar terakhir
                const lastImageClass = images[0].className;

                // Menggeser kelas setiap gambar
                for (let i = 0; i < images.length - 1; i++) {
                    images[i].className = images[i + 1].className;
                }

                // Memindahkan gambar pertama ke posisi terakhir
                images[images.length - 1].className = lastImageClass;
            }

            setInterval(changePosition, 2000);

/*PRODUCT-COLLABS*/
    function hoverd100(img){
        img.src = "assets/image/disney100logo.png"}

    function hoverOutd100(img){
        img.src = "assets/image/collabdisney100.png"}

    function hoverhp(img){
        img.src = "assets/image/hplogo.png"}

    function hoverOuthp(img){
        img.src = "assets/image/collabharrypotter.png"}

    function hoversw(img){
        img.src = "assets/image/starwarslogo.png"}
        
    function hoverOutsw(img){
        img.src = "assets/image/collabstarwars.png"}

    function hovermarvel(img){
        img.src = "assets/image/marvellogo.png"}
        
    function hoverOutmarvel(img){
        img.src = "assets/image/collabmarvel.png"}
    
    function hoverprincess(img){
        img.src = "assets/image/disneyprincesslogo.png"}
        
    function hoverOutprincess(img){
        img.src = "assets/image/collabdineyprincess.png"}

    function hoverdisney(img){
        img.src = "assets/image/disneylogo.png"}
        
    function hoverOutdisney(img){
        img.src = "assets/image/collabdisney.png"}

    function hoverrifle(img){
        img.src = "assets/image/riflepaperlogo.png"}
        
    function hoverOutrifle(img){
        img.src = "assets/image/collabrifle.png"}

    function hovergray(img){
        img.src = "assets/image/graymalinlogo.png"}
            
    function hoverOutgray(img){
        img.src = "assets/image/collabgraymalin.png"}

    function hovervineyard(img){
        img.src = "assets/image/vineyardlogo.png"}
                
    function hoverOutvineyard(img){
        img.src = "assets/image/collabvineyard.png"}

    function hoverstance(img){
        img.src = "assets/image/stancelogo.png"}
                    
    function hoverOutstance(img){
        img.src = "assets/image/collabstance.png"}

    function hovermatrix(img){
        img.src = "assets/image/matrixlogo.png"}
                        
    function hoverOutmatrix(img){
        img.src = "assets/image/collabthematrix.png"}