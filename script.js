// JAVASCRIPT //

// This funtion goes to the next item in the slideshow //
document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0])
}

// This funtion goes to the previous item in the slideshow //
document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[lists.length - 1]);
}

function navigateToPage(url) {
    window.location.href = url;
}
