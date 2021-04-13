let options = {
    root: null,
    threshold: 0.25,
  }

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classlist.add("active");
        } else {
            entry.target.classlist.remove("active");
        }
      });
}

let observer = new IntersectionObserver(intersectionHandler, options);

let images = document.querySelectorAll("img");

images.forEach((image) => {
    observer.observe(image);
});