export function findAllHeroes() {
    return fetch("http://mac:8080/hero/findAll")
        .then(response => response.json())
        .then(json => json.list)
        .then(list => list[1]);
}

export function getListHeroes() {
    return fetch("http://mac:8080/hero/getList")
        .then(response => response.json())
        .then(result => result.data)
        .then(data => data.list)
        .then(list => list[0])
        ;
}
