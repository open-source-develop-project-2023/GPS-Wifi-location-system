class Schedule {

}


const $calendar = document.querySelector(".calendar");


const Calendar = {

    init() {
        const today = new Data();
        Calendar.showDates(today.getFullYear(), today.getMonth() + 1);
    },
    
    showDates(y, m) {
        console.log(Calendar.getFirstDay(y, m))
        
        for (
            let i = -Calendar.getFirstDay(y,m) + 1;
            i <= Calendar.getLastDay(y,m);
            i++
        ) {
            const before = document.querySelectorAll(".data");
            before.forEach(v => v.remove());        
        
            Calendar.$calendar.innerHTML +=`
                <div class="data"${i < 1 ? "hidden-data" : ""}>
                    <p>${i}</p>
                </div>
            `
        }
        
        
    },

    getFirstDay(y, m) {
        const data = new Data('${y}-${m}-01');
        return data.getDay();
    },

    getLastDay(y, m) {
        const data = new Data(y, m , 0);
        console.log(data);
        return data.getData();
    }

};