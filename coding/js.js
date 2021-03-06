$('td:contains("Yes")').addClass('yes');
$('td:contains("No")').addClass('no');

$('td:contains("Yes*")').toggleClass('yes asterisk');
$('td:contains("No*")').toggleClass('no asterisk');

$('p.banner.css').html('CSS<img class="arrow down">');
$('p.banner.js').html('JavaScript / jQuery<img class="arrow down">');
$('p.banner.html').html('HTML<img class="arrow down">');

$('img.arrow').attr('src','https://img.icons8.com/ios/100/000000/sort-down-filled.png');

$('img.arrow').click(function() {
	$(this).toggleClass('up down');
	$(this).parent().next('pre').toggleClass('collapsed');
});

$('.themetoggle').html('TOGGLE DARK/LIGHT');
$('.themetoggle').click(function(){$('div#page').toggleClass('light');});

// Sorting function: https://stackoverflow.com/a/49041392/8108924
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));