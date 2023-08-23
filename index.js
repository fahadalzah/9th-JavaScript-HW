let tr2 = document.getElementById("tr2")
let table = document.getElementById("table1")
let tr3 = document.getElementById("tr3")
let tr4 = document.getElementById("tr4")
let tr5 = document.getElementById('tr5')

let bot1 = document.createElement('button')
bot1.className = 'button'
bot1.innerHTML = "Add ➕"
table.appendChild(bot1)
bot1.addEventListener('click', function () {
    let task1 = document.createElement("td")
    let newtask = task1.innerHTML = prompt("Whats The Task")
    if (Boolean(newtask) === false) {
        alert("---YOU NEED TO WRITE SOMTHING---")
        task1.innerHTML = "Unknown"
    }else{
        task1.innerHTML = newtask
    }
    tr2.appendChild(task1)
    task1.className = "td"

    let done1 = document.createElement("td")
    done1.innerHTML = Boolean(confirm("Are You Done With " + task1.innerHTML)); 
    tr2.appendChild(done1)
    done1.className = 'td'

    let start1 = document.createElement("td")   
    start1.innerHTML = new Date() 
    tr2.appendChild(start1)
    start1.className = 'td'

    let date1 = document.createElement('td')
    date1.innerHTML = "???"
    tr2.appendChild(date1)
    date1.className = 'td'

    let edit1 = document.createElement('td')
    let editbot1 = document.createElement("button")
    editbot1.innerHTML = "Edit"
    edit1.appendChild(editbot1)
    tr2.appendChild(edit1)
    edit1.className = 'button'
    editbot1.addEventListener('click', function () {
    let newedit = task1.innerHTML = prompt("Whats The Task")
    if (Boolean(newedit) === false) {
        alert("---YOU NEED TO WRITE SOMTHING---")
        task1.innerHTML = "Unknown"
    }else{
        task1.innerHTML = newedit
    }

        done1.innerHTML = Boolean(confirm("Are You Done With " + task1.innerHTML)); 
        date1.innerHTML = new Date()

    })

    table.removeChild(bot1)

    let bot2 = document.createElement('button')    
    table.appendChild(bot2)
    bot2.innerHTML = "Add ➕"


    let Del1 = document.createElement('td')
    let delbot1 = document.createElement("button")
    delbot1.innerHTML = "Delete"
    Del1.appendChild(delbot1)
    tr2.appendChild(Del1)
    Del1.className = 'button'
    delbot1.addEventListener('click', function () {
        tr2.removeChild(edit1)
        tr2.removeChild(date1)
        tr2.removeChild(task1)
        tr2.removeChild(start1)
        tr2.removeChild(done1)
        table.removeChild(bot2)
        tr2.removeChild(Del1)
        Del1.removeChild(delbot1)
        table.appendChild(bot1)
    })
    
    bot2.addEventListener('click', function () {
        let task2 = document.createElement("td")
        let newtask = task2.innerHTML = prompt("Whats The Task")
        if (Boolean(newtask) === false) {
            alert("---YOU NEED TO WRITE SOMTHING---")
            task2.innerHTML = "Unknown"
        }else{
            task2.innerHTML = newtask
        }
        tr3.appendChild(task2)
        task2.className = "td"
    
        let done2 = document.createElement("td")
        done2.innerHTML = Boolean(confirm("Are You Done With " + task1.innerHTML)); 
        tr3.appendChild(done2)
        done2.className = 'td'
    
        let start2 = document.createElement("td")   
        start2.innerHTML = new Date() 
        tr3.appendChild(start2)
        start2.className = 'td'
    
        let date2 = document.createElement('td')
        date2.innerHTML = "???"
        tr3.appendChild(date2)
        date2.className = 'td'
    
        let edit2 = document.createElement('td')
        let editbot2 = document.createElement("button")
        editbot2.innerHTML = "Edit"
        edit2.appendChild(editbot2)
        tr3.appendChild(edit2)
        edit2.className = 'button'
        editbot2.addEventListener('click', function () {
        let newedit = task2.innerHTML = prompt("Whats The Task")
        if (Boolean(newedit) === false) {
            alert("---YOU NEED TO WRITE SOMTHING---")
            task2.innerHTML = "Unknown"
        }else{
            task2.innerHTML = newedit
        }
    
            done2.innerHTML = Boolean(confirm("Are You Done With " + task2.innerHTML)); 
            date2.innerHTML = new Date()
    
        })
    
        table.removeChild(bot2)
    
        let bot3 = document.createElement('button')    
        table.appendChild(bot3)
        bot3.innerHTML = "Add ➕"
    
    
        let Del2 = document.createElement('td')
        let delbot2 = document.createElement("button")
        delbot2.innerHTML = "Delete"
        Del2.appendChild(delbot2)
        tr3.appendChild(Del2)
        Del2.className = 'button'
        delbot2.addEventListener('click', function () {
            tr3.removeChild(edit2)
            tr3.removeChild(date2)
            tr3.removeChild(task2)
            tr3.removeChild(start2)
            tr3.removeChild(done2)
            table.removeChild(bot3)
            tr3.removeChild(Del2)
            Del2.removeChild(delbot2)
            table.appendChild(bot2)
        })
        bot3.addEventListener('click', function () {
            let task3 = document.createElement("td")
            let newtask = task3.innerHTML = prompt("Whats The Task")
            if (Boolean(newtask) === false) {
                alert("---YOU NEED TO WRITE SOMTHING---")
                task3.innerHTML = "Unknown"
            }else{
                task3.innerHTML = newtask
            }
            tr4.appendChild(task3)
            task3.className = "td"
        
            let done3 = document.createElement("td")
            done3.innerHTML = Boolean(confirm("Are You Done With " + task1.innerHTML)); 
            tr4.appendChild(done3)
            done3.className = 'td'
        
            let start3 = document.createElement("td")   
            start3.innerHTML = new Date() 
            tr4.appendChild(start3)
            start3.className = 'td'
        
            let date3 = document.createElement('td')
            date3.innerHTML = "???"
            tr4.appendChild(date3)
            date3.className = 'td'
        
            let edit3 = document.createElement('td')
            let editbot3 = document.createElement("button")
            editbot3.innerHTML = "Edit"
            edit3.appendChild(editbot3)
            tr4.appendChild(edit3)
            edit3.className = 'button'
            editbot3.addEventListener('click', function () {
            let newedit = task3.innerHTML = prompt("Whats The Task")
            if (Boolean(newedit) === false) {
                alert("---YOU NEED TO WRITE SOMTHING---")
                task3.innerHTML = "Unknown"
            }else{
                task3.innerHTML = newedit
            }
        
                done3.innerHTML = Boolean(confirm("Are You Done With " + task3.innerHTML)); 
                date3.innerHTML = new Date()
        
            })
        
            table.removeChild(bot3)
        
        
            let Del3 = document.createElement('td')
            let delbot3 = document.createElement("button")
            delbot3.innerHTML = "Delete"
            Del3.appendChild(delbot3)
            tr4.appendChild(Del3)
            Del3.className = 'button'
            delbot3.addEventListener('click', function () {
                tr4.removeChild(edit3)
                tr4.removeChild(date3)
                tr4.removeChild(task3)
                tr4.removeChild(start3)
                tr4.removeChild(done3)
                tr4.removeChild(Del3)
                Del3.removeChild(delbot3)
                table.appendChild(bot3)
            })
        })  
    })    
})



