// for html 2
function addlist(items){
    const li = document.createElement('li')
    li.innerHTML=`${items}`
    document.querySelector('.ul-list').appendChild(li)
}
addlist("2.list")
addlist("3.list")
// edit 

const firstlist = document.querySelector('li:first-child')
const new1=document.createElement('li')
new1.innerText = 'something new'
firstlist.replaceWith(new1)

// remove
const hide = document.querySelector('li:last-child')
hide.remove()

