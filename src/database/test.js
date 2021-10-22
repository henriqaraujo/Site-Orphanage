const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
    //async é colocado para utilizar o await que significa espera, quando chegar na linha que esta o await ele executa o código.
    //inserir dados na tabela


   await saveOrphanage(db, {
    lat: "-27.2187028", 
    lng: "-49.6663874",
    name: "Lar das meninas",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "11982626104",    
    images: ["https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb8w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    openning_hours: "Horário de visitas das 8h até as 18h",
    open_on_weekends: "1"
   })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas 1 orfanato por ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
})