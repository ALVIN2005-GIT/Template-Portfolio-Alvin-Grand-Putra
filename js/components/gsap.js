// Importing the TextPlugin from the GSAP (GreenSock Animation Platform) library
gsap.registerPlugin(TextPlugin);

// Animating the text content of elements with the class "lead"
gsap.to(".lead", { duration: 2, delay: 1.5, text: "Mahasiswa | FullStack Engineer (OTW)" });

// Animating the jumbotron image by moving it from a position 100 pixels above its original position to its original position with some opacity changes and bounce easing
gsap.from(".jumbotron img", { duration: 1, y: -100, opacity: 0, ease: "bounce" });

// Animating the navbar by moving it from a position above the viewport to its original position with some opacity changes and bounce easing
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });

// Animating elements with the class "display-4" by moving them 50 pixels to the left, changing opacity, and using a back easing effect after a delay of 0.5 seconds
gsap.from(".display-4", { duration: 1.5, x: -50, opacity: 0, delay: 0.5, ease: "back" });
